import { useRef, useState } from "react";
import { baseApiUrl } from "../data/url";
import { useApp } from "../contexts/appContext";
import generateBookingCode from "../functions/generateBookingCode";
import { useNavigate } from "react-router-dom";

export default function UploadTickets({visible}){

    const navigate = useNavigate();
	const [raw, setRaw] = useState('')
	const [result, setResult] = useState('')
	const submitBtn = useRef('')

    const {setPopup, user, init, country} = useApp();

	function generateSettled(){
		setResult('')
		let text = raw
		
		const json = {}
					
        //lines = text.trim("\n").split("\n");
        let htm = ""
		let games = text.trim("\n").split("!")
		for(let i=0; i<games.length; i++){
			let lines = games[i].trim("\n").split("\n")
			
			let meta = lines[0].split("/")
			let betTime = meta[0]
			let betDetails = meta[1].split(":")
			let betSlip = betDetails[0].trim()
			betDetails = betDetails[1].trim()
			let betId = betDetails.substring(0,10)
			let betStatus = betDetails.substring(10, betDetails.length)
			
			let multiBet = lines[2]+lines[3]

			// const localBookingCode = localStorage.getItem("bookingCode");
			// json.bookingCode = localBookingCode || "F8AB98E";
			json.bookingCode = generateBookingCode(country.bookingCodePrefix);
			
			json.stakeTime = betTime;
			json.id = betId;
			json.status = "settled";
			
			let lastLine = lines[lines.length - 1]
			
			if(lastLine.split(' ')[0] == 'Wager'){ //Check if wager line was cooied
				json.wager = Number(lastLine.split(':')[1].split(' ')[1])
				lines = lines.filter((item,i)=>(i>3 && i<lines.length - 1))
			} else{
				json.wager = 100
				lines = lines.filter((item,i)=>(i>3))
			}
			//alert(lines)
			
			function setAll(){
			//alert(lines.length)
				for(let k=0; k<lines.length; k++){
					if(k%6 == 4){
						let winLine = lines[k]
						if("Winning".search(winLine.substring(0,7)) < 0 && winLine != "won"){
							lines = [...lines.slice(0,k),"won",...lines.slice(k,lines.length)]
							//alert(lines)
							//alert(lines.length)
							setAll()
							break;
						}
					}
				}
			}
			
			setAll()
			
			//alert(lines)
		
		
			json.matches = []	
									
			for(let j=0; j<(lines.length)/6;j++){
				let curr = j*6;
				
				
				let selection = lines[curr+0].split("Your Selection:")[1]
				let mySelection = selection.substring(0,selection.length-4)
				
				let odds = selection.substring(selection.length-4, selection.length)
				
				let teams = lines[curr+1]
				
				let teamsSplit = teams.split(' v ')
				
				let home = teamsSplit[0]
				
				let away = teamsSplit[1]
				
				let gameType = lines[curr+2]
				
				let league = lines[curr+3]
				
				let fixture = lines[curr+5]
				
				let winner;
				if(lines[curr+4] == "won"){
					winner = mySelection
				} else{
					winner = lines[curr+4].split(" ").filter((item,i)=>i>1).join(" ")
				}
				
				let mySelectionText = (lines[curr+4] == "won") ? mySelection : ((winner.trim(" ") != "NotResulted") ? winner.trim(" ") : mySelection)
				
				json.matches.push({
					odd: odds,
					home: home.trim(),
					away: away.trim(),
					gameType: gameType.trim(),
					league: league.trim(),
					userSelection: (winner == '' || winner == 'NotResulted' ? mySelection : winner).trim(),
					winningSelection: winner.trim(),
					matchTime: fixture.trim(),
					status: "",
					score: "",
					hasEarlyPayout: "",
				})				
				
			}
			
		}
								
		setResult(JSON.stringify(json, undefined,2));
	}

	function generateAsIs() {
		setResult('')
		let text = raw

		const json = {}

		//lines = text.trim("\n").split("\n");
		let htm = ""
		let games = text.trim("\n").split("!")
		for (let i = 0; i < games.length; i++) {
			let lines = games[i].trim("\n").split("\n")

			let meta = lines[0].split("/")
			let betTime = meta[0]
			let betDetails = meta[1].split(":")
			let betSlip = betDetails[0].trim()
			betDetails = betDetails[1].trim()
			let betId = betDetails.substring(0, 10)
			let betStatus = betDetails.substring(10, betDetails.length)

			let multiBet = lines[2] + lines[3]

			// const localBookingCode = localStorage.getItem("bookingCode");
			// json.bookingCode = localBookingCode || "F8AB98E";
			json.bookingCode = generateBookingCode(country.bookingCodePrefix);

			json.stakeTime = betTime;
			json.id = betId;
			json.status = "settled";

			let lastLine = lines[lines.length - 1]

			if (lastLine.split(' ')[0] == 'Wager') { //Check if wager line was cooied
				json.wager = Number(lastLine.split(':')[1].split(' ')[1])
				lines = lines.filter((item, i) => (i > 3 && i < lines.length - 1))
			} else {
				json.wager = 100
				lines = lines.filter((item, i) => (i > 3))
			}
			//alert(lines)

			function setAll() {
				//alert(lines.length)
				for (let k = 0; k < lines.length; k++) {
					if (k % 6 == 4) {
						let winLine = lines[k]
						if ("Winning".search(winLine.substring(0, 7)) < 0 && winLine != "won") {
							lines = [...lines.slice(0, k), "won", ...lines.slice(k, lines.length)]
							//alert(lines)
							//alert(lines.length)
							setAll()
							break;
						}
					}
				}
			}

			setAll()

			//alert(lines)


			json.matches = []

			for (let j = 0; j < (lines.length) / 6; j++) {
				let curr = j * 6;


				let selection = lines[curr + 0].split("Your Selection:")[1]
				let mySelection = selection.substring(0, selection.length - 4)

				let odds = selection.substring(selection.length - 4, selection.length)

				let teams = lines[curr + 1]

				let teamsSplit = teams.split(' v ')

				let home = teamsSplit[0]

				let away = teamsSplit[1]

				let gameType = lines[curr + 2]

				let league = lines[curr + 3]

				let fixture = lines[curr + 5]

				let winner;
				if (lines[curr + 4] == "won") {
					winner = mySelection
				} else {
					winner = lines[curr + 4].split(" ").filter((item, i) => i > 1).join(" ")
				}

				let mySelectionText = (lines[curr + 4] == "won") ? mySelection : ((winner.trim(" ") != "NotResulted") ? winner.trim(" ") : mySelection)

				json.matches.push({
					odd: odds,
					home: home.trim(),
					away: away.trim(),
					gameType: gameType.trim(),
					league: league.trim(),
					// userSelection: (winner == '' || winner == 'NotResulted' ? mySelection : winner).trim(),
					userSelection: mySelection.trim(),
					winningSelection: winner.trim(),
					matchTime: fixture.trim(),
					status: "",
					score: "",
				})

			}

		}

		setResult(JSON.stringify(json, undefined, 2));
	}

	function generateOpen(){
		setResult('');
		let text = raw
		
		const json = {}
					
					//lines = text.trim("\n").split("\n");
					let htm = ""
		let games = text.trim("\n").split("!")
		for(let i=0; i<games.length; i++){

			let editable = games[i].includes('Edit Bets');

			let lines = games[i].trim("\n").split("\n")
			
			let meta = lines[0].split("/")
			let betTime = meta[0]
			let betDetails = meta[1].split(":")
			let betSlip = betDetails[0].trim()
			betDetails = betDetails[1].trim()
			let betId = betDetails.substring(0,10)
			let betStatus = betDetails.substring(10, betDetails.length)
			
			let multiBet = lines[3]+lines[4]

			// const localBookingCode = localStorage.getItem("bookingCode");
			// json.bookingCode = localBookingCode || "F8AB98E";
			json.bookingCode = generateBookingCode(country.bookingCodePrefix);
			
			json.stakeTime = betTime;
			json.id = betId;
			json.status = "open";
			json.hasEdit = editable;
			
			let lastLine = lines[lines.length - 1]
			const matchesStartLine = editable ? 7 : 4;

			if(lastLine.split(' ')[0] == 'Wager'){ //Check if wager line was copied
				json.wager = Number(lastLine.split(':')[1].split(' ')[1])
				lines = lines.filter((item,i)=>(i>matchesStartLine && i<lines.length - 1)) // matchesStartLine = number of lines before matches list
			} else{
				json.wager = 100
				lines = lines.filter((item,i)=>(i>matchesStartLine)) // 4 = number of lines before matches list
			}
			//alert(lines)
			
			function setAll(){
			//alert(lines.length)
				for(let k=0; k<lines.length; k++){
					if(k%6 == 4){
						let winLine = lines[k]
						if("Winning".search(winLine.substring(0,7)) < 0 && winLine != "won"){
							lines = [...lines.slice(0,k),"won",...lines.slice(k,lines.length)]
							//alert(lines)
							//alert(lines.length)
							setAll()
							break;
						}
					}
				}
			}
			
			setAll()
			
			//alert(lines)
		
		
			json.matches = []	
									
			for(let j=0; j<(lines.length)/6;j++){
				let curr = j*6;

				let selection, mySelection, odds;

				if(editable){
					
					selection = lines[curr+0].split("edit")
					
					mySelection = selection[0]
					
					odds = selection[1]
				} else{
					
					selection = lines[curr+0]
					
					mySelection = selection.substring(0,selection.length-4)
					
					odds = selection.substring(selection.length-4, selection.length)
				}
				
				let teams = lines[curr+1]
				
				let teamsSplit = teams.split(' v ')
				
				let home = teamsSplit[0]
				
				let away = teamsSplit[1]
				
				let gameType = lines[curr+2]
				
				let league = lines[curr+3]

				let fixture = lines[curr+5]

				let winner;
				if(lines[curr+4] == "won"){
					winner = mySelection
				} else{
					winner = lines[curr+4].split(" ").filter((item,i)=>i>1).join(" ")
				}
				
				let mySelectionText = (lines[curr+4] == "won") ? mySelection : ((winner.trim(" ") != "NotResulted") ? winner.trim(" ") : mySelection)
				
				json.matches.push({
					odd: odds,
					home: home.trim(),
					away: away.trim(),
					gameType: gameType.trim(),
					league: league.trim(),
					userSelection: (winner == '' || winner == 'NotResulted' ? mySelection : winner).trim(),
					winningSelection: winner.trim(),
					matchTime: fixture.trim(),
					status: "",
					hasEarlyPayout: "",
				})				
				
			}
			
		}
								
		setResult(JSON.stringify(json, undefined,2));
	}

	function upload(data, btn){
		if(data.length > 10 && JSON.parse(data)){

			let prevContent = btn.innerHTML;
			let prevAction = btn.onclick;
			const parsedData = JSON.parse(data);
			
			btn.classList.add("glow")
			btn.onclick = ()=>{}
			btn.innerHTML = "Uploading..."
			window.$.ajax({
				url: `${baseApiUrl}/update-tickets.php`,
				type: 'POST',
				data: {
					tickets: parsedData,
					user,
				},
				dataType: 'JSON',
				success: (res)=>{
					if(res.status == 'success'){
						localStorage.setItem("bookingCode", parsedData.bookingCode);
						alert('Uploaded Successfully')
						setRaw('')
						setResult('')
						init({full: false})
					} else{
						alert(res.message)
					}
				},
				error: (res)=>{
					alert('Failed to upload. Check internet connection.')
					console.log(JSON.stringify(res))
					console.log(res)
				},
				complete: ()=>{
					btn.classList.remove("glow")
					btn.innerHTML = prevContent
					btn.onclick = prevAction
				}
			})
		} else{
			alert("Invalid Data")
		}
	}

	return (
		<div className="ut-home" style={{display: true ? "flex" : "none"}}>
			<div className="ut-section">
				<textarea value={raw} onChange={e=>setRaw(e.target.value)}></textarea>
				<div className="ut-buttons">
					<div className="ut-button" onClick={generateOpen}>Generate Open</div>
					<div className="ut-button" onClick={generateSettled}>Won</div>
					<div className="ut-button" onClick={generateAsIs}>As Is</div>
				</div>
			</div>
			<div className="ut-section">
				<textarea value={result} onChange={e=>setResult(e.target.value)}></textarea>
				<div className="ut-buttons">
					<div ref={submitBtn} className="ut-button" onClick={()=>upload(result, submitBtn.current)}>Upload</div>
				</div>
			</div>
			<div className="close-ut fa fa-close" onClick={()=>navigate(-1)}>&times;</div>
		</div>		
	)	

}