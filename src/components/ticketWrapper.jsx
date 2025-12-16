import React, { useEffect, useMemo, useRef, useState } from 'react'
import OpenTicket from './openTicket'
import SettledTicket from './settledTicket'
import { useApp } from '../contexts/appContext';
import gameTypes from '../data/gameTypes';

const TicketWrapper = ({ type, ticket, index, filter, percent = 1 }) => {

    const { country, lang } = useApp();

    const [expanded, setExpanded] = useState(index > 1 ? false : true);
    const [hidden, setHidden] = useState(index > 1 ? true : false);
    const [data, setData] = useState({});

    const status = useRef({
        win: 0,
        loss: 0,
        pending: 0,
        cashout: 0,
        cancelled: 0,
    })

    function calculate() {
        // const temp = {};

        const temp = { ...ticket };

        temp.wager = ticket.wager * country.factor;
        temp.totalOdds = 1;
        temp.totalEffectiveOdds = 1;
        temp.effectiveMatchesCount = 0;
        temp.boostMatches = 0;
        temp.effectiveBoostMatches = 0;

        temp.isLost = false;
        temp.isOpen = ticket.status === 'open';

        if (temp.isOpen) {
            try {
                ticket.matches.forEach(match => {
                    temp.totalOdds *= match.odd;

                    if (match.status == 'finished') {
                        status.current.win++;
                        temp.totalEffectiveOdds *= match.odd;
                        temp.effectiveMatchesCount++
                        if (Number(match.odd) >= 1.2) {
                            temp.effectiveBoostMatches++;
                        }
                    } else {
                        status.current.pending++;
                    }

                    if (Number(match.odd) >= 1.2) {
                        temp.boostMatches++;
                    }
                });
            } catch (error) {
                console.error("Error. Possible single match detected");
            }

        } else {

            try {
                let mode = 'settled';
                ticket.matches.forEach(match => {
                    temp.totalOdds *= match.odd;

                    if (match.winningSelection == '') { status.current.cashout++ }
                    else if (match.winningSelection == 'NotResulted') { status.current.cancelled++ }
                    else if (match.winningSelection != match.userSelection) { temp.isLost = true; status.current.loss++ }
                    else {
                        temp.totalEffectiveOdds *= match.odd;
                        temp.effectiveMatchesCount++;
                        if (Number(match.odd) >= 1.2) {
                            temp.effectiveBoostMatches++;
                        }
                    }

                    if (Number(match.odd) >= 1.2) {
                        temp.boostMatches++;
                    }
                });
            } catch (error) {
                console.error("Error. Possible single match detected");
            }
        }

        temp.boostFactor = temp.boostMatches > 40 ? 7 : country.boostFactors[temp.boostMatches];
        const effectiveBoostFactor = temp.effectiveBoostMatches > 40 ? 7 : country.boostFactors[temp.effectiveBoostMatches];

        temp.potentialReturn = temp.wager * temp.totalOdds;
        temp.effectivePotentialReturn = temp.wager * temp.totalEffectiveOdds;
        temp.winBoost = temp.potentialReturn * temp.boostFactor;
        temp.effectiveWinBoost = temp.effectivePotentialReturn * effectiveBoostFactor;

        temp.tax = 0;
        if (country.tax) temp.tax = temp.potentialReturn * country.tax.factor;

        temp.bonus = 0;
        if (country.bonus) temp.bonus = temp.potentialReturn * country.bonus.factor;

        temp.cashout = percent * temp.wager * temp.totalEffectiveOdds + temp.effectiveWinBoost;

        temp.totalReturn = temp.potentialReturn + temp.winBoost - temp.tax + temp.bonus;
        temp.totalEffectiveReturn = temp.effectivePotentialReturn + temp.effectiveWinBoost - temp.tax + temp.bonus;

        temp.cashoutPercent = temp.cashout / temp.totalReturn * 100;

        if (temp.isLost) temp.actualReturn = 0
        else temp.actualReturn = temp.totalEffectiveReturn

        setData(temp);
    }

    useEffect(() => {
        calculate();
    }, [])

    function doExpand() {
        setHidden(false);
        setTimeout(() => {
            setExpanded(true);
        }, 10);
    }

    function doCollapse() {
        setExpanded(false);
        setTimeout(() => {
            setHidden(true);
        }, 200);
    }

    function toggleExpand() {
        if (expanded) {
            doCollapse();
        } else {
            doExpand();
        }
    }

    // const height = useRef(100 + 125 * ticket.matches.length);
    const height = useMemo(()=>
        ticket.matches.reduce((acc, match) => {
            const userSelection = gameTypes[match.gameType] ? gameTypes[match.gameType].callBack(match.userSelection, match.home, match.away) : match.userSelection
            const userSelectionLength = userSelection.length + ((match.up2 === "true" || match.up2 === true) ? 15 : 0);
            const additions = Math.floor((userSelectionLength * 10) / window.innerWidth);
            // console.log(userSelection, userSelectionLength, window.innerWidth, additions);
            return acc + additions * 20;
        }, (100 + (126 * ticket.matches.length) + (data.winBoost ? 70 : 0) + (ticket.status === "open" ? 35 : 0)))
    , [data.winBoost]);

    return (
        type === "open" ?
            <OpenTicket
                data={data}
                ticket={ticket}
                filter={filter}
                percent={percent}
                height={height}
                hidden={hidden}
                expanded={expanded}
                toggleExpand={toggleExpand}
            />
            :
            <SettledTicket
                data={data}
                ticket={ticket}
                filter={filter}
                percent={percent}
                height={height}
                hidden={hidden}
                expanded={expanded}
                toggleExpand={toggleExpand}
            />
    )
}

export default TicketWrapper
