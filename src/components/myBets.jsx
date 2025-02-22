import { useEffect, useMemo, useRef, useState } from "react";
import { useApp } from "../contexts/appContext";
import Ticket, { TicketPlaceHolder } from "./ticket";
import FullTicket from "./fullTicket";

const MyBets = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [filter, setFilter] = useState('All');
    const {popup, setPopup, loadedTickets, setLoadedTickets, setSubUrl, lang} = useApp();
    const [expanded, setExpanded] = useState(null);
    const [betsCount, setBetsCount] = useState({
        open: null,
        settled: null,
    })

    const filteredTickets = useMemo(()=>{
        return loadedTickets.tickets.filter((ticket)=>{
            if(isOpen && ticket.status == 'settled' || !isOpen && ticket.status == 'open') return false;
            if(filter == 'All') return true;
            if(filter == 'hideLosses') return ticket.filter != 'Loss';
            if(filter == 'Cashout') return ticket.filter == 'Cash Out';
            return ticket.filter == filter;
        })
    }, [loadedTickets.tickets, filter, isOpen])

    useEffect(()=>{
        if(isOpen){
            if(loadedTickets.openVisited){}
            else{
                setTimeout(()=>{
                    setLoadedTickets({
                        ...loadedTickets,
                        openVisited: true
                    })
                }, 500 + Math.random() * 700)
            }
        } else{
            if(loadedTickets.settledVisited){}
            else{
                setTimeout(()=>{
                    setLoadedTickets({
                        ...loadedTickets,
                        settledVisited: true
                    })
                }, 500 + Math.random() * 700)
            }
        }
    }, [isOpen])

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

    function toggleHideLosses(){
        if(filter == 'hideLosses'){
            setFilter('All');
        } else{
            setFilter('hideLosses');
        }
    }

    function closeMyBets(){
        setLoadedTickets(prev => ({
            ...prev,
            openVisited: false,
            settledVisited: false
        }))
        setSubUrl('');
        setPopup(null);
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
                                            <span data-v-48b0c13f className="overflow-hidden text-ellipsis whitespace-nowrap">{lang["my-bets"]}</span>
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
                                                        <li id="pv_id_45_2" className="p-dropdown-item flex items-center border-t border-light-500 dark:border-dark-600" role="option" aria-label={`${lang["bonus.balance"]} ${lang["summary"]}`} aria-selected="false" aria-disabled="false" aria-setsize={11} aria-posinset={3}>
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
                                <div className="w-[220px] relative overflow-y-scroll overflow-x-hidden flex-shrink-0 flex-col scrollbar-hidden p-2 gap-2 bg-light-50 dark:bg-dark-800 hidden lg:flex h-full border-r border-r-light-500 dark:border-r-dark-500">
                                    <div className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50">
                                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.995 2.88208C10.722 2.88208 9.50106 3.38779 8.60088 4.28797C7.70071 5.18814 7.195 6.40904 7.195 7.68208C7.195 8.95512 7.70071 10.176 8.60088 11.0762C9.50106 11.9764 10.722 12.4821 11.995 12.4821C12.6253 12.4821 13.2495 12.3579 13.8319 12.1167C14.4142 11.8755 14.9434 11.5219 15.3891 11.0762C15.8348 10.6305 16.1884 10.1013 16.4296 9.51896C16.6708 8.9366 16.795 8.31243 16.795 7.68208C16.795 7.05174 16.6708 6.42756 16.4296 5.8452C16.1884 5.26284 15.8348 4.73369 15.3891 4.28797C14.9434 3.84225 14.4142 3.48868 13.8319 3.24746C13.2495 3.00624 12.6253 2.88208 11.995 2.88208ZM11.995 4.80208C12.3732 4.80195 12.7478 4.87635 13.0973 5.02104C13.4468 5.16573 13.7643 5.37786 14.0318 5.64532C14.2992 5.91278 14.5114 6.23032 14.656 6.5798C14.8007 6.92928 14.8751 7.30384 14.875 7.68208C14.8737 8.44504 14.5697 9.17629 14.0297 9.71532C13.4897 10.2543 12.758 10.5571 11.995 10.5571C11.2312 10.5571 10.4986 10.2537 9.95853 9.71355C9.41842 9.17345 9.115 8.44091 9.115 7.67708C9.11632 6.91413 9.42033 6.18287 9.96029 5.64384C10.5003 5.10482 11.232 4.80208 11.995 4.80208ZM12.387 5.76208L10.564 6.50808V7.50808L11.326 7.21408V9.60608H12.631V5.75708L12.387 5.76208ZM2.395 8.64208V19.2021C2.39553 19.7111 2.59798 20.1992 2.95794 20.5591C3.31789 20.9191 3.80594 21.1216 4.315 21.1221H19.675C20.184 21.1216 20.6721 20.9191 21.0321 20.5591C21.392 20.1992 21.5945 19.7111 21.595 19.2021V8.64208H19.675V19.2021H4.32V8.64208H2.395ZM8.155 14.4021L11.995 18.2421L15.835 14.4021H8.155Z" strokeLinecap="square" />
                                        </svg> Deposit funds</div>
                                    <div className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50">
                                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.498 2.8811L7.66 6.7181H15.339L11.498 2.8811ZM1.898 8.6401V19.1981C1.89853 19.7077 2.1014 20.1962 2.462 20.5562C2.82261 20.9163 3.31143 21.1184 3.821 21.1181H19.178C19.6871 21.1176 20.1751 20.9151 20.5351 20.5552C20.895 20.1952 21.0975 19.7072 21.098 19.1981V8.6401H19.178V19.1981H3.821V8.6401H1.898ZM11.498 8.6401C10.5487 8.6401 9.62062 8.92162 8.83127 9.44905C8.04191 9.97648 7.42668 10.7261 7.06338 11.6032C6.70008 12.4803 6.60502 13.4454 6.79023 14.3765C6.97544 15.3076 7.4326 16.1629 8.10389 16.8342C8.77518 17.5055 9.63046 17.9627 10.5616 18.1479C11.4927 18.3331 12.4578 18.238 13.3349 17.8747C14.212 17.5114 14.9616 16.8962 15.4891 16.1068C16.0165 15.3175 16.298 14.3895 16.298 13.4401C16.298 12.1671 15.7923 10.9462 14.8921 10.046C13.9919 9.14582 12.771 8.6401 11.498 8.6401ZM11.498 10.5601C12.0674 10.5601 12.624 10.729 13.0975 11.0453C13.5709 11.3617 13.9399 11.8113 14.1579 12.3374C14.3758 12.8634 14.4328 13.4423 14.3217 14.0008C14.2106 14.5592 13.9364 15.0722 13.5338 15.4749C13.1311 15.8775 12.6181 16.1517 12.0597 16.2628C11.5012 16.3739 10.9223 16.3169 10.3963 16.099C9.87019 15.881 9.42055 15.512 9.1042 15.0386C8.78785 14.5651 8.619 14.0085 8.619 13.4391C8.619 12.6755 8.92233 11.9433 9.46224 11.4033C10.0022 10.8634 10.7344 10.5601 11.498 10.5601ZM11.89 11.5191L10.067 12.2651V13.2651L10.828 12.9711V15.3631H12.133V11.5181L11.89 11.5191Z" strokeLinecap="square" />
                                        </svg> Withdraw funds</div>
                                    <div className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50">
                                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.498 2.8811L7.66 6.7181H15.339L11.498 2.8811ZM1.898 8.6401V19.1981C1.89853 19.7077 2.1014 20.1962 2.462 20.5562C2.82261 20.9163 3.31143 21.1184 3.821 21.1181H19.178C19.6871 21.1176 20.1751 20.9151 20.5351 20.5552C20.895 20.1952 21.0975 19.7072 21.098 19.1981V8.6401H19.178V19.1981H3.821V8.6401H1.898ZM11.498 8.6401C10.5487 8.6401 9.62062 8.92162 8.83127 9.44905C8.04191 9.97648 7.42668 10.7261 7.06338 11.6032C6.70008 12.4803 6.60502 13.4454 6.79023 14.3765C6.97544 15.3076 7.4326 16.1629 8.10389 16.8342C8.77518 17.5055 9.63046 17.9627 10.5616 18.1479C11.4927 18.3331 12.4578 18.238 13.3349 17.8747C14.212 17.5114 14.9616 16.8962 15.4891 16.1068C16.0165 15.3175 16.298 14.3895 16.298 13.4401C16.298 12.1671 15.7923 10.9462 14.8921 10.046C13.9919 9.14582 12.771 8.6401 11.498 8.6401ZM11.498 10.5601C12.0674 10.5601 12.624 10.729 13.0975 11.0453C13.5709 11.3617 13.9399 11.8113 14.1579 12.3374C14.3758 12.8634 14.4328 13.4423 14.3217 14.0008C14.2106 14.5592 13.9364 15.0722 13.5338 15.4749C13.1311 15.8775 12.6181 16.1517 12.0597 16.2628C11.5012 16.3739 10.9223 16.3169 10.3963 16.099C9.87019 15.881 9.42055 15.512 9.1042 15.0386C8.78785 14.5651 8.619 14.0085 8.619 13.4391C8.619 12.6755 8.92233 11.9433 9.46224 11.4033C10.0022 10.8634 10.7344 10.5601 11.498 10.5601ZM11.89 11.5191L10.067 12.2651V13.2651L10.828 12.9711V15.3631H12.133V11.5181L11.89 11.5191Z" strokeLinecap="square" />
                                        </svg> Bonus Summary</div>
                                    <div className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap bg-identity-50 text-dark-800 fill-identity-600">
                                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.503 3.604V14.796H2.637V17.596C2.637 18.3386 2.932 19.0508 3.4571 19.5759C3.9822 20.101 4.69439 20.396 5.437 20.396H17.562C18.3036 20.3926 19.0138 20.0965 19.5381 19.5721C20.0625 19.0478 20.3586 18.3376 20.362 17.596V3.604H4.503ZM6.369 5.47H18.496V17.596C18.4979 17.719 18.475 17.8411 18.4288 17.9551C18.3826 18.0691 18.3139 18.1727 18.2269 18.2596C18.1399 18.3465 18.0362 18.4151 17.9222 18.4612C17.8081 18.5073 17.686 18.53 17.563 18.528C17.3158 18.5277 17.0788 18.4295 16.9039 18.2548C16.729 18.0801 16.6305 17.8432 16.63 17.596V14.796H6.369V5.47ZM8.235 7.335V9.201H10.1V7.335H8.235ZM11.967 7.335V9.201H16.631V7.335H11.967ZM8.235 11.066V12.932H10.1V11.067L8.235 11.066ZM11.967 11.066V12.932H16.631V11.067L11.967 11.066ZM4.504 16.666H14.762V17.596C14.7619 17.9135 14.816 18.2287 14.922 18.528H5.435C5.18798 18.5275 4.95123 18.4291 4.77656 18.2544C4.60189 18.0798 4.50353 17.843 4.503 17.596L4.504 16.666Z" strokeLinecap="square" />
                                        </svg> My Bets</div>
                                    <div className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50">
                                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.612 2.67798V13.864H1.747V16.664C1.747 17.4066 2.042 18.1188 2.5671 18.6439C3.09221 19.169 3.8044 19.464 4.547 19.464H12.004V17.592H4.543C4.29581 17.5914 4.05891 17.4929 3.88421 17.3181C3.70951 17.1432 3.61127 16.9062 3.611 16.659V15.727H13.864L12 13.863H5.475V4.54198H17.593V8.27098H19.458V2.67798H3.612ZM7.341 6.40598V8.27098H9.205V6.40598H7.341ZM11.07 6.40598V8.27098H15.73V6.40598H11.07ZM7.341 10.134V11.998H9.205V10.135L7.341 10.134ZM13.865 10.134V11.998H14.797V13.782L16.741 15.726L14.797 17.67V19.454H13.865V21.321H22.254V19.456H21.319V17.672L19.375 15.728L21.319 13.783V11.999H22.251V10.135L13.865 10.134ZM16.665 11.998H19.465V13.011L18.065 14.411L16.665 13.011V11.998ZM18.065 17.044L19.465 18.444V19.456H16.665V18.444L18.065 17.044Z" strokeLinecap="square" />
                                        </svg> Transaction History</div>
                                    <div className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50">
                                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17,18V5H7V18L12,15.82L17,18M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,7H13V9H15V11H13V13H11V11H9V9H11V7Z" strokeLinecap="square" />
                                        </svg> Bet Influencer</div>
                                    <div className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50">
                                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.498 2.8811L7.66 6.7181H15.339L11.498 2.8811ZM1.898 8.6401V19.1981C1.89853 19.7077 2.1014 20.1962 2.462 20.5562C2.82261 20.9163 3.31143 21.1184 3.821 21.1181H19.178C19.6871 21.1176 20.1751 20.9151 20.5351 20.5552C20.895 20.1952 21.0975 19.7072 21.098 19.1981V8.6401H19.178V19.1981H3.821V8.6401H1.898ZM11.498 8.6401C10.5487 8.6401 9.62062 8.92162 8.83127 9.44905C8.04191 9.97648 7.42668 10.7261 7.06338 11.6032C6.70008 12.4803 6.60502 13.4454 6.79023 14.3765C6.97544 15.3076 7.4326 16.1629 8.10389 16.8342C8.77518 17.5055 9.63046 17.9627 10.5616 18.1479C11.4927 18.3331 12.4578 18.238 13.3349 17.8747C14.212 17.5114 14.9616 16.8962 15.4891 16.1068C16.0165 15.3175 16.298 14.3895 16.298 13.4401C16.298 12.1671 15.7923 10.9462 14.8921 10.046C13.9919 9.14582 12.771 8.6401 11.498 8.6401ZM11.498 10.5601C12.0674 10.5601 12.624 10.729 13.0975 11.0453C13.5709 11.3617 13.9399 11.8113 14.1579 12.3374C14.3758 12.8634 14.4328 13.4423 14.3217 14.0008C14.2106 14.5592 13.9364 15.0722 13.5338 15.4749C13.1311 15.8775 12.6181 16.1517 12.0597 16.2628C11.5012 16.3739 10.9223 16.3169 10.3963 16.099C9.87019 15.881 9.42055 15.512 9.1042 15.0386C8.78785 14.5651 8.619 14.0085 8.619 13.4391C8.619 12.6755 8.92233 11.9433 9.46224 11.4033C10.0022 10.8634 10.7344 10.5601 11.498 10.5601ZM11.89 11.5191L10.067 12.2651V13.2651L10.828 12.9711V15.3631H12.133V11.5181L11.89 11.5191Z" strokeLinecap="square" />
                                        </svg> Promo Voucher</div>
                                    <div className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50">
                                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.81045 2.69092L9.37947 5.11195C8.60742 5.41654 7.89056 5.84571 7.25745 6.38238L4.92585 5.62178L2.75857 9.52574L4.64194 11.1042C4.57975 11.5131 4.55065 11.9264 4.55492 12.34C4.56521 12.7535 4.60834 13.1655 4.68389 13.5722L2.85543 15.2237L5.15512 19.0498L7.45652 18.2104C8.10823 18.7255 8.83991 19.1304 9.62252 19.4089L10.1355 21.8139L14.5985 21.7381L15.0265 19.3171C15.7996 19.0128 16.5175 18.5836 17.1515 18.0466L19.4821 18.8072L21.6494 14.9042L19.768 13.3208C19.8981 12.5023 19.8839 11.6673 19.726 10.8538L21.5526 9.20525L19.2529 5.37922L16.9505 6.2186C16.2972 5.70304 15.5638 5.29818 14.7795 5.02015L14.2694 2.61512L9.81045 2.69092ZM11.419 4.57613L12.73 4.55384L13.1334 6.45854L14.1399 6.81954C14.7271 7.02658 15.2764 7.32883 15.7655 7.71417L16.602 8.37614L18.4293 7.7139L19.1036 8.83576L17.6573 10.1377L17.8431 11.1859C17.9656 11.7976 17.9763 12.4264 17.8747 13.0419L17.7226 14.0958L19.2094 15.3578L18.5756 16.4989L16.7269 15.9002L15.9115 16.5923C15.4365 16.9943 14.8985 17.3154 14.3192 17.5426L13.3256 17.9366L12.9861 19.8549L11.6781 19.8771L11.2736 17.9715L10.2672 17.6115C9.68015 17.404 9.13126 17.1014 8.64246 16.7158L7.80497 16.0539L5.9787 16.7161L5.30644 15.5942L6.7547 14.2902L6.56683 13.2421C6.50908 12.9357 6.4757 12.6252 6.46702 12.3135C6.4648 12.0024 6.48761 11.6916 6.53524 11.3841L6.68738 10.3302L5.19562 9.0752L5.83132 7.92906L7.67908 8.53083L8.49454 7.83777C8.97002 7.43613 9.50831 7.1154 10.0879 6.88842L11.0814 6.49342L11.419 4.57613ZM12.14 8.38898C11.3837 8.40203 10.6483 8.63904 10.0267 9.07004C9.40512 9.50103 8.9253 10.1067 8.6479 10.8103C8.3705 11.514 8.30799 12.2841 8.46826 13.0234C8.62853 13.7626 9.00439 14.4376 9.54832 14.9633C10.0922 15.4889 10.7798 15.8414 11.5241 15.9762C12.2683 16.1111 13.0359 16.0222 13.7296 15.7209C14.4234 15.4196 15.0122 14.9193 15.4217 14.2833C15.8311 13.6473 16.0428 12.9042 16.03 12.148C16.0083 11.1344 15.5867 10.1706 14.8573 9.46667C14.1278 8.76271 13.1496 8.37571 12.136 8.39005L12.14 8.38898ZM12.1725 10.301C12.5506 10.2947 12.9221 10.4008 13.2399 10.6056C13.5578 10.8105 13.8078 11.105 13.9583 11.452C14.1088 11.7989 14.153 12.1827 14.0855 12.5547C14.0179 12.9268 13.8415 13.2705 13.5786 13.5424C13.3157 13.8142 12.9781 14.002 12.6085 14.082C12.2389 14.162 11.8538 14.1306 11.5021 13.9918C11.1503 13.853 10.8476 13.613 10.6322 13.3022C10.4168 12.9913 10.2984 12.6236 10.292 12.2455C10.2862 11.9943 10.3304 11.7445 10.4218 11.5105C10.5133 11.2765 10.6502 11.063 10.8247 10.8822C10.9992 10.7015 11.2078 10.5572 11.4385 10.4576C11.6692 10.358 11.9173 10.3051 12.1685 10.302L12.1725 10.301Z" strokeLinecap="square" />
                                        </svg> Update Details</div>
                                    <div className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50">
                                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.5 2.3999L3.64501 5.8909V11.1269C3.6335 13.4902 4.39473 15.7926 5.81278 17.6832C7.23083 19.5739 9.22797 20.9493 11.5 21.5999C13.7719 20.9491 15.7688 19.5737 17.1866 17.683C18.6045 15.7923 19.3656 13.4901 19.354 11.1269V5.8909L11.5 2.3999ZM11.5 4.3109L17.609 7.0259V11.1259C17.6082 13.0249 17.0209 14.8773 15.9275 16.4299C14.834 17.9824 13.2877 19.1594 11.5 19.7999C9.71261 19.1595 8.16656 17.9829 7.07312 16.4307C5.97969 14.8785 5.39222 13.0265 5.39101 11.1279V7.0279L11.5 4.3109ZM15.683 8.3299L10.627 13.3839L8.20801 10.9659L6.97401 12.1999L10.627 15.8529L16.915 9.5629L15.683 8.3299Z" strokeLinecap="square" />
                                        </svg> Responsible Gaming</div>
                                    <div className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50">
                                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.81045 2.69092L9.37947 5.11195C8.60742 5.41654 7.89056 5.84571 7.25745 6.38238L4.92585 5.62178L2.75857 9.52574L4.64194 11.1042C4.57975 11.5131 4.55065 11.9264 4.55492 12.34C4.56521 12.7535 4.60834 13.1655 4.68389 13.5722L2.85543 15.2237L5.15512 19.0498L7.45652 18.2104C8.10823 18.7255 8.83991 19.1304 9.62252 19.4089L10.1355 21.8139L14.5985 21.7381L15.0265 19.3171C15.7996 19.0128 16.5175 18.5836 17.1515 18.0466L19.4821 18.8072L21.6494 14.9042L19.768 13.3208C19.8981 12.5023 19.8839 11.6673 19.726 10.8538L21.5526 9.20525L19.2529 5.37922L16.9505 6.2186C16.2972 5.70304 15.5638 5.29818 14.7795 5.02015L14.2694 2.61512L9.81045 2.69092ZM11.419 4.57613L12.73 4.55384L13.1334 6.45854L14.1399 6.81954C14.7271 7.02658 15.2764 7.32883 15.7655 7.71417L16.602 8.37614L18.4293 7.7139L19.1036 8.83576L17.6573 10.1377L17.8431 11.1859C17.9656 11.7976 17.9763 12.4264 17.8747 13.0419L17.7226 14.0958L19.2094 15.3578L18.5756 16.4989L16.7269 15.9002L15.9115 16.5923C15.4365 16.9943 14.8985 17.3154 14.3192 17.5426L13.3256 17.9366L12.9861 19.8549L11.6781 19.8771L11.2736 17.9715L10.2672 17.6115C9.68015 17.404 9.13126 17.1014 8.64246 16.7158L7.80497 16.0539L5.9787 16.7161L5.30644 15.5942L6.7547 14.2902L6.56683 13.2421C6.50908 12.9357 6.4757 12.6252 6.46702 12.3135C6.4648 12.0024 6.48761 11.6916 6.53524 11.3841L6.68738 10.3302L5.19562 9.0752L5.83132 7.92906L7.67908 8.53083L8.49454 7.83777C8.97002 7.43613 9.50831 7.1154 10.0879 6.88842L11.0814 6.49342L11.419 4.57613ZM12.14 8.38898C11.3837 8.40203 10.6483 8.63904 10.0267 9.07004C9.40512 9.50103 8.9253 10.1067 8.6479 10.8103C8.3705 11.514 8.30799 12.2841 8.46826 13.0234C8.62853 13.7626 9.00439 14.4376 9.54832 14.9633C10.0922 15.4889 10.7798 15.8414 11.5241 15.9762C12.2683 16.1111 13.0359 16.0222 13.7296 15.7209C14.4234 15.4196 15.0122 14.9193 15.4217 14.2833C15.8311 13.6473 16.0428 12.9042 16.03 12.148C16.0083 11.1344 15.5867 10.1706 14.8573 9.46667C14.1278 8.76271 13.1496 8.37571 12.136 8.39005L12.14 8.38898ZM12.1725 10.301C12.5506 10.2947 12.9221 10.4008 13.2399 10.6056C13.5578 10.8105 13.8078 11.105 13.9583 11.452C14.1088 11.7989 14.153 12.1827 14.0855 12.5547C14.0179 12.9268 13.8415 13.2705 13.5786 13.5424C13.3157 13.8142 12.9781 14.002 12.6085 14.082C12.2389 14.162 11.8538 14.1306 11.5021 13.9918C11.1503 13.853 10.8476 13.613 10.6322 13.3022C10.4168 12.9913 10.2984 12.6236 10.292 12.2455C10.2862 11.9943 10.3304 11.7445 10.4218 11.5105C10.5133 11.2765 10.6502 11.063 10.8247 10.8822C10.9992 10.7015 11.2078 10.5572 11.4385 10.4576C11.6692 10.358 11.9173 10.3051 12.1685 10.302L12.1725 10.301Z" strokeLinecap="square" />
                                        </svg> Change password</div>
                                    <div className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50">
                                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.037 2.36304V12H12.964V2.36304H11.037ZM9.11 2.80504C6.91359 3.49575 5.03706 4.95002 3.8201 6.90458C2.60315 8.85915 2.12621 11.1848 2.47561 13.4606C2.82501 15.7364 3.97767 17.8119 5.72492 19.3114C7.47217 20.8108 9.69854 21.6352 12.001 21.6352C14.3035 21.6352 16.5298 20.8108 18.2771 19.3114C20.0243 17.8119 21.177 15.7364 21.5264 13.4606C21.8758 11.1848 21.3988 8.85915 20.1819 6.90458C18.9649 4.95002 17.0884 3.49575 14.892 2.80504V4.85704C16.5507 5.52795 17.9244 6.7549 18.7778 8.32758C19.6311 9.90027 19.9108 11.7208 19.5691 13.4771C19.2273 15.2334 18.2853 16.8162 16.9046 17.9542C15.5238 19.0922 13.7903 19.7145 12.001 19.7145C10.2117 19.7145 8.47817 19.0922 7.09741 17.9542C5.71666 16.8162 4.77469 15.2334 4.43294 13.4771C4.09119 11.7208 4.37094 9.90027 5.22424 8.32758C6.07755 6.7549 7.45128 5.52795 9.11 4.85704V2.80504Z" strokeLinecap="square" />
                                        </svg> Log Out</div>
                                </div>
                                <div className="relative w-full h-full overflow-x-hidden overflow-y-auto scrollbar-hidden">
                                    {expanded == null ||
                                        <FullTicket key={expanded} ticket={filteredTickets[expanded]} setExpanded={setExpanded}/>
                                    }
                                    
                                    <div className={`relative h-[calc(100%-58px)] overflow-x-hidden overflow-y-auto ${expanded !== null && "display-none"}`}>
                                        <div className="flex items-center justify-center w-full p-2 bg-light-50 dark:bg-dark-800">
                                            <div className="p-[2px] rounded-lg flex bg-light-600 dark:bg-dark-900 max-w-full dark:border-dark-500 dark:border h-10 gap-1">
                                                <div onClick={()=>goToCategory('Open')} className={`flex gap-2 p-2 rounded-md cursor-pointer h-full transition-all font-bold items-center overflow-hidden select-none  ${isOpen ? 'bg-light-50' : ''}  dark:bg-dark-700 text-dark-800 dark:text-light-50`}>
                                                    <svg className="w-6 h-6 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.503 3.604V14.796H2.637V17.596C2.637 18.3386 2.932 19.0508 3.4571 19.5759C3.9822 20.101 4.69439 20.396 5.437 20.396H17.562C18.3036 20.3926 19.0138 20.0965 19.5381 19.5721C20.0625 19.0478 20.3586 18.3376 20.362 17.596V3.604H4.503ZM6.369 5.47H18.496V17.596C18.4979 17.719 18.475 17.8411 18.4288 17.9551C18.3826 18.0691 18.3139 18.1727 18.2269 18.2596C18.1399 18.3465 18.0362 18.4151 17.9222 18.4612C17.8081 18.5073 17.686 18.53 17.563 18.528C17.3158 18.5277 17.0788 18.4295 16.9039 18.2548C16.729 18.0801 16.6305 17.8432 16.63 17.596V14.796H6.369V5.47ZM8.235 7.335V9.201H10.1V7.335H8.235ZM11.967 7.335V9.201H16.631V7.335H11.967ZM8.235 11.066V12.932H10.1V11.067L8.235 11.066ZM11.967 11.066V12.932H16.631V11.067L11.967 11.066ZM4.504 16.666H14.762V17.596C14.7619 17.9135 14.816 18.2287 14.922 18.528H5.435C5.18798 18.5275 4.95123 18.4291 4.77656 18.2544C4.60189 18.0798 4.50353 17.843 4.503 17.596L4.504 16.666Z" strokeLinecap="square" />
                                                    </svg>
                                                    <span className="flex items-center gap-1 overflow-hidden capitalize whitespace-nowrap text-ellipsis">{lang["open-bets"]}
                                                        {betsCount.open > 0 && <span className="flex items-center justify-center w-5 h-5 text-xs rounded-full text-identity-600 bg-identity-50 dark:text-identity-200 dark:bg-identity-900">{betsCount.open}</span>}
                                                    </span>
                                                </div>
                                                <div onClick={()=>goToCategory('Settled')} className={`flex gap-2 p-2 rounded-md cursor-pointer h-full transition-all font-bold items-center overflow-hidden select-none bg-[transparent]  ${isOpen ? '' : 'bg-light-50'} hover:bg-light-300 dark:hover:bg-dark-700 text-dark-800 dark:text-light-50`}>
                                                    <svg className="w-6 h-6 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.611 2.77295V13.958H1.746V16.7579C1.746 17.5006 2.041 18.2127 2.5661 18.7378C3.0912 19.263 3.8034 19.5579 4.546 19.5579H11.346C11.1644 18.9533 11.0717 18.3253 11.071 17.6939H4.542C4.29498 17.6934 4.05823 17.5951 3.88356 17.4204C3.70889 17.2457 3.61053 17.009 3.61 16.7619V15.827H11.342C11.5401 15.1614 11.844 14.532 12.242 13.9629H5.474V4.63695H17.592V11.1619C18.2234 11.1626 18.8513 11.2552 19.456 11.4369V2.77295H3.611ZM7.339 6.50095V8.36495H9.203V6.50095H7.339ZM11.067 6.50095V8.36495H15.728V6.50095H11.067ZM7.339 10.2269V12.091H9.203V10.2269H7.339ZM11.067 10.2269V12.091H14.244C14.7091 11.8104 15.2077 11.5897 15.728 11.4339V10.2269H11.067ZM17.592 13.0269C16.6701 13.0269 15.7689 13.3003 15.0024 13.8125C14.2359 14.3247 13.6385 15.0527 13.2857 15.9045C12.933 16.7562 12.8407 17.6935 13.0206 18.5976C13.2006 19.5018 13.6446 20.3323 14.2965 20.9841C14.9485 21.6359 15.7791 22.0798 16.6833 22.2595C17.5875 22.4392 18.5247 22.3468 19.3764 21.9939C20.2281 21.6409 20.9559 21.0434 21.468 20.2767C21.98 19.5101 22.2532 18.6089 22.253 17.6869C22.2527 16.4509 21.7616 15.2657 20.8875 14.3918C20.0134 13.5179 18.828 13.0269 17.592 13.0269ZM19.503 15.497L20.803 16.8029L17.121 20.4839L14.372 17.7349L15.672 16.4289L17.117 17.8729L19.503 15.497Z" strokeLinecap="square" />
                                                    </svg>
                                                    <span className="flex items-center gap-1 overflow-hidden capitalize whitespace-nowrap text-ellipsis">{lang["settled-bets"]}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative flex justify-between w-full gap-1 p-2 border-y border-y-light-500 dark:border-y-dark-500" id="my-bets-container">
                                            <div className="flex items-center w-full gap-1 lg:gap-2">
                                                <div data-v-48b0c13f className="relative w-[50%] lg:w-44">
                                                    <div data-v-48b0c13f className="p-dropdown p-component p-inputwrapper p-inputwrapper-filled h-10 w-full border rounded appearance-none transition-all text-dark-800 dark:text-light-50 bg-[transparent] outline-none pl-4 pr-8 cursor-pointer flex items-center bg-light-50 dark:bg-dark-800 rounded border-light-500 dark:border-dark-600" id="pv_id_46">
                                                        <span className="p-dropdown-label p-inputtext" tabIndex={0} role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_46_list" aria-disabled="false" aria-label="Sports">
                                                            <div data-v-48b0c13f className="absolute top-0 left-0 flex items-center justify-start w-full h-full gap-2 pl-4 pr-[30px] align-items-center">
                                                                <span data-v-48b0c13f className="overflow-hidden text-ellipsis whitespace-nowrap">{lang["sport"]}</span>
                                                            </div>
                                                        </span>
                                                        <div className="p-dropdown-trigger">
                                                            <div data-v-48b0c13f className="absolute top-0 flex items-center justify-center w-6 pointer-events-none right-2 h-10">
                                                                <svg data-v-48b0c13f className="absolute w-6 h-6 fill-dark-800 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M7,10L12,15L17,10H7Z" strokeLinecap="square" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-v-48b0c13f className="relative w-[50%] lg:w-44">
                                                    <div data-v-48b0c13f className="p-dropdown p-component p-inputwrapper p-inputwrapper-filled h-10 w-full border rounded appearance-none transition-all text-dark-800 dark:text-light-50 bg-[transparent] outline-none pl-4 pr-8 cursor-pointer flex items-center bg-light-50 dark:bg-dark-800 rounded border-light-500 dark:border-dark-600" id="pv_id_47">
                                                        <span className="p-dropdown-label p-inputtext" tabIndex={0} role="combobox" aria-label="All" aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_47_list" aria-disabled="false">
                                                            <div data-v-48b0c13f className="absolute top-0 left-0 flex items-center justify-start w-full h-full gap-2 pl-4 pr-[30px] align-items-center">
                                                                <span data-v-48b0c13f className="overflow-hidden text-ellipsis whitespace-nowrap">{lang["all"]}</span>
                                                            </div>
                                                        </span>
                                                        <div className="p-dropdown-trigger">
                                                            <div data-v-48b0c13f className="absolute top-0 flex items-center justify-center w-6 pointer-events-none right-2 h-10">
                                                                <svg data-v-48b0c13f className="absolute w-6 h-6 fill-dark-800 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M7,10L12,15L17,10H7Z" strokeLinecap="square" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <form>
                                                    <div data-v-e232e1c2 className="input-wrapper password-input icon icon-left w-[30%] overflow-hidden lg:w-40 hidden lg:block">
                                                        <div data-v-e232e1c2 className="relative text-dark-600">
                                                            <svg data-v-e232e1c2 className="w-5 h-5 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" name="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z">
                                                                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" strokeLinecap="square" />
                                                            </svg>

                                                            <input data-v-e232e1c2 id="search-bets..." autoComplete="off" type="text" placeholder="Search bets..." />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 border rounded cursor-pointer lg:hidden border-light-500 dark:border-dark-500 bg-light-50 dark:bg-dark-800">
                                                <svg className="w-6 h-6 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" strokeLinecap="square" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex justify-end w-full px-2 py-1 lg:hidden">
                                        </div>
                                        { ((isOpen && !loadedTickets.openVisited) || (!isOpen && !loadedTickets.settledVisited)) ?

                                            ([1,2,3,4,5,6]).map(placeholder=>
                                                <TicketPlaceHolder key={placeholder}/>
                                            
                                            )
                                            :
                                            (filteredTickets.length == 0 ?
                                                <div className="flex p-2">
                                                    <div className="w-full pt-1 pb-1 pl-8 pr-1 text-xs leading-4 rounded text-dark-800 border relative border-warning-200 bg-warning-50">
                                                        <svg className="w-5 h-5 fill-[currentColor] absolute top-[2px] left-[5px] fill-warning-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" strokeLinecap="square" />
                                                        </svg>There are no available bets for this account <a aria-current="page" href="/" className="router-link-active router-link-exact-active font-bold underline text-dark-900">Bet Now</a>
                                                    </div>
                                                </div>
                                                :
                                                <>
                                                    {isOpen || <div className="flex justify-end w-full px-2 py-1 lg:hidden">
                                                        <div className="flex items-center gap-2">
                                                            Hide Losses
                                                            <label data-v-24fad514 className="relative inline-flex items-center cursor-pointer toggle-wrapper gap-2">
                                                                <input data-v-24fad514 type="checkbox" className="sr-only" checked={filter == 'hideLosses'}  onChange={toggleHideLosses}/>
                                                                <span data-v-24fad514 />
                                                            </label>
                                                        </div>
                                                    </div>}
                                                    <div className="relative flex flex-col w-full gap-2 p-2 overflow-x-hidden overflow-y-auto">
                                                        {filteredTickets.map((ticket, index)=>
                                                            <Ticket key={index+ticket.id} index={index} ticket={ticket} setExpanded={setExpanded}/>
                                                        )}
                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyBets;