import React, { useEffect, useMemo, useRef, useState } from 'react'
import OpenTicket from './openTicket'
import SettledTicket from './settledTicket'
import { useApp } from '../contexts/appContext';
import loadingSvg from '../assets/loading.svg';
import { baseApiUrl, baseURL } from '../data/url';
import getDate from '../functions/getDate';
import { manageTicketDate, ticketDate } from '../functions/formatDate';
import { useNavigate } from 'react-router-dom';
import gameTypes from '../data/gameTypes';


const ManageTicketWrapper = ({ type, ticket, filter, percent = 1, isDeleted, toggleDelete, index }) => {

    const { country, lang, user, setBalance, getTransactions } = useApp();
    const navigate = useNavigate();

    const [loading, setLoading] = useState({
        account: false,
    })

    const [expanded, setExpanded] = useState(false);
    const [hidden, setHidden] = useState(true);
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

    function doAccount() {

        console.log(data);
        // return;

        setLoading(prev => ({ ...prev, account: true }))

        let settlementTime = ticket.matches[ticket.matches.length - 1].matchTime;
        settlementTime = new Date(settlementTime);
        console.log(settlementTime);
        // let addition = 15 + Number((Math.random()*30).toFixed()); // 15 + 60 to compensate for 1 hour timezone difference
        let addition = 105 + 15 + Number((Math.random() * 30).toFixed()); // 105 = match duration
        settlementTime = settlementTime.setMinutes(settlementTime.getMinutes() + addition)
        settlementTime = getDate(settlementTime, '', false, false);
        console.log(settlementTime);

        window.$.ajax({
            url: `${baseApiUrl}/account.php`,
            data: {
                id: ticket.id,
                filter: ticket.filter || 'running',
                status: ticket.status,
                wager: ticket.wager,
                potential_return: data.effectivePotentialReturn / country.factor,
                win_boost: data.effectiveWinBoost / country.factor, //Stripped in api beacause no winboost for bet365
                stake_time: ticket.stakeTime,
                settlement_time: settlementTime,
                user
            },
            type: 'POST',
            dataType: 'JSON',
            success: (res) => {
                alert(res.message)
                if (res.status == 'success') {
                    setBalance(res.data.balance)
                    getTransactions()
                }
            },
            error: (res) => {
                alert('Unable to update transaction. Check internet connection and try again')
                console.log(res)
            },
            complete: () => {
                setLoading(prev => ({ ...prev, account: false }))
            }
        })
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
        }, 150);
    }

    function toggleExpand() {
        if (expanded) {
            doCollapse();
        } else {
            doExpand();
        }
    }

    // const height = useRef(100 + 125 * ticket.matches.length);
    const height = useMemo(() =>
        ticket.matches.reduce((acc, match) => {
            console.log("Acc: ", acc)
            const userSelection = gameTypes({ type: match.gameType, value: match.userSelection, home: match.home, away: match.away }).userSelection
            const userSelectionLength = userSelection.length + ((match.up2 === "true" || match.up2 === true) ? 15 : 0);
            const additions = Math.floor((userSelectionLength * 10) / window.innerWidth);
            // console.log(userSelection, userSelectionLength, window.innerWidth, additions);
            return acc + additions * 20;
        }, (100 + (126 * ticket.matches.length) + (data.winBoost ? 70 : 0) + (ticket.status === "open" ? 35 : 0)))
        , [data.winBoost]);

    return (
        <div className={`ticket-wrapper ${isDeleted ? "deleted" : ""}`}>
            <div className="manage-ticket-header">
                <div className='ticket-date'>{manageTicketDate(ticket.stakeTime, country.timeZone)}</div>
                <div className='ticket-buttons'>
                    <div className="ticket-button" onClick={() => navigate(`/MaB/ET/${index}`, {
                        state: {
                            // ticket,
                            // updateTicket: updateTicket
                        }
                    })}>
                        Edit
                    </div>

                    {loading.account ?
                        <div className="ticket-button"><img src={`${baseURL}/assets/loading.svg`} width="20px" style={{ fill: "red", display: 'inline' }} /></div>
                        :
                        <div className="ticket-button" onClick={() => doAccount()}>
                            Account
                        </div>
                    }
                    {isDeleted ?
                        <div className="ticket-button text-identity-600" onClick={() => toggleDelete(index)}>
                            Restore
                        </div>
                        :
                        <div className="ticket-button text-error-600" onClick={() => toggleDelete(index)}>
                            Delete
                        </div>
                    }
                </div>

            </div>
            {type === "open" ?
                <OpenTicket
                    data={data}
                    ticket={ticket}
                    filter={filter}
                    percent={percent}
                    height={height}
                    hidden={hidden}
                    expanded={expanded}
                    toggleExpand={toggleExpand}
                // isDeleted={isDeleted}
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
                // isDeleted={isDeleted}
                />
            }
        </div>
    )
}

export default ManageTicketWrapper;
