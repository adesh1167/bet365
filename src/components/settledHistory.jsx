import React from 'react'

const SettledHistory = ({ toggleMenu, goBack }) => {
    return (
        <div className="wc-PageView_ContentContainer ">
            <div>
                <div className="nh-NavigationHeaderModule ">
                    <div className="nh-NavigationHeaderModule_Title ">Settled Bets</div>
                    <div className="nh-BurgerIcon " onClick={toggleMenu}>
                        <div className="nh-BurgerIcon_Icon " />
                    </div>
                </div>
            </div>
            <div>
                <div className="h-HistoryModule ">
                    <div className="hl-BackButtonWithHistory " onClick={goBack}>Back</div>
                    <div className="h-BetSummariesRenderer ">
                        <div className="hl-SummaryRenderer ">
                            <div className="hl-SummaryRenderer_Title " style={{}}>
                                From 15/03/2025 To 17/03/2025
                            </div>
                            <div className="hl-SummaryRenderer_Container ">
                                <div className="h-BetSummary ">
                                    <div className="h-BetSummary_Container ">
                                        <div className="h-BetSummary_DateAndTime ">
                                            16/03/2025 13:56:06
                                        </div>
                                    </div>
                                    <div className="h-BetSummary_SelectionContainer ">
                                        <div>
                                            <div className="h-BetSelection ">
                                                <div className="h-BetSelection_Container ">
                                                    <div className="h-BetSelection_InfoContainer ">
                                                        <div className="h-BetSelection_NameContainer ">
                                                            <div className="h-BetSelection_Name ">
                                                                Dalian K'un City
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="h-BetSelection_Odds ">
                                                        <span>1.03</span>
                                                    </div>
                                                </div>
                                                <div className="h-BetSelection_SubOnBadgeContainer " />
                                            </div>
                                            <div className="h-BetSelection ">
                                                <div className="h-BetSelection_Container ">
                                                    <div className="h-BetSelection_InfoContainer ">
                                                        <div className="h-BetSelection_NameContainer ">
                                                            <div className="h-BetSelection_Name ">
                                                                Hradec Kralove
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="h-BetSelection_Odds ">
                                                        <span>1.083</span>
                                                    </div>
                                                </div>
                                                <div className="h-BetSelection_SubOnBadgeContainer " />
                                            </div>
                                            <div className="h-BetSelection ">
                                                <div className="h-BetSelection_Container ">
                                                    <div className="h-BetSelection_InfoContainer ">
                                                        <div className="h-BetSelection_NameContainer ">
                                                            <div className="h-BetSelection_Name ">FC Gareji</div>
                                                        </div>
                                                    </div>
                                                    <div className="h-BetSelection_Odds ">
                                                        <span>1.025</span>
                                                    </div>
                                                </div>
                                                <div className="h-BetSelection_SubOnBadgeContainer " />
                                            </div>
                                        </div>
                                        <div className="h-StakeDescription ">
                                            <div className="h-StakeDescription_Text ">
                                                <div>Trebles, 1 bet * $0.20 </div>
                                            </div>
                                        </div>
                                        <div className="h-StakeReturnSection ">
                                            <div className="h-StakeReturnSection_StakeContainer ">
                                                <div>Stake $0.20 </div>
                                            </div>
                                            <div className="h-StakeReturnSection_ReturnContainer ">
                                                <div className="h-StakeReturnSection_ReturnText ">
                                                    Return $0.23{" "}
                                                </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SettledHistory;
