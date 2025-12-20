// const gameTypes = {
//     "Match Result (1X2)": {
//         text: "Full Time Result",
//         callBack: (value = "") => value
//     },
//     "1X2": {
//         text: "Full Time Result",
//         callBack: (value = "") => value
//     },
//     "Correct Score": {
//         text: "Correct Score",
//         callBack: (value = "", home = "", away = "") => {
//             if (value.toLowerCase() === "other") {
//                 return "Other";
//             }
//             const scores = value.split(":").map(Number);
//             if (scores.length < 2) {
//                 return value;
//             } else {
//                 if (scores[0] > scores[1]) {
//                     return `${home} ${scores[0]}-${scores[1]}`
//                 } else if (scores[1] > scores[0]) {
//                     return `${away} ${scores[1]}-${scores[0]}`
//                 }
//                 return `Draw ${scores[0]}-${scores[1]}`
//             }
//         }
//     },
//     "Both Teams to Score (GG/NG)": {
//         text: "Both Teams To Score",
//         callBack: (value = "") => value === "Yes" ? "Both Teams To Score" : "No"
//     },
//     "Double Chance": {
//         text: "Double Chance",
//         callBack: (value = "") => value
//     },
//     "Overs/Unders": {
//         text: "Total Goals",
//         callBack: (value = "") => value
//     },
//     "1st Half - 1X2": {
//         text: "Half Time Result",
//         callBack: (value = "") => value
//     },
//     "Halftime/Fulltime": {
//         text: "Half Time/Full Time",
//         callBack: (value = "", home, away) => {
//             return value.split("/").join(" - ")
//         }
//     },
//     "Exact Goals": {
//         text: "Exact Goals",
//         callBack: (value = "") => value
//     },
//     "Winning Margin": {
//         text: "Winning Margin",
//         callBack: (value = "") => value.split(" by ").join(" to win by ")
//     },
//     "1X2 & Both Teams To Score": {
//         text: "Result/Both Teams To Score",
//         callBack: (value = "") => value
//     },
//     "1X2 and Overs/Unders": {
//         text: "Result/Total Goals",
//         callBack: (value = "") => value
//     },
//     "aaa": {
//         text: "bbb",
//         callBack: (value = "") => value
//     },

// }

const gameTypes = ({ type, value = "", home = "", away = "" }) => {
    let gameType;

    let finalType, finalValue;

    if (type.includes('Total') && (type.split("Total")[0] === "")) {
        gameType = "Total Goals";
    } else if (type.includes('Double Chance & Total')) {
        gameType = "Double Chance & Total Goals";
    } else if (type.includes('1X2 & Total')) {
        gameType = "1X2 & Total Goals";
    } else if (type.includes('Exact Goals')) {
        if (type?.toLowerCase().includes(home.toLowerCase()) || type.toLowerCase().includes(away.toLowerCase())) {
            gameType = "Excact Team Goals";
        } else {
            gameType = type.trim();
        }
    } else {
        gameType = type.trim();
    }

    switch (gameType) {
        case "Match Result (1X2)":
        case "1X2": {
            finalType = "Full Time Result";
            finalValue = value;
            break;
        }
        case "Correct Score": {
            finalType = "Correct Score";
            if (value.toLowerCase() === "other") {
                finalValue = "Other";
            }
            const scores = value.split(":").map(Number);
            if (scores.length < 2) {
                finalValue = value;
            } else {
                if (scores[0] > scores[1]) {
                    finalValue = `${home} ${scores[0]}-${scores[1]}`
                } else if (scores[1] > scores[0]) {
                    finalValue = `${away} ${scores[1]}-${scores[0]}`
                } else{
                    finalValue = `Draw ${scores[0]}-${scores[1]}`
                }
            }
            break;
        }
        case 'both teams to score':
        case 'btts':
        case 'Both Teams To Score (GG/NG)': {
            finalType = "Both Teams To Score";
            finalValue = value === "Yes" ? "Both Teams To Score" : "No";
            break;
        }
        case "Double Chance": {
            finalType = "Double Chance";
            finalValue = value;
            break;
        }
        case "Total Goals": {
            finalType = "Total Goals";
            finalValue = value;
            break;
        }
        case "1st Half - 1X2": {
            finalType = "1st Half - 1X2";
            finalValue = value;
            break;
        }
        case "Half Time / Full Time": {
            finalType = "Half Time/Full Time";
            finalValue = value.split("/").join(" - ");
            break;
        }
        case "Exact Goals": {
            finalType = "Exact Goals";
            finalValue = value;
            break;
        }
        case "Winning Margin": {
            finalType = "Winning Margin";
            finalValue = value.split(" by ").join(" to win by ");
            break;
        }
        case "1X2 & Both Teams To Score": {
            finalType = "Result/Both Teams To Score";
            finalValue = value;
            break;
        }
        case "1X2 & Total Goals": {
            finalType = "Result/Total Goals";
            finalValue = value;
            break;
        }
        case "Double Chance & Total Goals": {
            finalType = "Double Chance & Total Goals";
            finalValue = value;
            break;
        }
        default: {
            finalType = type;
            finalValue = value
        }
    }

    return ({
        gameType: finalType,
        userSelection: finalValue
    })
}

export default gameTypes;
