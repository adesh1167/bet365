import React, { useEffect, useMemo, useState } from 'react'
import NavigationMenuLoadingSpinner from './navigationMenuLoadingSpinner';
import { useApp } from '../contexts/appContext';
import BetSummary from './betSummary';
import formatDate, { isGreaterThanTime } from '../functions/formatDate';

const BetHistory = ({ toggleMenu, goBack, hidden, status, duration, title }) => {

    const {loadedTickets} = useApp();

    const dates = useMemo(() => {
        return {
            start: Date.now() - 60 * 60 * 24 * duration * 1000,
            end: Date.now()
        }
    }, [duration]);

    const filteredTickets = useMemo(() => {
        const tickets =  loadedTickets.tickets.filter(ticket => ticket.status === status);
        
        return tickets.filter(ticket => {
            if(ticket.status === 'settled'){
                const finsishedMatches = ticket.matches.filter(match => match.winningSelection);
                const lastMatch = finsishedMatches[finsishedMatches.length - 1];
                console.log("Last Match: ", lastMatch)
                if(isGreaterThanTime(lastMatch.matchTime, dates.start)) return true;
            } else{
                const stakeTime = ticket.stakeTime;
                if(isGreaterThanTime(stakeTime, dates.start)) return true;
            }

            return false
        })
    }, [loadedTickets, dates])

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
                                        From {formatDate(dates.start)} To {formatDate(dates.end)}
                                    </div>
                                    {filteredTickets.length === 0 ?
                                        <div className="hl-SummaryRenderer_Message " style={{}}>
                                            Sorry, there is no history information available
                                        </div>
                                        :
                                        <div className="hl-SummaryRenderer_Container ">
                                            {filteredTickets.map((ticket, index) => {
                                                return <BetSummary key={index} ticket={ticket}/>
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
