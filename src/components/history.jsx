import Footer from "./footer";
import "./styles/history.css";

const History = () => {
    return (
        <div className="wcl-CommonElementStyle_NavContentContainer">
            <div className="mim-MembersIframeModule ">
                <div className="g5-Application g5-Application-backgroundlight widthState0 viewState0 " style={{width: "100%", minHeight: "570px"}}>
                    <div className="wc-WebConsoleModule ">
                        <div className="wc-WebConsoleModule_Content wc-WebConsoleModule_Content-footer-displayed ">
                            <div>{/**/}</div>
                            <div className="wc-PageView g5-Application-lightmode " style={{}}>
                                <div className="wc-PageView_NavigationMenu ">
                                    <div
                                        className="nm-NavigationMenuModule-footerdisplayed nm-NavigationMenuModule Hidden "
                                        style={{}}
                                    >
                                        <div className="nm-MenuHeader ">
                                            <div className="nm-MenuHeader_Text ">History</div>
                                            <div className="nm-BurgerIcon ">
                                                <div className="nm-BurgerIcon_Icon " />
                                            </div>
                                        </div>
                                        <div className="nm-MenuItems " style={{}}>
                                            <div className="nm-MenuItem nm-MenuItem-selected nm-MenuItem-selectedindicator ">
                                                <div className="nm-MenuItem_Text ">Settled Bets</div>
                                            </div>
                                            <div className="nm-MenuItem ">
                                                <div className="nm-MenuItem_Text ">Unsettled Bets</div>
                                            </div>
                                            <div className="nm-MenuItem ">
                                                <div className="nm-MenuItem_Text ">Instant Games Bets</div>
                                            </div>
                                            <div className="nm-MenuItem ">
                                                <div className="nm-MenuItem_Text ">Deposits</div>
                                            </div>
                                            <div className="nm-MenuItem ">
                                                <div className="nm-MenuItem_Text ">Withdrawals</div>
                                            </div>
                                            <div className="nm-MenuItem ">
                                                <div className="nm-MenuItem_Text ">Adjustments</div>
                                            </div>
                                            <div className="nm-MenuItem ">
                                                <div className="nm-MenuItem_Text ">Net Deposits</div>
                                            </div>
                                            <div className="nm-MenuItem ">
                                                <div className="nm-MenuItem_Text ">Win/Loss</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wc-PageView_ContentContainer ">
                                    <div>
                                        <div className="nh-NavigationHeaderModule ">
                                            <div className="nh-NavigationHeaderModule_Title " style={{}}>
                                                Settled Bets
                                            </div>
                                            <div className="nh-BurgerIcon ">
                                                <div className="nh-BurgerIcon_Icon " />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="hsc-HistorySearchCriteriaModule ">
                                            <div className="hsc-HistoryRangeSelector ">
                                                <div className="hsc-HistoryRangeSelector_Scroller hsc-HistoryRangeScroller ">
                                                    <div className="hsc-HistoryRangeScroller_Wrapper">
                                                        <div
                                                            role="tablist"
                                                            className="hsc-HistoryRangeSelector_SubMenu scr-HorizontalScroller_ScrollContent "
                                                        >
                                                            <div className="hsc-HistoryRangeMenuItem hsc-HistoryRangeMenuItem-selected ">
                                                                Sports
                                                            </div>
                                                            <div className="hsc-HistoryRangeMenuItem ">Lotto</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hsc-HistoryRangeSelector_SearchContainer ">
                                                    <div className="hsc-HistoryRangeSelector_ButtonContainer ">
                                                        <div className="hsc-HistoryRangeButton ">Last 24 Hours</div>
                                                        <div className="hsc-HistoryRangeButton ">Last 48 Hours</div>
                                                        <div className="hsc-HistoryRangeButton ">Date Range</div>
                                                    </div>
                                                    <div className="hsc-HistoryRangeSelector_ShowHistory ">
                                                        Show History
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
                <Footer/>
            </div>
        </div>

    )
}

export default History;
