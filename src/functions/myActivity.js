import { createDateKey } from "./formatDate";

export function filterByDateRange(items, duration, timeField) {

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - duration - 2);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 3);

    return items.filter(item => {
        const itemTime = new Date(item[timeField]);
        // console.log(itemTime, startDate, endDate, item)
        return itemTime >= startDate && itemTime <= endDate;
    });
}

export function computeDepositWithdrawal(transactions, factor = 1) {
    let totalDeposits = 0;
    let totalWithdrawals = 0;

    transactions.forEach(tx => {
        if (tx.tx_type === 'Card Deposit') {
            totalDeposits += tx.amount;
        } else if (tx.tx_type === 'Withdrawal') {
            totalWithdrawals += tx.amount;
        }
    });

    const netDeposits = totalDeposits - totalWithdrawals;

    return {
        totalDeposits: totalDeposits * factor,
        totalWithdrawals: totalWithdrawals * factor,
        netDeposits: netDeposits * factor
    };
}

export function computeWinLoss(transactions, duration, factor) {
    // Create an object with date keys
    let netReturns = 0;
    const dateMap = {};

    if (duration > 31) {
        for (let i = 0; i <= 12; i++) {
            const key = createDateKey(i, true);
            dateMap[key.key] = {
                label: key.date,
                totalStake: 0,
                totalReturn: 0,
            };
        }
    } else {
        for (let i = 3; i <= duration + 2; i++) {
            const key = createDateKey(i, false);
            dateMap[key.key] = {
                label: key.date,
                totalStake: 0,
                totalReturn: 0,
            };
        }
    }
    console.log(dateMap);

    transactions.forEach(tx => {
        // Extract date portion from stakeTime (assuming "YYYY-MM-DD HH:MM:SS" format)
        const date = duration > 31 ? tx.tx_time.substring(0, 7) : tx.tx_time.substring(0, 10);

        // Initialize the date entry if needed
        if (!dateMap[date]) {
            dateMap[date] = {
                label: tx.tx_time,
                totalStake: 0,
                totalReturn: 0,
            };
        }

        if (tx.tx_type === 'Payout' || tx.tx_type === "Win Boost Cash Bonus") {
            dateMap[date].totalReturn += tx.amount;
            netReturns += tx.amount;
        } else if (tx.tx_type === 'Wager') {
            dateMap[date].totalStake += tx.amount;
            netReturns -= tx.amount;
        }
    });

    // Convert to an array of objects sorted by date
    const result = Object.keys(dateMap)
        .sort((a, b) => new Date(a) - new Date(b))
        .map(date => ({
            date,
            label: dateMap[date].label,
            net: (dateMap[date].totalReturn - dateMap[date].totalStake) * factor,
            totalStake: dateMap[date].totalStake * factor,
            totalReturn: dateMap[date].totalReturn * factor,
        }))

    // console.log(netReturns, result);

    return ({
        duration: duration,
        netReturns: netReturns * factor,
        dateMap: result
    })

}

export function computeStake(transactions, duration, factor,) {
    let totalStakes = 0;
    const dateMap = {};

    if (duration > 31) {
        for (let i = 0; i <= 12; i++) {
            const key = createDateKey(i, true);
            dateMap[key.key] = {
                label: key.date,
                totalStake: 0,
            };
        }
    } else {
        for (let i = 3; i <= duration + 2; i++) {
            const key = createDateKey(i, false);
            dateMap[key.key] = {
                label: key.date,
                totalStake: 0,
            };
        }
    }

    // console.log(dateMap);

    transactions.filter(tx => tx.tx_type === 'Wager').map(tx => {
        // Extract date portion from stakeTime (assuming "YYYY-MM-DD HH:MM:SS" format)
        const date = duration > 31 ? tx.tx_time.substring(0, 7) : tx.tx_time.substring(0, 10);

        // Initialize the date entry if needed
        if (!dateMap[date]) {
            dateMap[date] = {
                label: tx.tx_time,
                totalStake: 0,
            };
        }
        totalStakes += tx.amount;
        dateMap[date].totalStake += tx.amount;

    })

    // Convert to an array of objects sorted by date
    const result = Object.keys(dateMap)
        .sort((a, b) => new Date(a) - new Date(b))
        .map(date => ({
            date,
            label: dateMap[date].label,
            totalStake: dateMap[date].totalStake * factor,
        }))

    // console.log(netReturns, result);

    return ({
        totalStakes: totalStakes * factor,
        dateMap: result
    })
}

export function computePlayTime(transactions, duration  ) {
    let totalPlayTime = 0;
    const dateMap = {};

    if (duration > 31) {
        for (let i = 0; i <= 12; i++) {
            const key = createDateKey(i, true);
            dateMap[key.key] = {
                label: key.date,
                totalPlayTime: 0,
            };
        }
    } else {
        for (let i = 3; i <= duration + 2; i++) {
            const key = createDateKey(i, false);
            dateMap[key.key] = {
                label: key.date,
                totalPlayTime: 0,
            };
        }
    }

    console.log(dateMap);

    transactions.filter(tx => tx.tx_type === 'Wager').map(tx => {
        // Extract date portion from stakeTime (assuming "YYYY-MM-DD HH:MM:SS" format)
        const date = duration > 31 ? tx.tx_time.substring(0, 7) : tx.tx_time.substring(0, 10);

        // Initialize the date entry if needed
        if (!dateMap[date]) {
            dateMap[date] = {
                label: tx.tx_time,
                totalPlayTime: 0,
            };
        }
        totalPlayTime += 15;
        dateMap[date].totalPlayTime += 15;

    })

    // Convert to an array of objects sorted by date
    const result = Object.keys(dateMap)
        .sort((a, b) => new Date(a) - new Date(b))
        .map(date => ({
            date,
            label: dateMap[date].label,
            totalPlayTime: dateMap[date].totalPlayTime,
        }))

    // console.log(totalPlayTime, result);

    return ({
        totalPlayTime: totalPlayTime,
        dateMap: result
    })
}

export function computeStakeTime(transactions, duration) {
    const result = transactions.filter(tx => tx.tx_type === "Wager") // Only process wagers
    .map(tx => {
      const [date, time] = tx.tx_time.split(" "); // Split date and time
      const [hour, minute] = time.split(":").map(Number); // Extract hour & minute
      const decimalHour = hour + minute / 60; // Convert to decimal hours
      return { x: date, y: decimalHour };
    });

    // console.log(result);
    return result;
}

export function computeWinLoss2(tickets, duration, factor) {
    // Create an object with date keys
    let netReturns = 0;
    const dateMap = {};

    if (duration > 31) {
        for (let i = 0; i <= 12; i++) {
            const key = createDateKey(i, true);
            dateMap[key.key] = {
                label: key.date,
                totalStake: 0,
                totalReturn: 0,
            };
        }
    } else {
        for (let i = 3; i <= duration + 2; i++) {
            const key = createDateKey(i, false);
            dateMap[key.key] = {
                label: key.date,
                totalStake: 0,
                totalReturn: 0,
            };
        }
    }
    console.log(dateMap);

    tickets.forEach(ticket => {
        // Extract date portion from stakeTime (assuming "YYYY-MM-DD HH:MM:SS" format)
        const date = duration > 31 ? ticket.stakeTime.substring(0, 7) : ticket.stakeTime.substring(0, 10);

        // Initialize the date entry if needed
        if (!dateMap[date]) {
            dateMap[date] = {
                label: ticket.stakeTime,
                totalStake: 0,
                totalReturn: 0,
            };
        }

        const stake = Number(ticket.wager) * factor;
        dateMap[date].totalStake += stake;
        netReturns -= stake;

        // If the ticket is a win, compute its return (example calculation)
        if (ticket.filter !== 'Loss' && tickets.status != "open") {
            const productOfOdds = ticket.matches.reduce(
                (acc, match) => {
                    if (match.winningSelection === "" || match.winningSelection === "NotResulted" || match.winningSelection != match.userSelection) {
                        return acc;
                    }
                    return acc * Number(match.odd)
                },
                1
            );
            dateMap[date].totalReturn += stake * productOfOdds;
            netReturns += stake * productOfOdds;
        }
    });

    // Convert to an array of objects sorted by date
    const result = Object.keys(dateMap)
        .sort((a, b) => new Date(a) - new Date(b))
        .map(date => ({
            date,
            label: dateMap[date].label,
            net: dateMap[date].totalReturn - dateMap[date].totalStake,
            totalStake: dateMap[date].totalStake,
            totalReturn: dateMap[date].totalReturn,
        }))

    // console.log(netReturns, result);

    return ({
        netReturns: netReturns,
        dateMap: result
    })

}


