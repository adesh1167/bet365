import React from 'react'
import formatNumber from '../functions/formatNumber';
import { matchDate } from '../functions/formatDate';
import { useApp } from '../contexts/appContext';
import gameTypes from '../data/gameTypes';

const OpenTicket = ({ticket, data, filter, height, hidden, expanded, toggleExpand, percent = 1, isDeleted}) => {

    const { country, lang } = useApp();
    console.log("expanded: ", expanded, data.wager, height);
    return (
        <div
            className={`myb-OpenBetItem ${expanded ? "myb-OpenBetItem_Open" : "myb-OpenBetItem_Collapsed"}`}
            style={{visibility: data.wager ? "visible" : "hidden", opacity: isDeleted ? "0.5" : "1", transition: "0.1s opacity linear" }}
        >
            <div className="myb-OpenBetItem_Header myb-OpenBetItem_HeaderTitle "  onClick={toggleExpand}>
                <div className="myb-OpenBetItem_HeaderTextContainer ">
                    <div className="myb-OpenBetItem_StakeDesc ">
                        {country.currency}{formatNumber(data.wager, country.hasComma, country.lang)} {lang[`${ticket.matches.length}Fold`]}
                    </div>
                    <div className="myb-OpenBetItem_HeaderText Hidden " />
                    <div className="myb-OpenBetItem_SubHeaderText ">
                        {ticket.matches.map(match => match.userSelection).join(", ")}
{/*                        
                        Fenerbahce 3-2, Lazio &amp; No, Man Utd v Real Sociedad, Over 2.5, Roma,
                        Lyon, Draw - Athletic Bilbao, Eintracht Frankfurt, Draw, Roma to win by
                        1 goal */}
                    </div>
                </div>
                <div className="myb-OpenBetItem_HeaderControlsWrapper " />
                <div className="myb-CloseBetButtonBase myb-CloseBetButtonSummaryBar " style={{
                    animation: "none",
                    opacity: expanded ? 0 : 1,
                    transition: "0.2s opacity linear"
                }}>
                    <div className="myb-CloseBetButtonBase_Wrapper ">
                        <div className="myb-CloseBetButtonBase_WrapperInner myb-CloseBetButtonBase_WrapperInner-cashout ">
                            <span className="myb-CloseBetButtonBase_Button myb-CloseBetButtonBase-cashout ">
                                <div className="myb-CloseBetButtonBase_Centre ">
                                    <div className="myb-CloseBetButtonBase_TextReturnWrapper">
                                        <div className="myb-CloseBetButtonBase_Text ">Cash Out</div>
                                        <div className="myb-CloseBetButtonBase_Return " style={{
                                            color: "color(display-p3 .157 1 .733)"
                                        }}>{formatNumber(data.cashout)}</div>
                                    </div>
                                </div>
                                <div className="myb-CloseBetButtonBase_Spacer Hidden " />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Hidden myb-MessageSubHeader ">
                Edit Bet is no longer available
            </div>
            <div className={`myb-OpenBetItemInnerView ${hidden ? "Hidden" : ""}`} style={{ maxHeight: expanded ? `${height}px` : "0px" }}>
                <div className="myb-OpenBetItemInnerView_Details ">
                    <div className="myb-OpenBetItemInnerView_ParticipantContainer ">
                        {ticket.matches.map((match, index) =>
                            <Match match={match}/>
                        )}
                    </div>
                </div>
                <div className="myb-OpenBetItemInnerView_BadgeContainer ">
                    <div className="myb-OpenBetItemInnerView_BadgeContainerInner ">
                        <div>
                            <div />
                        </div>
                    </div>
                </div>
                <div className="myb-OpenBetItemInnerView_BetInformationContainer myb-OpenBetItemInnerView_BetInformationContainer-hasCloseButton ">
                    <div className="myb-OpenBetItemInnerView_BetInformation ">
                        <div className="myb-OpenBetItemInnerView_StakeInformationWrapper myd-StakeDisplay ">
                            <div className="myd-StakeDisplay_Title">Stake</div>
                            <div className="myd-StakeDisplay_StakeWrapper">{country.currency}{formatNumber(data.wager, country.hasComma, country.lang)}</div>
                        </div>
                        <div className="myb-OpenBetItemInnerView_BetInformationWrapper ">
                            <div className="myb-OpenBetItemInnerView_BetInformationLabel ">
                                To Return
                            </div>
                            <div className="myb-OpenBetItemInnerView_BetInfoContainer ">
                                <div className="myb-OpenBetItemInnerView_BonusAndReturnContainer ">
                                    <div className="myb-OpenBetItemInnerView_ReturnTextWrapper ">
                                        <div className="myb-OpenBetItemInnerView_BetInformationText ">
                                            {country.currency}{formatNumber(data.potentialReturn, country.hasComma, country.lang)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="myb-CloseBetButtonBase myb-CloseBetButtonWithSlider myb-CloseBetButtonWithSlider_NoSlider ">
                        <div className="myb-CloseBetButtonBase_Wrapper ">
                            <div className="myb-CloseBetButtonBase_WrapperInner myb-CloseBetButtonBase_WrapperInner-cashout ">
                                <span className="myb-CloseBetButtonBase_Button myb-CloseBetButtonBase-cashout ">
                                    <div className="myb-CloseBetButtonBase_Centre ">
                                        <div className="myb-CloseBetButtonBase_TextReturnWrapper">
                                            <div className="myb-CloseBetButtonBase_Text ">Cash Out</div>
                                            <div className="myb-CloseBetButtonBase_Return ">{country.currency} {formatNumber(data.cashout, country.hasComma, country.lang)}</div>
                                        </div>
                                    </div>
                                    <div className="myb-CloseBetButtonBase_Spacer Hidden " />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const Match = ({match}) => {
    return(
        <div className="myb-OpenBetParticipant myb-BetParticipant ">
            <div className="myb-BetParticipant_TopContainer ">
                <div className="myb-WinLossIndicator myb-WinLossIndicator-torun " />
                <div className="myb-BetParticipant_LeftContainer ">
                    <div className="myb-BetParticipant_HeaderTitle ">
                        <div className="myb-BetParticipant_HeaderText ">
                            <span className="myb-BetParticipant_ParticipantSpan ">
                                {gameTypes[match.gameType] ? gameTypes[match.gameType].callBack(match.userSelection, match.home, match.away) : match.userSelection}
                            </span>
                            <div className="myb-BetParticipant_HeaderOdds ">{formatNumber(match.odd)}</div>
                        </div>
                        <div className="myb-BetParticipant_HeaderOddsContainer myb-BetParticipant_HeaderOddsContainer-nonboost " />
                        <div className="myb-HalfAndHalfPill myb-HalfAndHalfPill_Status-0 ">
                            <div className="myb-HalfAndHalfPill_TextStatus myb-HalfAndHalfPill_TextStatus-0 ">
                                <div className="myb-HalfAndHalfPill_TextStatusLHS myb-HalfAndHalfPill_TextStatusLHS-0 " />
                                <div className="myb-HalfAndHalfPill_Slash" />
                                <div className="myb-HalfAndHalfPill_TextStatusRHS myb-HalfAndHalfPill_TextStatusRHS-0 " />
                            </div>
                        </div>
                    </div>
                    <div className="myb-BetParticipant_BetBoost ">
                        <div className="myb-BetParticipant_MarketDescription ">
                           {gameTypes[match.gameType]?.text || match.gameType}
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
                <div className="myb-BetParticipant_FixtureDescription myb-BetParticipant_FixtureDescription-hasTeamNames myb-BetParticipant_FixtureDescription-linkactive ">
                    <div className="myb-BetParticipant_TeamKits myb-TeamKits-1 " />
                    <div className="myb-BetParticipant_TeamContainer ">
                        <div className="myb-BetParticipant_Team1Container ">
                            <div className="myb-BetParticipant_TeamKit myb-BetParticipant_1 tk-TeamKitImage ">
                                <img
                                    src="https://content001.bet365.com/SoccerSilks/Rangers Home 24-25.svg"
                                    draggable="false"
                                    className="tk-TeamKitImage_SVG "
                                />
                            </div>
                            <div className="myb-BetParticipant_Team1Name ">
                                {match.home}
                            </div>
                            <div className="myb-BetParticipant_FixtureStartTime ">
                                {" "}
                                {matchDate(match.matchTime).date}
                            </div>
                        </div>
                        <div className="myb-BetParticipant_Team2Container ">
                            <div className="myb-BetParticipant_TeamKit myb-BetParticipant_1 tk-TeamKitImage ">
                                <img
                                    src="https://content001.bet365.com/SoccerSilks/Fenerbache Home 24-25.svg"
                                    draggable="false"
                                    className="tk-TeamKitImage_SVG "
                                />
                            </div>
                            <div className="myb-BetParticipant_Team2Name ">
                                {match.away}
                            </div>
                            <div className="myb-BetParticipant_FixtureStartTime2 ">
                                {matchDate(match.matchTime).time}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenTicket
