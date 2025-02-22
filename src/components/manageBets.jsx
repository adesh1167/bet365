import { useEffect, useMemo, useRef, useState } from "react";
import { useApp } from "../contexts/appContext";
import FullTicket from "./fullTicket";
import Ticket, { TicketPlaceHolder } from "./ticket";
import { baseApiUrl } from "../data/url";

const ManageBets = () => {

    const {popup, setPopup, loadedTickets, setLoadedTickets, setSubUrl, user, balance, setBalance, country, lang} = useApp();
    const [isOpen, setIsOpen] = useState(true);
    const [deleted, setDeleted] = useState([]);
    const [expanded, setExpanded] = useState(null);
    const [betsCount, setBetsCount] = useState({
        open: null,
        settled: null,
    })
    const [withdrawalAmount, setWithdrawalAmount] = useState((balance*country.factor).toFixed(2));
    const [withdrawalTime, setWithdrawalTime] = useState((new Date()).toISOString().slice(0,16));
    const [depositAmount, setDepositAmount] = useState(0);
    const [depositTime, setDepositTime] = useState((new Date()).toISOString().slice(0,16));
    const [localTickets, setLocalTickets] = useState(loadedTickets.tickets);

    const filteredTickets = useMemo(()=>{
        return (localTickets.filter((ticket, index) => !deleted.includes(index)))
    }, [deleted, localTickets])

    useEffect(()=>{
        setBetsCount({
            open: loadedTickets.tickets.filter(ticket=> ticket.status == 'open').length,
            settled: loadedTickets.tickets.filter(ticket=> ticket.status == 'settled').length,
        })
    }, [loadedTickets.tickets])

    function goToCategory(category){
        setIsOpen(category == 'Open' ? true : false)
        setSubUrl(`/?account=my-bets&state=${category}&page=0`);
    }

    function toggleDelete(index){
        if(deleted.includes(index)){
            setDeleted(prev => prev.filter(i => i != index))
        } else{
            setDeleted(prev => [...prev, index])
        }
    }

    function closeMyBets({force = false}){
        if(deleted.length > 0 && !force){
            if(window.confirm("Do you want to update tickets before leaving?")){
                updateTickets({exit: true});
            } else{
                setSubUrl('');
                setPopup("fullMenu");
            }
        } else{
            setSubUrl('');
            setPopup("fullMenu");

        }
    }

    function updateTickets({
        deleteAll = false,
        exit = false
    }){
        const tempTickets = deleteAll ? [] : filteredTickets;
        if(window.confirm('All deleted tickets will be deleted from database. Do you want to continue?')){
            // console.log(selectedTickets);
            window.$.ajax({
                url: `${baseApiUrl}/update-tickets.php`,
                type: 'POST',
                dataType: "JSON",
                data: {
                    user,
                    reset: 'true',
                    tickets: tempTickets,
                },
                success: (res)=>{
                    alert(res.message)
                    setLocalTickets(tempTickets)
                    setDeleted([]);
                    setLoadedTickets(prev=>({...prev, tickets: tempTickets}));
                },
                error: (res)=>{
                    alert('Failed to update. Contact Admin')
                    console.log(res.responseText)
                },
                complete: ()=>{
                    if(exit) closeMyBets({force: true});
                }
                
            })
        }
    }

    function deleteAll(){
        const proceed = window.confirm('Are you sure you want to delete all tickets? This can not be reversed');
        if(proceed){
            updateTickets({deleteAll: true});
        }
    }

    function withdraw(){
        if(Number(withdrawalAmount/country.factor) > Number(balance)){
            console.log(withdrawalAmount)
            console.log(balance)
            alert('Insufficient Funds')
            return
        }

        console.log(withdrawalAmount)
        console.log(balance)

        window.$.ajax({
            url: `${baseApiUrl}/withdraw.php`,
            data: {
                amount: withdrawalAmount / country.factor,
                withdrawal_time: withdrawalTime,
                user
            },
            type: 'POST',
            dataType: 'JSON',
            success: (res)=>{
                alert(res.message);
                if(res.status == 'success') setBalance(res.data.balance)
                console.log(res)
            },
            error: (res)=>{
                alert('Unable to withdraw. Check internet connection and try again')
            }
        })
    }

    function deposit(){
        window.$.ajax({
            url: `${baseApiUrl}/deposit.php`,
            data: {
                amount: depositAmount / country.factor,
                deposit_time: depositTime,
                user
            },
            type: 'POST',
            dataType: 'JSON',
            success: (res)=>{
                alert(res.message)
                if(res.status == 'success') setBalance(res.data.balance)
            },
            error: (res)=>{
                alert('Unable to withdraw. Check internet connection and try again')
            }
        })
    }

    console.log(filteredTickets);

    return (

        <div data-v-c37e6d79 className="margin-top-56 fixed top-0 left-0 bottom-0 right-0 z-50 flex justify-center bg-dark-700/40 pb-[55px] pt-[60px] md:pt-[100px] items-start md:items-center">
            <div data-v-c37e6d79 className="w-full md:w-[1080px] relative z-10 drop-shadow-sm max-w-[95%] box-content rounded-md  scrollbar-hidden max-h-full overflow-hidden overflow-y-scroll overflow-x-hidden">
                <div data-v-c37e6d79 className="border-none sticky top-0 left-0 z-20 flex items-center w-full px-2 py-4 pr-12 text-base font-bold capitalize lg:p-4 h-14 bg-dark-900 text-light-50 rounded-tl-md rounded-tr-md">
                    <span data-v-c37e6d79 className="h-full">
                        <div className="block -mt-2 dark lg:hidden w-[200px]">
                            <div data-v-48b0c13f className="relative w-full">
                                <div data-v-48b0c13f className="p-dropdown p-component p-inputwrapper p-inputwrapper-filled h-10 w-full border rounded appearance-none transition-all text-dark-800 dark:text-light-50 bg-[transparent] outline-none pl-4 pr-8 cursor-pointer flex items-center bg-light-50 dark:bg-dark-800 rounded border-light-500 dark:border-dark-600" id="pv_id_45">
                                    <span className="p-dropdown-label p-inputtext" tabIndex={0} role="combobox" aria-label={lang["my-bets"]} aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_45_list" aria-disabled="false">
                                        <div data-v-48b0c13f className="absolute top-0 left-0 flex items-center justify-start w-full h-full gap-2 pl-4 pr-[30px] align-items-center">
                                            <span data-v-48b0c13f className="overflow-hidden text-ellipsis whitespace-nowrap">Manage Bets</span>
                                        </div>
                                    </span>
                                    <div className="p-dropdown-trigger">
                                        <div data-v-48b0c13f className="absolute top-0 flex items-center justify-center w-6 pointer-events-none right-2 h-10">
                                            <svg data-v-48b0c13f className="absolute w-6 h-6 fill-dark-800 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7,10L12,15L17,10H7Z" strokeLinecap="square" />
                                            </svg>
                                        </div>
                                    </div>
                                    {false &&
                                        <div className="p-dropdown-panel p-component p-ripple-disabled !z-20" style={{ zIndex: 1001, transformOrigin: 'center top', top: '40px', left: '0px' }}>
                                            <div className="p-dropdown-panel p-component p-ripple-disabled !z-20" style={{ zIndex: 1001, transformOrigin: 'center top', top: '40px', left: '0px' }}>
                                                <span role="presentation" aria-hidden="true" className="p-hidden-accessible p-hidden-focusable" tabIndex={0} />
                                                <div className="p-dropdown-items-wrapper rounded bg-light-50 dark:bg-dark-800 overflow-hidden border-x border-b border-light-500 dark:border-dark-600 mt-[1px]" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                                                    <ul id="pv_id_45_list" className="p-dropdown-items" role="listbox">
                                                        <li id="pv_id_45_0" className="p-dropdown-item flex items-center border-t border-light-500 dark:border-dark-600" role="option" aria-label={lang["deposit-funds"]} aria-selected="false" aria-disabled="false" aria-setsize={11} aria-posinset={1}>
                                                            <div data-v-48b0c13f className="custom-dropdown-item flex items-center w-full h-10 gap-2 px-4 transition-all text-xs font-bold hover:bg-light-300 dark:hover:bg-dark-700">
                                                                {lang["deposit-funds"]}</div>
                                                        </li>
                                                        <li id="pv_id_45_1" className="p-dropdown-item flex items-center border-t border-light-500 dark:border-dark-600" role="option" aria-label={lang["withdraw-funds"]} aria-selected="false" aria-disabled="false" aria-setsize={11} aria-posinset={2}>
                                                            <div data-v-48b0c13f className="custom-dropdown-item flex items-center w-full h-10 gap-2 px-4 transition-all text-xs font-bold hover:bg-light-300 dark:hover:bg-dark-700">
                                                                {lang["withdraw-funds"]}</div>
                                                        </li>
                                                        <li id="pv_id_45_2" className="p-dropdown-item flex items-center border-t border-light-500 dark:border-dark-600" role="option" aria-label={lang["bonus.balance"] +" "+ lang["summary"]} aria-selected="false" aria-disabled="false" aria-setsize={11} aria-posinset={3}>
                                                            <div data-v-48b0c13f className="custom-dropdown-item flex items-center w-full h-10 gap-2 px-4 transition-all text-xs font-bold hover:bg-light-300 dark:hover:bg-dark-700">
                                                                {lang["bonus.balance"]} {lang["summary"]}</div>
                                                        </li>
                                                        <li id="pv_id_45_3" className="p-dropdown-item p-highlight flex items-center border-t border-light-500 dark:border-dark-600" role="option" aria-label={lang["my-bets"]} aria-selected="true" aria-disabled="false" aria-setsize={11} aria-posinset={4}>
                                                            <div data-v-48b0c13f className="custom-dropdown-item flex items-center w-full h-10 gap-2 px-4 transition-all text-xs font-bold bg-identity-50 text-identity-900 dark:bg-dark-700 dark:text-identity-300">
                                                                {lang["my-bets"]}</div>
                                                        </li>
                                                        <li id="pv_id_45_4" className="p-dropdown-item flex items-center border-t border-light-500 dark:border-dark-600" role="option" aria-label={`Transaction ${lang["history"]}`} aria-selected="false" aria-disabled="false" aria-setsize={11} aria-posinset={5}>
                                                            <div data-v-48b0c13f className="custom-dropdown-item flex items-center w-full h-10 gap-2 px-4 transition-all text-xs font-bold hover:bg-light-300 dark:hover:bg-dark-700">
                                                                Transaction {lang["history"]}</div>
                                                        </li>
                                                        <li id="pv_id_45_5" className="p-dropdown-item flex items-center border-t border-light-500 dark:border-dark-600" role="option" aria-label={lang["influencer"]} aria-selected="false" aria-disabled="false" aria-setsize={11} aria-posinset={6}>
                                                            <div data-v-48b0c13f className="custom-dropdown-item flex items-center w-full h-10 gap-2 px-4 transition-all text-xs font-bold hover:bg-light-300 dark:hover:bg-dark-700">
                                                                {lang["influencer"]}</div>
                                                        </li>
                                                        <li id="pv_id_45_6" className="p-dropdown-item flex items-center border-t border-light-500 dark:border-dark-600" role="option" aria-label={lang["promo-voucher"]} aria-selected="false" aria-disabled="false" aria-setsize={11} aria-posinset={7}>
                                                            <div data-v-48b0c13f className="custom-dropdown-item flex items-center w-full h-10 gap-2 px-4 transition-all text-xs font-bold hover:bg-light-300 dark:hover:bg-dark-700">
                                                                {lang["promo-voucher"]}</div>
                                                        </li>
                                                        <li id="pv_id_45_7" className="p-dropdown-item flex items-center border-t border-light-500 dark:border-dark-600" role="option" aria-label={`${lang["add"]} ${lang["influencer.details"]}`} aria-selected="false" aria-disabled="false" aria-setsize={11} aria-posinset={8}>
                                                            <div data-v-48b0c13f className="custom-dropdown-item flex items-center w-full h-10 gap-2 px-4 transition-all text-xs font-bold hover:bg-light-300 dark:hover:bg-dark-700">
                                                                {lang["add"]} {lang["influencer.details"]}</div>
                                                        </li>
                                                        <li id="pv_id_45_8" className="p-dropdown-item flex items-center border-t border-light-500 dark:border-dark-600" role="option" aria-label={lang["footer-links.responsible-gaming"]} aria-selected="false" aria-disabled="false" aria-setsize={11} aria-posinset={9}>
                                                            <div data-v-48b0c13f className="custom-dropdown-item flex items-center w-full h-10 gap-2 px-4 transition-all text-xs font-bold hover:bg-light-300 dark:hover:bg-dark-700">
                                                                {lang["footer-links.responsible-gaming"]}</div>
                                                        </li>
                                                        <li id="pv_id_45_9" className="p-dropdown-item flex items-center border-t border-light-500 dark:border-dark-600" role="option" aria-label={`${lang["set"]} password`} aria-selected="false" aria-disabled="false" aria-setsize={11} aria-posinset={10}>
                                                            <div data-v-48b0c13f className="custom-dropdown-item flex items-center w-full h-10 gap-2 px-4 transition-all text-xs font-bold hover:bg-light-300 dark:hover:bg-dark-700">
                                                                {lang["set"]} password</div>
                                                        </li>
                                                        <li id="pv_id_45_10" className="p-dropdown-item flex items-center border-t border-light-500 dark:border-dark-600" role="option" aria-label={lang["log-out"]} aria-selected="false" aria-disabled="false" aria-setsize={11} aria-posinset={11}>
                                                            <div data-v-48b0c13f className="custom-dropdown-item flex items-center w-full h-10 gap-2 px-4 transition-all text-xs font-bold hover:bg-light-300 dark:hover:bg-dark-700">
                                                                {lang["log-out"]}</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <span role="status" aria-live="polite" className="p-hidden-accessible"> </span>
                                                <span role="presentation" aria-hidden="true" className="p-hidden-accessible p-hidden-focusable" tabIndex={0} />
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <span className="hidden lg:block">{lang["account-options"]}: 260970184777</span>
                    </span>
                    <svg onClick={closeMyBets} data-v-c37e6d79 className="absolute w-6 h-6 cursor-pointer fill-light-50 top-4 right-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" strokeLinecap="square" />
                    </svg>
                </div>
                <div data-v-c37e6d79 className="relative z-10">
                    <div data-v-c37e6d79 className="relative rounded-b-md">
                        <div data-v-c37e6d79 className="bg-light-200 dark:bg-dark-800 relative text-dark-800 dark:text-light-50 overflow-hidden h-[calc(80vh-78px);] rounded-bl rounded-br">
                            <div className="relative flex h-full dark:bg-dark-900">

                                <div className="relative w-full h-full overflow-x-hidden overflow-y-auto scrollbar-hidden">
                                    {expanded !== null ? 
                                        <FullTicket key={expanded} ticket={localTickets[expanded]} setExpanded={setExpanded}/>
                                        :
                                        <div className="relative h-[calc(100%-58px)] overflow-x-hidden overflow-y-auto">
                                            <div className="flex justify-end w-full px-2 py-1 lg:hidden">
                                            </div>
                                            {false ?
                                                <div className="flex p-2">
                                                    <div className="w-full pt-1 pb-1 pl-8 pr-1 text-xs leading-4 rounded text-dark-800 border relative border-warning-200 bg-warning-50">
                                                        <svg className="w-5 h-5 fill-[currentColor] absolute top-[2px] left-[5px] fill-warning-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" strokeLinecap="square" />
                                                        </svg>There are no available bets for this account <a aria-current="page" href="/" className="router-link-active router-link-exact-active font-bold underline text-dark-900">Bet Now</a>
                                                    </div>
                                                </div>
                                                :
                                                <>
                                                    <div className="relative flex flex-col w-full gap-2 p-2 overflow-x-hidden overflow-y-auto">
                                                        {localTickets.map((ticket, index)=>
                                                            <TicketWrapper key={index} setExpanded={setExpanded} ticket={ticket} index={index} isDeleted={deleted.includes(index)} toggleDelete={toggleDelete}/>
                                                        )}
                                                    </div>
                                                </>
                                            }
                                            <div className="update-tickets-button" onClick={updateTickets}>Update</div>
                                            <div className="update-tickets-button bg-error-500 text-light-50" onClick={deleteAll}>Delete All</div>
                                            <div className="deposit">
                                                <input type="number" className="amount" value={depositAmount} onChange={e=>setDepositAmount(e.target.value)}/>
                                                <input type="datetime-local" className="time" value={depositTime} onChange={e=>setDepositTime(e.target.value)}/>
                                                <div className="deposit-button" onClick={deposit}>Deposit</div>
                                            </div>
                                            <div className="withdrawal">
                                                <input type="number" className="amount" value={withdrawalAmount} onChange={e=>setWithdrawalAmount(e.target.value)}/>
                                                <input type="datetime-local" className="time" value={withdrawalTime} onChange={e=>setWithdrawalTime(e.target.value)}/>
                                                <div className="withdrawal-button" onClick={withdraw}>Withdraw</div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const TicketWrapper = ({setExpanded, ticket, index, isDeleted, toggleDelete}) => {

    const doAccount = useRef(null);

    function setDoAccount(value){
        doAccount.current = value;
    }

    return (
        <div className="ticket-wrapper">
            <div className="ticket-buttons">
                <div className="ticket-button" onClick={()=>doAccount.current()}>
                    Account
                </div>
                {isDeleted ? 
                    <div className="ticket-button text-identity-600" onClick={()=>toggleDelete(index)}>
                        Restore
                    </div>
                    :
                    <div className="ticket-button text-error-600" onClick={()=>toggleDelete(index)}>
                        Delete
                    </div>
                }

            </div>
            <Ticket key={index+ticket.id} index={index} ticket={ticket} setExpanded={setExpanded} isDeleted={isDeleted} setAccountClick={setDoAccount}/>
        </div>
    )
}

export default ManageBets;