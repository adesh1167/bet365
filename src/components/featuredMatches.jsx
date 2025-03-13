import { useApp } from "../contexts/appContext";
import { convertOddsToDecimal } from "../functions/parseData";

const FeaturedMatches = () => {

    const {featuredMatches, lang} = useApp();

    if(!featuredMatches) return null;
    
    return(
        <div className="ss-HomepageSpotlight_Pod ss-HomepageSpotlight_PopularModuleContainer ">
            <div className="pbb-PopularModule pbb-PopularModule-homepagespotlight pbb-PopularModule_betBoost ">
                <div className="pbb-PopularModule_HeaderWrapper ">
                <img
                    src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                    className="pbb-BetBoost "
                />
                </div>
                <div className="pbb-PopularModuleHorizontalScrollBar ">
                <div className="pbb-PopularModuleHorizontalScrollBar_Wrapper ">
                    <div className="pbb-PopularModuleHorizontalScrollBar_ScrollContent gl-MarketGrid ">
                        {featuredMatches.slice(0,6).map((match, index) =>

                            <FeaturedMatch key={index} data={match}/>
                        )}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

const FeaturedMatch = ({data}) => {

    return(
        <div className="pbb-PopularBetBuilder gl-Participant_General ">
            <div className="pbb-PopularBetBuilder_Content">
                <div className="pbb-PopularBetBuilder_HeaderContainer">
                    <div className="pbb-PopularBetBuilder_BoostBadgeContainer">
                        <img
                            src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                            className="pbb-PopularBetBuilder_BoostLogo pbb-BetBoost "
                        />
                    </div>
                    {data.NB && <div className="pbb-PopularBetBuilder_BetCountHeader">
                        <div className="pbb-PopularBetBuilder_Flame" />
                        <div>{data.NB} placed</div>
                    </div>}
                </div>
                <div className="pbb-PopularBetBuilder_EventContainer">
                    <div className="pbb-PopularBetBuilder_FixtureDescription ">
                        <img
                            src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/1.svg"
                            className="pbb-PopularBetBuilder_FixtureIcon cis-ClassificationIconSmall "
                        />
                        <div className="pbb-PopularBetBuilder_FixtureText ">
                            {data.NA}
                        </div>
                        <div className="pbb-PopularBetBuilder_FixImageContainer ">
                            <div className="tk-TeamKitImage-autowidth pbb-PopularBetBuilder_FixImage pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitauto tk-TeamKitImage ">
                                <img
                                    src={`https://content001.bet365.com/SoccerSilks/${data.K1}`}
                                    draggable="false"
                                    className="tk-TeamKitImage_SVG "
                                />
                            </div>
                            <div className="tk-TeamKitImage-autowidth pbb-PopularBetBuilder_FixImage pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitauto tk-TeamKitImage ">
                                <img
                                    src={`https://content001.bet365.com/SoccerSilks/${data.K2}`}
                                    draggable="false"
                                    className="tk-TeamKitImage_SVG "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pbb-PopularBetBuilder_BetLines ">
                        {data.details.map((detail, index) =>
                            <div key={index} className="pbb-PopularBetBuilder_BetLine ">
                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                    <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                </div>
                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                    {detail}
                                </div>
                            </div>
                        )}

                        {/* <div className="pbb-PopularBetBuilder_BetLine ">
                            <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                            </div>
                            <div className="pbb-PopularBetBuilder_BetLineText ">
                                Tim Kleindienst: 2+ Shots on Target
                            </div>
                        </div>
                        <div className="pbb-PopularBetBuilder_BetLine ">
                            <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                            </div>
                            <div className="pbb-PopularBetBuilder_BetLineText ">
                                Jonathan Burkardt: 2+ Shots on Target
                            </div>
                        </div>
                        <div className="pbb-PopularBetBuilder_BetLine ">
                            <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                            </div>
                            <div className="pbb-PopularBetBuilder_BetLineText ">
                                Both Teams to Score
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="pbb-PopularBetBuilder_OddsButton ">
                    <div className="pbb-PopularBetBuilder_PreviousOdds ">
                        {convertOddsToDecimal(data.OX)}
                    </div>
                    <div className="pbb-PopularBetBuilder_Chevron " />
                    <div className="pbb-PopularBetBuilder_BoostedOdds ">
                        {convertOddsToDecimal(data.OD)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedMatches;