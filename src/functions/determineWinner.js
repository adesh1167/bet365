export default function determineWinner(data) {
    if (!data.score || !data.gameType) return "";

    try {
        const totalGoals = data.score.home + data.score.away;
        const firstHalfTotalGoals = data.firstHalfScore.home + data.firstHalfScore.away;
        const secondHalfTotalGoals = data.secondHalfScore.home + data.secondHalfScore.away;
        const goalDiff = Math.abs(data.score.home - data.score.away);
        const winner = data.score.home > data.score.away ? data.home : data.score.away > data.score.home ? data.away : "Draw";
        const firstHalfWinner = data.firstHalfScore.home > data.firstHalfScore.away ? data.home : data.firstHalfScore.away > data.firstHalfScore.home ? data.away : "Draw";
        let gameType;
        let point;
        let direction;
        let focusedTeam;
        let focusedSide;
    
        if (data.gameType.includes('Total') && (data.gameType.split("Total")[0] === "")) { //Total Goals
            gameType = "Total Goals";
            point = parseFloat(data.userSelection.split('(')[1]);
            direction = data.userSelection.includes('Over') ? 'over' : (data.userSelection.includes('Under') ? 'under' : null);
        } else if (data.gameType.includes('Double Chance & Total')) {
            gameType = "Double Chance & Total Goals";
            point = parseFloat(data.userSelection.split('(')[1]);
            direction = data.userSelection.includes('Over') ? 'over' : (data.userSelection.includes('Under') ? 'under' : null);
        } else if (data.gameType.includes('1X2 & Total')) {
            gameType = "1X2 & Total Goals";
            point = parseFloat(data.userSelection.split('(')[1]);
            direction = data.userSelection.includes('Over') ? 'over' : (data.userSelection.includes('Under') ? 'under' : null);
        } else if (data.gameType.includes('Exact Goals')) {
            if(data.gameType?.toLowerCase().includes(data.home.toLowerCase()) || data.gameType.toLowerCase().includes(data.away.toLowerCase())){
                gameType = "Excact Team Goals";
                point = parseFloat(data.userSelection.split('(')[1]);
                // focusedTeam = data.gameType?.toLowerCase().includes(data.home.toLowerCase()) ? data.home : data.away;
                focusedSide = data.gameType?.toLowerCase().includes(data.home.toLowerCase()) ? 'home' : 'away';
            } else {
                gameType = data.gameType.trim();
            }
        } else {
            gameType = data.gameType.trim();
        }
    
        let value;
    
        switch (gameType) {
            case "1X2": {
                value = winner;
    
                break;
            }
    
            case "Correct Score": {
                if(data.score.home > 4 || data.score.away > 4) value = "Other"
                else value = `${data.score.home}:${data.score.away}`;
    
                break;
            }
            
            case "1st Half - Correct Score": {
                if(data.firstHalfScore.home > 2 || data.firstHalfScore.away > 2) value = "Other"
                else value = `${data.firstHalfScore.home}:${data.firstHalfScore.away}`;
    
                break;
            }
            
    
            case "Exact Goals": {
                // data = "3" means total goals must equal 3
                value = `${totalGoals}`;
    
                break;
            }
    
            case "Goal Margin": {
                // data = "2" means one team must win by 2 goals
                value = `${goalDiff}`
    
                break;
            }
    
            case "Goal Range": {
                const range = data.userSelection?.split('-').map(s => parseInt(s.trim(), 10));
                if (totalGoals >= range[0] && totalGoals <= range[1]) value = data.userSelection
                else if (totalGoals >= 0 && totalGoals <= 1) {
                    value = '0-1';
                } else if (totalGoals >= 2 && totalGoals <= 3) {
                    value = '2-3';
                } else if (totalGoals >= 4 && totalGoals <= 6) {
                    value = '4-6';
                } else if (totalGoals >= 7) {
                    value = '7+';
                }
    
                break;
            }
    
            case 'Total Goals': {
                value = direction === "over" ? (totalGoals > point ? `Over (${point})` : `Under (${point})`) : (totalGoals < point ? `Under (${point})` : `Over (${point})`);

                break;
            }
    
            case 'both teams to score':
            case 'btts':
            case 'Both Teams To Score (GG/NG)': {
                // data: "yes" or "no"
                value = (data.score.home > 0 && data.score.away > 0) ? "Yes" : "No"
    
                break;
            }
    
            case 'Double Chance': {
                if (data.score.home > data.score.away) {
                    if (data.userSelection.includes(data.home)) {
                        value = data.userSelection
                    } else {
                        value = `${data.home} Or Draw`
                    }
                } else if (data.score.away > data.score.home) {
                    if (data.userSelection.includes(data.away)) {
                        value = data.userSelection
                    } else {
                        value = `Draw Or ${data.away}`
                    }
                } else {
                    if (data.userSelection.includes("Draw")) {
                        value = data.userSelection
                    } else {
                        value = `${data.home} Or Draw`
                    }
                }
    
                break;
            }
    
            case 'Winning Margin': {
                const side = data.userSelection.split(" ")[0];
                value = goalDiff === 0 ? "Draw" : `${winner} by ${goalDiff > 2 ? "3+" : goalDiff}`;
    
                break;
            }
    
            case '1st Half - 1X2': {
                value = firstHalfWinner;
    
                break;
            }
    
            case `Half Time / Full Time`: {
                value = `${firstHalfWinner}/${winner}`;
    
                break;
            }
    
            case '1st Half - Exact Goals': { //not confirmed
                value = `${firstHalfTotalGoals}`;
    
                break;
            }
    
            case `1X2 & Both Teams To Score`: {
                const btts = (data.score.home > 0 && data.score.away > 0) ? "Yes" : "No"
                value = `${winner} & ${btts}`;
    
                break;
            }

            case '1X2 & Total Goals': {

                const tg = direction === "over" ? (totalGoals > point ? `Over (${point})` : `Under (${point})`) : (totalGoals < point ? `Under (${point})` : `Over (${point})`);

                value = `${winner} & ${tg}`

                break;
            }
    
            case 'Double Chance & Total Goals': {
    
                let dc;
                const userDc = data.userSelection.split("&")[0]?.trim();
    
                if (data.score.home > data.score.away) {
                    if (userDc.includes(data.home)) {
                        dc = userDc
                    } else {
                        dc = `${data.home} Or Draw`
                    }
                } else if (data.score.away > data.score.home) {
                    if (userDc.includes(data.away)) {
                        dc = userDc
                    } else {
                        dc = `Draw Or ${data.away}`
                    }
                } else {
                    if (userDc.includes("Draw")) {
                        dc = userDc
                    } else {
                        dc = `${data.home} Or Draw`
                    }
                }
    
                const tg = direction === "over" ? (totalGoals > point ? `Over (${point})` : `Under (${point})`) : (totalGoals < point ? `Under (${point})` : `Over (${point})`);
                
                value = `${dc} & ${tg}`

                break;
    
            }

            case 'Excact Team Goals': {
                value = data.score[focusedSide] > 2 ? "3+" : data.score[focusedSide];

                break;
            }
    
            default: {
                // console.log("Unknown Game Type: ", gameType)
                value = "";
    
                break;
            }
    
        }
    
        if (value.toLowerCase().split(" ").join("") === data.userSelection.toLowerCase().split(" ").join("")) value = data.userSelection;
        return value;
        
    } catch (error) {
        console.warn("Error determining winner: ", error);
        return "";
    }

}