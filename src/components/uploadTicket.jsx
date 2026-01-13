import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { baseApiUrl } from "../data/url";
import { useApp } from "../contexts/appContext";
import generateBookingCode from "../functions/generateBookingCode";
import { useNavigate } from "react-router-dom";
import AppInfo from "./appInfo";
import AiOverlay from "./aiOverlay";
import determineWinner, { fullTimeScoreEnough } from "../functions/determineWinner";
import { leaguesCountry } from "../data/leaguesCountry";
import { rawTicketDate } from "../functions/formatDate";
import getMatchData from "../functions/getMatchData";
import { DateTime } from "luxon";

export default function UploadTickets({ visible }) {

	const navigate = useNavigate();
	const [raw, setRaw] = useState('')
	const [result, setResult] = useState('')
	const [odds, setOdds] = useState(null);
	const [linesCount, setLinesCount] = useState(0);
	const [aiLoading, setAiLoading] = useState(false);
	const [useAi, setUseAi] = useState(false);
	const [showScore, setShowScore] = useState(false);
	const [issues, setIssues] = useState([]);
	const [panelExpanded, setPanelExpanded] = useState(false);
	const [overlay, setOverlay] = useState(false);
	const submitBtn = useRef('')
	const resultRef = useRef('')
	const lineNumbersRef = useRef('')

	const firstLoadRef = useRef(false);
	const justGenerated = useRef(false);

	const { user, init, country, features } = useApp();

	function determineWinner2(gameType, fullTimeScore, data) {
		if (!fullTimeScore) return "";

		switch (gameType) {
			case "1X2": {
				let value;
				if (data.homeGoals > data.awayGoals) value = data.home;
				else if (data.homeGoals < data.awayGoals) value = data.away;
				else value = "Draw";

				if (value.toLowerCase() === data.userSelection.toLowerCase()) value = data.userSelection;
				return value;
			}

			case "Correct Score": {
				return `${data.homeGoals}:${data.awayGoals}`;
			}

			case "Exact Goals": {
				// data = "3" means total goals must equal 3
				return `${data.totalGoals}`;
			}

			case "Goal Margin": {
				// data = "2" means one team must win by 2 goals
				return `${data.goalDiff}`
			}

			case "Goal Range": {
				const range = data.userSelection?.split('-').map(s => parseInt(s.trim(), 10));
				if (data.totalGoals >= range[0] && data.totalGoals <= range[1]) return data.userSelection
				else if (data.totalGoals >= 0 && data.totalGoals <= 1) {
					return '0-1';
				} else if (data.totalGoals >= 2 && data.totalGoals <= 3) {
					return '2-3';
				} else if (data.totalGoals >= 4 && data.totalGoals <= 6) {
					return '4-6';
				} else if (data.totalGoals >= 7) {
					return '7+';
				}
			}

			case 'Total Goals': {
				const point = data.point

				return data.direction === "over" ? (data.totalGoals > point ? `Over (${point})` : `Under (${point})`) : (data.totalGoals < point ? `Under (${point})` : `Over (${point})`);
			}

			case 'both teams to score':
			case 'btts':
			case 'Both Teams To Score (GG/NG)': {
				// data: "yes" or "no"
				return (data.homeGoals > 0 && data.awayGoals > 0) ? "Yes" : "No"
				break;
			}

			case 'Double Chance': {
				if (data.homeGoals > data.awayGoals) {
					if (data.userSelection.includes(data.home)) {
						return data.userSelection
					} else {
						return `${data.home} Or Draw`
					}
				} else if (data.awayGoals > data.homeGoals) {
					if (data.userSelection.includes(data.away)) {
						return data.userSelection
					} else {
						return `Draw Or ${data.away}`
					}
				} else {
					if (data.userSelection.includes("Draw")) {
						return data.userSelection
					} else {
						return `${data.home} Or Draw`
					}
				}
			}

			case 'Winning Margin': {
				const side = data.userSelection.split(" ")[0];
				const winner = data.homeGoals > data.awayGoals ? data.home : data.awayGoals > data.homeGoals ? data.away : "Draw";
				return data.goalDiff === 0 ? "Draw" : `${winner} by ${data.goalDiff > 2 ? "3+" : data.goalDiff}`;
			}

			default: {
				// console.log("Unknown Game Type: ", gameType)
				return "";
			}
		}
	}

	const monthMap = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, sept: 9, oct: 10, nov: 11, dec: 12 };

	async function generate({
		status = "open",
		type = "won",
		state
	}) {

		setResult('');
		// justGenerated.current = true;

		const json = {};
		const isOpen = state === "open";

		try {
			if (JSON.parse(raw)) {
				await generateFromIntermidiate();
			} else {
			}
		} catch (error) {
			generateFromRaw();
			console.warn("Not JSON, using Raw fallback: ", error);
		}

		async function generateFromRaw() {

			const lines = raw.split("\n").filter(l => (l.trim() && l.trim() != ""));

			let idLine, dateLine, detailiView, bokingCodeLine;

			idLine = lines[0];

			if (lines[2].includes("Detail")) {
				dateLine = lines[1];
				detailiView = lines[2];
				bokingCodeLine = lines[4];

			} else if (lines[1].includes("Booking")) {
				dateLine = lines[3];
				detailiView = lines[4];
				bokingCodeLine = lines[2];
			} else {

			}

			const idSide = idLine.split(":")[1].trim();
			const idParts = idSide.split("-");
			const id = idParts[0].trim();
			const countryPart = idParts[1]?.trim();

			let baseCountry, baseTimeZone;

			if (countryPart) {
				baseCountry = (countryPart || "NG");
				baseTimeZone = baseCountry === "NG" ? "+1" : (baseCountry === "ZA" ? "+2" : "+1");
			} else {
				baseCountry = "ZA";
				baseTimeZone = "+2";
			}

			const bookingCode = bokingCodeLine.trim();
			const dateArr = dateLine.split("|");
			const dateString = dateArr[0].trim();
			const timeString = dateArr[1].trim();

			let datetime;

			//  Extract StakeTime

			function extractDateTime(date, time) {
				console.log(date, time)
				const today = new Date();
				const year = today.getFullYear();
				const month = String(today.getMonth() + 1).padStart(2, '0');
				const day = String(today.getDate()).padStart(2, '0');
				let value;

				if (date.startsWith("Today")) {
					value = `${year}-${month}-${day} ${time}`;
				} else if (date.split("-").length > 1 || date.split("/").length > 1) {
					const [day, month, year] = date.split("-").length > 1 ? date.split("-") : date.split("/");
					// console.log(date, date.split("-"), date.split("/"), day, month, year);
					value = `${year}-${month}-${day} ${time}`;
				} else {

					let day, month;
					[month, day] = date.split(" ");

					if (isNaN(Number(day))) {
						[day, month] = [month, day];
					}
					value = `${year}-${monthMap[month.toLowerCase()]}-${day} ${time}`;
					// console.log("HERE: ", date, time, month, day);
				}

				return value;
			}

			datetime = extractDateTime(dateString, timeString);

			let teamDemactor;
			let firstMatchLine = lines.findIndex((l, i) => l.includes(" vs. ")) - 1;
			if (firstMatchLine > -1) teamDemactor = " vs. ";
			else {
				firstMatchLine = lines.findIndex((l, i) => l.includes(" v ")) - 1;
				teamDemactor = " v ";
			}


			let matches = lines.slice(firstMatchLine);
			const linesPerMatch = 8;

			json.id = id;
			json.bookingCode = bookingCode;
			json.stakeTime = datetime;
			json.wager = 100;
			json.status = status;

			function setAll() {
				for (let i = 0; i < matches.length; i++) {
					if (i % linesPerMatch == 3) {
						const liveLine = matches[i];
						if (liveLine.includes("Live") || liveLine.trim() === "added" || liveLine.includes("Ended")) {

						} else {
							matches = [...matches.slice(0, i), "added", ...matches.slice(i, matches.length)];
							setAll();
							break;
						}
					} else if (i % linesPerMatch === 4) {
						const scoreLine = matches[i];
						if ((scoreLine.includes("Full-Time") || scoreLine.includes("Halftime ") || scoreLine.includes("half") || scoreLine.includes("Ended") || scoreLine.trim() === "added") && scoreLine !== "Halftime/Fulltime") {

						} else {
							matches = [...matches.slice(0, i), "added", ...matches.slice(i, matches.length)];
							setAll();
							break;
						}

					} else if (i % linesPerMatch === 7) {
						const up2Line = matches[i];
						if (up2Line.includes("2UP") || up2Line.includes("added")) {

						} else {
							matches = [...matches.slice(0, i), "added", ...matches.slice(i, matches.length)];
							setAll();
							break;
						}
					}
				}
			}

			setAll();

			// console.log("Lines: ", lines, matches);


			json.matches = [];

			const matchesLength = Math.round(matches.length / linesPerMatch)

			for (let j = 0; j < matchesLength; j++) {
				const curr = j * linesPerMatch;

				const userSelection = matches[curr + 0].trim();
				const teamsLine = matches[curr + 1];
				const teams = teamsLine.split(teamDemactor);
				// console.log(teams);
				const home = teams[0].trim();
				const away = teams[1].trim();
				const gameLeagueTimeLine = matches[curr + 2];
				const gameLeagueTime = gameLeagueTimeLine.split(", ");
				const gameLeague = gameLeagueTime.slice(0, gameLeagueTime.length - 1).join(", ");
				// console.log(gameLeague);
				const gameDateTimeLine = gameLeagueTime[gameLeagueTime.length - 1].trim();

				// Extract matchTime

				let gameDateTimeArr;

				if (gameDateTimeLine.split("-")?.length > 1) {
					gameDateTimeArr = gameDateTimeLine.split("-");
				} else {
					gameDateTimeArr = gameDateTimeLine.split(" ");
				}


				const gameDate = gameDateTimeArr[0].trim();
				const gameTime = gameDateTimeArr[1].trim();

				// console.log("MatchTime Arr: ", gameDate, gameTime);
				const gameDateTime = extractDateTime(gameDate, gameTime);

				const isLive = matches[curr + 3].includes("Live");
				let scoreLine = matches[curr + 4];
				scoreLine = scoreLine === 'added' ? "" : scoreLine;
				let score;
				if (scoreLine !== "") {
					score = scoreLine.split(" - ")[0] + " - " + scoreLine.split(" - ")[1];
				} else {
					score = "";
				}

				// console.log("Score: ", isLive, score);
				const gameType = matches[curr + 5]?.trim();
				const odds = matches[curr + 6]?.trim();
				const up2 = matches[curr + 7]?.trim();

				const isTotalGoals = (gameType.includes('Total') && (gameType.split("Total")[0] === ""));

				const [homeGoals, awayGoals] = score
					.split('-')
					.map(s => parseInt(s.trim(), 10));
				const totalGoals = homeGoals + awayGoals;
				const goalDiff = Math.abs(homeGoals - awayGoals);

				const winner = isLive ? "" : determineWinner2(isTotalGoals ? 'Total Goals' : gameType.trim(), score, {
					home: home,
					away: away,
					totalGoals: totalGoals,
					homeGoals: homeGoals,
					awayGoals: awayGoals,
					goalDiff: goalDiff,
					userSelection: userSelection,
					point: isTotalGoals ? parseFloat(userSelection.split('(')[1]) : null,
					direction: isTotalGoals ? (userSelection.includes('Over') ? 'over' : (userSelection.includes('Under') ? 'under' : null)) : null
				});

				// console.log(isTotalGoals, winner, gameType.split("-"), gameType.split("-").length, !gameType.split("-")?.length > 1);
				let up2Value = false;

				if (up2 === "2UP") {
					up2Value = true;
				} else {
					if (gameType === "1X2") {
						if (type === "won") {
							if (goalDiff > 1) {
								up2Value = true;
							}
						} else {
							if (goalDiff > 1 && userSelection == winner) {
								up2Value = true;
							}
						}
					}
				}

				json.matches.push({
					odd: odds,
					home: home,
					away: away,
					gameType: gameType,
					league: gameLeague,
					leagueCountry: leaguesCountry[gameLeague] ?? "",
					userSelection: type === "won" ? (winner == '' || winner == 'NotResulted' ? userSelection : winner).trim() : userSelection,
					winningSelection: winner,
					matchTime: gameDateTime,
					up2: up2Value,
					status: "",
					score: (score.length < 10 ? score : ""),
					live: isLive ? score : ""
				})
			}

			// const baseCountry = bookingCode.startsWith("BW") ? "ZA" : "NG";

			json.cashout = "";
			json.showScore = showScore;
			json.hasRebet = false;
			json.baseCountry = baseCountry;
			json.baseTimeZone = baseTimeZone;

		}

		async function generateFromIntermidiate() {
			const tempIssues = [];
			const data = JSON.parse(raw);
			const baseCountry = data.baseCountry || "NG";
			const baseTimeZone = data.baseTimeZone;
			json.id = data.id;
			json.bookingCode = data.bookingCode;
			json.stakeTime = rawTicketDate({ dateString: data.stakeTime, baseZone: baseTimeZone, isEpoch: false });

			json.wager = data.wager;
			json.status = status;

			let newMatches;

			if (useAi) {

				const job = data.matches.map(async match => {
					const hasWinningSelection = (match.winningSelection !== null && match.winningSelection !== undefined && match.winningSelection !== "");
					// const hasFinalScore = (match.status === "finished" && (match.half === "2nd half" || match.half === "Match Ended") && match.liveScore);
					const hasFinalScore = false;
					// const isFullTimeScoreEnough = fullTimeScoreEnough(match);
					const isFullTimeScoreEnough = false;

					let score = undefined;

					if (hasFinalScore) {
						score = match.liveScore;
					}

					if ((hasFinalScore && (hasWinningSelection || fullTimeScoreEnough)) || match.status !== "finished") {
						return ({
							...match,
							score
						})
					}
					const fetchedData = await getMatchData({ matchId: match.id, user });
					if (fetchedData.status === 'success') {
						const matchData = fetchedData.data;
						const scores = matchData.sport_event_status
						const halfScores = matchData?.sport_event_status?.period_scores;
						const firstHalfScore = {
							home: halfScores?.[0]?.home_score,
							away: halfScores?.[0]?.away_score
						};
						const secondHalfScore = {
							home: halfScores?.[1]?.home_score,
							away: halfScores?.[1]?.away_score
						};
						const score = {
							home: scores?.home_score,
							away: scores?.away_score
						}

						if (score) {
							sessionStorage.setItem(`match-${match.id}`, JSON.stringify(matchData));
						}

						return ({
							...match,
							firstHalfScore,
							secondHalfScore,
							score,
						})
					} else {

						return ({
							...match,
						})
					}
				});

				setAiLoading(true);

				newMatches = await Promise.all(job);

				setAiLoading(false);

			} else {
				newMatches = data.matches;
			}

			console.log("New Matches: ", newMatches);

			json.matches = newMatches.map(m => {

				const matchName = m.matchName;
				let teams;

				teams = matchName.split(" vs. ");
				if (teams.length < 2) teams = matchName.split(" v ");
				// console.log(teams);

				const home = teams[0].trim();
				const away = teams[1].trim();

				const gameType = m.gameType.trim();
				// const score = m.score;
				let score = (m.score?.home !== undefined && m.score?.home !== null) ? `${m.score?.home} - ${m.score?.away}` : null;
				score = score || ((m.status === "finished" && (m.half === "2nd half" || m.half === "Match Ended") && m.liveScore) ? m.liveScore : null)
				const userSelection = m.userSelection.trim();

				const isTotalGoals = gameType.includes('Total Goals') && !(gameType.split("-")?.length > 1);
				// const [homeGoals, awayGoals] = (score || "").split('-').map(s => parseInt(s.trim(), 10));
				const homeGoals = parseInt(m.score?.home, 10);
				const awayGoals = parseInt(m.score?.away, 10);
				console.log(score);
				const totalGoals = homeGoals + awayGoals;
				const goalDiff = Math.abs(homeGoals - awayGoals);

				const winner = (m.winningSelection !== null && m.winningSelection !== undefined && m.winningSelection !== "") ? m.winningSelection : determineWinner({
					home,
					away,
					...m
				});

				if ((winner === null || winner === undefined || winner === "") && m.status === 'finished' && m.winningSelection !== "NotResulted") {
					tempIssues.push(matchName);
				}

				let up2Value = false;

				if (m.up2 && m.gameType === "1X2") {
					up2Value = true;
				} else {
					if (m.gameType === "1X2") {
						if (type === "won") {
							if (goalDiff > 1) {
								up2Value = true;
							}
						} else {
							if (goalDiff > 1 && userSelection == winner) {
								up2Value = true;
							}
						}
					}
				}

				return ({
					odd: m.odd,
					home: home,
					away: away,
					gameType: m.gameType,
					league: m.league,
					leagueCountry: m.leagueCountry,
					userSelection: type === "won" ? (winner == '' || winner == 'NotResulted' ? userSelection : winner).trim() : userSelection,
					winningSelection: isOpen ? "" : winner,
					matchTime: rawTicketDate({ dateString: m.matchDateTime, baseZone: baseTimeZone, isEpoch: true }),
					up2: up2Value,
					settlementTime: m.settlementTime && rawTicketDate({ dateString: m.settlementTime, baseZone: baseTimeZone, isEpoch: false }),
					status: isOpen ? "pending" : m.status,
					score: isOpen ? "" : (score || ""),
					live: isOpen ? "" : (m.isLive ? `${m.liveFinished ? "Ended" : m.half} | ${m.timePlayed}:00 min | ${m.liveScore}` : ""),
				})
			});

			json.cashout = "";
			json.showScore = showScore;
			json.hasRebet = false;
			json.baseCountry = baseCountry;
			json.baseTimeZone = baseTimeZone;
			const settlementTimes = json.matches.filter(m => m.settlementTime && m.winningSelection !== "NotResulted").map(t => t.settlementTime) || [];
			console.log(settlementTimes);
			const latest = settlementTimes.length > 0 ? settlementTimes
				.map(t => DateTime.fromFormat(t, "yyyy-MM-dd HH:mm"))
				.reduce((a, b) => (b > a ? b : a)) : null;
			json.settlementTime = latest ? latest.toFormat("yyyy-MM-dd HH:mm") : "";
			setIssues(tempIssues);
		}

		setResult(JSON.stringify(json, null, 2))

	}

	function upload(data, btn) {
		try {
			if (data.length > 10 && JSON.parse(data)) {

				let prevContent = btn.innerHTML;
				let prevAction = btn.onclick;
				const parsedData = JSON.parse(data);

				btn.classList.add("glow")
				btn.onclick = () => { }
				btn.innerHTML = "Uploading..."
				window.$.ajax({
					url: `${baseApiUrl}/update-tickets.php`,
					type: 'POST',
					data: {
						tickets: parsedData,
						user,
					},
					dataType: 'JSON',
					success: (res) => {
						if (res.status == 'success') {
							localStorage.setItem("bookingCode", parsedData.bookingCode);
							alert('Uploaded Successfully')
							setRaw('')
							setResult('')
							init({ full: false })
						} else {
							alert(res.message)
						}
					},
					error: (res) => {
						// alert('Failed to upload. Check internet connection.')
						alert(JSON.stringify(res))
						console.log(res)
					},
					complete: () => {
						btn.classList.remove("glow")
						btn.innerHTML = prevContent
						btn.onclick = prevAction
					}
				})
			} else {
				alert("Invalid Data")
			}
		} catch (error) {
			handleJSONError(error);
		}
	}

	function calculateOdds() {
		try {
			const data = JSON.parse(result);
			const matches = data.matches;
			const totalOdds = matches.reduce((prev, curr) => prev * Number(curr.odd), 1);
			setOdds(totalOdds);
		} catch (e) {
			setOdds(null);
			// alert("Invalid Data");
		}
	}

	const handleJSONError = useCallback((error) => {
		if (error.message?.includes("position")) {
			const line = error.message.match(/line (\d+)/)[1];
			const position = Number(error.message.match(/position (\d+)/)[1]);
			const lines = result.split("\n");
			const isComma = error.message.includes("','") || error.message.includes("'}'");
			const baseLineIndex = Number(line) - 1;
			const whiteSpaces = lines[baseLineIndex].match(/^[ \t]+/); // matches spaces or tabs at start
			const whiteSpacesLength = whiteSpaces ? whiteSpaces[0].length : 0;
			const lineIndex = line - (isComma ? 2 : 1);
			const lineText = lines[lineIndex];
			resultRef.current.focus();
			const positionInLine = position - (isComma ? whiteSpacesLength + 1 : 0);
			resultRef.current.setSelectionRange(positionInLine, positionInLine + 1);
			// console.log("Line: ", isComma, whiteSpacesLength, "Base Line: ", lines[baseLineIndex], "Line: ", lines[lineIndex]);
			alert("Error in JSON: " + lineText);
		} else {
			alert("Error: " + error.message)
		}
	}, [result])

	function updateLines() {
		const ta = resultRef.current;
		if (!ta) return;
		const style = getComputedStyle(ta);
		const paddingX = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
		const borderX = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
		let lineHeight = parseFloat(style.lineHeight);
		if (isNaN(lineHeight)) {
			const fontSize = parseFloat(style.fontSize) || 14;
			lineHeight = fontSize * 1.2;
		}

		// number of visual lines ~= mirror.scrollHeight / lineHeight
		const visualLines = Math.max(1, Math.round(ta.scrollHeight / lineHeight));
		setLinesCount(visualLines);
	}

	useLayoutEffect(() => {
		if (!features.hasAi) return;

		const localUseAi = localStorage.getItem("useAi");
		if (localUseAi) {
			setUseAi(JSON.parse(localUseAi));
		}

		const localShowScore = localStorage.getItem("showScore");
		if (localShowScore) {
			setShowScore(JSON.parse(localShowScore));
		}

		const localPanelExpanded = localStorage.getItem("panelExpanded");
		if (localPanelExpanded) {
			setPanelExpanded(JSON.parse(localPanelExpanded));
		}

		setTimeout(() => {
			firstLoadRef.current = true;
		}, 1000)
		console.log("Use Layout Effect Here: ", useAi)
	}, [])

	useEffect(() => {
		if (firstLoadRef.current) {
			localStorage.setItem("useAi", JSON.stringify(useAi));
		}
	}, [useAi])

	useEffect(() => {
		if (firstLoadRef.current) {
			localStorage.setItem("showScore", JSON.stringify(showScore));
		}
	}, [showScore])

	useEffect(() => {
		if (firstLoadRef.current) {
			localStorage.setItem("panelExpanded", JSON.stringify(panelExpanded));
		}
	}, [panelExpanded])

	useEffect(() => {
		function updateScroll() {
			lineNumbersRef.current.scrollTop = resultRef.current.scrollTop;
			// console.log("Scrolling")
		}
		if (resultRef.current) {
			resultRef.current.addEventListener("scroll", updateScroll);
		}

		return () => {
			if (resultRef.current) {
				resultRef.current.removeEventListener("scroll", updateScroll);
			}
		}
	}, [])

	useEffect(() => {
		calculateOdds()
		if (resultRef.current) {
			updateLines();
		}
	}, [result])

	const lines = useMemo(() => {

		return Array.from({ length: linesCount }).map((item, i) =>
			<div key={i} className="ut-line-number">{i + 1}</div>
		)
	}, [linesCount])

	console.log(issues);

	return (
		<div className="ut-home">
			{overlay && <div className="ut-overlay">
				<AppInfo setOverlay={setOverlay} overlay={overlay} />
			</div>
			}
			{aiLoading && <AiOverlay active={true} blocking={true} />}
			<div className="ut-section">
				{/* {raw === "" && <div className="ut-paste" onClick={() => pasteText()}>Paste</div>} */}
				<textarea className="no-scroll" value={raw} onChange={e => setRaw(e.target.value)}></textarea>
				<div className="ut-buttons">
					<div className="ut-button" onClick={() => generate({ status: "open", type: "won", state: "open" })}>Open</div>
					<div className="ut-button" onClick={() => generate({ status: "open", type: "won" })}>Running</div>
					<div className="ut-button" onClick={() => generate({ status: "settled", type: "won" })}>Won</div>
					<div className="ut-button" onClick={() => generate({ status: "settled", type: "as is" })}>As Is</div>
				</div>
				<div className={`ut-panel ${panelExpanded ? "expanded" : "collapsed"}`}>
					<div className="ut-panel-info" onClick={() => setOverlay('info')}>i</div>
					<br />
					<div className="ut-panel-toggle" onClick={() => setPanelExpanded(prev => !prev)}>
						<svg
							className="fill-dark-800 dark:fill-light-50 w-5 h-6"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className=""
								d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
								strokeLinecap="square"
							/>
						</svg>
					</div>
					<div className="ut-panel-content">
						<div className="ut-switch score">
							<div className="ut-switch-title">Score</div>
							<div className="ut-switch-container">
								<div className="flex items-center gap-2">
									<label data-v-2e610db6 className="relative inline-flex items-center cursor-pointer toggle-wrapper gap-2">
										<input data-v-2e610db6 type="checkbox" className="sr-only" checked={showScore} onChange={() => setShowScore(prev => !prev)} />
										<span data-v-2e610db6 className="ut-switch-track" />
									</label>
								</div>
							</div>
						</div>
						{features.hasAi && <div className="ut-switch">
							<div className="ut-switch-title">Use AI</div>
							<div className="ut-switch-container">
								<div className="flex items-center gap-2">
									<label data-v-2e610db6 className="relative inline-flex items-center cursor-pointer toggle-wrapper gap-2">
										<input data-v-2e610db6 type="checkbox" className="sr-only" checked={useAi} onChange={() => setUseAi(prev => !prev)} />
										<span data-v-2e610db6 className="ut-switch-track" />
									</label>
								</div>
							</div>
						</div>}
					</div>
				</div>
			</div>
			<div className="ut-section result">
				{(!isNaN(odds) && odds) && <div className="ut-odds">{odds.toFixed(2)}</div>}
				{issues?.length > 0 && <div className="ut-issues">
					{issues.map((issue, i) => <div key={i} className="ut-issue">{issue}</div>)}
				</div>}
				<div ref={lineNumbersRef} className="ut-line-numbers">{lines}</div>
				<textarea ref={resultRef} className="no-scroll" value={result} onChange={e => { setResult(e.target.value); setIssues([]); }}></textarea>
				<div className="ut-buttons">
					<div ref={submitBtn} className="ut-button" onClick={() => upload(result, submitBtn.current)} style={{ maxWidth: 200 }}>Upload</div>
				</div>
			</div>
			<div className="close-ut fa fa-close" onClick={() => navigate(-1)}>
				<span>&times;</span>
			</div>
			{/* <div className="ai-fill-up-button" onClick={() => aiFillUp()}><img src={aiSvg} /></div> */}
		</div>
	)

}