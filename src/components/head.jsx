import { Link, useLocation } from "react-router-dom";
import { useApp } from "../contexts/appContext";
import Profile from "./profile";

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

    const { lang, setPopup, popup, user, loadStage } = useApp();

    const location = useLocation();

    return (
        <div className="wc-WebConsoleModule_Header ">
            <div className={`hm-HeaderModule hm-HeaderModule_ProductClosed ${popup === "profile" ? "hm-MembersMenuModuleContainer_Open" : ""}`}>
                {popup === 'profile' && <Profile />}
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
                            <div className="hm-MainHeaderLHSNarrow_OffersLabel hm-HeaderMenuItem ">
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
                                <div className="hm-MainHeaderMembersNarrow ">
                                <div onClick={() => setPopup("profile")} className="hm-MainHeaderMembersNarrow_MembersWrapper ">
                                    <div className="hm-MainHeaderMembersNarrow_MembersMenuIcon " />
                                    <div className="hm-MainHeaderMembersNarrow_Balance hm-Balance " />
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
                                    {(button.name === "mybets" && true) && <span class="hm-HeaderMenuItemMyBets_MyBetsCount ">2</span>}
                                </Link  >
                            )
                        })}
                        {/* <div className="hm-MainHeaderTabRow_AllSportsWrapper hm-HeaderMenuItem ">
                            <div className="hm-MainHeaderTabRow_AllSportsLabel ">
                                {lang["allsports"]}
                            </div>
                        </div>
                        <div className="hm-MainHeaderTabRow_InPlayWrapper hm-HeaderMenuItem ">
                            <div className="hm-MainHeaderTabRow_InPlayLabel ">
                                {lang["inplay"]}
                            </div>
                        </div>
                        {true &&
                            <div className="hm-MainHeaderTabRow_MyBetsWrapper hm-HeaderMenuItemMyBets hm-HeaderMenuItemMyBets_WidthState-1 hm-HeaderMenuItem_LinkSelected hm-HeaderMenuItem_LinkSelected-underscore">
                                <div className="hm-MainHeaderTabRow_InPlayLabel ">
                                    {lang["mybets"]}
                                </div>
                            </div>
                        }
                        <div className="hm-MainHeaderNarrow_Indicator " style={{width: "59.75px", transform: "translateX(-302.125px)"}}/>
                        <div className="hm-MainHeaderTabRow_CasinoWrapper hm-HeaderMenuItem hm-HeaderMenuItem-casinoselector ">
                            <div className="hm-MainHeaderTabRow_CasinoLabel ">
                                {lang["Casino"]}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Head;