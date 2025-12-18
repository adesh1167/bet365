import React, { useEffect, useRef, useState } from 'react'
import formatNumber from '../functions/formatNumber';
import { useApp } from '../contexts/appContext';
import gameTypes from '../data/gameTypes';
import GenerateRandomJersey from '../functions/generateRandomJersey';

const SettledTicket = ({ ticket, data, filter, height, hidden, expanded, toggleExpand, percent = 0.9, isDeleted }) => {

    const { country, lang } = useApp();

    // console.log(ticket);

    return (
        <div
            className={`myb-SettledBetItem ${ticket.filter === "Win" ? "myb-SettledBetItem_HasWin" : (ticket.filter === "Loss" ? "myb-SettledBetItem_HasLost" : "")} ${expanded ? "myb-SettledBetItem_Open" : "myb-SettledBetItem_Collapsed"}`}
            style={{ visibility: data.wager ? "visible" : "hidden", opacity: isDeleted ? "0.5" : "1", transition: "0.1s opacity linear" }}
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
                            <div className="myb-SettledBetItem_BetStateLabel ">{ticket.filter === "Loss" ? 'Loss' : ticket.filter === "Cash Out" ? "Cashed Out" : "Returned"}</div>
                        </div>
                    </div>
                }
            </div>
            <div className={`myb-SettledBetItemInnerView ${hidden ? "Hidden" : ""}`} style={{ maxHeight: expanded ? `${height}px` : "0px" }}>
                <div>
                    <div className="mrl-407c46">
                        <div className="mrl-c7d622">
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

                <div className="myb-SettledBetItemInnerView_ParticipantContainer myb-SettledBetParticipantRenderer ">

                    {ticket.matches.map((match, index) =>
                        <Match {...match} key={`${filter}-${index}`} isOpen={data.isOpen} />
                    )}

                </div>
                {data.winBoost > 0 && data.filter === "Win" &&
                    <div className="myb-SettledBetItemInnerView_BadgeContainer ">
                        <div className="myb-SettledBetItemInnerView_OfferBadgesContainer mbo-OfferBadgesContainer ">
                            <div className="mbo-OfferBadgesContainer_BadgeContainer ">
                                <div className="mbo-OfferBadgesContainer_BadgeContainerInner ">
                                    <div className="mbo-OfferBadgeSettled mbo-OfferBadgeSettled_HasBonus ">
                                        <div className="mbo-OfferBadgeSettled_BonusText ">+{formatNumber(data.boostFactor * 100, false, country.lang)}%</div>
                                        <div className="mbo-OfferBadgeSettled_Text mbo-OfferBadgeSettled_Badge-with-bonus ">
                                            Acca Boost
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                }
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
                                Total Returns
                            </div>
                            <div className="myb-SettledBetItemFooter_BetInfoContainer ">
                                <div className="myb-SettledBetItemFooter_ReturnTextWrapper ">
                                    <span className="myb-SettledBetItemFooter_TextCurrency ">{country.currency}</span>
                                    <span className="myb-SettledBetItemFooter_BetInformationText ">
                                        {formatNumber(data.potentialReturn, country.hasComma, country.lang)}
                                    </span>
                                </div>
                            </div>
                            <div className="myb-SettledBetItemFooter_BonusTextWrapper ">
                                <div className="myb-SettledBetItemFooter_BonusText ">Incl $0.06 Boost</div>
                            </div>
                        </div>
                        <div className="myb-SettledBetItemFooter_SettledButtonBase ">
                            <div className="myb-SettledBetItemFooter_SettledButtonWrapper ">
                                <div className="myb-SettledBetItemFooter_SettledButton ">
                                    <div className={`myb-SettledBetItemFooter_SettledButtonTextWrapper${ticket.filter === "Loss" ? "-lost" : ""}`}>
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
                                            {ticket.filter === "Cash Out" ? "Cashed Out" : "Returned"}
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

const Match = ({ odd, winningSelection, userSelection, home, away, gameType, league, newMatchTime, status, isOpen, score, hasEdit, up2 }) => {

    const jersey = useRef({
        home: GenerateRandomJersey(`${home}home${league}`),
        away: GenerateRandomJersey(`${away}away${league}`)
    })

    const { country } = useApp();

    let isWon;
    let isCancelled;
    let isPending = false;
    let winningSelectionText;
    let oddText;
    let filter;
    let color;

    if (!isOpen) {
        isWon = winningSelection == userSelection;
        isCancelled = winningSelection == 'NotResulted';
        isPending = status === 'pending';
        winningSelectionText = isCancelled ? 'NotResulted' : winningSelection;
        oddText = isCancelled ? 'NotResulted' : Number(odd).toFixed(2);
        color = isCancelled ? 'black-color' : winningSelection == '' ? 'black-color' : (winningSelection == userSelection) ? 'win-color' : 'loss-color';
        filter = (isCancelled || isPending) ? "torun" : winningSelection == '' ? "cashout" : (winningSelection == userSelection) ? "won" : "lost";

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
                <div className={`myb-WinLossIndicator myb-WinLossIndicator-${filter}`} />
                <div className="myb-BetParticipant_LeftContainer ">
                    <div className="myb-BetParticipant_HeaderTitle ">
                        <div className="myb-BetParticipant_HeaderText ">
                            <span className="myb-BetParticipant_ParticipantSpan ">
                                {gameTypes({type: gameType, value: userSelection, home, away}).userSelection}{" "}
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
                            {gameTypes({type: gameType, value: userSelection, home, away}).gameType}
                        </div>
                    </div>
                </div>
                {((up2 === "true" || up2 === true) && gameType === "1X2") &&
                    <div className="myb-BetParticipant_RightContainer ">
                        <div className="myb-BetParticipant_OfferBadgesContainer mbo-OfferBadgesContainer_Rhs mbo-OfferBadgesContainer mbo-OfferBadgesContainer-betitemmode ">
                            <div className="mbo-OfferBadgesContainer_BadgeContainer ">
                                <div className="mbo-OfferBadgesContainer_BadgeContainerInner ">
                                    <div className="mbo-OfferBadgeSettled mbo-OfferBadgeSettled_EarlyPayout ">
                                        <div className="mbo-OfferBadgeSettled_Text ">Early Payout</div>
                                        <div className="mbo-OfferBadgeSettled_SettledText ">Received</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                }

            </div>
            <div className="myb-BetParticipant_FixtureContainer ">
                <div className="myb-BetParticipant_FixtureDescription myb-BetParticipant_FixtureDescription-hasTeamNames myb-SettledBetParticipant_FixtureDescription ">
                    <div className="myb-BetParticipant_TeamKits myb-TeamKits-1 " />
                    <div className="myb-BetParticipant_TeamContainer ">
                        <div className="myb-BetParticipant_Team1Container ">
                            <div
                                className={`myb-BetParticipant_TeamKit tk-TeamKitImage-autowidth pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitauto tk-TeamKitImage tk-TeamKit tk-TeamKit-16 tk-TeamKit-16-${jersey.current.home.type} `}
                                dangerouslySetInnerHTML={{ __html: jersey.current.home.logo }}
                            />
                            <div className="myb-BetParticipant_Team1Name ">{home}</div>
                            <div className="myb-BetParticipant_FixtureStartTime " />
                        </div>
                        <div className="myb-BetParticipant_Team2Container ">
                            <div
                                className={`myb-BetParticipant_TeamKit tk-TeamKitImage-autowidth pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitauto tk-TeamKitImage tk-TeamKit tk-TeamKit-16 tk-TeamKit-16-${jersey.current.away.type} `}
                                dangerouslySetInnerHTML={{ __html: jersey.current.away.logo }}
                            />
                            <div className="myb-BetParticipant_Team2Name ">{away}</div>
                            <div className="myb-BetParticipant_FixtureStartTime2 " />
                        </div>
                    </div>
                    {(score && score !== "") &&
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
                                        <div className="myb-OpenBetScores_Team1Score ">{score.split("-")[0]}</div>
                                    </div>
                                    <div className="myb-OpenBetScores_Team2ScoreContainer ">
                                        <div className="myb-OpenBetScores_Team2Score ">{score.split("-")[1]}</div>
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

export default SettledTicket;
