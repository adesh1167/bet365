import { useEffect, useRef, useState } from "react";
import { useApp } from "../contexts/appContext";
import formatNumber from "../functions/formatNumber";
import { ticketDate } from "../functions/formatDate";

import "./styles/betSummary.css";

const BetSummary = ({ ticket, percent = 1, }) => {

    console.log("Ticket: ", ticket);

    const { country, lang } = useApp();

    const [data, setData] = useState({});

    const status = useRef({
        win: 0,
        loss: 0,
        pending: 0,
        cashout: 0,
        cancelled: 0,
    })

    function calculate() {
        const temp = {};

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

    return (
        <div className="h-BetSummary ">
            <div className="h-BetSummary_Container ">
                <div className="h-BetSummary_DateAndTime ">
                    {ticketDate(ticket.stakeTime, country.timeZone)}
                </div>
            </div>
            <div className="h-BetSummary_SelectionContainer ">
                <div>
                    {ticket.matches.map((match, index) => (
                        <Match key={index} match={match} isOpen={ticket.status === "open"} />
                    ))}
                </div>
                <div className="h-StakeDescription ">
                    <div className="h-StakeDescription_Text ">
                        <div>{lang[`${ticket.matches.length}Fold`]}, 1 bet * {country.currency}{formatNumber(data.wager, country.hasComma, country.lang)} </div>
                    </div>
                </div>
                <div className="h-StakeReturnSection ">
                    <div className="h-StakeReturnSection_StakeContainer ">
                        <div>Stake {country.currency}{formatNumber(data.wager, country.hasComma, country.lang)} </div>
                    </div>
                    <div className="h-StakeReturnSection_ReturnContainer ">
                        {ticket.status === "open" ?
                            <div className="h-StakeReturnSection_ReturnText ">
                                Cash Out {country.currency}{formatNumber(data.isLost ? 0 : data.cashout, country.hasComma, country.lang)}
                            </div>
                            :
                            <div className="h-StakeReturnSection_ReturnText ">
                                Return {country.currency}{formatNumber(data.isLost ? 0 : data.effectivePotentialReturn, country.hasComma, country.lang)}
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="h-BetSummary_BetDetails">
                <div className="h-BetSummary_BetDetailsContainer">
                    <div className="h-BetSummary_BetDetailsText ">
                        Bet Details
                    </div>
                </div>
            </div>
        </div>
    )
}

const Match = ({ match, isOpen }) => {

    const hasOfferBadges = useRef((isOpen && match.hasEarlyPayout && match.status === "finished") || (!isOpen && match.hasEarlyPayout));
    
    return (
        <div className={`h-BetSelection ${hasOfferBadges.current ? "h-BetSelection-hasofferbadges" : ""}`}>
            <div className="h-BetSelection_Container ">
                <div className="h-BetSelection_InfoContainer ">
                    <div className="h-BetSelection_NameContainer ">
                        <div className="h-BetSelection_Name ">{match.userSelection}</div>
                    </div>
                </div>
                <div className="h-BetSelection_Odds ">
                    <span>{match.odd}</span>
                </div>
            </div>
            <div className="h-BetSelection_SubOnBadgeContainer " />
            {hasOfferBadges.current &&
                <div className="h-BetSelection_OfferBadgesContainer hob-OfferBadgesContainer hob-OfferBadgesContainer-betitemmode ">
                    <div className="hob-OfferBadgesContainer_BadgeContainer ">
                        <div className="hob-OfferBadgesContainer_BadgeContainerInner ">
                            <div className="hob-OfferBadgeSettled ">
                                <div className="hob-OfferBadgeSettled_Text hob-OfferBadgeSettled_Badge-with-settledtext ">
                                    Early Payout
                                </div>
                                <div className="hob-OfferBadgeSettled_SettledText ">Received</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default BetSummary;