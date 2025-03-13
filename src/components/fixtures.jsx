import { useEffect, useState } from "react";
import { useApp } from "../contexts/appContext";
import { featuredTime } from "../functions/formatDate";
import { convertOddsToDecimal } from "../functions/parseData";
import generateLogo from "../functions/generateLogo";

const FixtureDetails = ({date, data}) => {
    // console.log(data);
    return(
        <>
            <div className="cpm-MarketFixtureDateHeader cpm-MarketFixtureDateHeader-isdate ">
                {date}
            </div>
            {data.map((match, index) =>
                <div key={index} className="cpm-ParticipantFixtureDetailsSoccer cpm-ParticipantFixtureDetailsSoccer_HasStatIcon gl-Market_General-cn1 ">
                    <div className="cpm-ParticipantFixtureDetailsSoccer_LhsContainer">
                    <div className="cpm-ParticipantFixtureDetailsSoccer_TeamsContainer">
                        <div className="cpm-ParticipantFixtureDetailsSoccer_TeamNames">
                            <div className="cpm-ParticipantFixtureDetailsSoccer_TeamContainer ">
                            <div className="cpm-ParticipantFixtureDetailsSoccer_TeamKitContainer ">
                                {match.K1 ? 
                                    <div className="tk-TeamKitImage ">
                                        <img
                                            src={`https://content001.bet365.com/SoccerSilks/${match.K1}`}
                                            draggable="false"
                                            className="tk-TeamKitImage_SVG "
                                        />
                                    </div>
                                    :
                                    <div className={`tk-TeamKit tk-TeamKit-16 tk-TeamKit-16-${match.KI} `} dangerouslySetInnerHTML={{__html: generateLogo(match.KI, match.KC)}}>
                                    </div>
                                }
                            </div>
                            <div className="cpm-ParticipantFixtureDetailsSoccer_TeamInfoWrapper ">
                                <div className="cpm-ParticipantFixtureDetailsSoccer_Team ">
                                {match.NA}
                                </div>
                            </div>
                            </div>
                            <div className="cpm-ParticipantFixtureDetailsSoccer_TeamContainer ">
                            <div className="cpm-ParticipantFixtureDetailsSoccer_TeamKitContainer ">
                            {match.K2 ? 
                                <div className="tk-TeamKitImage ">
                                    <img
                                        src={`https://content001.bet365.com/SoccerSilks/${match.K2}`}
                                        draggable="false"
                                        className="tk-TeamKitImage_SVG "
                                    />
                                </div>
                                :
                                <div className={`tk-TeamKit tk-TeamKit-16 tk-TeamKit-16-${match.TX} `} dangerouslySetInnerHTML={{__html: generateLogo(match.TX, match.TC)}}>
                                </div>
                            }
                            </div>
                            <div className="cpm-ParticipantFixtureDetailsSoccer_TeamInfoWrapper ">
                                <div className="cpm-ParticipantFixtureDetailsSoccer_Team ">
                                {match.N2}
                                </div>
                            </div>
                            </div>
                        </div>
                        {match.DS &&
                            <div className="cpm-ParticipantFixtureDetailsSoccer_Wrapper ">
                                <div className="cpm-ParticipantFixtureDetailsSoccer_Score ">({match.DS.split("-")[0]})</div>
                                <div className="cpm-ParticipantFixtureDetailsSoccer_Score ">({match.DS.split("-")[1]})</div>
                            </div>
                        
                        }
                    </div>

                        <div className="cpm-ParticipantFixtureDetailsSoccer_Details ">
                            <div className="cpm-ParticipantFixtureDetailsSoccer_BookCloses ">
                                {featuredTime(match.BC)}
                            </div>
                            {match.AU && 
                                <div className="cpm-FixtureIconBlock ">
                                    <div className="cpm-FixtureIconBlock_AudioIcon" />
                                </div>
                            }
                            <div className="cpm-FixtureIconBlock ">
                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                            </div>
                            {match.BA &&
                                <div className="cpm-ParticipantFixtureDetailsSoccer_Boosts bbb-BetBoostCount ">
                                    {match.BA.split("~")[0]}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="cpm-StatsIcon " />
                </div>
            )}
        </>
    )
}

const FixtureOdds = ({title, data, selection}) => {
    
    return(
        <>
            <div className="cpm-MarketOddsHeader ">{title}</div>
            {data.map((match, index)=>{
                if(!match.odds[selection]) return null;

                // <div key={index} className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly100 gl-Market_General-cn1 cpm-ParticipantOdds_Suspended ">
                return <div key={index} className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly100 gl-Market_General-cn1">
                    <span className="cpm-ParticipantOdds_Odds">{convertOddsToDecimal(match.odds[selection])}</span>
                </div>
                })}
        </>
    )
}

const Fixtures = () => {

    const {matches}  = useApp();

    const [filteredMatches, setFilteredMatches] = useState(null);

    useEffect(()=>{
        if(!matches) return;
        const filtered = {};
        Object.entries(matches).map(([key, value]) => {
            console.log(key);
            filtered[key] = value.filter(match => match.odds?.length > 2);
            if(filtered[key].length === 0) delete filtered[key];
        })
        setFilteredMatches(filtered);
    }, [matches])

    console.log(matches);
    console.log(filteredMatches);

    if(!filteredMatches) return;

    return(
        <div className="cpm-CouponPodMarketGrid gl-MarketGrid ">
            <div className="gl-MarketGroup cpm-CouponPodMarketGroup ">
            <div className="gl-MarketGroup_Wrapper ">
                <div className="gl-MarketGroupContainer cpm-CouponPodMarketGroup_MarketGroupContainer ">
                <div className="cpm-MarketFixture rcl-MarketFixtureDetailsLabelBase gl-Market_General gl-Market_General-columnheader gl-Market_General-haslabels ">
                    {Object.entries(filteredMatches).map(([matchKey,data]) =>
                        <FixtureDetails key={matchKey} date={matchKey} data={data} />
                    )}
                </div>
                <div className="cpm-MarketOdds gl-Market_General gl-Market_General-columnheader ">
                    {Object.values(filteredMatches).map((match, index) =>
                        <FixtureOdds key={index} title={1} data={match} selection={0}/>
                    )}
                </div>
                <div className="cpm-MarketOdds gl-Market_General gl-Market_General-columnheader ">
                    {Object.values(filteredMatches).map((match, index) =>
                        <FixtureOdds key={index} title={"X"} data={match} selection={1}/>
                    )}
                </div>
                <div className="cpm-MarketOdds gl-Market_General gl-Market_General-columnheader ">
                    {Object.values(filteredMatches).map((match, index) =>
                        <FixtureOdds key={index} title={2} data={match} selection={2}/>
                    )}
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}


export default Fixtures;