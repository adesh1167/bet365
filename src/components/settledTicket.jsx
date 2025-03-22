import React, { useEffect, useRef, useState } from 'react'
import formatNumber from '../functions/formatNumber';
import { useApp } from '../contexts/appContext';

const SettledTicket = ({ ticket, data, filter, height, hidden, expanded, toggleExpand, percent = 0.9, isDeleted }) => {

    const { country, lang } = useApp();

    // console.log(ticket);

    return (
        <div
            className={`myb-SettledBetItem ${ticket.filter === "Win" ? "myb-SettledBetItem_HasWin" : (ticket.filter === "Loss" ? "myb-SettledBetItem_HasLost" : "")} ${expanded ? "myb-SettledBetItem_Open" : "myb-SettledBetItem_Collapsed"}`}
            style={{opacity: isDeleted ? "0.5" : "1", transition: "0.1s opacity linear" }}
        >
            <div className="myb-SettledBetItemHeader " onClick={toggleExpand}>
                <div className="myb-SettledBetItemHeader_HeaderTextContainer ">
                    <div className="myb-SettledBetItemHeader_Title ">
                        <div className="myb-SettledBetItemHeader_Text ">
                            {country.currency}{formatNumber(data.wager, country.hasComma, country.lang)} {lang[`${ticket.matches.length}Fold`]}
                        </div>
                    </div>
                    <div className="myb-SettledBetItemHeader_SubHeaderText ">
                        {ticket.matches.map(match => match.userSelection).join(", ")}
                    </div>
                </div>
                {(ticket.filter) && 
                    <div className="myb-SettledBetItem_BetStateContainer "
                        style={{
                            transition: "0.2s opacity linear",
                            opacity: expanded ? 0 : 1
                        }}
                    >
                        <div className="myb-SettledBetItem_BetStateWrapper">
                            {ticket.filter !== "Loss" && <div className="myb-SettledBetItem_BetReturnLabel ">{country.currency}{formatNumber(data.potentialReturn, country.hasComma, country.lang)}</div>}
                            <div className="myb-SettledBetItem_BetStateLabel ">{ticket.filter === "Loss" ? 'Loss' : "Returned"}</div>
                        </div>
                    </div>
                }
            </div>
            <div className={`myb-SettledBetItemInnerView ${hidden ? "Hidden" : ""}`} style={{ maxHeight: expanded ? `${height}px` : "0px" }}>
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
                            <div className="myd-StakeDisplay_StakeWrapper">{country.currency} {formatNumber(data.wager, country.hasComma, country.lang)}</div>
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
                                    <div className={`myb-SettledBetItemFooter_SettledButtonTextWrapper myb-SettledBetItemFooter_SettledButtonTextWrapper${ticket.filter === "Loss" ? "-lost" : ""}`}>
                                        {ticket.filter === "Win" &&
                                            <div className="myb-SettledBetItemFooter_Tick myb-TickWithBorder ">
                                            <div className="myb-TickWithBorder_Tick ">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10.608"
                                                height={9}
                                                viewBox="0 0 10.608 9"
                                              >
                                                <polygon
                                                  fill="#222"
                                                  className="myb-TickWithBorder_TickFill"
                                                  fillRule="evenodd"
                                                  points="0 4.5 1.515 3 4.354 6 9.164 0 10.608 1.5 4.354 9"
                                                />
                                              </svg>
                                            </div>
                                            <div className="myb-TickWithBorder_Border ">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 21 21"
                                                width={21}
                                                height={21}
                                                className="myb-TickWithBorder_BorderSvg"
                                                transform="translate(-1 0)"
                                              >
                                                <circle
                                                  className="myb-TickWithBorder_BorderSvgPositive"
                                                  stroke="#58D7AF"
                                                  strokeWidth={2}
                                                  fill="none"
                                                  cx="10.5"
                                                  cy="10.5"
                                                  r="9.5"
                                                />
                                                <circle
                                                  className="myb-TickWithBorder_BorderSvgNegative"
                                                  stroke="#383838"
                                                  strokeWidth={2}
                                                  strokeDasharray="10,100"
                                                  strokeLinecap="round"
                                                  fill="none"
                                                  cx="10.5"
                                                  cy="10.5"
                                                  r="9.5"
                                                />
                                              </svg>
                                            </div>
                                          </div>
                                          
                                        }
                                        <div className={`myb-SettledBetItemFooter_SettledButtonReturnText myb-SettledBetItemFooter_SettledButtonReturnText${ticket.filter === "Loss" ? "-lost" : ""}`}>
                                            {country.currency}{formatNumber(data.isLost ? 0 : data.effectivePotentialReturn, country.hasComma, country.lang)}
                                        </div>
                                        <div className={`myb-SettledBetItemFooter_SettledButtonText myb-SettledBetItemFooter_SettledButtonText${ticket.filter === "Loss" ? "-lost" : ""}`}>
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

        // console.log(status);
    }

    // console.log(isOpen, home, status, filter);

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
