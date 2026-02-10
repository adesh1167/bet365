import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../contexts/appContext';

const locations = {
    home: ["/", "/HO", "/AZ", "/ME"],
    myBets: ['/MB'],
    inPlay: ['/IP'],
    sports: ["/AP"],
    casino: ["/CS"],
}

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

const BaseFooter = () => {

    const location = useLocation();

    const { loadedTickets } = useApp();

    const [openTicketsCount, setOpenTicketsCount] = useState(null);

    useEffect(() => {
        setOpenTicketsCount(loadedTickets.tickets.filter((ticket) => ticket.status == 'open').length);
    }, [loadedTickets.tickets])


    return (
        <footer className="tbm-e">
            <div className="tbm-c">
                <Link to="/" className={`tbm-7 tbm-6 ${locations.home.includes(location.pathname) ? "tbm-4" : ""}`}>Home</Link>
                <Link to="/AZ" className={`tbm-7 tbm-2 ${locations.sports.includes(location.pathname) ? "tbm-4" : ""}`}>All Sports</Link>
                <Link to="/IP" className={`tbm-7 tbm-2b ${locations.inPlay.includes(location.pathname) ? "tbm-4" : ""}`}>In-Play</Link>
                <Link to="/MB" className={`tbm-8 tbm-7 ${locations.myBets.includes(location.pathname) ? "tbm-a" : ""}`}>
                    My Bets
                    {openTicketsCount > 0 && <span className="tbm-0d">{openTicketsCount}</span>}
                </Link>
                <Link to="/CS" className={`tbm-5 tbm-7 ${locations.casino.includes(location.pathname) ? "tbm-4" : ""}`}>
                    <span className="undefined"> Casino </span>
                </Link>
            </div>
        </footer>

    )
}

export default BaseFooter
