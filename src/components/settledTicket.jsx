import React, { useEffect, useRef, useState } from 'react'
import formatNumber from '../functions/formatNumber';
import { useApp } from '../contexts/appContext';

const SettledTicket = ({ ticket, filter, percent = 0.9 }) => {

    const { country, lang } = useApp();

    const [expanded, setExpanded] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [data, setData] = useState({});

    function calculate() {
        const temp = {};

        temp.stake = ticket.stake;
        temp.totalOdds = 1;
        temp.totalEffectiveOdds = 1;
        temp.effectiveMatchesCount = 0;
        temp.boostMatches = 0;
        temp.effectiveBoostMatches = 0;
        temp.wager = ticket.wager;

        temp.isLost = false;
        temp.isOpen = ticket.status === 'open';

        try {
            let mode = 'settled';
            ticket.matches.forEach(match => {
                temp.totalOdds *= match.odd;

                if (match.winningSelection == '') { }
                else if (match.winningSelection == 'NotResulted') { }
                else if (match.winningSelection != match.userSelection) temp.isLost = true;
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
            console.log("Error. Possible single match detected");
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
        }, 150);
    }

    function toggleExpand() {
        if (expanded) {
            doCollapse();
        } else {
            doExpand();
        }
    }

    const height = useRef(100 + 125 * ticket.matches.length);

    console.log(ticket);

    return (
        <div className={`myb-SettledBetItem ${ticket.filter === "Win" ? "myb-SettledBetItem_HasWin" : (ticket.filter === "Loss" ? "myb-SettledBetItem_HasLost" : "")} ${expanded ? "myb-SettledBetItem_Open" : "myb-SettledBetItem_Collapsed"}`}>
            <div className="myb-SettledBetItemHeader " onClick={toggleExpand}>
                <div className="myb-SettledBetItemHeader_HeaderTextContainer ">
                    <div className="myb-SettledBetItemHeader_Title ">
                        <div className="myb-SettledBetItemHeader_Text ">
                            {country.currency}{data.wager} {lang[`${ticket.matches.length}Fold`]}
                        </div>
                    </div>
                    <div className="myb-SettledBetItemHeader_SubHeaderText ">
                        {ticket.matches[0]?.home} v {ticket.matches[0]?.away}
                    </div>
                </div>
                {ticket.filter && <div className="myb-SettledBetItem_BetStateContainer ">
                    <div className="myb-SettledBetItem_BetStateWrapper">
                        <div className="myb-SettledBetItem_BetReturnLabel Hidden " />
                        <div className="myb-SettledBetItem_BetStateLabel ">{ticket.filter}</div>
                    </div>
                </div>}
            </div>
            <div className={`myb-SettledBetItemInnerView ${hidden ? "Hidden" : ""}`} style={{ maxHeight: expanded ? `${height.current}px` : "0px" }}>
                <div className="myb-SettledBetItemInnerView_ParticipantContainer myb-SettledBetParticipantRenderer ">

                    {ticket.matches.map((match, index) =>
                        <Match {...match} key={`${filter}-${index}`} isOpen={data.isOpen}/>
                    )}

                </div>
                <div className="myb-SettledBetItemInnerView_BadgeContainer ">
                    <div>
                        <div />
                    </div>
                </div>
                <div>
                    <div className="myb-SettledBetItemFooter_BetInformation ">
                        <div className="myb-SettledBetItemFooter_StakeInformationWrapper myd-StakeDisplay ">
                            <div className="myd-StakeDisplay_Title">Stake</div>
                            <div className="myd-StakeDisplay_StakeWrapper">{country.currency} {data.wager}</div>
                        </div>
                        <div className="myb-SettledBetItemFooter_BetInformationWrapper ">
                            <div className="myb-SettledBetItemFooter_BetInformationLabel ">
                                Return
                            </div>
                            <div className="myb-SettledBetItemFooter_BetInfoContainer ">
                                <div className="myb-SettledBetItemFooter_ReturnTextWrapper ">
                                    <span className="myb-SettledBetItemFooter_TextCurrency ">{country.currency}</span>
                                    <span className="myb-SettledBetItemFooter_BetInformationText ">
                                        {formatNumber(data.potentialReturn, country.hasComma, country.lang)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="myb-SettledBetItemFooter_SettledButtonBase ">
                            <div className="myb-SettledBetItemFooter_SettledButtonWrapper ">
                                <div className="myb-SettledBetItemFooter_SettledButton ">
                                    <div className="myb-SettledBetItemFooter_SettledButtonTextWrapper myb-SettledBetItemFooter_SettledButtonTextWrapper-lost ">
                                        <div className="myb-SettledBetItemFooter_SettledButtonReturnText myb-SettledBetItemFooter_SettledButtonReturnText-lost ">
                                            {country.currency}{formatNumber(data.isLost ? 0 : data.effectivePotentialReturn, country.hasComma, country.lang)}
                                        </div>
                                        <div className="myb-SettledBetItemFooter_SettledButtonText myb-SettledBetItemFooter_SettledButtonText-lost ">
                                            Returned
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

const Match = ({ odd, winningSelection, userSelection, home, away, gameType, league, newMatchTime, status, isOpen, score, hasEdit }) => {

    const {country} = useApp();

    let isWon;
    let isCancelled;
    let winningSelectionText;
    let oddText;
    let filter;
    let color;

    if (!isOpen) {
        isWon = winningSelection == userSelection;
        isCancelled = winningSelection == 'NotResulted';
        winningSelectionText = isCancelled ? 'NotResulted' : winningSelection;
        oddText = isCancelled ? 'NotResulted' : Number(odd).toFixed(2);
        color = isCancelled ? 'black-color' : winningSelection == '' ? 'black-color' : (winningSelection == userSelection) ? 'win-color' : 'loss-color';
        filter = isCancelled ? "torun" : winningSelection == '' ? "torun" : (winningSelection == userSelection) ? "won" : "lost";

    } else {
        isWon = winningSelection == userSelection;
        isCancelled = winningSelection == 'NotResulted';
        winningSelectionText = isCancelled ? 'NotResulted' : winningSelection;
        oddText = isCancelled ? 'NotResulted' : Number(odd).toFixed(2);
        color = status == 'finished' ? 'win-color' : 'black-color';
        filter = status == 'finished' ? "won" : "torun";

        console.log(status);
    }

    console.log(isOpen, home, status, filter);

    return (
        <div className="myb-SettledBetParticipant myb-BetParticipant ">
            <div className="myb-BetParticipant_TopContainer ">
                <div className={`myb-WinLossIndicator myb-WinLossIndicator-${filter}`}/>
                <div className="myb-BetParticipant_LeftContainer ">
                    <div className="myb-BetParticipant_HeaderTitle ">
                        <div className="myb-BetParticipant_HeaderText ">
                            <span className="myb-BetParticipant_ParticipantSpan ">
                                {userSelection}{" "}
                            </span>
                            <div className="myb-BetParticipant_HeaderOdds ">{formatNumber(odd)}</div>
                        </div>
                        <div className="myb-BetParticipant_HeaderOddsContainer myb-BetParticipant_HeaderOddsContainer-nonboost " />
                        <div className="myb-HalfAndHalfPill myb-HalfAndHalfPill_Status-2 ">
                            <div className="myb-HalfAndHalfPill_TextStatus myb-HalfAndHalfPill_TextStatus-2 ">
                                <div className="myb-HalfAndHalfPill_TextStatusLHS myb-HalfAndHalfPill_TextStatusLHS-2 " />
                                <div className="myb-HalfAndHalfPill_Slash" />
                                <div className="myb-HalfAndHalfPill_TextStatusRHS myb-HalfAndHalfPill_TextStatusRHS-2 " />
                            </div>
                        </div>
                    </div>
                    <div className="myb-BetParticipant_BetBoost myb-SettledBetParticipant_MarketDescriptionContainer ">
                        <div className="myb-BetParticipant_MarketDescription ">
                            {gameType}
                        </div>
                    </div>
                </div>
                <div className="myb-BetParticipant_RightContainer ">
                    <div className="mbo-OfferBadgesContainer_Rhs ">
                        <div />
                    </div>
                </div>
            </div>
            <div className="myb-BetParticipant_FixtureContainer ">
                <div className="myb-BetParticipant_FixtureDescription myb-BetParticipant_FixtureDescription-hasTeamNames myb-SettledBetParticipant_FixtureDescription ">
                    <div className="myb-BetParticipant_TeamKits myb-TeamKits-1 " />
                    <div className="myb-BetParticipant_TeamContainer ">
                        <div className="myb-BetParticipant_Team1Container ">
                            <div className="myb-BetParticipant_Team1Name ">{home}</div>
                            <div className="myb-BetParticipant_FixtureStartTime " />
                        </div>
                        <div className="myb-BetParticipant_Team2Container ">
                            <div className="myb-BetParticipant_Team2Name ">{away}</div>
                            <div className="myb-BetParticipant_FixtureStartTime2 " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettledTicket;
