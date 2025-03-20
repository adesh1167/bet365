import { useEffect, useMemo, useRef, useState } from "react";
import LoadingSpinner from "./loadingSpinner";
// import Ticket from "./ticket";
import { useApp } from "../contexts/appContext";
import SettledTicket from "./settledTicket";
import { useLocation } from "react-router-dom";
import TicketWrapper from "./ticketWrapper";
import Footer from "./footer";
import { isGreaterThan24hours } from "../functions/formatDate";

const buttons = [
    {
        name: 'Cash Out',
        value: 'Cash Out',
        selected: true,
        animate: true,
        emptyText: "Bets that can be fully or partially cashed out appear here"
    },
    {
        name: 'Live Now',
        value: 'Running',
        selected: false,
        animate: false,
        emptyText: "Bets that are In-Play will appear here"
    },
    {
        name: 'Unsettled',
        value: 'open',
        selected: false,
        animate: false,
        emptyText: "Bets that are unsettled will appear here"
    },
    {
        name: 'Settled',
        value: 'settled',
        selected: false,
        animate: false,
        emptyText: "Bets that are settled will appear here for 24 hours",
        emptyTextLink: "View older settled bets in your Account History"
    },
    {
        name: 'All',
        value: 'All',
        selected: false,
        animate: false,
        emptyText: "Bets appear here for 24 hours",
        emptyTextLink: "Older bets can be viewed in your Account History"
    }
]


const MyBets = () => {

    const location = useLocation();

    const {loadedTickets, setLoadedTickets} = useApp();

    const [selected, setSelected] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const filteredTickets = useMemo(()=>loadedTickets.tickets.filter(ticket => {
        if(ticket.status === 'settled'){
            const finsishedMatches = ticket.matches.filter(match => match.winningSelection);
            const lastMatch = finsishedMatches[finsishedMatches.length - 1];
            console.log("Last Match: ", lastMatch)
            if(isGreaterThan24hours(lastMatch.matchTime)) return false;
        }
        if(buttons[selected].value === 'All') return true;
        if(buttons[selected].value === 'Cash Out' && ticket.status === 'open') return true;
        return ticket.status === buttons[selected].value || ticket.filter === buttons[selected].value;
    }), [selected])

    const [highlight, setHighlight] = useState({
        left: 0,
        width: 0,
        visible: false
    })

    const ref = useRef(null);

    useEffect(()=>{
        setTimeout(()=>setLoaded(true), 1000 + Math.random() * 1000);
        // console.log("Ref: ", ref.current);
        if(!ref.current) {
            return;
        }
        if(selected === 0) setHighlight({
            left: ref.current.offsetLeft,
            width: ref.current.offsetWidth,
            visible: true
        })


    }, [ref.current, loaded])

    // window.$.ajax({
    //     url: "https://www.bet365.com/pullpodapi/gethomepagepods?lid=1&zid=3&pd=%23HO%23COL1%23&cid=141&cstid=2&tcstid=2&crid=54&cgid=1&ctid=141",
    //     type: "GET",
    //     // dataType: "json",
    //     success: function (data) {
    //         console.log(data);
    //     },
    //     error: function (error) {
    //         console.log(error);
    //     }
    // })

    function selectTab(e, index){
        setSelected(index)
        setHighlight({
            left: e.target.offsetLeft,
            width: e.target.offsetWidth,
            visible: true
        })
    }

    // console.log("Loaded: ", loaded);

    if(!loaded) return <LoadingSpinner/>
    
    return (
        <div className="wc-MyBetsPageResponsive_Container">
            <div className="myb-MyBetsModule ">
                <div className="myb-MyBets myb-MyBets_Breakpoints-1 ">
                    <div className="myb-MyBetsHeader ">
                        <div className="myb-MyBetsHeader_Scroller ">
                            {buttons.map((button, index) =>
                                <div
                                    key={button.name}
                                    data-content={button.name}
                                    className={`myb-HeaderButton ${selected === index ? 'myb-HeaderButton-selected myb-HeaderButton-animate' : ''}`}
                                    onClick={e => selectTab(e, index)}
                                    ref={index === 0 ? ref : null}
                                >
                                    {button.name}
                                </div>
                            
                            )}
                            <div className="myb-NavBarSlider " style={{ left: `${highlight.left}px`, width: `${highlight.width}px` }} />
                        </div>
                        {/*____*/}
                    </div>
                    <div className="myb-MyBetsScroller ">
                        <div className="myb-MyBetsScroller_Content ">
                            <div
                                className="myb-BetItemsContainer "
                                style={{ minHeight: "calc(-135px + 100vh)" }}
                            >
                                {filteredTickets.length ? 
                                    <div className="myb-BetItemsContainer_Container " >
                                        {filteredTickets.map((ticket, index) =>
                                            <TicketWrapper type={ticket.status} key={`${ticket.id}-${index}-${ticket.filter}-${ticket.status}-${ticket.wager}`} ticket={ticket} filter={buttons[selected].value}/>
                                        )}
                                        {buttons[selected].value === "settled" &&
                                            <div className="myb-ViewOlderBets ">
                                                <div className="myb-ViewOlderBets_Label ">
                                                    View older settled bets in your Account History
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    :
                                    <div className="myb-BetItemsContainer_EmptyMessage ">
                                        <div className="myb-BetItemsContainer_NoBetsMessageLineOne ">
                                            There are currently no bets to display
                                        </div>
                                        <div className="myb-BetItemsContainer_NoBetsMessageLineTwo ">
                                            {buttons[selected].emptyText}
                                        </div>
                                        {buttons[selected].emptyTextLink &&<div className="myb-MembersLink">
                                            {buttons[selected].emptyTextLink}
                                        </div>}
                                    </div>
                                }
                            </div>




                            <div>
                                <div className="wc-MyBetsPageResponsive_OffersContainer ">
                                    <div>
                                        <div className="pl-PodLoaderModule " />
                                    </div>
                                </div>
                            </div>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyBets;
