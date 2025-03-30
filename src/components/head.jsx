import { Link, useLocation } from "react-router-dom";
import { useApp } from "../contexts/appContext";
import Profile from "./profile";
import HeadOverlay from "./headOverlay";
import formatDate from "../functions/formatDate";
import formatNumber from "../functions/formatNumber";
import { useEffect, useRef, useState } from "react";
import { countries } from "../data/countries";

const buttons = [
    {
        name: "allsports",
        link: "/AZ"
    },
    {
        name: "inplay",
        link: "/IP"
    },
    {
        name: "mybets",
        link: "/MB"
    },
    {
        name: "Casino",
        link: "/CS"
    }
]

const Head = () => {

    const { lang, setPopup, popup, country, countryCode, setCountryCode, balance, user, loadStage, loadedTickets } = useApp();

    const [openTicketsCount, setOpenTicketsCount] = useState(null);

    useEffect(()=>{
        setOpenTicketsCount(loadedTickets.tickets.filter((ticket)=>ticket.status == 'open').length);
    }, [loadedTickets.tickets])

    const location = useLocation();

    return (
        <div className="wc-WebConsoleModule_Header ">
            <div className={`hm-HeaderModule hm-HeaderModule_ProductClosed ${popup === "profile" ? "hm-MembersMenuModuleContainer_Open" : ""}`}>
                {(popup === 'profile' && user) && <Profile />}
                <div className="hm-ProductHeaderNarrow ">
                    <div className="hm-ProductHeaderNarrow_Container ">
                        <div
                            style={{}}
                            className="hm-ProductHeaderNarrow_ScrollContainer hm-ProductHeaderNarrow_ScrollContainer-touch "
                        >
                            <div className="hm-ProductHeaderNarrow_Link hm-HeaderMenuItem hm-HeaderMenuItem_LinkSelected hm-HeaderMenuItem_LinkSelected-underscore ">
                                <div className="hm-HeaderMenuItem_Link ">{lang["sports"]}</div>
                            </div>
                            <div className="hm-ProductHeaderNarrow_Link hm-HeaderMenuItem ">
                                <div className="hm-HeaderMenuItem_Link ">
                                    {lang["fantasy"]}
                                </div>
                            </div>
                            <div className="hm-ProductHeaderNarrow_Link hm-HeaderMenuItem hm-HeaderMenuItem-casinoselector ">
                                <div className="hm-HeaderMenuItem_Link ">{lang["Casino"]}</div>
                            </div>
                            {/**/}
                            {/**/}
                            {/**/}
                            {/**/}
                            {/**/}
                            <div className="hm-ProductHeaderNarrow_Link hm-HeaderMenuItem ">
                                <div className="hm-HeaderMenuItem_Link ">{lang["extra"]}</div>
                            </div>
                        </div>
                    </div>
                    <div className="hm-ProductHeaderNarrow_RHS ">
                        <div className="hm-ProductHeaderHideButton " />
                    </div>
                </div>
                <div className="hm-MainHeaderNarrow hm-MainHeaderNarrow-width0 ">
                    {/**/}
                    <div className="hm-MainHeaderNarrow_TopRowContainer ">
                        <div className="hm-MainHeaderLHSNarrow ">
                            <div className="hm-MainHeaderLHSNarrow_OffersLabel hm-HeaderMenuItem " >
                                <div className="select-currency">
                                    <select
                                        onChange={e=>setCountryCode(e.target.value)}
                                        value={countryCode}
                                    >
                                        {Object.values(countries).map((option, index) => 
                                            <option key={index} value={index}>{option.name}</option>
                                            )}
                                    </select>
                                </div>
                                <div className="hm-HeaderMenuItem_Link ">{lang["offers"]}</div>
                            </div>
                        </div>
                        <div
                            className="hm-MainHeaderLogoNarrow_Cover "
                            style={{ opacity: 0 }}
                        />
                        <div className="hm-MainHeaderLogoNarrow hm-HeaderMenuItem_LinkSelected hm-HeaderMenuItem_LinkSelected-underscore ">
                            <div className="hm-MainHeaderLogoNarrow_Bet365LogoImage hm-MainHeaderLogoNarrow-width-0 " />
                        </div>
                        {user ? 
                            <div className="hm-MainHeaderRHSLoggedInNarrow ">
                                <div className={`hm-MainHeaderMembersNarrow ${location.pathname.startsWith('/ME') ? "hm-HeaderMenuItem_LinkSelected hm-HeaderMenuItem_LinkSelected-underscore" : ""}`}>
                                <div onClick={() => setPopup("profile")} className="hm-MainHeaderMembersNarrow_MembersWrapper ">
                                    <div className="hm-MainHeaderMembersNarrow_MembersMenuIcon " />
                                    <div className="hm-MainHeaderMembersNarrow_Balance hm-Balance ">{country.currency}{formatNumber(balance, country.hasComma, country.lang)}</div>
                                </div>
                                </div>
                            </div>
                            :
                            <div className="hm-MainHeaderRHSLoggedOutNarrow ">
                                <div className="hm-MainHeaderRHSLoggedOutNarrow_Badge hm-MainHeaderRHSLoggedOutNarrow_Join ">
                                    {lang["join"]}
                                </div>
                                <div onClick={() => setPopup("login")} className="hm-MainHeaderRHSLoggedOutNarrow_Badge hm-MainHeaderRHSLoggedOutNarrow_Login ">
                                    {lang["login"]}
                                </div>
                            </div>
                        }
                    </div>

                    <div className="hm-MainHeaderTabRow ">
                        {buttons.map((button, index) => {
                            if(!user && button.name === "mybets" || button.name === "mybets" && loadStage < 50) return null

                            return (
                                <Link
                                    to={button.link}
                                    key={index}
                                    className={`hm-MainHeaderTabRow_AllSportsWrapper hm-HeaderMenuItem ${location.pathname === button.link ? "hm-HeaderMenuItem_LinkSelected hm-HeaderMenuItem_LinkSelected-underscore" : ""}`
                                    
                                }>
                                    <div className="hm-MainHeaderTabRow_InPlayLabel ">
                                        {lang[button.name]}
                                    </div>
                                    {(button.name === "mybets" && openTicketsCount > 0) && <span className="hm-HeaderMenuItemMyBets_MyBetsCount ">{openTicketsCount}</span>}
                                </Link  >
                            )
                        })}
                    </div>
                </div>
            </div>
            {popup && <HeadOverlay/>}
        </div>

    )
}

export default Head;