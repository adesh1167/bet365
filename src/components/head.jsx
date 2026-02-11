import { useApp } from "../contexts/appContext";
import Profile from "./profile";
import formatNumber from "../functions/formatNumber";
import { countries } from "../data/countries";

const Head = () => {
    const { lang, setPopup, popup, country, countryCode, setCountryCode, balance, user, loadStage } = useApp();

    return (
        <div className="rct-988999">
            <header className="hrm-0">
                {(popup === 'profile' && user) && <Profile />}
                <div className="hrm-4">
                    <div className="hrm-3">
                        {/* Logo Button */}
                        <button className="hrm-c">
                            <img
                                className="hrm-b"
                                src="/sports-assets/sports/HeaderReactModule/assets/bet365_Logo_Inline.svg"
                                loading="lazy"
                                alt="bet365 Logo"
                            />
                        </button>

                        {user ? (
                            <div className="hrm-2 hrm-8c">
                                {/* Offers Section */}
                                <div className="hrm-43">
                                    <button className="hrm-d">
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
                                        <span className="hrm-50">{lang['offers']}</span>
                                    </button>
                                </div>

                                {/* Balance and Profile Buttons */}
                                <div className="hrm-bf">
                                    {/* Balance Button */}
                                    <button className="hrm-5f">
                                        <div className="hrm-ce">
                                            <div className={`hrm-00 ${popup === "profile" ? "hrm-active-state" : ""} ${loadStage > 60 ? "" : "hrm-3d"}`}>
                                                {loadStage > 60 ?
                                                    `${country.currency}${formatNumber(balance, country.hasComma, country.lang)}`
                                                    :
                                                    `$--.--`
                                                }
                                                <span className="hrm-30" />
                                            </div>
                                        </div>
                                    </button>

                                    {/* Profile Icon Button */}
                                    <button className="hrm-5f" onClick={() => setPopup("profile")}>
                                        <div className="hrm-c7">
                                            <div className={`hrm-6d ${popup === "profile" ? "hrm-active-profile" : ""}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                                                    <defs>
                                                        <rect id="path-999777" width={26} height={26} x={0} y={0} rx={13} />
                                                    </defs>
                                                    <g id="Icons-/-Account-/-Generic-Person---Reversed-Colours" fill="none" stroke="none">
                                                        <mask id="mask-888666" fill="var(--hrm-sumo-fill, #fff)">
                                                            <use href="#path-999777" />
                                                        </mask>
                                                        <rect className="hrm-2e" width={25} height={25} x=".5" y=".5" rx="12.5" />
                                                        <circle className="hrm-7d" id="Oval" cx={13} cy="27.182" r="10.636" fillRule="evenodd" mask="url(#mask-888666)" />
                                                        <circle className="hrm-bcb" id="Oval" cx={13} cy="10.636" r="4.727" fillRule="evenodd" mask="url(#mask-888666)" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* Logged Out State - Using mapped classes hrm-2 and hrm-8f (standard pattern) */
                            <div className="hrm-2 hrm-8f">
                                <div className="hrm-43">
                                    <button className="hrm-d">
                                        <span className="hrm-50">Offers</span>
                                    </button>
                                </div>
                                <button className="hrm-d hrm-9e">
                                    <span className="hrm-50">{lang["join"]}</span>
                                </button>
                                <button className="hrm-d" onClick={() => setPopup("login")}>
                                    <span className="hrm-50">{lang["login"]}</span>
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