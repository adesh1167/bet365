import { useRef, useState } from "react";
import Footer from "./footer";
import "./styles/history.css";
import { MemoryRouter as Router, Route, Routes, Link } from "react-router-dom";
import SettledHistory from "./settledHistory";

const buttons = [
    {
        text: "Settled Bets",
        value: "settled",
    },
    {
        text: "Unsettled Bets",
        value: "unsettled",
    },
    {
        text: "Instant Games Bets",
        value: "instantGames",
    },
    {
        text: "Deposits",
        value: "deposits",
    },
    {
        text: "Withdrawals",
        value: "withdrawals",
    },
    {
        text: "Adjustments",
        value: "adjustments",
    },
    {
        text: "Net Deposits",
        value: "netDeposits",
    },
    {
        text: "Win/Loss",
        value: "winLoss",
    }
]

const RangeButtons = [
    {
        text: "Last 24 Hours",
    },
    {
        text: "Last 48 Hours",
    },
    {
        text: "Date Range",
        hasCalender: true,
    },
]

const History = () => {

    const [selected, setSelected] = useState(0);
    const [translateY, setTranslateY] = useState(-58);
    const [expanded, setExpanded] = useState(false);
    const [hidden, setHidden] = useState(true);

    const [route, setRoute] = useState();

    const selectedPositionY = useRef(-58);

    function closeMenu() {
        setTranslateY(selectedPositionY.current)
        setExpanded(false)
        setTimeout(() => {
            setHidden(true)
        }, 300)
    }

    function openMenu() {
        setHidden(false)
        setExpanded(true)
        setTimeout(() => {
            setTranslateY(0);
        }, 50)

    }

    function selectMenu(e, index) {
        selectedPositionY.current = -(58 + index * 50);
        setSelected(index);
        closeMenu();
    }

    function toggleMenu() {
        if (expanded) {
            closeMenu();
        } else {
            openMenu();
        }

    }

    return (
        <div className="wcl-CommonElementStyle_NavContentContainer">
            <div className="mim-MembersIframeModule ">
                <div className="g5-Application g5-Application-backgroundlight widthState0 viewState0 " style={{ width: "100%", minHeight: "570px", position: "relative" }}>
                    <div className="wc-WebConsoleModule ">
                        <div className="wc-WebConsoleModule_Content wc-WebConsoleModule_Content-footer-displayed ">
                            <div>{/**/}</div>
                            <div className="wc-PageView g5-Application-lightmode " style={{}}>
                                <div className="wc-PageView_NavigationMenu " style={{position: "absolute"}}>
                                    <div
                                        className={`nm-NavigationMenuModule-footerdisplayed nm-NavigationMenuModule ${expanded ? "nm-NavigationMenuModule-opennarrowview" : ""}`}
                                        style={{ visibility: hidden ? "hidden" : "visible" }}
                                    >

                                        <div className="nm-MenuHeader ">
                                            <div className="nm-MenuHeader_Text " style={{ opacity: (translateY === 0 && expanded) ? 1 : 0, transitionDelay: translateY === 0 ? "0.1s" : "0s" }}>History</div>
                                            <div className="nm-BurgerIcon " onClick={toggleMenu}>
                                                <div className="nm-BurgerIcon_Icon " />
                                            </div>
                                        </div>

                                        <div className="nm-MenuItems " style={{ transform: `translateY(${translateY}px` }}>
                                            {buttons.map((button, index) => (
                                                <div key={index} className={`nm-MenuItem ${selected === index ? "nm-MenuItem-selected nm-MenuItem-selectedindicator" : ""}`} onClick={(e) => selectMenu(e, index)}>
                                                    <div className="nm-MenuItem_Text ">{button.text}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                {route === "settled" ?
                                    <SettledHistory toggleMenu={toggleMenu} hidden={hidden} goBack={()=>setRoute(null)}/>
                                    :
                                    route === "unsettled" ?
                                        <div>Unsettled</div>
                                        :
                                        route === "instantGames" ?
                                            <div>Instant Games</div>
                                            :
                                            route === "deposits" ?
                                                <div>Deposits</div>
                                                :
                                                route === "withdrawals" ?
                                                    <div>Withdrawals</div>
                                                    :
                                                    route === "adjustments" ?
                                                        <div>Adjustments</div>
                                                        :
                                                        route === "netDeposits" ?
                                                            <div>Net Deposits</div>
                                                            :
                                                            route === "winLoss" ?
                                                                <div>Win/Loss</div>
                                                                :
                                                                <SelectRange title={buttons[selected]} toggleMenu={toggleMenu}  setRoute={setRoute}/>
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>

    )
}

const SelectRange = ({title, toggleMenu, setRoute}) => {

    const [selected, setSelected] = useState(null);
    
    return (
        <div className="wc-PageView_ContentContainer " style={{position: "absolute"}}>
            <div>
                <div className="nh-NavigationHeaderModule ">
                    <div className="nh-NavigationHeaderModule_Title " style={{}}>
                        {title.text}
                    </div>
                    <div className="nh-BurgerIcon " onClick={toggleMenu}>
                        <div className="nh-BurgerIcon_Icon " />
                    </div>
                </div>
            </div>
            <div>
                <div className="hsc-HistorySearchCriteriaModule ">
                    <div className={`hsc-HistoryRangeSelector ${selected !== null ? "hsc-HistoryRangeSelector-active" : ""}`}>
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
                                {RangeButtons.map((button, index) =>
                                    <div
                                        key={index}
                                        className={`hsc-HistoryRangeButton ${selected === index ? "hsc-HistoryRangeButton-selected" : ""}`}
                                        onClick={() => setSelected(index)}
                                    >
                                        {button.text}
                                    </div>
                                )}
                            </div>
                            {RangeButtons[selected]?.hasCalender &&
                                <div className="hsc-HistoryRangeSelector_DateRangeSelector ">
                                    <div className="hl-DateRangeSelector ">
                                        <div className="hl-DatePicker ">
                                            <div className="hl-DatePicker_Header ">
                                                <div className="hl-DatePicker_BoundingLabel ">From:</div>
                                                <div className="hl-DatePicker_DateLabel ">10/03/2025</div>
                                                <div className="hl-DatePicker_CalendarIcon " />
                                            </div>
                                            <div className="hl-CalendarMonth ">
                                                <div className="hl-CalendarMonth_MonthYearContainer ">
                                                    <div className="hl-CalendarMonth_LeftArrow " />
                                                    <div>March 2025</div>
                                                    <div className="hl-CalendarMonth_RightArrow " />
                                                </div>
                                                <div className="hl-CalendarMonth_CalendarContainer ">
                                                    <table className="hl-CalendarMonth_MonthsContainer ">
                                                        <tbody>
                                                            <tr className="hl-CalendarMonth_DayNamesContainer ">
                                                                <th className="hl-CalendarMonth_DayName ">Mon</th>
                                                                <th className="hl-CalendarMonth_DayName ">Tue</th>
                                                                <th className="hl-CalendarMonth_DayName ">Wed</th>
                                                                <th className="hl-CalendarMonth_DayName ">Thu</th>
                                                                <th className="hl-CalendarMonth_DayName ">Fri</th>
                                                                <th className="hl-CalendarMonth_DayName ">Sat</th>
                                                                <th className="hl-CalendarMonth_DayName ">Sun</th>
                                                            </tr>
                                                        </tbody>
                                                        <tbody className="hl-CalendarMonth_CalendarMonthContainer ">
                                                            <tr className="hl-CalendarMonth_Row ">
                                                                <td className="hl-CalendarDay hl-CalendarDay-outsidemonth ">
                                                                    24
                                                                </td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-outsidemonth ">
                                                                    25
                                                                </td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-outsidemonth ">
                                                                    26
                                                                </td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-outsidemonth ">
                                                                    27
                                                                </td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-outsidemonth ">
                                                                    28
                                                                </td>
                                                                <td className="hl-CalendarDay ">1</td>
                                                                <td className="hl-CalendarDay ">2</td>
                                                            </tr>
                                                            <tr className="hl-CalendarMonth_Row ">
                                                                <td className="hl-CalendarDay ">3</td>
                                                                <td className="hl-CalendarDay ">4</td>
                                                                <td className="hl-CalendarDay ">5</td>
                                                                <td className="hl-CalendarDay ">6</td>
                                                                <td className="hl-CalendarDay ">7</td>
                                                                <td className="hl-CalendarDay ">8</td>
                                                                <td className="hl-CalendarDay ">9</td>
                                                            </tr>
                                                            <tr className="hl-CalendarMonth_Row ">
                                                                <td className="hl-CalendarDay hl-CalendarDay-selected ">10</td>
                                                                <td className="hl-CalendarDay ">11</td>
                                                                <td className="hl-CalendarDay ">12</td>
                                                                <td className="hl-CalendarDay ">13</td>
                                                                <td className="hl-CalendarDay ">14</td>
                                                                <td className="hl-CalendarDay ">15</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">16</td>
                                                            </tr>
                                                            <tr className="hl-CalendarMonth_Row ">
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">17</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">18</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">19</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">20</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">21</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">22</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">23</td>
                                                            </tr>
                                                            <tr className="hl-CalendarMonth_Row ">
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">24</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">25</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">26</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">27</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">28</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">29</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">30</td>
                                                            </tr>
                                                            <tr className="hl-CalendarMonth_Row ">
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">31</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">1</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">2</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">3</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">4</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">5</td>
                                                                <td className="hl-CalendarDay hl-CalendarDay-invalid ">6</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hl-DatePicker ">
                                            <div className="hl-DatePicker_Header ">
                                                <div className="hl-DatePicker_BoundingLabel ">To:</div>
                                                <div className="hl-DatePicker_DateLabel ">15/03/2025</div>
                                                <div className="hl-DatePicker_CalendarIcon " />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hsc-HistoryRangeSelector_RangeLabel ">
                                        Please note: the maximum date range is 6 months.
                                    </div>
                                </div>
                            }

                            <div className="hsc-HistoryRangeSelector_ShowHistory " onClick={()=>setRoute(title.value)}>
                                Show History
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History;
