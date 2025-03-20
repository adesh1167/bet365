import React, { useEffect, useMemo, useState } from 'react'
import { useApp } from '../contexts/appContext';
import { baseApiUrl } from '../data/url';
import ManageTicketWrapper from './manageTicketWrapper';
import loadingSvg from '../assets/loading.svg';


const ManageBets = ({ filter }) => {

    const { popup, setPopup, loadedTickets, setLoadedTickets, setSubUrl, user, balance, setBalance, getTransactions, country, lang } = useApp();
    const [isOpen, setIsOpen] = useState(true);
    const [deleted, setDeleted] = useState([]);
    const [expanded, setExpanded] = useState(null);
    const [betsCount, setBetsCount] = useState({
        open: null,
        settled: null,
    })
    const [withdrawalAmount, setWithdrawalAmount] = useState((balance).toFixed(2));
    const [withdrawalTime, setWithdrawalTime] = useState((new Date()).toISOString().slice(0, 16));
    const [depositAmount, setDepositAmount] = useState(0);
    const [depositTime, setDepositTime] = useState((new Date()).toISOString().slice(0, 16));
    const [localTickets, setLocalTickets] = useState(loadedTickets.tickets);

    const [loading, setLoading] = useState({
        deposit: false,
        withdraw: false,
        update: false
    });

    const filteredTickets = useMemo(() => {
        return (localTickets.filter((ticket, index) => !deleted.includes(index)))
    }, [deleted, localTickets])

    useEffect(() => {
        setBetsCount({
            open: loadedTickets.tickets.filter(ticket => ticket.status == 'open').length,
            settled: loadedTickets.tickets.filter(ticket => ticket.status == 'settled').length,
        })
    }, [loadedTickets.tickets])

    useEffect(() => {
        setWithdrawalAmount(balance.toFixed(2));
    }, [balance])

    function goToCategory(category) {
        setIsOpen(category == 'Open' ? true : false)
        setSubUrl(`/?account=my-bets&state=${category}&page=0`);
    }

    function toggleDelete(index) {
        if (deleted.includes(index)) {
            setDeleted(prev => prev.filter(i => i != index))
        } else {
            setDeleted(prev => [...prev, index])
        }
    }

    function closeMyBets({ force = false }) {
        if (deleted.length > 0 && !force) {
            if (window.confirm("Do you want to update tickets before leaving?")) {
                updateTickets({ exit: true });
            } else {
                setSubUrl('');
                setPopup("fullMenu");
            }
        } else {
            setSubUrl('');
            setPopup("fullMenu");

        }
    }

    function updateTickets({
        deleteAll = false,
        exit = false
    }) {
        const tempTickets = deleteAll ? [] : filteredTickets;
        if (window.confirm('All deleted tickets will be deleted from database. Do you want to continue?')) {
            // console.log(selectedTickets);
            setLoading(prev => ({ ...prev, update: true }))
            window.$.ajax({
                url: `${baseApiUrl}/update-tickets.php`,
                type: 'POST',
                dataType: "JSON",
                data: {
                    user,
                    reset: 'true',
                    tickets: tempTickets,
                },
                success: (res) => {
                    alert(res.message)
                    setLocalTickets(tempTickets)
                    setDeleted([]);
                    setLoadedTickets(prev => ({ ...prev, tickets: tempTickets }));
                },
                error: (res) => {
                    alert('Failed to update. Contact Admin')
                    console.log(res.responseText)
                },
                complete: () => {
                    setLoading(prev => ({ ...prev, update: false }))
                    if (exit) closeMyBets({ force: true });
                }

            })
        }
    }

    function deleteAll() {
        const proceed = window.confirm('Are you sure you want to delete all tickets? This can not be reversed');
        if (proceed) {
            updateTickets({ deleteAll: true });
        }
    }

    function withdraw() {
        if (Number(withdrawalAmount) > Number(balance)) {
            console.log(withdrawalAmount)
            console.log(balance)
            alert('Insufficient Funds')
            return
        }

        console.log(withdrawalAmount)
        console.log(balance)

        setLoading(prev => ({ ...prev, withdraw: true }));
        window.$.ajax({
            url: `${baseApiUrl}/withdraw.php`,
            data: {
                amount: withdrawalAmount / country.factor,
                withdrawal_time: withdrawalTime,
                user
            },
            type: 'POST',
            dataType: 'JSON',
            success: (res) => {
                alert(res.message);
                if (res.status == 'success') {
                    setBalance(res.data.balance);
                    getTransactions();
                }
                console.log(res)
            },
            error: (res) => {
                alert('Unable to withdraw. Check internet connection and try again')
            },
            complete: () => {
                setLoading(prev => ({ ...prev, withdraw: false }));
            }
        })
    }

    function deposit() {
        setLoading(prev => ({ ...prev, deposit: true }));
        window.$.ajax({
            url: `${baseApiUrl}/deposit.php`,
            data: {
                amount: depositAmount / country.factor,
                deposit_time: depositTime,
                user
            },
            type: 'POST',
            dataType: 'JSON',
            success: (res) => {
                alert(res.message)
                if (res.status == 'success') setBalance(res.data.balance)
            },
            error: (res) => {
                alert('Unable to withdraw. Check internet connection and try again')
            },
            complete: () => {
                setLoading(prev => ({ ...prev, deposit: false }));
            }
        })
    }

    console.log(filteredTickets);
    return (
        <div className="wc-MyBetsPageResponsive_Container">
            <div className="myb-MyBetsModule ">
                <div className="myb-MyBets myb-MyBets_Breakpoints-1 ">
                    <div className="myb-MyBetsHeader ">
                        <div className="myb-MyBetsHeader_Scroller ">
                            {/* {buttons.map((button, index) =>
                                <div
                                    key={button.name}
                                    data-content={button.name}
                                    className={`myb-HeaderButton ${selected === index ? 'myb-HeaderButton-selected myb-HeaderButton-animate' : ''}`}
                                    onClick={e => selectTab(e, index)}
                                    ref={index === 0 ? ref : null}
                                >
                                    {button.name}
                                </div>

                            )} */}
                            <div
                                className={`myb-HeaderButton ${true ? 'myb-HeaderButton-selected myb-HeaderButton-animate' : ''}`}
                            >
                                Manage Bets
                            </div>
                            <div
                                className={`myb-HeaderButton`}
                                style={{
                                    width: "100%",
                                    textAlign: "right",
                                    fontWeight: 700,
                                    padding: 0,
                                    // justifyContent: "center"
                                }}
                                onClick={loading.update ? ()=> {} : updateTickets}
                            >
                                {loading.update ? 
                                    <img src={loadingSvg} width="24px" style={{ fill: "red", display: 'inline' }} />
                                    :
                                    "UPDATE"
                                    }
                            </div>
                            <div className="myb-NavBarSlider " style={{ left: `${0}px`, width: `${100}px` }} />
                            <div style={{position: "absolute", right: 0, }}>Update</div>
                        </div>
                    </div>
                    <div className="myb-MyBetsScroller ">
                        <div className="myb-MyBetsScroller_Content ">
                            <div
                                className="myb-BetItemsContainer "
                                style={{ minHeight: "calc(-135px + 100vh)" }}
                            >
                                <div className="deposit">
                                    <input type="number" className="amount" value={depositAmount} onChange={e => setDepositAmount(e.target.value)} />
                                    <input type="datetime-local" className="time" value={depositTime} onChange={e => setDepositTime(e.target.value)} />
                                    {
                                        loading.deposit ?
                                            <div className="deposit-button"><img src={loadingSvg} width="20px" style={{ fill: "red", display: 'inline' }} /></div>
                                            :
                                            <div className="deposit-button" onClick={deposit}>Deposit</div>
                                    }
                                </div>
                                <div className="withdrawal">
                                    <input type="number" className="amount" value={withdrawalAmount} onChange={e => setWithdrawalAmount(e.target.value)} />
                                    <input type="datetime-local" className="time" value={withdrawalTime} onChange={e => setWithdrawalTime(e.target.value)} />
                                    {
                                        loading.withdraw ?
                                            <div className="withdrawal-button"><img src={loadingSvg} width="20px" style={{ fill: "red", display: 'inline' }} /></div>
                                            :
                                            <div className="withdrawal-button" onClick={withdraw}>Withdraw</div>
                                    }
                                </div>
                                {filteredTickets.length ?
                                    <div className="myb-BetItemsContainer_Container " >
                                        {loadedTickets.tickets.map((ticket, index) =>
                                            <ManageTicketWrapper
                                                type={ticket.status}
                                                key={`${ticket.id}-${index}-${ticket.filter}-${ticket.status}-${ticket.wager}`}
                                                ticket={ticket}
                                                filter={"none"}
                                                index={index}
                                                isDeleted={deleted.includes(index)}
                                                toggleDelete={toggleDelete}
                                            />
                                        )}
                                    </div>
                                    :
                                    <div className="myb-BetItemsContainer_EmptyMessage ">
                                        <div className="myb-BetItemsContainer_NoBetsMessageLineOne ">
                                            There are currently no bets to display
                                        </div>
                                    </div>
                                }
                                {loading.update ?
                                    <div className="update-tickets-button"><img src={loadingSvg} width="20px" style={{ fill: "red", display: 'inline' }} /></div>
                                    :
                                    <div className="update-tickets-button" onClick={updateTickets}>Update</div>
                                }
                                <div className="update-tickets-button bg-error-500 text-light-50" onClick={loading.update ? () => { } : deleteAll}>Delete All</div>
                            </div>
                            <div>
                                <div className="wc-MyBetsPageResponsive_OffersContainer ">
                                    <div>
                                        <div className="pl-PodLoaderModule " />
                                    </div>
                                </div>
                            </div>
                            {/* <Footer /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageBets
