const gameTypes = {
    "Match Result (1X2)": {
        text: "Full Time Result",
        callBack: (value = "") => value
    },
    "Correct Score": {
        text: "Correct Score",
        callBack: (value = "", home = "", away = "") => {
            if (value.toLowerCase() === "other") {
                return "Other";
            }
            const scores = value.split(":").map(Number);
            if (scores.length < 2) {
                return value;
            } else {
                if (scores[0] > scores[1]) {
                    return `${home} ${scores[0]}-${scores[1]}`
                } else if (scores[1] > scores[0]) {
                    return `${away} ${scores[1]}-${scores[0]}`
                }
                return `Draw ${scores[0]}-${scores[1]}`
            }
        }
    },
    "Both Teams to Score (GG/NG)": {
        text: "Both Teams To Score",
        callBack: (value = "") => value === "Yes" ? "Both Teams To Score" : "No"
    },
    "Double Chance": {
        text: "Double Chance",
        callBack: (value = "") => value
    },
    "Overs/Unders": {
        text: "Total Goals",
        callBack: (value = "") => value
    },
    "1st Half - 1X2": {
        text: "Half Time Result",
        callBack: (value = "") => value
    },
    "Halftime/Fulltime": {
        text: "Half Time/Full Time",
        callBack: (value = "", home, away) => {
            console.log("Details: ", value, home, away)
            return value.split("/").join(" - ")
        }
    },
    "Exact Goals": {
        text: "Exact Goals",
        callBack: (value = "") => value
    },
    "Winning Margin": {
        text: "Winning Margin",
        callBack: (value = "") => value.split(" by ").join(" to win by ")
    },
    "1X2 & Both Teams To Score": {
        text: "Result/Both Teams To Score",
        callBack: (value = "") => value
    },
    "1X2 and Overs/Unders": {
        text: "Result/Total Goals",
        callBack: (value = "") => value
    },
    "aaa": {
        text: "bbb",
        callBack: (value = "") => value
    },

}

export default gameTypes;
