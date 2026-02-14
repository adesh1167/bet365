import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../contexts/appContext';
import "./styles/baseFooter.css";

const locations = {
    home: ["/", "/HO", "/AZ", "/ME"],
    myBets: ['/MB'],
    inPlay: ['/IP'],
    sports: ["/AP"],
    casino: ["/CS"],
}

const BaseFooter = () => {
    const location = useLocation();
    const { loadedTickets } = useApp();
    const [openTicketsCount, setOpenTicketsCount] = useState(null);

    useEffect(() => {
        setOpenTicketsCount(loadedTickets.tickets.filter((ticket) => ticket.status === 'open').length);
    }, [loadedTickets.tickets]);

    return (
        <footer className="tbm-6-custom">
            <div className="tbm-b-custom">
                {/* Home */}
                <Link 
                    to="/" 
                    className={`tbm-00-custom tbm-8-custom ${locations.home.includes(location.pathname) ? "tbm-2-custom" : ""}`}
                >
                    Home
                </Link>

                {/* All Sports */}
                <Link 
                    to="/AZ" 
                    className={`tbm-00-custom tbm-a-custom ${locations.sports.includes(location.pathname) ? "tbm-2-custom" : ""}`}
                >
                    All Sports
                </Link>

                {/* In-Play */}
                <Link 
                    to="/IP" 
                    className={`tbm-00-custom tbm-c-custom ${locations.inPlay.includes(location.pathname) ? "tbm-2-custom" : ""}`}
                >
                    In-Play
                </Link>

                {/* My Bets */}
                <Link 
                    to="/MB" 
                    className={`tbm-00-custom tbm-5-custom ${locations.myBets.includes(location.pathname) ? "tbm-3-custom" : ""}`}
                >
                    My Bets
                    {openTicketsCount > 0 && (
                        <span className={`tbm-f-custom ${openTicketsCount > 0 ? "tbm-0-custom" : ""}`}>
                            {openTicketsCount}
                        </span>
                    )}
                </Link>

                {/* Casino */}
                <Link 
                    to="/CS" 
                    className={`tbm-00-custom tbm-4-custom ${locations.casino.includes(location.pathname) ? "tbm-b4-custom" : ""}`}
                >
                    <span className="undefined-custom"> Casino </span>
                </Link>
            </div>
        </footer>
    );
}

export default BaseFooter;