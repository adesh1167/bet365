import { useEffect, useRef, useState } from "react";
import LoadingSpinner from "./loadingSpinner";
import Ticket from "./ticket";
import { useApp } from "../contexts/appContext";
import SettledTicket from "./settledTicket";
import { useLocation } from "react-router-dom";

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

    const filteredTickets = loadedTickets.tickets.filter(ticket => {
        if(buttons[selected].value === 'All') return true;
        return ticket.status === buttons[selected].value || ticket.filter === buttons[selected].value;
    })

    const [highlight, setHighlight] = useState({
        left: 0,
        width: 0,
        visible: false
    })

    const ref = useRef(null);

    useEffect(()=>{
        setTimeout(()=>setLoaded(true), 1000 + Math.random() * 1000);
        console.log("Ref: ", ref.current);
        if(!ref.current) {
            return;
        }
        setHighlight({
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
                                            <SettledTicket key={`${ticket.id}-${index}-${ticket.filter}-${ticket.status}-${ticket.wager}`} ticket={ticket} filter={buttons[selected].value}/>
                                        )}
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
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div className="frm-2">
                                                <div
                                                    className="frm-6"
                                                    style={{
                                                        "--fm-mg-padding-wide": "0 20px 30px 0",
                                                        "--fm-m-padding-narrow": "15px 0 15px 0",
                                                        "--fm-m-padding-wide": "0 20px",
                                                        "--fm-m-padding-narrow": "0 10px 10px"
                                                    }}
                                                >
                                                    <div className="frm-46 frm-69">
                                                        <div className="frm-7">
                                                            <div className="frm-d frm-f">
                                                                <div className="frm-65">Settings</div>
                                                                <div className="frm-19">
                                                                    <div className="frm-a6">
                                                                        <div>
                                                                            <div>
                                                                                <div className="frm-75" data-open="false">
                                                                                    Language
                                                                                    <div className="frm-19">
                                                                                        <div className="frm-d2 frm-0a">
                                                                                            <img src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%225%22%20viewBox%3D%220%200%2012%207%22%3E%3Cpath%20class%3D%22fm-SVGComponent_Chevron%22%20fill%3D%22%23b5b5b5%22%20fill-rule%3D%22evenodd%22%20d%3D%22M12%20.784L11.243%200%206%205.431.757%200%200%20.784l5.243%205.432L6%207l.757-.784z%22%2F%3E%3C%2Fsvg%3E" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="frm-d frm-f">
                                                                <div className="frm-65">Scores &amp; Results</div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Live Scores</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Results</div>
                                                                </div>
                                                            </div>
                                                            <div className="frm-d frm-f">
                                                                <div className="frm-65">Promotions</div>
                                                                <div className="frm-19">
                                                                    <div className="frm-c">Open Account Offer</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-c">Current Offers</div>
                                                                </div>
                                                            </div>
                                                            <div className="frm-d frm-f">
                                                                <div className="frm-65">Audio</div>
                                                                <div className="frm-19">
                                                                    <div className="frm-5">Horse Racing</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-5">Greyhounds</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-5">Soccer</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-5">Cricket</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="frm-7">
                                                            <div
                                                                className="frm-d frm-f"
                                                                style={{ "--fm-m-height": "100%" }}
                                                            >
                                                                <div className="frm-65">Form &amp; Stats</div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Soccer Stats</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Sports Stats</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">
                                                                        UK &amp; Irish Racing Archive
                                                                    </div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Horse Search</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Australian Horse Form</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="frm-7">
                                                            <div
                                                                className="frm-d frm-f"
                                                                style={{
                                                                    "--fm-m-height": "100%",
                                                                    "--fm-m-padding-narrow": "0 60px 25px 0"
                                                                }}
                                                            >
                                                                <div className="frm-65">Help</div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Deposits</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Withdrawals</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Contact Us</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">bet365 FAQ</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Terms and Conditions</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Responsible Gambling</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Technical Issues</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Privacy Policy</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Cookie Policy</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Fair Payouts</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Complaints Procedure</div>
                                                                </div>
                                                                <div className="frm-19">
                                                                    <div className="frm-3b">Rules</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="frm-6"
                                                    style={{ "--fm-mg-border-top": "1px solid #545454" }}
                                                >
                                                    <div className="frm-69">
                                                        <div
                                                            className="frm-4 frm-d frm-f"
                                                            style={{ "--fm-m-height": "105px" }}
                                                        >
                                                            <div className="frm-19">
                                                                <img
                                                                    loading="lazy"
                                                                    className=""
                                                                    src="https://bet365.com/sportsbook-static/web/footer/ucl/1.png"
                                                                    height="59px"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="frm-6"
                                                    style={{
                                                        "--fm-mg-padding-narrow": "30px 10px 30px",
                                                        "--fm-mg-padding-wide": "30px 20px 10px",
                                                        "--fm-m-max-width": "800px",
                                                        "--fm-mg-border-top": "1px solid #545454"
                                                    }}
                                                >
                                                    <div className="frm-69">
                                                        <div
                                                            className="frm-d frm-f"
                                                            style={{ "--fm-p-padding-narrow": "0 30px 30px 0" }}
                                                        >
                                                            <div className="frm-19">
                                                                <img
                                                                    loading="lazy"
                                                                    className="frm-3f"
                                                                    src="https://bet365.com/sportsbook-static/web/footer/gt_v2.svg"
                                                                />
                                                            </div>
                                                            <div className="frm-19">
                                                                <img
                                                                    loading="lazy"
                                                                    className="frm-3f"
                                                                    src="https://bet365.com/sportsbook-static/web/footer/internationalbettingintegrity.svg"
                                                                />
                                                            </div>
                                                            <div className="frm-19">
                                                                <img
                                                                    loading="lazy"
                                                                    className="frm-3f"
                                                                    src="https://bet365.com/sportsbook-static/web/footer/gibraltar.svg"
                                                                />
                                                            </div>
                                                            <div className="frm-19">
                                                                <img
                                                                    loading="lazy"
                                                                    className="frm-3f"
                                                                    src="https://bet365.com/sportsbook-static/web/footer/ecogra.svg"
                                                                />
                                                            </div>
                                                            <div className="frm-19">
                                                                <img
                                                                    loading="lazy"
                                                                    className=""
                                                                    src="https://bet365.com/sportsbook-static/web/footer/18.svg"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="frm-6"
                                                    style={{
                                                        "--fm-mg-padding-wide": "0 0 0 20px",
                                                        "--fm-mg-padding-narrow": "0 10px"
                                                    }}
                                                >
                                                    <div className="frm-f2 frm-69">
                                                        <div
                                                            className="frm-d frm-f"
                                                            style={{
                                                                "--fm-p-width-narrow": "100%",
                                                                "--fm-p-line-height": "17px",
                                                                "--fm-p-padding-narrow": "none",
                                                                "--fm-p-padding-wide": "0 0 10px 0"
                                                            }}
                                                        >
                                                            <div className="frm-25 frm-19">
                                                                <img
                                                                    loading="lazy"
                                                                    src="https://bet365.com/sportsbook-static/web/footer/bet365-logo.svg"
                                                                />
                                                            </div>
                                                            <div className="frm-19">
                                                                <span className="frm-17">
                                                                    Registered Office Hillside (Gibraltar Sports) LP
                                                                    (registration number 198), Unit 1.1, First Floor,
                                                                    Waterport Place, 2 Europort Avenue, Gibraltar.
                                                                    Hillside (Gibraltar Sports) LP is licensed by the
                                                                    Government of Gibraltar and regulated by the
                                                                    Gibraltar Gambling Commissioner (RGL number 130).
                                                                </span>
                                                            </div>
                                                            <div className="frm-19" style={{ "--fm-p-margin": "none" }}>
                                                                <span className="frm-17">
                                                                    © 2001-2025 bet365. All rights reserved.
                                                                </span>
                                                            </div>
                                                            <div
                                                                className="frm-19"
                                                                style={{
                                                                    "--fm-p-padding-narrow": "15px 0 25px",
                                                                    "--fm-p-padding-wide": "5px 0 20px",
                                                                    "--fm-p-font-weight": "bold"
                                                                }}
                                                            >
                                                                <div>Server Time 21:35:12 GMT+1</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="frm-6"
                                                    style={{
                                                        "--fm-p-padding-narrow": "0 10px 35px",
                                                        "--fm-p-padding-wide": "0 20px 35px"
                                                    }}
                                                >
                                                    <div className="frm-69">
                                                        <div
                                                            className="frm-d frm-f"
                                                            style={{ "--fm-p-line-height": "17px" }}
                                                        >
                                                            <div
                                                                className="frm-19"
                                                                style={{ "--fm-link-font-weight": "700" }}
                                                            >
                                                                <div>
                                                                    <span>
                                                                        By accessing, continuing to use or navigating
                                                                        throughout this site you accept that we will use
                                                                        certain browser cookies to improve your customer
                                                                        experience with us. bet365 only uses cookies which
                                                                        will improve your experience with us and will not
                                                                        interfere with your privacy. Please refer to our{" "}
                                                                    </span>
                                                                    <span className="frm-eb" data-navigable="true">
                                                                        Cookies Policy
                                                                    </span>
                                                                    <span>
                                                                        {" "}
                                                                        for further information on our use of cookies and
                                                                        how you can disable or manage their use should you
                                                                        wish.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="frm-19">
                                                                <div>
                                                                    <span>
                                                                        This site is protected by reCAPTCHA and the Google{" "}
                                                                    </span>
                                                                    <span className="frm-eb" data-navigable="true">
                                                                        Privacy Policy
                                                                    </span>
                                                                    <span> and </span>
                                                                    <span className="frm-eb" data-navigable="true">
                                                                        Terms of Service
                                                                    </span>
                                                                    <span> apply.</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="frm-6"
                                                    style={{
                                                        "--fm-mg-padding-narrow": "20px 10px 0",
                                                        "--fm-mg-padding-wide": "20px 20px 0",
                                                        "--fm-mg-border-top": "1px solid #545454",
                                                        "--fm-m-width-narrow": "none"
                                                    }}
                                                >
                                                    <div className="frm-5f frm-69">
                                                        <div
                                                            className="frm-d frm-f"
                                                            style={{
                                                                "--fm-p-font-size": "15px",
                                                                "--fm-p-font-family": "FuturaPTWebMedium",
                                                                "--fm-p-padding-narrow": "2px 45px 0 0"
                                                            }}
                                                        >
                                                            <div className="frm-19">
                                                                <div className="frm-3b">Careers</div>
                                                            </div>
                                                            <div className="frm-19">
                                                                <div className="frm-3b">Partners</div>
                                                            </div>
                                                        </div>
                                                        <div className="frm-d frm-f">
                                                            <div
                                                                className="frm-19"
                                                                style={{ "--fm-p-padding-narrow": "0 20px 0 0" }}
                                                            >
                                                                <div className="frm-d2 ">
                                                                    <img src="data:image/svg+xml;utf8,%20%20%20%20%3Csvg%20width%3D%2223px%22%20height%3D%2221px%22%20viewBox%3D%220%200%2023%2021%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cg%20id%3D%22Twitter____Grey%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22fm-SVGComponent_SocialPath%22%20d%3D%22M8.92184578%2C11.5703628%20L9.84377343%2C12.7782455%20L2.03854867%2C21%20L0%2C21%20L8.92184578%2C11.5703628%20Z%20M6.91054895%2C0.0412259771%20L23%2C21%20L16.1191832%2C21%20L0.122030279%2C0.0412259771%20L6.91054895%2C0.0412259771%20Z%20M6.16175193%2C1.50588101%20L3.10921258%2C1.50588101%20L16.8705231%2C19.5353267%20L20.0024647%2C19.5353267%20L6.16175193%2C1.50588101%20Z%20M21.9747746%2C0%20L13.6282087%2C8.79191222%20L12.6976199%2C7.57968133%20L19.869187%2C0%20L21.9747746%2C0%20Z%22%20id%3D%22Shape%22%20fill%3D%22%23999999%22%3E%3C%2Fpath%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E" />
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="frm-19"
                                                                style={{
                                                                    "--fm-p-padding-narrow": "0 10px 0 0",
                                                                    "--fm-p-padding-wide": 0
                                                                }}
                                                            >
                                                                <div className="frm-d2 ">
                                                                    <img src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2221%22%20height%3D%2221%22%20viewBox%3D%220%200%2021%2021%22%3E%0A%20%20%3Cpath%20class%3D%22fm-SVGComponent_SocialPath%22%20fill%3D%22%23A7A7A7%22%20fill-rule%3D%22evenodd%22%20d%3D%22M21%2C10.5641691%20C21%2C4.72973531%2016.2989941%2C0%2010.5%2C0%20C4.70100586%2C0%200%2C4.72973531%200%2C10.5641691%20C0%2C15.8370512%203.83969824%2C20.207481%208.859375%2C21%20L8.859375%2C13.6178742%20L6.19335938%2C13.6178742%20L6.19335938%2C10.5641691%20L8.859375%2C10.5641691%20L8.859375%2C8.23675057%20C8.859375%2C5.5891057%2010.4269512%2C4.12662854%2012.8253809%2C4.12662854%20C13.974167%2C4.12662854%2015.1757812%2C4.33295997%2015.1757812%2C4.33295997%20L15.1757812%2C6.93273595%20L13.8517559%2C6.93273595%20C12.5473975%2C6.93273595%2012.140625%2C7.7470642%2012.140625%2C8.58250015%20L12.140625%2C10.5641691%20L15.0527344%2C10.5641691%20L14.587207%2C13.6178742%20L12.140625%2C13.6178742%20L12.140625%2C21%20C17.1603018%2C20.207481%2021%2C15.8370512%2021%2C10.5641691%22%2F%3E%0A%3C%2Fsvg%3E" />
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyBets;
