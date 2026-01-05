import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useApp } from '../contexts/appContext'

const EditTicket = ({ticket, updateTicket, index }) => {

	console.log("Ticket: ", ticket, index);
	const [result, setResult] = useState('')
	const [odds, setOdds] = useState(null);
	const [linesCount, setLinesCount] = useState(0);
	const submitBtn = useRef('')
	const resultRef = useRef('')
	const lineNumbersRef = useRef('')

	const { computeFilter, goBack } = useApp();

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
		console.log(visualLines);
		setLinesCount(visualLines);
	}

	useEffect(() => {
		function updateScroll() {
			if (resultRef.current) {
				lineNumbersRef.current.scrollTop = resultRef.current.scrollTop;
			}
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

	useLayoutEffect(() => {
		if (ticket) {
			try {
				setResult(JSON.stringify(ticket, null, 2));
			} catch (error) {
				goBack("MaB");
				alert("Error: " + error);
			}
		} else{
			goBack("MaB");
		}
	}, [ticket]);

	useEffect(() => {
		calculateOdds()
		if (resultRef.current) {
			updateLines();
		}
	}, [result])

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

	function update() {
		try {
			const parsed = JSON.parse(result);
			const computed = computeFilter({
				ticket: parsed,
				tempTickets: null,
				i: null,
				single: true
			});

			console.log("Computed: ", computed);
			updateTicket(index, computed);
			goBack("MaB");
		} catch (error) {
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
			} else{
				alert("Error: " + error.message)
			}
		}
	}

	const lines = useMemo(() => {

		return Array.from({ length: linesCount }).map((item, i) =>
			<div key={i} className="ut-line-number">{i + 1}</div>
		)
	}, [linesCount])

	return (
		<div className="ut-home" style={{ display: true ? "flex" : "none" }}>
			<div className="ut-section result">
				{odds && <div className="ut-odds">{odds.toFixed(2)}</div>}
				<div ref={lineNumbersRef} className="ut-line-numbers">{lines}</div>
				<textarea ref={resultRef} className="no-scroll" value={result} onChange={e => setResult(e.target.value)}></textarea>
				<div className="ut-buttons">
					<div ref={submitBtn} className="ut-button" onClick={update} style={{ maxWidth: 200 }}>SET</div>
				</div>
			</div>
			<div className="close-ut fa fa-close" onClick={() => goBack("MaB")}>&times;</div>
		</div>
	)
}

export default EditTicket
