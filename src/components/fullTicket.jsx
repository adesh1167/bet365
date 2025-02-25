import { useEffect, useRef, useState } from "react";
import { useApp } from "../contexts/appContext";
import getDate from "../functions/getDate";
import { bgColorClassPallete, colorClassPallete, colorPallete } from "../data/colors";
import { baseApiUrl } from "../data/url";
import { cancelledSvg, lossSvg, winSvg } from "../data/svgs";
import { matchDate, ticketDate } from "../functions/formatDate";
import formatNumber from "../functions/formatNumber";
import interpolateText from "../functions/interpolateText";

const FullTicket = ({ ticket, percent = 0.9, setExpanded }) => {


    const [ticketExpanded, setTicketExpanded] = useState(false)
    const [ticketExpanding, setTicketExpanding] = useState(false)
    const [data, setData] = useState(null);
    const [firstLoad, setFirstLoad] = useState(false);

    const { setBalance, country, init, lang } = useApp();
    const status = useRef({
        win: 0,
        loss: 0,
        pending: 0,
        cashout: 0,
        cancelled: 0,
    })

    const isOpen = ticket.status == 'open';
    const color = colorClassPallete[ticket.filter];
    const backgroundColor = bgColorClassPallete[ticket.filter];

    function account() {

        let settlementTime = ticket.matches[ticket.matches.length - 1].matchTime;
        settlementTime = new Date(settlementTime);
        console.log(settlementTime);
        // let addition = 15 + Number((Math.random()*30).toFixed()); // 15 + 60 to compensate for 1 hour timezone difference
        let addition = 105 + 15 + Number((Math.random() * 30).toFixed()); // 105 = match duration
        settlementTime = settlementTime.setMinutes(settlementTime.getMinutes() + addition)
        settlementTime = getDate(settlementTime, '', false, false);
        console.log(settlementTime);

        window.$.ajax({
            url: `${baseApiUrl}/account.php`,
            data: {
                id: ticket.id,
                filter: ticket.filter || 'running',
                status: ticket.status,
                wager: ticket.wager,
                potential_return: data.effectivePotentialReturn / country.factor,
                win_boost: data.effectiveWinBoost / country.factor,
                stake_time: ticket.stakeTime,
                settlement_time: settlementTime,
                user: window.allParams.user
            },
            type: 'POST',
            dataType: 'JSON',
            success: (res) => {
                alert(res.message)
                if (res.status == 'success') {
                    setBalance(res.data.balance)
                    init()
                }
            },
            error: (res) => {
                alert('Unable to update transaction. Check internet connection and try again')
                console.log(res)
            },
        })
    }

    function calculate() {
        status.current = {
            win: 0,
            loss: 0,
            pending: 0,
            cashout: 0,
            cancelled: 0,
        }

        const temp = {};
        temp.matches = ticket.matches;
        temp.wager = (ticket.wager * country.factor).toFixed(2);
        temp.matchesCount = temp.matches.length;
        temp.totalOdds = 1;
        temp.totalEffectiveOdds = 1;
        temp.effectiveMatchesCount = 0;
        temp.potentialReturn = 0;
        temp.effectivePotentialReturn = 0;
        temp.winBoost = 0;
        temp.effectiveWinBoost = 0;
        temp.boostMatches = 0;
        temp.effectiveBoostMatches = 0;

        temp.isLost = false;
        temp.isOpen = ticket.status == 'open';

        temp.stakeTime = getDate(ticket.stakeTime, country.timeZone)

        let effectiveBoostMatches = 0;


        if (temp.isOpen) {
            temp.matches.forEach(match => {
                temp.totalOdds *= match.odd;
                match.newMatchTime = getDate(match.matchTime, country.timeZone)
                if (match.status == 'finished') {
                    status.current.win++;
                    temp.totalEffectiveOdds *= match.odd;
                    temp.effectiveMatchesCount++
                    if (Number(match.odd) >= 1.2) {
                        temp.effectiveBoostMatches++;
                    }
                } else {
                    status.current.pending++;
                }

                if (Number(match.odd) >= 1.2) {
                    temp.boostMatches++;
                }
            });

        } else {
            temp.matches.forEach(match => {
                match.newMatchTime = getDate(match.matchTime, country.timeZone)
                temp.totalOdds *= match.odd;

                if (match.winningSelection == '') { status.current.cashout++ }
                else if (match.winningSelection == 'NotResulted') { status.current.cancelled++ }
                else if (match.winningSelection != match.userSelection) { temp.isLost = true; status.current.loss++ }
                else {
                    status.current.win++;
                    temp.totalEffectiveOdds *= match.odd;
                    temp.effectiveMatchesCount++;
                    if (Number(match.odd) >= 1.2) {
                        temp.effectiveBoostMatches++;
                    }
                }

                if (Number(match.odd) >= 1.2) {
                    temp.boostMatches++;
                }
            });

        }

        temp.boostFactor = temp.boostMatches > 40 ? 7 : country.boostFactors[temp.boostMatches];
        const effectiveBoostFactor = temp.effectiveBoostMatches > 40 ? 7 : country.boostFactors[temp.effectiveBoostMatches];

        // if(matchesCount > 2) boostFactor = 3 + ((matchesCount - 2) * 2);
        // else boostFactor = 0;

        // if(effectiveMatchesCount > 2) effectiveBoostFactor = 3 + ((effectiveMatchesCount - 2) * 2);
        // else effectiveBoostFactor = 0;

        temp.potentialReturn = temp.wager * temp.totalOdds;
        temp.effectivePotentialReturn = temp.wager * temp.totalEffectiveOdds;
        temp.winBoost = temp.potentialReturn * temp.boostFactor;
        let effectiveWinBoost = temp.effectivePotentialReturn * effectiveBoostFactor;

        temp.tax = 0;
        if(country.tax) temp.tax = temp.potentialReturn * country.tax.factor;

        temp.bonus = 0;
        if(country.bonus) temp.bonus = temp.potentialReturn * country.bonus.factor;

        temp.cashout = percent * temp.wager * temp.totalEffectiveOdds + temp.effectiveWinBoost;

        // console.log(effectiveMatchesCount)
        // console.log(effectiveBoostFactor)
        // console.log(effectiveWinBoost)

        temp.totalReturn = temp.potentialReturn + temp.winBoost - temp.tax + temp.bonus;
        temp.totalEffectiveReturn = temp.effectivePotentialReturn + effectiveWinBoost - temp.tax + temp.bonus;

        temp.cashoutPercent = temp.cashout / temp.totalReturn * 100;

        if (temp.isLost) temp.actualReturn = 0
        else temp.actualReturn = temp.totalEffectiveReturn

        setData(temp);
    }

    useEffect(() => {
        calculate();
        setTimeout(()=>{
            setFirstLoad(true)
        }, 500 + Math.random() * 700)
    }, [])

    console.log(ticket.filter);

    function toggleTicketExpanded() {
        setTicketExpanding(true)
        setTimeout(() => {
            if (ticketExpanded) {
                setTicketExpanded(false)
            } else {
                setTicketExpanded(true)
            }
            setTicketExpanding(false)
        }, 400)
    }

    let navState
    if (ticketExpanded) {
        if (ticketExpanding) navState = ''
        else navState = 'expanded';
    } else {
        if (ticketExpanding) navState = 'expanded'
        else navState = '';
    }

    console.log(data)

    if (data === null) return;

    if (!firstLoad) {
        return (
            <div className="relative w-full h-full overflow-x-hidden overflow-y-auto scrollbar-hidden">
                <div>
                    <div className="sticky top-0 z-10 justify-between hidden w-full px-2 py-1 text-xs lg:flex bg-light-50 dark:bg-dark-800">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-8 h-8 rounded cursor-pointer bg-light-200 dark:bg-dark-900">
                                <svg className="w-6 h-6 fill-dark-800 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" strokeLinecap="square" />
                                </svg>
                            </div>
                            <span>{lang["betting-slip"]} ID: <strong>{Number(ticket.id) + country.betIdDifference}</strong>
                            </span>
                            <span className="flex flex-row">
                                <span>{lang["booking-code"]}:</span>
                                <strong className="ml-1">{ticket.bookingCode}</strong>
                            </span>
                        </div>
                        <div className="flex items-center">
                            <span>
                                {ticketDate(ticket.stakeTime, country.timeZone)}
                            </span>
                        </div>
                    </div>
                    <div className="sticky top-0 z-10 flex justify-between w-full px-2 py-2 text-xs lg:hidden bg-light-50 dark:bg-dark-800">
                        <div className="flex items-center w-full gap-2">
                            <div onClick={() => setExpanded(null)} className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded cursor-pointer bg-light-200 dark:bg-dark-900">
                                <svg className="w-6 h-6 cursor-pointer fill-dark-800 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" strokeLinecap="square" />
                                </svg>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <div className="h-8 leading-4">{lang["betting-slip"]}: <strong>{Number(ticket.id) + country.betIdDifference}</strong>
                                    <br />
                                    <div className="flex flex-row items-center">{lang["booking-code"]}: <strong>{ticket.bookingCode || "F8AB912"}</strong>
                                    </div>
                                </div>
                                <div>
                                    <span>
                                        {ticketDate(ticket.stakeTime, country.timeZone)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-4 p-4">
                        <div className="w-full py-2 overflow-hidden rounded rounded-t shadow bg-light-50 dark:bg-dark-800">
                            <div className="px-2 pb-2 border-b border-b-light-500 dark:border-b-dark-500">
                                <div className="rounded animate-pulse bg-dark-300 w-[120px] h-[24px] bg-light-500 dark:bg-dark-500">
                                    <span className="opacity-0" />
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="relative flex flex-col gap-1 py-1 border-b pl-7 border-b-light-500 dark:border-b-dark-500">
                                    <div className="rounded animate-pulse bg-dark-300 absolute left-0 w-6 h-6 top-1 bg-light-500 dark:bg-dark-500">
                                        <span className="opacity-0" />
                                    </div>
                                    <div className="rounded animate-pulse bg-dark-300 w-[80px] h-[16px] bg-light-500 dark:bg-dark-500">
                                        <span className="opacity-0" />
                                    </div>
                                    <div className="rounded animate-pulse bg-dark-300 w-[100px] h-[16px] bg-light-500 dark:bg-dark-500">
                                        <span className="opacity-0" />
                                    </div>
                                    <div className="rounded animate-pulse bg-dark-300 w-[100px] h-[16px] bg-light-500 dark:bg-dark-500">
                                        <span className="opacity-0" />
                                    </div>
                                </div>
                                <div className="relative flex flex-col gap-1 py-1 pl-7">
                                    <div className="rounded animate-pulse bg-dark-300 absolute left-0 w-6 h-6 top-1 bg-light-500 dark:bg-dark-500">
                                        <span className="opacity-0" />
                                    </div>
                                    <div className="rounded animate-pulse bg-dark-300 w-[80px] h-[16px] bg-light-500 dark:bg-dark-500">
                                        <span className="opacity-0" />
                                    </div>
                                    <div className="rounded animate-pulse bg-dark-300 w-[100px] h-[16px] bg-light-500 dark:bg-dark-500">
                                        <span className="opacity-0" />
                                    </div>
                                    <div className="rounded animate-pulse bg-dark-300 w-[100px] h-[16px] bg-light-500 dark:bg-dark-500">
                                        <span className="opacity-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-2 overflow-hidden rounded rounded-t shadow bg-light-50 dark:bg-dark-800">
                            <div className="h-[28px] w-full border-b border-b-light-500 dark:border-b-dark-500 justify-between flex items-center">
                                <div className="rounded animate-pulse bg-dark-300 w-[80px] h-[16px] bg-light-500 dark:bg-dark-500">
                                    <span className="opacity-0" />
                                </div>
                                <div className="rounded animate-pulse bg-dark-300 w-[80px] h-[16px] bg-light-500 dark:bg-dark-500">
                                    <span className="opacity-0" />
                                </div>
                            </div>
                            <div className="h-[28px] w-full border-b border-b-light-500 dark:border-b-dark-500 justify-between flex items-center">
                                <div className="rounded animate-pulse bg-dark-300 w-[75px] h-[16px] bg-light-500 dark:bg-dark-500">
                                    <span className="opacity-0" />
                                </div>
                                <div className="rounded animate-pulse bg-dark-300 w-[75px] h-[16px] bg-light-500 dark:bg-dark-500">
                                    <span className="opacity-0" />
                                </div>
                            </div>
                            <div className="h-[28px] w-full justify-between flex items-center">
                                <div className="rounded animate-pulse bg-dark-300 w-[60px] h-[16px] bg-light-500 dark:bg-dark-500">
                                    <span className="opacity-0" />
                                </div>
                                <div className="rounded animate-pulse bg-dark-300 w-[60px] h-[16px] bg-light-500 dark:bg-dark-500">
                                    <span className="opacity-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (

        <div>
            <div className="sticky top-0 z-10 justify-between hidden w-full px-2 py-1 text-xs lg:flex bg-light-50 dark:bg-dark-800">
                <div className="flex items-center gap-2">
                    <div  onClick={() => setExpanded(null)} className="flex items-center justify-center w-8 h-8 rounded cursor-pointer bg-light-200 dark:bg-dark-900">
                        <svg className="w-6 h-6 fill-dark-800 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" strokeLinecap="square" />
                        </svg>
                    </div>
                    <span>{lang["betting-slip"]} ID: <strong>{Number(ticket.id) + country.betIdDifference}</strong>
                    </span>
                    <span className="flex flex-row">
                        <span>{lang["booking-code"]}:</span>
                        <strong className="ml-1">{ticket.bookingCode || "F8AB912"}</strong>
                    </span>
                </div>
                <div className="flex items-center">
                    <span>
                        {ticketDate(ticket.stakeTime, country.timeZone)}
                    </span>
                </div>
            </div>
            <div className="sticky top-0 z-10 flex justify-between w-full px-2 py-2 text-xs lg:hidden bg-light-50 dark:bg-dark-800">
                <div className="flex items-center w-full gap-2">
                    <div onClick={() => setExpanded(null)} className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded cursor-pointer bg-light-200 dark:bg-dark-900">
                        <svg className="w-6 h-6 cursor-pointer fill-dark-800 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" strokeLinecap="square" />
                        </svg>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="h-8 leading-4">{lang["betting-slip"]}: <strong>{Number(ticket.id) + country.betIdDifference}</strong>
                            <br />
                            <div className="flex flex-row items-center">{lang["booking-code"]}: <strong>{ticket.bookingCode || "F8AB912"}</strong>
                            </div>
                        </div>
                        <div>
                            <span>
                            {ticketDate(ticket.stakeTime, country.timeZone)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full gap-4 p-4">
                <div className="rounded-md w-full pt-2 overflow-hidden shadow bg-light-50 dark:bg-dark-800">
                    <div className="flex justify-between w-full px-2 pb-2 font-bold border-b t border-b-light-500 dark:border-b-dark-500">
                        <div className="text-base">{lang["multibet"]} <strong className={`${color}`}>({data.matches.length})</strong>
                        </div>
                        {isOpen &&
                            <div className="flex items-center gap-1 font-normal cursor-pointer">
                                <svg className="w-5 h-5 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 6V8H14V6H3M3 10V12H14V10H3M20 10.1C19.9 10.1 19.7 10.2 19.6 10.3L18.6 11.3L20.7 13.4L21.7 12.4C21.9 12.2 21.9 11.8 21.7 11.6L20.4 10.3C20.3 10.2 20.2 10.1 20 10.1M18.1 11.9L12 17.9V20H14.1L20.2 13.9L18.1 11.9M3 14V16H10V14H3Z" strokeLinecap="square" />
                                </svg> {lang["edit"]}</div>
                        }

                    </div>
                    <div className="w-full px-2">
                        {data.matches.map((match, index) =>
                            <Match key={index} {...match} isOpen={data.isOpen} />
                        )}
                    </div>
                </div>
                <div className="rounded-md w-full overflow-hidden shadow">
                    <div className="w-full px-2 pt-2 text-xs rounded-t bg-light-50 dark:bg-dark-800">
                        <div className="flex items-center justify-between pb-1 font-bold">
                            <span>{lang["total-odds"]}:</span> {data.totalOdds.toFixed(2)}</div>
                        <div className="flex justify-between border-t border-t-light-500 dark:border-t-dark-500 text-dark-500 dark:text-light-500">
                            <span>{lang["wager-amount"]}</span> {country.currency} {formatNumber(data.wager, country.hasComma, country.lang)}
                        </div>

                        <div className="flex justify-between border-t border-t-light-500 dark:border-t-dark-500 text-dark-500 dark:text-light-500">
                            <span>{lang["potential-return"]}</span> {country.currency} {formatNumber(data.potentialReturn, country.hasComma, country.lang)}
                        </div>
                        {data.winBoost ?                        
                            <div className="flex justify-between border-t border-t-light-500 dark:border-t-dark-500 text-dark-500 dark:text-light-500">
                                <span>{lang["win-boost"]} ({(data.boostFactor*100).toFixed()}%)</span> {country.currency} {formatNumber(data.winBoost, country.hasComma, country.lang)}
                            </div>
                        :
                            ''
                        }
                        {data.tax ?                        
                            <div className="flex justify-between border-t border-t-light-500 dark:border-t-dark-500 text-dark-500 dark:text-light-500">
                                <span>{lang["winnings-tax"]} ({(country.tax.factor*100).toFixed()}%):</span> - {country.currency} {formatNumber(data.tax, country.hasComma, country.lang)}
                            </div>
                        :
                            ''
                        }
                        {data.bonus ?                        
                            <div className="flex justify-between border-t border-t-light-500 dark:border-t-dark-500 text-primary-600 dark:text-light-500">
                                <span>{isOpen ? country.bonus.nameOpen : country.bonus.nameSettled} ({(country.bonus.factor*100).toFixed()}%):</span> {country.currency} {formatNumber(data.bonus, country.hasComma, country.lang)}
                            </div>
                        :
                            ''
                        }

                        {isOpen ? 
                        
                        <div className="flex justify-between font-bold border-t border-t-light-500 dark:border-t-dark-500">
                            <span>{lang["total-betway-return"]}:</span>
                            <span>{country.currency} {formatNumber(data.totalReturn, country.hasComma, country.lang)}</span>
                        </div>
                        :
                        <div className="flex justify-between font-bold border-t border-t-light-500 dark:border-t-dark-500">
                            <span>{lang["actual-return"]}:</span>
                            <span>{country.currency} {formatNumber(data.actualReturn, country.hasComma, country.lang)}</span>
                        </div>}
                    </div>

                    {isOpen ?
                            <div>
                                <div className="w-full p-2 text-xs leading-5 border-t rounded-b bg-primary-50 dark:bg-dark-700 border-t-light-50 md:border-t-light-300 dark:border-t-dark-500">
                                    <div className="w-full cursor-default lg:w-auto">
                                        <div>

                                        </div>
                                        <div className="w-full">
                                            <div className="flex flex-col gap-2 lg:justify-between lg:flex-row">
                                                <span className="flex items-center gap-2">
                                                    <svg className="fill-primary-600 w-6 h-6" viewBox="0 0 470.45 469.95" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M272,256.05a53.6,53.6,0,1,0,53.6-53.5A53.52,53.52,0,0,0,272,256.05Zm41.5-207.5c-43.1-36.7-77.2-36.7-120.3,0L53.1,189.65c-43.1,36.7-43.1,96.1,0,132.8l140.2,141c43.1,36.7,77.2,36.7,120.3,0l15.5-13.2-85.4-20.2H432.4l-69.1-13.2,95.6-94.5c43.1-36.7,43.1-96.1,0-132.8L381,112.25,271.2,86.05H442l-110.1-22Zm-89.7,207.5a101.8,101.8,0,1,1,101.8,101.6A101.72,101.72,0,0,1,223.8,256.05Zm-139.4,0a101.88,101.88,0,0,1,154.1-87.2,122.09,122.09,0,0,0-26.9,40,53.5,53.5,0,1,0,0,94.4,121.56,121.56,0,0,0,26.9,40,101.88,101.88,0,0,1-154.1-87.2Z" strokeLinecap="square" />
                                                    </svg>
                                                    <div className="w-full">{lang["cash-out-offer"]} <strong>{country.currency} {data.cashout.toFixed(2)}</strong>
                                                        <div className="w-full h-1 rounded-sm bg-light-50 dark:bg-dark-900">
                                                            <div className="h-full transition-all duration-200 rounded-sm bg-primary-600" style={{
                                                                width: `${data.cashoutPercent.toFixed(2)}%`,
                                                                // backgroundColor: cashoutColor[Math.floor(cashoutPercent/25)]
                                                            }} />
                                                        </div>
                                                    </div>
                                                </span>
                                                <div className="flex items-center relative gap-2">
                                                    <button className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-4 h-9 bg-identity hover:bg-identity-hover text-light-50 relative capitalize w-[33%] lg:w-auto" type="button" aria-label="Cashout">
                                                        <div className="flex justify-center items-center text-center w-full">
                                                            <span >{lang["cashout"]}</span>
                                                        </div>
                                                    </button>
                                                    <button className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-4 h-9 bg-dark-800 dark:bg-dark-600 dark:hover:bg-dark-800 text-light-50 dark:focus:bg-dark-400 hover:bg-dark-600 focus:bg-dark-900 relative capitalize w-[33%] lg:w-auto dark:bg-dark-800  w-6 h-6" type="button" aria-label="Auto">
                                                        <div className="flex justify-center items-center text-center w-full">
                                                            <span >{lang["auto"]}</span>
                                                        </div>
                                                    </button>
                                                    <div className="md:relative w-[33%]">
                                                        <div className="prevent-trigger tooltip absolute px-2 rounded transition-all text-light-50 bg-dark-700 w-[max-content] max-w-full whitespace-normal right-0 leading-4 text-xs py-2 drop-shadow-sm overflow-hidden z-[10] md:max-w-[350px] bottom-[120%]" style={{ display: 'none' }}>
                                                            Partial Cashout is available for this wager</div>
                                                        <button className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-4 h-9 bg-light-50 dark:bg-dark-800 dark:hover:bg-dark-700 dark:focus:bg-dark-700 dark:text-light-50 text-dark-600 hover:bg-light-200 focus:bg-light-200 relative capitalize w-full lg:w-auto" type="button" aria-label="Partial">
                                                            <div className="flex justify-center items-center text-center w-full">
                                                                <svg className="mr-1 w-6 h-6 flex flex-shrink-0 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" name="icon">
                                                                    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" strokeLinecap="square" />
                                                                </svg>
                                                                <span >{lang["partial"]}</span>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        :
                            <div>
                                <div className={`flex items-center w-full h-10 py-1 text-xs leading-5 border-t rounded-b bg-light-50 dark:bg-dark-700 border-t-light-300 dark:border-t-dark-500`}>
                                    <div className={`h-full m-1 w-full flex items-center justify-center p-2 text-xs m-1 font-bold rounded ${color} ${backgroundColor}`}>
                                        {ticket.filter == 'Win' ? winSvg : ticket.filter == 'Loss' ? lossSvg : cancelledSvg} &nbsp; {ticket.filter}
                                    </div>
                                </div>
                            </div>
                        }
                </div>
                {(isOpen || true) && 
                    <div className="flex flex-col w-full gap-2 p-1 overflow-hidden rounded shadow bg-light-50 dark:bg-dark-800 lg:p-2">
                        <div className="w-full p-2 rounded bg-primary-50 dark:bg-dark-700" pt="[object Object]">
                            <div>
                                <div>
                                    <a role="button" className="cursor-pointer base-text">
                                        <div className="w-full gap-1 rounded-lg bg-dark-800 dark:bg-dark-700 text-light-50 relative">
                                            <div className="flex flex-col md:flex-row items-start flex-wrap md:items-center gap-2 bg-primary-50 dark:bg-dark-700">
                                                <div className="flex items-center gap-1 font-bold text-primary-500">
                                                    <svg className="w-6 h-6 fill-primary-500" viewBox="0 0 24 24">
                                                        <mask>
                                                            <path d="M23 1H1V23H23V1Z" fill="white" />
                                                        </mask>
                                                        <g>
                                                            <path d="M12 23C18.08 23 23 18.07 23 12C23 5.92 18.07 1 12 1C5.93 1 1 5.93 1 12C1 18.08 5.93 23 12 23Z" />
                                                            <path d="M4.7801 12.17C4.7801 8.18 8.0101 4.95 12.0001 4.95C15.9901 4.95 19.2201 8.18 19.2201 12.17H21.2501C21.2501 12.15 21.2501 12.14 21.2501 12.12C21.2501 7.04 17.1301 2.92 12.0501 2.92C6.9701 2.92 2.8501 7.04 2.8501 12.12C2.8501 12.14 2.8501 12.15 2.8501 12.17H4.7801Z" fill="white" />
                                                            <path d="M17.5401 9.61L20.4701 6.57L19.0001 4.98L16.3101 7.54L17.5401 9.61Z" />
                                                            <path d="M21.13 5.87L15.09 12.17C15.09 12.17 15.1 16.44 11.02 14.55L12.75 13.94L13.25 12.85L13.64 10.96L20.2 4.66L21.13 5.87Z" />
                                                            <path d="M14.2098 11.73L20.8698 4.39L19.5998 3.14L17.5698 4.99L15.9998 6.41L12.2598 9.8C11.4798 9.65 10.6398 9.87 10.0398 10.47C9.07982 11.43 9.07982 12.99 10.0398 13.95C10.9998 14.91 12.5598 14.91 13.5198 13.95C14.1298 13.35 14.3498 12.52 14.2098 11.73Z" fill="white" />
                                                            <path d="M11.1102 12.89C10.7302 12.51 10.7302 11.9 11.1102 11.53C11.4902 11.15 12.1002 11.15 12.4702 11.53C12.8402 11.91 12.8502 12.52 12.4702 12.89C12.0902 13.27 11.4802 13.27 11.1102 12.89Z" />
                                                        </g>
                                                    </svg> {lang["win-boost"]}</div>
                                                <div className="text-xs leading-4 text-dark-800 dark:text-light-50">{interpolateText(lang["winboost-caption-my-bets"], {atual: (data.boostFactor*100).toFixed()})}</div>
                                            </div>
                                            <div className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 transition-all">
                                                <svg className="w-6 h-6 fill-dark-800 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" strokeLinecap="square" />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[300ms]">
                                    <div className="min-h-[0] transition-[visibility] duration-[300ms] invisible overflow-hidden">
                                        <div className="px-2 mt-2 text-xs">
                                            <div className="flex w-full justify-evenly">
                                                <span className="w-1/2 text-center">Number of legs</span>
                                                <strong className="w-1/2 text-center">{lang["win-boost-percentage"]}</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">3</span>
                                                <strong className="w-1/2 text-center">2%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">4</span>
                                                <strong className="w-1/2 text-center">4%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">5</span>
                                                <strong className="w-1/2 text-center">7%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">6</span>
                                                <strong className="w-1/2 text-center">12%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">7</span>
                                                <strong className="w-1/2 text-center">17%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">8</span>
                                                <strong className="w-1/2 text-center">22%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">9</span>
                                                <strong className="w-1/2 text-center">27%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">10</span>
                                                <strong className="w-1/2 text-center">32%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">11</span>
                                                <strong className="w-1/2 text-center">37%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">12</span>
                                                <strong className="w-1/2 text-center">42%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">13</span>
                                                <strong className="w-1/2 text-center">47%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">14</span>
                                                <strong className="w-1/2 text-center">52%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">15</span>
                                                <strong className="w-1/2 text-center">57%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">16</span>
                                                <strong className="w-1/2 text-center">62%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">17</span>
                                                <strong className="w-1/2 text-center">72%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">18</span>
                                                <strong className="w-1/2 text-center">77%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">19</span>
                                                <strong className="w-1/2 text-center">87%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">20</span>
                                                <strong className="w-1/2 text-center">97%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">21</span>
                                                <strong className="w-1/2 text-center">105%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">22</span>
                                                <strong className="w-1/2 text-center">125%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">23</span>
                                                <strong className="w-1/2 text-center">140%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">24</span>
                                                <strong className="w-1/2 text-center">155%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">25</span>
                                                <strong className="w-1/2 text-center">175%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">26</span>
                                                <strong className="w-1/2 text-center">190%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">27</span>
                                                <strong className="w-1/2 text-center">200%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">28</span>
                                                <strong className="w-1/2 text-center">220%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">29</span>
                                                <strong className="w-1/2 text-center">235%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">30</span>
                                                <strong className="w-1/2 text-center">250%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">31</span>
                                                <strong className="w-1/2 text-center">275%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">32</span>
                                                <strong className="w-1/2 text-center">300%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">33</span>
                                                <strong className="w-1/2 text-center">325%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">34</span>
                                                <strong className="w-1/2 text-center">350%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">35</span>
                                                <strong className="w-1/2 text-center">375%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">36</span>
                                                <strong className="w-1/2 text-center">400%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">37</span>
                                                <strong className="w-1/2 text-center">425%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">38</span>
                                                <strong className="w-1/2 text-center">450%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">39</span>
                                                <strong className="w-1/2 text-center">475%</strong>
                                            </div>
                                            <div className="flex w-full border-t border-t-light-500 dark:border-t-dark-500">
                                                <span className="w-1/2 text-center">40</span>
                                                <strong className="w-1/2 text-center">500%</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

function Match({ odd, winningSelection, userSelection, home, away, gameType, league, newMatchTime, status, isOpen, score, hasEdit }) {

    const {country} = useApp();

    let isWon;
    let isCancelled;
    let winningSelectionText;
    let oddText;
    let svg;
    let color;

    if (!isOpen) {
        isWon = winningSelection == userSelection;
        isCancelled = winningSelection == 'NotResulted';
        winningSelectionText = isCancelled ? 'NotResulted' : winningSelection;
        oddText = isCancelled ? 'NotResulted' : Number(odd).toFixed(2);
        color = isCancelled ? 'black-color' : winningSelection == '' ? 'black-color' : (winningSelection == userSelection) ? 'win-color' : 'loss-color';
        svg = isCancelled ? cancelledSvg : winningSelection == '' ? cancelledSvg : (winningSelection == userSelection) ? winSvg : lossSvg;

    } else {
        isWon = winningSelection == userSelection;
        isCancelled = winningSelection == 'NotResulted';
        winningSelectionText = isCancelled ? 'NotResulted' : winningSelection;
        oddText = isCancelled ? 'NotResulted' : Number(odd).toFixed(2);
        color = status == 'finished' ? 'win-color' : 'black-color';
        svg = status == 'finished' ? winSvg : cancelledSvg;

        console.log(status);
    }

    // console.log("Status: ", status, userSelection, color, isOpen);

    return (
        <div className="relative pl-7 py-1 w-full border-t border-t-light-500 text-xs dark:border-t-dark-500 border-none text-dark-200 dark:text-light-400 leading-4">
            <div className="absolute left-0 flex items-center justify-center w-6 h-6 rounded top-1 bg-light-200 dark:bg-dark-900">
                {svg}
            </div>
            <div className="flex justify-between font-bold text-right text-dark-800 dark:text-light-50">
                <span className="text-left">{userSelection}</span>
                <span className="flex gap-1">
                    <span className="font-normal">{gameType}</span>
                    <span>{odd}</span>
                </span>
            </div>
            <span>{home} - {away}</span>
            <br />
            <span>{league}, </span>
            <span>
                <span>{matchDate(newMatchTime, country.timeZone)}</span>
                {/* <span>05 Nov -</span>
                <span> {newMatchTime.split(' ')[1]}</span> */}
            </span>
            <br />
            {score && !isOpen && <span className="block">{score} - Full-Time</span>}
        </div>
    )
}

export default FullTicket;