import React, { useRef } from 'react'
import formatNumber from '../functions/formatNumber';
import { matchDate } from '../functions/formatDate';
import { useApp } from '../contexts/appContext';
import gameTypes from '../data/gameTypes';
import GenerateRandomJersey from '../functions/generateRandomJersey';

const OpenTicket = ({ ticket, data, filter, height, hidden, expanded, toggleExpand, percent = 1, isDeleted }) => {

    const { country, lang } = useApp();
    console.log("expanded: ", expanded, data.wager, height);
    return (
        <div
            className={`myb-OpenBetItem ${expanded ? "myb-OpenBetItem_Open" : "myb-OpenBetItem_Collapsed"}`}
            style={{ visibility: data.wager ? "visible" : "hidden", opacity: isDeleted ? "0.5" : "1", transition: "0.1s opacity linear" }}
        >
            <div className="myb-OpenBetItem_Header myb-OpenBetItem_HeaderTitle " onClick={toggleExpand}>
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
                                            // color: "color(display-p3 .157 1 .733)"
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
            <div className={`myb-OpenBetItemInnerView ${data.winBoost ? "myb-OpenBetItemInnerView-hasoffers" : ""} ${hidden ? "Hidden" : ""}`} style={{ maxHeight: expanded ? `${height}px` : "0px" }}>
                <div>
                    <div className="mrl-407c46">
                        <div className="mrl-c7d622">
                            <button className="mrl-02a2c8" type="button">
                                <div className="mrl-422ef1">
                                    <svg
                                        width={15}
                                        height={15}
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <path
                                            fill="currentColor"
                                            transform="translate(2.1 0)"
                                            d="M5.4000001 0L8.5 3.0999999L5.4000001 6.1999998L5.4000001 4.0500002C3.4946177 4.0500002 1.95 5.5946178 1.95 7.5C1.95 7.829679 1.9962423 8.1485577 2.0825944 8.4505033L0.59441435 9.9654865C0.21445605 9.2263823 0 8.3882351 0 7.5C0 4.5176625 2.4176624 2.0999999 5.4000001 2.0999999L5.4000001 0Z"
                                            fillRule="evenodd"
                                        />
                                        <path
                                            fill="currentColor"
                                            transform="translate(4.4 5.0592)"
                                            d="M7.9184489 0.00049410923C8.2903805 0.73343068 8.5 1.5626335 8.5 2.4407957C8.5 5.4227996 6.0828786 7.8402548 3.101001 7.8407955L3.0999999 9.9407959L0 6.8407955L3.0999999 3.7407956L3.0999999 5.8899999L3.2892919 5.8856907C5.1066408 5.7874203 6.5500002 4.2826653 6.5500002 2.4407957C6.5500002 2.1217635 6.5066962 1.8128453 6.4256458 1.5195986L7.9184489 0.00049410923Z"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <p className="mrl-c4c69b">Reuse Selections</p>
                            </button>
                            <button className="mrl-02a2c8" type="button">
                                <div className="mrl-422ef1">
                                    <svg
                                        width={12}
                                        height={16}
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <path
                                            fill="currentColor"
                                            transform="translate(0 5.11612)"
                                            d="M3.5 1.5L2.5 1.5C1.9477153 1.5 1.5 1.9477153 1.5 2.5L1.5 7.5C1.5 8.0522852 1.9477153 8.5 2.5 8.5L9.5 8.5C10.052285 8.5 10.5 8.0522852 10.5 7.5L10.5 2.5C10.5 1.9477153 10.052285 1.5 9.5 1.5L8.5 1.5L8.5 0L10 0C11.104569 0 12 0.89543051 12 2L12 8C12 9.1045694 11.104569 10 10 10L2 10C0.89543051 10 0 9.1045694 0 8L0 2C0 0.89543051 0.89543051 2.220446e-16 2 0L3.5 0L3.5 1.5Z"
                                            fillRule="evenodd"
                                        />
                                        <path
                                            fill="currentColor"
                                            transform="translate(2.96967 0.323226)"
                                            d="M2.6767766 0.14644662C2.8720388 -0.048815537 3.1886213 -0.048815537 3.3838835 0.14644662L5.9053302 2.6678932C6.1124368 2.875 6.1124368 3.2107863 5.9053302 3.4178932C5.6982231 3.625 5.3624368 3.625 5.1553302 3.4178932L3.53 1.7920001L3.5303302 8.2928934C3.5303302 8.5690355 3.3064725 8.7928934 3.0303302 8.7928934C2.7541878 8.7928934 2.5303302 8.5690355 2.5303302 8.2928934L2.53 1.7920001L0.90533006 3.4178932C0.72123516 3.6019881 0.43546745 3.6224432 0.22877856 3.4792583L0.15533009 3.4178932C-0.051776696 3.2107863 -0.051776696 2.875 0.15533009 2.6678932L2.6767766 0.14644662Z"
                                            fillRule="evenodd"
                                        />
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="0.5"
                                            strokeMiterlimit={10}
                                            transform="translate(2.96967 0.323226)"
                                            d="M2.6767766 0.14644662C2.8720388 -0.048815537 3.1886213 -0.048815537 3.3838835 0.14644662L5.9053302 2.6678932C6.1124368 2.875 6.1124368 3.2107863 5.9053302 3.4178932C5.6982231 3.625 5.3624368 3.625 5.1553302 3.4178932L3.53 1.7920001L3.5303302 8.2928934C3.5303302 8.5690355 3.3064725 8.7928934 3.0303302 8.7928934C2.7541878 8.7928934 2.5303302 8.5690355 2.5303302 8.2928934L2.53 1.7920001L0.90533006 3.4178932C0.72123516 3.6019881 0.43546745 3.6224432 0.22877856 3.4792583L0.15533009 3.4178932C-0.051776696 3.2107863 -0.051776696 2.875 0.15533009 2.6678932L2.6767766 0.14644662Z"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <p className="mrl-c4c69b">Share</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="myb-OpenBetItemInnerView_Details ">
                    <div className="myb-OpenBetItemInnerView_ParticipantContainer ">
                        {ticket.matches.map((match, index) =>
                            <Match key={match.home + index} match={match} />
                        )}
                    </div>
                </div>
                {data.winBoost &&
                    <div className="myb-OpenBetItemInnerView_BadgeContainer ">
                        <div className="myb-OpenBetItemInnerView_BadgeContainerInner ">
                            <div className="mbo-OfferBadgesContainer ">
                                <div className="mbo-OfferBadgesContainer_BadgeContainer ">
                                    <div className="mbo-OfferBadgesContainer_BadgeContainerInner ">
                                        <div className="mbo-OfferBadgeStandard ">
                                            <div className="mbo-OfferBadgeStandard_BonusText ">+{formatNumber(data.boostFactor * 100, false, country.lang)}%</div>
                                            <div className="mbo-OfferBadgeStandard_Badge mbo-OfferBadgeStandard_Badge-with-bonus ">
                                                {" "}
                                                Acca Boost
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mbo-OfferBadgesContainer_Disclaimer ">
                                    applied when all matches have finished
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="myb-OpenBetItemInnerView_BetInformationContainer myb-OpenBetItemInnerView_BetInformationContainer-hasCloseButton ">
                    <div className="myb-OpenBetItemInnerView_BetInformation ">
                        <div className="myb-OpenBetItemInnerView_StakeInformationWrapper myb-StakeDisplay ">
                            <div className="myd-StakeDisplay_Title">Stake</div>
                            <div className="myd-StakeDisplay_StakeWrapper">{country.currency}{formatNumber(data.wager, country.hasComma, country.lang)}</div>
                        </div>
                        <div className="myb-OpenBetItemInnerView_BetInformationWrapper ">
                            <div className="myb-OpenBetItemInnerView_BetInformationLabel ">
                                Total To Return
                            </div>
                            <div className="myb-OpenBetItemInnerView_BetInfoContainer ">
                                <div className="myb-OpenBetItemInnerView_BonusAndReturnContainer myb-OpenBetItemInnerView_BonusAndReturnContainer-offer ">
                                    <div className="myb-OpenBetItemInnerView_ReturnTextWrapper ">
                                        <div className="myb-OpenBetItemInnerView_BetInformationText ">
                                            {country.currency}{formatNumber(data.potentialReturn, country.hasComma, country.lang)}
                                        </div>
                                    </div>
                                    <div className="myb-OpenBetItemInnerView_BonusTextWrapper ">
                                        <div className="myb-OpenBetItemInnerView_BonusText ">
                                            Incl {country.currency}{formatNumber(data.winBoost, true, country.lang)} Boost
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
                                            <div className="myb-CloseBetButtonBase_Return ">{country.currency}{formatNumber(data.cashout, country.hasComma, country.lang)}</div>
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

const Match = ({ match }) => {

    const jersey = useRef({
        home: GenerateRandomJersey(`${match.home}home${match.league}`),
        away: GenerateRandomJersey(`${match.away}away${match.league}`)
    })

    let isWon;
    let isCancelled;
    let winningSelectionText;
    let oddText;
    let filter;
    let color;
    let isFinished;


    isWon = match.winningSelection === match.userSelection;
    isCancelled = match.winningSelection === 'NotResulted';
    winningSelectionText = match.isCancelled ? 'NotResulted' : match.winningSelection;
    oddText = isCancelled ? 'NotResulted' : Number(match.odd).toFixed(2);
    color = match.status === 'finished' ? 'win-color' : 'black-color';
    filter = match.status === 'finished' ? "won" : "torun";

    return (
        <div className="myb-OpenBetParticipant myb-BetParticipant ">
            <div className="myb-BetParticipant_TopContainer ">
                <div className={`myb-WinLossIndicator myb-WinLossIndicator-${filter}`} />
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
                    {(match.up2 === "true" || match.up2 === true) && <div className="mbo-OfferBadgesContainer_Rhs mbo-OfferBadgesContainer mbo-OfferBadgesContainer-betitemmode ">
                        <div className="mbo-OfferBadgesContainer_BadgeContainer ">
                            <div className="mbo-OfferBadgesContainer_BadgeContainerInner ">
                                <div className="mbo-OfferBadgeStandard ">
                                    <div className="mbo-OfferBadgeStandard_Badge "> Early Payout</div>
                                </div>
                            </div>
                        </div>
                    </div>}

                </div>
            </div>
            <div className="myb-BetParticipant_FixtureContainer ">
                <div className="myb-BetParticipant_FixtureDescription myb-BetParticipant_FixtureDescription-hasTeamNames myb-BetParticipant_FixtureDescription-linkactive ">
                    <div className="myb-BetParticipant_TeamKits myb-TeamKits-1 " />
                    <div className="myb-BetParticipant_TeamContainer ">
                        <div className="myb-BetParticipant_Team1Container ">
                            <div
                                className={`myb-BetParticipant_TeamKit tk-TeamKitImage-autowidth pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitauto tk-TeamKitImage tk-TeamKit tk-TeamKit-16 tk-TeamKit-16-${jersey.current.home.type} `}
                                dangerouslySetInnerHTML={{ __html: jersey.current.home.logo }}
                            />
                            <div className="myb-BetParticipant_Team1Name ">
                                {match.home}
                            </div>
                            <div className="myb-BetParticipant_FixtureStartTime ">
                                {" "}
                                {matchDate(match.matchTime).date}
                            </div>
                        </div>
                        <div className="myb-BetParticipant_Team2Container ">
                            <div
                                className={`myb-BetParticipant_TeamKit tk-TeamKitImage-autowidth pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitauto tk-TeamKitImage tk-TeamKit tk-TeamKit-16 tk-TeamKit-16-${jersey.current.away.type} `}
                                dangerouslySetInnerHTML={{ __html: jersey.current.away.logo }}
                            />
                            <div className="myb-BetParticipant_Team2Name ">
                                {match.away}
                            </div>
                            <div className="myb-BetParticipant_FixtureStartTime2 ">
                                {matchDate(match.matchTime).time}
                            </div>
                        </div>
                    </div>
                    {match.score &&
                        <div className="myb-OpenBetScores myb-OpenBetScores_Soccer ">
                            <div className="myb-OpenBetScores_Container ">
                                <div className="myb-OpenBetScores_TeamContainer ">
                                    <div className="myb-OpenBetScores_Team1Container ">
                                        <div className="myb-OpenBetScores_Team1Details " />
                                    </div>
                                    <div className="myb-OpenBetScores_Team2Container ">
                                        <div className="myb-OpenBetScores_Team2Details " />
                                    </div>
                                </div>
                                <div className="myb-OpenBetScores_TeamScoreContainer ">
                                    <div className="myb-OpenBetScores_Team1ScoreContainer ">
                                        <div className="myb-OpenBetScores_Team1Score ">{match.score.split("-")[0]}</div>
                                    </div>
                                    <div className="myb-OpenBetScores_Team2ScoreContainer ">
                                        <div className="myb-OpenBetScores_Team2Score ">{match.score.split("-")[1]}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default OpenTicket
