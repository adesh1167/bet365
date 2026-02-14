import { useApp } from "../contexts/appContext";
import Profile from "./profile";
import formatNumber from "../functions/formatNumber";
import { countries } from "../data/countries";
import "./styles/head.css";

const Head = () => {
    const { lang, setPopup, popup, country, countryCode, setCountryCode, balance, user, loadStage } = useApp();

    return (
        <div className="rct-988999-custom">
            <header className="hrm-5-custom">
                {(popup === 'profile' && user) && <Profile />}
                <div className="hrm-f-custom">
                    <div className="hrm-c-custom">
                        {/* Logo Section */}
                        <button className="hrm-a-custom">
                            <img
                                className="hrm-6-custom"
                                src="/sports-assets/sports/HeaderReactModule/assets/bet365_Logo_Inline.svg"
                                loading="lazy"
                                alt="bet365 Logo"
                            />
                        </button>

                        {user ? (
                            <div className="hrm-4-custom hrm-e-custom">
                                {/* Offers Wrapper */}
                                <div className="hrm-8d-custom">
                                    <button className="hrm-3-custom">
                                        <div className="select-currency">
                                            <select
                                                onChange={e => setCountryCode(e.target.value)}
                                                value={countryCode}
                                            >
                                                {Object.values(countries).map((option, index) =>
                                                    <option key={index} value={index}>{option.name}</option>
                                                )}
                                            </select>
                                        </div>
                                        <span className="hrm-8b-custom">{lang['offers']}</span>
                                    </button>
                                </div>

                                {/* User Balance & Profile Icons */}
                                <div className="hrm-60-custom">
                                    <button className="hrm-9d-custom">
                                        <div className="hrm-bc-custom">
                                            <div className={`hrm-3c-custom ${loadStage > 60 ? "" : "hrm-loading-state-custom"}`}>
                                                {loadStage > 60 ?
                                                    `${country.currency}${formatNumber(balance, country.hasComma, country.lang)}`
                                                    :
                                                    `$--.--`
                                                }
                                                <span className="hrm-e3-custom" />
                                            </div>
                                        </div>
                                    </button>

                                    <button className="hrm-9d-custom" onClick={() => setPopup("profile")}>
                                        <div className="hrm-2b-custom">
                                            <div className={`hrm-f8-custom ${popup === "profile" ? "hrm-7-custom" : ""}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                                                    <defs>
                                                        <rect id="path-999777" width={26} height={26} x={0} y={0} rx={13} />
                                                    </defs>
                                                    <g id="Icons-/-Account-/-Generic-Person---Reversed-Colours" fill="none" stroke="none">
                                                        <mask id="mask-888666" fill="var(--hrm-sumo-fill, #fff)">
                                                            <use href="#path-999777" />
                                                        </mask>
                                                        <rect className="hrm-98-custom" width={25} height={25} x=".5" y=".5" rx="12.5" />
                                                        <circle className="hrm-8d8-custom" id="Oval" cx={13} cy="27.182" r="10.636" fillRule="evenodd" mask="url(#mask-888666)" />
                                                        <circle className="hrm-fa-custom" id="Oval" cx={13} cy="10.636" r="4.727" fillRule="evenodd" mask="url(#mask-888666)" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="hrm-4-custom hrm-logged-out-custom">
                                <div className="hrm-8d-custom">
                                    <button className="hrm-3-custom">
                                        <span className="hrm-8b-custom">Offers</span>
                                    </button>
                                </div>
                                <button className="hrm-3-custom hrm-join-mod-custom">
                                    <span className="hrm-8b-custom">{lang["join"]}</span>
                                </button>
                                <button className="hrm-3-custom" onClick={() => setPopup("login")}>
                                    <span className="hrm-8b-custom">{lang["login"]}</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Head;