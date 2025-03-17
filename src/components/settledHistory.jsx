import React, { useEffect, useState } from 'react'
import NavigationMenuLoadingSpinner from './navigationMenuLoadingSpinner';
import { useApp } from '../contexts/appContext';
import BetSummary from './betSummary';

const SettledHistory = ({ toggleMenu, goBack, hidden }) => {

    const {loadedTickets} = useApp();

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 500 + Math.random() * 1500);
    }, []);

    if(!hidden) return null;

    return (
        <>
            <div className="wc-PageView_ContentContainer ">
                <div>
                    <div className="nh-NavigationHeaderModule ">
                        <div className="nh-NavigationHeaderModule_Title ">Settled Bets</div>
                        <div className="nh-BurgerIcon " onClick={toggleMenu}>
                            <div className="nh-BurgerIcon_Icon " />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="h-HistoryModule ">
                        <>
                            <div className="hl-BackButtonWithHistory " onClick={goBack}>Back</div>
                            {loaded && <div className="h-BetSummariesRenderer ">
                                <div className="hl-SummaryRenderer ">
                                    <div className="hl-SummaryRenderer_Title " style={{}}>
                                        From 15/03/2025 To 17/03/2025
                                    </div>
                                    <div className="hl-SummaryRenderer_Container ">
                                        {loadedTickets.tickets.map((ticket, index) => {
                                            return <BetSummary key={index} ticket={ticket} />
                                        })}
                                    </div>
                                </div>
                            </div>}
                        </>
                    </div>
                </div>
            </div>
            {loaded || <NavigationMenuLoadingSpinner height="570px"/>}
        </>


    )
}


export default SettledHistory;
