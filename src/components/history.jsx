import { useRef, useState } from "react";
import Footer from "./footer";
import "./styles/history.css";

const buttons = [
    {
        text: "Settled Bets",
        selected: true,
    },
    {
        text: "Unsettled Bets",
        selected: false,
    },
    {
        text: "Instant Games Bets",
        selected: false,
    },
    {
        text: "Deposits",
        selected: false,
    },
    {
        text: "Withdrawals",
        selected: false,
    },
    {
        text: "Adjustments",
        selected: false,
    },
    {
        text: "Net Deposits",
        selected: false,
    },
    {
        text: "Win/Loss",
        selected: false,
    }
]

const History = () => {

    const [selected, setSelected] = useState(4);
    const [translateY, setTranslateY] = useState(0);
    const [expanded, setExpanded] = useState(true);
    const [hidden, setHidden] = useState(false);

    const selectedPositionY = useRef(-260);

    function closeMenu(){
        setTranslateY(selectedPositionY.current)
        setExpanded(false)
        setTimeout(() => {
            setHidden(true)
        }, 300)
    }
    
    function openMenu(){
        setHidden(false)
        setExpanded(true)
        setTimeout(() => {
            setTranslateY(0);
        }, 50)

    }

    function selectMenu(e, index){
        selectedPositionY.current = -(58 + index * 50);
        setSelected(index);
        closeMenu();
    }

    function toggleMenu(){
        if(expanded){
            closeMenu();
        }else{
            openMenu();
        }
    
    }

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
                                        className={`nm-NavigationMenuModule-footerdisplayed nm-NavigationMenuModule ${expanded ? "nm-NavigationMenuModule-opennarrowview" : ""}` }
                                        style={{visibility: hidden ? "hidden" : "visible"}}
                                    >
                                    
                                        <div className="nm-MenuHeader ">
                                            <div className="nm-MenuHeader_Text " style={{opacity: (translateY === 0 && expanded) ? 1 : 0, transitionDelay: translateY === 0 ? "0.1s" : "0s"}}>History</div>
                                            <div className="nm-BurgerIcon " onClick={toggleMenu}>
                                                <div className="nm-BurgerIcon_Icon " />
                                            </div>
                                        </div>

                                        <div className="nm-MenuItems " style={{transform: `translateY(${translateY}px`}}>
                                            {buttons.map((button, index) => (
                                                <div key={index} className={`nm-MenuItem ${selected === index ? "nm-MenuItem-selected nm-MenuItem-selectedindicator" : ""}`} onClick={(e) => selectMenu(e, index)}>
                                                    <div className="nm-MenuItem_Text ">{button.text}</div>
                                                </div>
                                            ))}
                                            {/* <div className="nm-MenuItem nm-MenuItem-selected nm-MenuItem-selectedindicator ">
                                                <div className="nm-MenuItem_Text ">Settled Bets</div>
                                            </div> */}
                                            {/* <div className="nm-MenuItem nm-MenuItem-selected nm-MenuItem-selectedindicator ">
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
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="wc-PageView_ContentContainer ">
                                    <div>
                                        <div className="nh-NavigationHeaderModule ">
                                            <div className="nh-NavigationHeaderModule_Title " style={{}}>
                                                {buttons[selected].text}
                                            </div>
                                            <div className="nh-BurgerIcon " onClick={toggleMenu}>
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
