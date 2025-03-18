import React, { useEffect, useMemo, useState } from 'react'
import NavigationMenuLoadingSpinner from './navigationMenuLoadingSpinner';
import { useApp } from '../contexts/appContext';
import BetSummary from './betSummary';

const BetHistory = ({ toggleMenu, goBack, hidden, status, title }) => {

    const {loadedTickets} = useApp();

    const filteredTickets = useMemo(() => {
        return loadedTickets.tickets.filter(ticket => ticket.status === status)
    }, [loadedTickets])

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
                    <div className="nh-NavigationHeaderModule "  onClick={toggleMenu}>
                        <div className="nh-NavigationHeaderModule_Title ">{title}</div>
                        <div className="nh-BurgerIcon ">
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
                                    {filteredTickets.length === 0 ?
                                        <div className="hl-SummaryRenderer_Message " style={{}}>
                                            Sorry, there is no history information available
                                        </div>
                                        :
                                        <div className="hl-SummaryRenderer_Container ">
                                            {filteredTickets.map((ticket, index) => {
                                                return <BetSummary key={index} ticket={ticket} />
                                            })}
                                        </div>
                                    }
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


export default BetHistory;
