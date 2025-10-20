import { useRef, useState } from "react";
import { baseApiUrl } from "../data/url";
import { useApp } from "../contexts/appContext";
import generateBookingCode from "../functions/generateBookingCode";
import { useNavigate } from "react-router-dom";

export default function UploadTickets({ visible }) {

	const navigate = useNavigate();
	const [raw, setRaw] = useState('')
	const [result, setResult] = useState('')
	const submitBtn = useRef('')

	const { setPopup, user, init, country } = useApp();

	// function generateSettled() {
	// 	setResult('')
	// 	let text = raw

	// 	const json = {}

	// 	//lines = text.trim("\n").split("\n");
	// 	let htm = ""
	// 	let games = text.trim("\n").split("!")
	// 	for (let i = 0; i < games.length; i++) {
	// 		let lines = games[i].trim("\n").split("\n")

	// 		let meta = lines[0].split("/")
	// 		let betTime = meta[0]
	// 		let betDetails = meta[1].split(":")
	// 		let betSlip = betDetails[0].trim()
	// 		betDetails = betDetails[1].trim()
	// 		let betId = betDetails.substring(0, 10)
	// 		let betStatus = betDetails.substring(10, betDetails.length)

	// 		let multiBet = lines[2] + lines[3]

	// 		// const localBookingCode = localStorage.getItem("bookingCode");
	// 		// json.bookingCode = localBookingCode || "F8AB98E";
	// 		json.bookingCode = generateBookingCode(country.bookingCodePrefix);

	// 		json.stakeTime = betTime;
	// 		json.id = betId;
	// 		json.status = "settled";

	// 		let lastLine = lines[lines.length - 1]

	// 		if (lastLine.split(' ')[0] == 'Wager') { //Check if wager line was cooied
	// 			json.wager = Number(lastLine.split(':')[1].split(' ')[1])
	// 			lines = lines.filter((item, i) => (i > 3 && i < lines.length - 1))
	// 		} else {
	// 			json.wager = 100
	// 			lines = lines.filter((item, i) => (i > 3))
	// 		}
	// 		//alert(lines)

	// 		function setAll() {
	// 			//alert(lines.length)
	// 			for (let k = 0; k < lines.length; k++) {
	// 				if (k % 6 == 4) {
	// 					let winLine = lines[k]
	// 					if ("Winning".search(winLine.substring(0, 7)) < 0 && winLine != "won") {
	// 						lines = [...lines.slice(0, k), "won", ...lines.slice(k, lines.length)]
	// 						//alert(lines)
	// 						//alert(lines.length)
	// 						setAll()
	// 						break;
	// 					}
	// 				}
	// 			}
	// 		}

	// 		setAll()

	// 		//alert(lines)


	// 		json.matches = []

	// 		for (let j = 0; j < (lines.length) / 6; j++) {
	// 			let curr = j * 6;


	// 			let selection = lines[curr + 0].split("Your Selection:")[1]
	// 			let mySelection = selection.substring(0, selection.length - 4)

	// 			let odds = selection.substring(selection.length - 4, selection.length)

	// 			let teams = lines[curr + 1]

	// 			let teamsSplit = teams.split(' v ')

	// 			let home = teamsSplit[0]

	// 			let away = teamsSplit[1]

	// 			let gameType = lines[curr + 2]

	// 			let league = lines[curr + 3]

	// 			let fixture = lines[curr + 5]

	// 			let winner;
	// 			if (lines[curr + 4] == "won") {
	// 				winner = mySelection
	// 			} else {
	// 				winner = lines[curr + 4].split(" ").filter((item, i) => i > 1).join(" ")
	// 			}

	// 			let mySelectionText = (lines[curr + 4] == "won") ? mySelection : ((winner.trim(" ") != "NotResulted") ? winner.trim(" ") : mySelection)

	// 			json.matches.push({
	// 				odd: odds,
	// 				home: home.trim(),
	// 				away: away.trim(),
	// 				gameType: gameType.trim(),
	// 				league: league.trim(),
	// 				userSelection: (winner == '' || winner == 'NotResulted' ? mySelection : winner).trim(),
	// 				winningSelection: winner.trim(),
	// 				matchTime: fixture.trim(),
	// 				status: "",
	// 				score: "",
	// 				hasEarlyPayout: "",
	// 			})

	// 		}

	// 	}

	// 	setResult(JSON.stringify(json, undefined, 2));
	// }

	// function generateAsIs() {
	// 	setResult('')
	// 	let text = raw

	// 	const json = {}

	// 	//lines = text.trim("\n").split("\n");
	// 	let htm = ""
	// 	let games = text.trim("\n").split("!")
	// 	for (let i = 0; i < games.length; i++) {
	// 		let lines = games[i].trim("\n").split("\n")

	// 		let meta = lines[0].split("/")
	// 		let betTime = meta[0]
	// 		let betDetails = meta[1].split(":")
	// 		let betSlip = betDetails[0].trim()
	// 		betDetails = betDetails[1].trim()
	// 		let betId = betDetails.substring(0, 10)
	// 		let betStatus = betDetails.substring(10, betDetails.length)

	// 		let multiBet = lines[2] + lines[3]

	// 		// const localBookingCode = localStorage.getItem("bookingCode");
	// 		// json.bookingCode = localBookingCode || "F8AB98E";
	// 		json.bookingCode = generateBookingCode(country.bookingCodePrefix);

	// 		json.stakeTime = betTime;
	// 		json.id = betId;
	// 		json.status = "settled";

	// 		let lastLine = lines[lines.length - 1]

	// 		if (lastLine.split(' ')[0] == 'Wager') { //Check if wager line was cooied
	// 			json.wager = Number(lastLine.split(':')[1].split(' ')[1])
	// 			lines = lines.filter((item, i) => (i > 3 && i < lines.length - 1))
	// 		} else {
	// 			json.wager = 100
	// 			lines = lines.filter((item, i) => (i > 3))
	// 		}
	// 		//alert(lines)

	// 		function setAll() {
	// 			//alert(lines.length)
	// 			for (let k = 0; k < lines.length; k++) {
	// 				if (k % 6 == 4) {
	// 					let winLine = lines[k]
	// 					if ("Winning".search(winLine.substring(0, 7)) < 0 && winLine != "won") {
	// 						lines = [...lines.slice(0, k), "won", ...lines.slice(k, lines.length)]
	// 						//alert(lines)
	// 						//alert(lines.length)
	// 						setAll()
	// 						break;
	// 					}
	// 				}
	// 			}
	// 		}

	// 		setAll()

	// 		//alert(lines)


	// 		json.matches = []

	// 		for (let j = 0; j < (lines.length) / 6; j++) {
	// 			let curr = j * 6;


	// 			let selection = lines[curr + 0].split("Your Selection:")[1]
	// 			let mySelection = selection.substring(0, selection.length - 4)

	// 			let odds = selection.substring(selection.length - 4, selection.length)

	// 			let teams = lines[curr + 1]

	// 			let teamsSplit = teams.split(' v ')

	// 			let home = teamsSplit[0]

	// 			let away = teamsSplit[1]

	// 			let gameType = lines[curr + 2]

	// 			let league = lines[curr + 3]

	// 			let fixture = lines[curr + 5]

	// 			let winner;
	// 			if (lines[curr + 4] == "won") {
	// 				winner = mySelection
	// 			} else {
	// 				winner = lines[curr + 4].split(" ").filter((item, i) => i > 1).join(" ")
	// 			}

	// 			let mySelectionText = (lines[curr + 4] == "won") ? mySelection : ((winner.trim(" ") != "NotResulted") ? winner.trim(" ") : mySelection)

	// 			json.matches.push({
	// 				odd: odds,
	// 				home: home.trim(),
	// 				away: away.trim(),
	// 				gameType: gameType.trim(),
	// 				league: league.trim(),
	// 				// userSelection: (winner == '' || winner == 'NotResulted' ? mySelection : winner).trim(),
	// 				userSelection: mySelection.trim(),
	// 				winningSelection: winner.trim(),
	// 				matchTime: fixture.trim(),
	// 				status: "",
	// 				score: "",
	// 				hasEarlyPayout: "",
	// 			})

	// 		}

	// 	}

	// 	setResult(JSON.stringify(json, undefined, 2));
	// }

	// function generateOpen() {
	// 	setResult('');
	// 	let text = raw

	// 	const json = {}

	// 	//lines = text.trim("\n").split("\n");
	// 	let htm = ""
	// 	let games = text.trim("\n").split("!")
	// 	for (let i = 0; i < games.length; i++) {

	// 		let editable = games[i].includes('Edit Bets');

	// 		let lines = games[i].trim("\n").split("\n")

	// 		let meta = lines[0].split("/")
	// 		let betTime = meta[0]
	// 		let betDetails = meta[1].split(":")
	// 		let betSlip = betDetails[0].trim()
	// 		betDetails = betDetails[1].trim()
	// 		let betId = betDetails.substring(0, 10)
	// 		let betStatus = betDetails.substring(10, betDetails.length)

	// 		let multiBet = lines[3] + lines[4]

	// 		// const localBookingCode = localStorage.getItem("bookingCode");
	// 		// json.bookingCode = localBookingCode || "F8AB98E";
	// 		json.bookingCode = generateBookingCode(country.bookingCodePrefix);

	// 		json.stakeTime = betTime;
	// 		json.id = betId;
	// 		json.status = "open";
	// 		json.hasEdit = editable;

	// 		let lastLine = lines[lines.length - 1]
	// 		const matchesStartLine = editable ? 7 : 4;

	// 		if (lastLine.split(' ')[0] == 'Wager') { //Check if wager line was copied
	// 			json.wager = Number(lastLine.split(':')[1].split(' ')[1])
	// 			lines = lines.filter((item, i) => (i > matchesStartLine && i < lines.length - 1)) // matchesStartLine = number of lines before matches list
	// 		} else {
	// 			json.wager = 100
	// 			lines = lines.filter((item, i) => (i > matchesStartLine)) // 4 = number of lines before matches list
	// 		}
	// 		//alert(lines)

	// 		function setAll() {
	// 			//alert(lines.length)
	// 			for (let k = 0; k < lines.length; k++) {
	// 				if (k % 6 == 4) {
	// 					let winLine = lines[k]
	// 					if ("Winning".search(winLine.substring(0, 7)) < 0 && winLine != "won") {
	// 						lines = [...lines.slice(0, k), "won", ...lines.slice(k, lines.length)]
	// 						//alert(lines)
	// 						//alert(lines.length)
	// 						setAll()
	// 						break;
	// 					}
	// 				}
	// 			}
	// 		}

	// 		setAll()

	// 		//alert(lines)


	// 		json.matches = []

	// 		for (let j = 0; j < (lines.length) / 6; j++) {
	// 			let curr = j * 6;

	// 			let selection, mySelection, odds;

	// 			if (editable) {

	// 				selection = lines[curr + 0].split("edit")

	// 				mySelection = selection[0]

	// 				odds = selection[1]
	// 			} else {

	// 				selection = lines[curr + 0]

	// 				mySelection = selection.substring(0, selection.length - 4)

	// 				odds = selection.substring(selection.length - 4, selection.length)
	// 			}

	// 			let teams = lines[curr + 1]

	// 			let teamsSplit = teams.split(' v ')

	// 			let home = teamsSplit[0]

	// 			let away = teamsSplit[1]

	// 			let gameType = lines[curr + 2]

	// 			let league = lines[curr + 3]

	// 			let fixture = lines[curr + 5]

	// 			let winner;
	// 			if (lines[curr + 4] == "won") {
	// 				winner = mySelection
	// 			} else {
	// 				winner = lines[curr + 4].split(" ").filter((item, i) => i > 1).join(" ")
	// 			}

	// 			let mySelectionText = (lines[curr + 4] == "won") ? mySelection : ((winner.trim(" ") != "NotResulted") ? winner.trim(" ") : mySelection)

	// 			json.matches.push({
	// 				odd: odds,
	// 				home: home.trim(),
	// 				away: away.trim(),
	// 				gameType: gameType.trim(),
	// 				league: league.trim(),
	// 				userSelection: (winner == '' || winner == 'NotResulted' ? mySelection : winner).trim(),
	// 				winningSelection: winner.trim(),
	// 				matchTime: fixture.trim(),
	// 				status: "",
	// 				score: "",
	// 				hasEarlyPayout: "",
	// 			})

	// 		}

	// 	}

	// 	setResult(JSON.stringify(json, undefined, 2));
	// }

	function determineWinner(gameType, fullTimeScore, data) {
		if (!fullTimeScore) return data.userSelection;

		switch (gameType) {
			case "1X2": {
				if (data.homeGoals > data.awayGoals) return data.home;
				if (data.homeGoals < data.awayGoals) return data.away;
				return "Draw";
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

	function generate({
		status = "open",
		type = "won"
	}) {

		setResult('');

		const json = {};

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
			baseTimeZone = countries.find(c => c.code == baseCountry)?.timeZone || "+1";
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
			const today = new Date();
			const year = today.getFullYear();
			const month = today.getMonth() + 1;
			const day = today.getDate();
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

			const isTotalGoals = gameType.includes('Total Goals') && !(gameType.split("-")?.length > 1);

			const [homeGoals, awayGoals] = score
				.split('-')
				.map(s => parseInt(s.trim(), 10));
			const totalGoals = homeGoals + awayGoals;
			const goalDiff = Math.abs(homeGoals - awayGoals);

			const winner = isLive ? "" : determineWinner(isTotalGoals ? 'Total Goals' : gameType.trim(), score, {
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
				userSelection: type === "won" ? (winner == '' || winner == 'NotResulted' ? userSelection : winner).trim() : userSelection,
				winningSelection: winner,
				matchTime: gameDateTime,
				up2: up2Value,
				status: "",
				score: score.length < 10 ? score : "",
				live: isLive ? score : "",
				hasEarlyPayout: "",
			})
		}

		json.cashout = "";
		json.baseCountry = baseCountry;
		json.baseTimeZone = baseTimeZone;
		json.locked = generateIdPerCountry(id, bookingCode, baseCountry);

		// console.log(json);

		setResult(JSON.stringify(json, null, 2))

	}

	function upload(data, btn) {
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
					alert('Failed to upload. Check internet connection.')
					console.log(JSON.stringify(res))
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
	}

	return (
		<div className="ut-home" style={{ display: true ? "flex" : "none" }}>
			<div className="ut-section">
				<textarea value={raw} onChange={e => setRaw(e.target.value)}></textarea>
				<div className="ut-buttons">
					<div className="ut-button" onClick={() => generate({ status: "open", type: "won" })}>Generate Open</div>
					<div className="ut-button" onClick={() => generate({ status: "settled", type: "won" })}>Won</div>
					<div className="ut-button" onClick={() => generate({ status: "settled", type: "as is" })}>As Is</div>
				</div>
			</div>
			<div className="ut-section">
				<textarea value={result} onChange={e => setResult(e.target.value)}></textarea>
				<div className="ut-buttons">
					<div ref={submitBtn} className="ut-button" onClick={() => upload(result, submitBtn.current)}>Upload</div>
				</div>
			</div>
			<div className="close-ut fa fa-close" onClick={() => navigate(-1)}>&times;</div>
		</div>
	)

}