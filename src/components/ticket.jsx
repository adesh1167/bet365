import { memo, useEffect, useRef, useState } from "react";
import { useApp } from "../contexts/appContext";
import getDate from "../functions/getDate";
import { bgColorClassPallete, colorClassPallete, colorPallete, statusTextClassPallete } from "../data/colors";
import { baseApiUrl } from "../data/url";
import { cancelledSvg, lossSvg, winSvg } from "../data/svgs";
import formatNumber from "../functions/formatNumber";


const Ticket = memo(({ ticket, percent = 0.9, setExpanded, index, isDeleted = false, setAccountClick = () => { }, setLoading = () => {} }) => {


    const [ticketExpanded, setTicketExpanded] = useState(false)
    const [ticketExpanding, setTicketExpanding] = useState(false)
    const [data, setData] = useState(null);
    const [firstLoad, setFirstLoad] = useState(false);

    const { setBalance, country, init, user, lang } = useApp();
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

        console.log(data);
        // return;

        setLoading(prev => ({...prev, account: true}))

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
                user
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
            complete: ()=>{
                setLoading(prev => ({...prev, account: false}))
            }
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

        temp.stakeTime = getDate(ticket.stakeTime, country.timeZone, undefined, undefined, true)

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
                        temp.effectiveBoostMatches++;// console.log("Effective Boost Matches: :", temp.effectiveBoostMatches)
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
        temp.effectiveWinBoost = temp.effectivePotentialReturn * effectiveBoostFactor;

        temp.tax = 0;
        if (country.tax) temp.tax = temp.potentialReturn * country.tax.factor;

        temp.bonus = 0;
        if (country.bonus) temp.bonus = temp.potentialReturn * country.bonus.factor;

        temp.cashout = percent * temp.wager * temp.totalEffectiveOdds + temp.effectiveWinBoost;

        temp.totalReturn = temp.potentialReturn + temp.winBoost - temp.tax + temp.bonus;
        temp.totalEffectiveReturn = temp.effectivePotentialReturn + temp.effectiveWinBoost - temp.tax + temp.bonus;

        temp.cashoutPercent = temp.cashout / temp.totalReturn * 100;

        if (temp.isLost) temp.actualReturn = 0
        else temp.actualReturn = temp.totalEffectiveReturn

        setData(temp);
    }

    useEffect(() => {
        calculate();
        setTimeout(() => {
            setFirstLoad(true)
        }, 800 + Math.random() * 1000)
    }, [])

    useEffect(() => {
        if (data) {
            setAccountClick(account);
        }
    }, [data])

    // console.log(ticket.filter);

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

    if (data === null) return;

    return (
        <div onClick={() => setExpanded(index)} className={`w-full text-xs leading-4 rounded shadow cursor-pointer bg-light-50 dark:bg-dark-800 dark:shadow-none ${isDeleted ? "opacity-30" : ""} transition-opacity duration-300`}>
            <div className="flex lg:whitespace-nowrap w-full gap-2 lg:px-[6px] px-2 py-1 lg:py-1 lg:pb-[2px] justify-between items-center lg:border-b lg:border-b-light-500 dark:lg:border-b-dark-500">
                <div className="flex flex-col items-start w-1/2 leading-5 lg:items-center lg:flex-row lg:gap-2">
                    <span>{lang["betslip-id"]}:<strong className="ml-1">{Number(ticket.id) + country.betIdDifference}</strong>
                    </span>
                    <div className="flex flex-row items-center justify-center">{lang["booking-code"]}:<strong className="ml-1">{ticket.bookingCode}</strong>
                    </div>
                    <span className="hidden lg:block">
                        <span>
                            <span>{data.stakeTime.split(' ')[0]}</span>
                            <span> | {data.stakeTime.split(' ')[1]}</span>
                        </span>
                    </span>
                </div>
                <div className="flex flex-col items-end justify-end w-1/2 leading-5 lg:items-center lg:flex-row lg:gap-2">
                    <span className="flex lg:hidden">
                        <span>
                            <span>{data.stakeTime.split(' ')[0]}</span>
                            <span> | {data.stakeTime.split(' ')[1]}</span>
                        </span>
                    </span>
                    <span className="hidden lg:flex">Actual Return: {country.currency} {formatNumber(data.actualReturn, country.hasComma, country.lang)}</span>
                    <div className="flex gap-1 hidden lg:flex">
                        <svg className="w-6 h-6 fill-light-500 dark:fill-dark-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 15H6L13 1V9H18L11 23V15Z" strokeLinecap="square" />
                        </svg>
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
                        </svg>
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                            <path className="fill-insurance" d="M19.33 10.8102L16.83 12.9802C16.69 14.1202 16.22 15.2102 15.47 16.0902C14.25 17.4402 12.74 18.5102 11.06 19.2202C10.96 19.2702 10.86 19.2902 10.75 19.2902C10.64 19.2902 10.53 19.2702 10.43 19.2202C8.76004 18.5102 7.26004 17.4502 6.05004 16.1002C5.12004 15.0102 4.62004 13.6202 4.63004 12.1902V8.15021C4.63004 7.74021 4.95004 7.40022 5.37004 7.39021C7.18004 7.30021 8.90004 6.59021 10.24 5.38021C10.53 5.13021 10.96 5.13021 11.25 5.38021C12.21 6.25022 13.37 6.86021 14.61 7.17021L16.45 5.12021C13.27 4.69021 11.44 2.36021 11.35 2.25021C11.2 2.07021 10.98 1.97021 10.75 1.97021C10.52 1.97021 10.3 2.07021 10.15 2.25021C10.12 2.29021 7.48004 5.69021 3.04004 5.13021C2.83004 5.08021 2.61004 5.15021 2.45004 5.30022C2.28004 5.44022 2.19004 5.65021 2.19004 5.87021V12.1802C2.18004 14.2002 2.90004 16.1502 4.21004 17.6802C5.93004 19.5902 8.08004 21.0602 10.47 21.9902C10.66 22.0702 10.87 22.0702 11.06 21.9902C13.45 21.0602 15.59 19.5902 17.31 17.6802C18.62 16.1502 19.34 14.2002 19.33 12.1802V10.8102Z" />
                            <path className="fill-insurance" d="M21.4401 6.28L11.4501 16.26C11.2101 16.51 10.8901 16.65 10.5401 16.65C10.2001 16.65 9.87008 16.51 9.63008 16.26L5.54008 12.2C5.22008 11.88 5.09008 11.4 5.21008 10.96C5.33008 10.52 5.68008 10.17 6.12008 10.05C6.56008 9.93001 7.04008 10.06 7.36008 10.38L10.5401 13.55L19.6101 4.46C19.9301 4.14 20.4101 4.01 20.8501 4.13C21.2901 4.25 21.6401 4.59 21.7601 5.04C21.8901 5.48 21.7601 5.95 21.4401 6.28Z" />
                        </svg>
                    </div>
                    {isOpen &&
                        <div data-v-e75df2eb="" className="relative text-xs">
                            <button
                                data-v-e75df2eb=""
                                className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 relative w-full px-2 my-1 text-xs h-7 bg-light-200 hover:bg-light-500 dark:bg-dark-700 dark:hover:bg-dark-600 md:w-auto"
                                type="button"
                                aria-label="Betway Feed"
                                id=""
                            >
                                {/**/}
                                <div className="flex justify-center items-center text-center w-full">
                                <svg
                                    data-v-e75df2eb=""
                                    className="mr-1 w-5 h-5 fill-[currentColor] fill-[grayscale]"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    name="icon"
                                >
                                    <path
                                    className=""
                                    d="M5,2H19A1,1 0 0,1 20,3V13A1,1 0 0,1 19,14H5A1,1 0 0,1 4,13V3A1,1 0 0,1 5,2M6,4V12H18V4H6M20,17A1,1 0 0,1 19,18H5A1,1 0 0,1 4,17V16H20V17M20,21A1,1 0 0,1 19,22H5A1,1 0 0,1 4,21V20H20V21Z"
                                    strokeLinecap="square"
                                    />
                                </svg>
                                <span className="">{lang["feeds"]}</span>
                                <svg
                                    className="ml-1 fill-[currentColor] w-5 h-5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    name="icon"
                                >
                                    <path
                                    className=""
                                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                                    strokeLinecap="square"
                                    />
                                </svg>
                                </div>
                            </button>
                            <div
                                data-v-e75df2eb=""
                                className="absolute z-[100] right-0 bg-light-50 dark:bg-dark-800 rounded-lg shadow-[0_8px_16px_0_rgba(0,0,0,0.08)] transition-all max-h-[200px] overflow-hidden flex flex-col bg-light-200 top-[calc(1.5rem+12px)]"
                                style={{ display: "none" }}
                            >
                                <div
                                data-v-e75df2eb=""
                                className="w-[250px] md:w-auto md:min-w-[350px] flex-col md:flex-row flex md:gap-2 flex-nowrap justify-between px-2 py-2 border-b border-light-300 dark:border-dark-500 last:border-0"
                                >
                                <button
                                    data-v-e75df2eb=""
                                    className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-2 h-7 relative px-2 my-1 text-xs h-7 bg-light-200 hover:bg-light-500 dark:bg-dark-700 dark:hover:bg-dark-600 w-full"
                                    type="button"
                                    aria-label="Share code on The Betway Feed"
                                    id=""
                                >
                                    {/**/}
                                    <div className="flex justify-center items-center text-center w-full">
                                    {/**/}
                                    <span className="">Share code on The Betway Feed</span>
                                    {/**/}
                                    </div>
                                </button>
                                <button
                                    data-v-e75df2eb=""
                                    className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-2 h-7 relative px-2 my-1 text-xs h-7 bg-light-200 hover:bg-light-500 dark:bg-dark-700 dark:hover:bg-dark-600 w-full"
                                    type="button"
                                    aria-label="Create Post"
                                    id=""
                                >
                                    {/**/}
                                    <div className="flex justify-center items-center text-center w-full">
                                    {/**/}
                                    <span className="">Create Post</span>
                                    {/**/}
                                    </div>
                                </button>
                                </div>
                                <div data-v-e75df2eb="" className="overflow-y-scroll scrollbar-hidden">
                                <div
                                    data-v-e75df2eb=""
                                    className="w-[250px] md:w-auto md:min-w-[350px] flex flex-nowrap justify-between px-2 py-2 border-b border-light-300 dark:border-dark-500 last:border-0"
                                >
                                    <div
                                    data-v-e75df2eb=""
                                    className="overflow-hidden flex items-center text-dark-700 dark:text-light-50"
                                    >
                                    <div
                                        data-v-e75df2eb=""
                                        className="bg-light-200 rounded-full overflow-hidden shadow-lg object-fill flex justify-center items-center flex-shrink-0 w-[28px] h-[28px]"
                                    >
                                        <div
                                        className="bg-dark-800 dark:bg-light-50 dark:text-dark-600 rounded-full flex items-center justify-center text-light-50 font-bold p-[2px] shrink-0"
                                        style={{ width: 28, height: 28 }}
                                        >
                                        AH
                                        </div>
                                    </div>
                                    <div
                                        data-v-e75df2eb=""
                                        className="overflow-hidden text-ellipsis whitespace-nowrap pr-2 ml-3 font-bold"
                                    >
                                        Al Hilal Riyadh
                                    </div>
                                    </div>
                                    <div data-v-e75df2eb="" className="flex items-center">
                                    <button
                                        className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-2 h-7 bg-light-50 dark:bg-dark-800 dark:hover:bg-dark-700 dark:focus:bg-dark-700 dark:text-light-50 text-dark-600 hover:bg-light-200 focus:bg-light-200 relative w-full"
                                        type="button"
                                        aria-label="Follow"
                                        id=""
                                    >
                                        {/**/}
                                        <div className="flex justify-center items-center text-center w-full">
                                        <svg
                                            className="mr-1 fill-[currentColor] w-5 h-5"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            name="icon"
                                        >
                                            <path
                                            className=""
                                            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                                            strokeLinecap="square"
                                            />
                                        </svg>
                                        <span className="">Follow</span>
                                        {/**/}
                                        </div>
                                    </button>
                                    {/**/}
                                    </div>
                                </div>
                                <div
                                    data-v-e75df2eb=""
                                    className="w-[250px] md:w-auto md:min-w-[350px] flex flex-nowrap justify-between px-2 py-2 border-b border-light-300 dark:border-dark-500 last:border-0"
                                >
                                    <div
                                    data-v-e75df2eb=""
                                    className="overflow-hidden flex items-center text-dark-700 dark:text-light-50"
                                    >
                                    <div
                                        data-v-e75df2eb=""
                                        className="bg-light-200 rounded-full overflow-hidden shadow-lg object-fill flex justify-center items-center flex-shrink-0 w-[28px] h-[28px]"
                                    >
                                        <div
                                        className="bg-dark-800 dark:bg-light-50 dark:text-dark-600 rounded-full flex items-center justify-center text-light-50 font-bold p-[2px] shrink-0"
                                        style={{ width: 28, height: 28 }}
                                        >
                                        AF
                                        </div>
                                    </div>
                                    <div
                                        data-v-e75df2eb=""
                                        className="overflow-hidden text-ellipsis whitespace-nowrap pr-2 ml-3 font-bold"
                                    >
                                        Al Fateh SC
                                    </div>
                                    </div>
                                    <div data-v-e75df2eb="" className="flex items-center">
                                    <button
                                        className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-2 h-7 bg-light-50 dark:bg-dark-800 dark:hover:bg-dark-700 dark:focus:bg-dark-700 dark:text-light-50 text-dark-600 hover:bg-light-200 focus:bg-light-200 relative w-full"
                                        type="button"
                                        aria-label="Follow"
                                        id=""
                                    >
                                        {/**/}
                                        <div className="flex justify-center items-center text-center w-full">
                                        <svg
                                            className="mr-1 fill-[currentColor] w-5 h-5"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            name="icon"
                                        >
                                            <path
                                            className=""
                                            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                                            strokeLinecap="square"
                                            />
                                        </svg>
                                        <span className="">Follow</span>
                                        {/**/}
                                        </div>
                                    </button>
                                    {/**/}
                                    </div>
                                </div>
                                <div
                                    data-v-e75df2eb=""
                                    className="w-[250px] md:w-auto md:min-w-[350px] flex flex-nowrap justify-between px-2 py-2 border-b border-light-300 dark:border-dark-500 last:border-0"
                                >
                                    <div
                                    data-v-e75df2eb=""
                                    className="overflow-hidden flex items-center text-dark-700 dark:text-light-50"
                                    >
                                    <div
                                        data-v-e75df2eb=""
                                        className="bg-light-200 rounded-full overflow-hidden shadow-lg object-fill flex justify-center items-center flex-shrink-0 w-[28px] h-[28px]"
                                    >
                                        <div
                                        className="bg-dark-800 dark:bg-light-50 dark:text-dark-600 rounded-full flex items-center justify-center text-light-50 font-bold p-[2px] shrink-0"
                                        style={{ width: 28, height: 28 }}
                                        >
                                        PL
                                        </div>
                                    </div>
                                    <div
                                        data-v-e75df2eb=""
                                        className="overflow-hidden text-ellipsis whitespace-nowrap pr-2 ml-3 font-bold"
                                    >
                                        Professional League
                                    </div>
                                    </div>
                                    <div data-v-e75df2eb="" className="flex items-center">
                                    <button
                                        className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-2 h-7 bg-light-50 dark:bg-dark-800 dark:hover:bg-dark-700 dark:focus:bg-dark-700 dark:text-light-50 text-dark-600 hover:bg-light-200 focus:bg-light-200 relative w-full"
                                        type="button"
                                        aria-label="Follow"
                                        id=""
                                    >
                                        {/**/}
                                        <div className="flex justify-center items-center text-center w-full">
                                        <svg
                                            className="mr-1 fill-[currentColor] w-5 h-5"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            name="icon"
                                        >
                                            <path
                                            className=""
                                            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                                            strokeLinecap="square"
                                            />
                                        </svg>
                                        <span className="">Follow</span>
                                        {/**/}
                                        </div>
                                    </button>
                                    {/**/}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>

            </div>
            <div className="flex w-full lg:gap-2 lg:pr-[6px] lg:pl-[2px] p-1 pb-0 border-t lg:py-0 border-t-light-500 dark:border-t-dark-500 lg:border-none justify-between">
                <div className="flex flex-col gap-1 py-1 m-1 overflow-hidden md:flex-row">
                    <div className="flex justify-start gap-1 p-1 mr-auto border rounded shrink-0 md:mr-0 border-light-500 dark:border-dark-500">
                        <div>{lang["multibet"]} <strong className={`${statusTextClassPallete[ticket.filter]}`}>({data.matches.length})</strong>
                        </div>
                        <div className="flex">
                            <div className="w-[1px] h-full bg-light-500 dark:bg-dark-500 mx-[2px]" />
                            <div className="flex gap-[2px] px-[2px] text-dark-800 dark:text-light-50">
                                <svg className="w-4 h-4 fill-dark-800 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" strokeLinecap="square" />
                                </svg> {Number(status.current.pending) + Number(status.current.cancelled) + Number(status.current.cashout)}</div>
                            <div className="w-[1px] h-full bg-light-500 dark:bg-dark-500 mx-[2px]" />
                            <div className="flex gap-[2px] px-[2px] text-primary-600">
                                <svg className="w-4 h-4 fill-primary-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" strokeLinecap="square" />
                                </svg> {status.current.win}</div>
                            <div className="w-[1px] h-full bg-light-500 dark:bg-dark-500 mx-[2px]" />
                            <div className="flex gap-[2px] px-[2px] text-error-500">
                                <svg className="w-4 h-4 fill-error-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" strokeLinecap="square" />
                                </svg> {status.current.loss}</div>
                        </div>
                    </div>
                    <div className="flex gap-1 overflow-hidden place-items-center shrink-1">
                        <span className="truncate text-light-900">
                            {data.matches.map((match, index) =>
                                <span key={index}> {match.home} - {match.away} {(index < data.matches.length - 1) && '| '}</span>
                            )}
                        </span>
                    </div>
                    {isOpen && <div className="flex items-center">
                        <svg className="w-6 h-6 fill-dark-800 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6V8H14V6H3M3 10V12H14V10H3M20 10.1C19.9 10.1 19.7 10.2 19.6 10.3L18.6 11.3L20.7 13.4L21.7 12.4C21.9 12.2 21.9 11.8 21.7 11.6L20.4 10.3C20.3 10.2 20.2 10.1 20 10.1M18.1 11.9L12 17.9V20H14.1L20.2 13.9L18.1 11.9M3 14V16H10V14H3Z" strokeLinecap="square" />
                        </svg> {lang["edit"]}
                    </div>
                    }
                </div>
                <div className="flex flex-col py-1 pl-1 md:flex-row relative">
                    <button className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-2 h-7 relative h-6 my-1 text-xs bg-light-200 hover:bg-light-500 dark:bg-dark-700 dark:hover:bg-dark-600" type="button" aria-label="Detail View">
                        <div className="flex justify-center items-center text-center w-full">
                            <span >{lang["detail-view"]}</span>
                            <svg className="ml-1 fill-[currentColor] w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" name="icon">
                                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" strokeLinecap="square" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
            <div className="flex w-full lg:flex-row lg:justify-between lg:gap-2 lg:pr-[6px] lg:pl-[2px] lg:py-[2px] p-1 pb-0 items-center flex-col border-t border-t-light-500 dark:border-t-dark-500">
                <div className="flex flex-col w-full py-1 m-1 lg:w-auto lg:justify-start">
                    <div className="flex flex-col justify-between w-full lg:flex-row lg:w-auto">
                        <div className="flex flex-row justify-between lg:justify-start lg:whitespace-nowrap">
                            <span>{lang["wager-amount"]}: </span>
                            <span className="ml-1">{country.currency} {formatNumber(data.wager, country.hasComma, country.lang)}</span>
                            <span className="hidden mx-1 lg:inline">|</span>
                        </div>
                        <div className="flex flex-row justify-between w-full lg:justify-start">
                            <span>{lang["total-odds"]}:</span>
                            <span className="ml-1 font-bold">{data.totalOdds.toFixed(2)}</span>
                            <span className="hidden mx-1 lg:inline">|</span>
                        </div>
                        {isOpen ?

                            <div className="flex flex-row justify-between lg:justify-start lg:whitespace-nowrap">
                                <span>{lang["total-betway-return"]}: </span>
                                <span className="ml-1 font-bold">{country.currency} {formatNumber(data.totalReturn, country.hasComma, country.lang)}</span>
                            </div>
                            :
                            <div className="flex flex-row justify-between lg:justify-start lg:whitespace-nowrap">
                                <span>Actual Return: </span>
                                <span className="ml-1 font-bold">{country.currency} {formatNumber(data.actualReturn, country.hasComma, country.lang)}</span>
                            </div>
                        }
                    </div>
                </div>
                {isOpen ?
                    firstLoad ?
                        <div className="flex flex-col items-center w-full gap-1 py-2 border-t md:h-6 md:flex-row lg:py-0 lg:w-auto border-t-light-500 dark:border-t-dark-500 lg:border-none">
                            <div className="w-full cursor-default lg:w-auto">
                                <div>

                                </div>
                                <div className="w-full">
                                    <div className="flex flex-col gap-2 lg:justify-between lg:flex-row">
                                        <span className="flex items-center gap-2">
                                            <svg className="fill-primary-600 h-[18px] w-[18px]" viewBox="0 0 470.45 469.95" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M272,256.05a53.6,53.6,0,1,0,53.6-53.5A53.52,53.52,0,0,0,272,256.05Zm41.5-207.5c-43.1-36.7-77.2-36.7-120.3,0L53.1,189.65c-43.1,36.7-43.1,96.1,0,132.8l140.2,141c43.1,36.7,77.2,36.7,120.3,0l15.5-13.2-85.4-20.2H432.4l-69.1-13.2,95.6-94.5c43.1-36.7,43.1-96.1,0-132.8L381,112.25,271.2,86.05H442l-110.1-22Zm-89.7,207.5a101.8,101.8,0,1,1,101.8,101.6A101.72,101.72,0,0,1,223.8,256.05Zm-139.4,0a101.88,101.88,0,0,1,154.1-87.2,122.09,122.09,0,0,0-26.9,40,53.5,53.5,0,1,0,0,94.4,121.56,121.56,0,0,0,26.9,40,101.88,101.88,0,0,1-154.1-87.2Z" strokeLinecap="square" />
                                            </svg>
                                            <div className="w-full">{lang["cash-out-offer"]} <strong>{country.currency} {formatNumber(data.cashout, country.hasComma, country.lang)}</strong>
                                                <div className="w-full h-1 rounded-sm bg-light-200 dark:bg-dark-900">
                                                    <div className="h-full transition-all duration-200 rounded-sm bg-primary-600" style={{ width: `${data.cashoutPercent}%` }} />
                                                </div>
                                            </div>
                                        </span>
                                        <div className="flex items-center relative gap-1">
                                            <button className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-2 h-7 bg-identity hover:bg-identity-hover text-light-50 relative capitalize w-[33%] lg:w-auto h-[20px] text-xs" type="button" aria-label="Cashout">
                                                <div className="flex justify-center items-center text-center w-full">
                                                    <span >{lang["cash-out"]}</span>
                                                </div>
                                            </button>
                                            <button className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-2 h-7 bg-dark-800 dark:bg-dark-600 dark:hover:bg-dark-800 text-light-50 dark:focus:bg-dark-400 hover:bg-dark-600 focus:bg-dark-900 relative capitalize w-[33%] lg:w-auto h-[20px] text-xs" type="button" aria-label="Auto">
                                                <div className="flex justify-center items-center text-center w-full">
                                                    <span >{lang["auto"]}</span>
                                                </div>
                                            </button>
                                            <div className="md:relative w-[33%]">
                                                <div className="prevent-trigger tooltip absolute px-2 rounded transition-all text-light-50 bg-dark-700 w-[max-content] max-w-full whitespace-normal right-0 leading-4 text-xs py-2 drop-shadow-sm overflow-hidden z-[10] md:max-w-[350px] bottom-[120%]" style={{ display: 'none' }}>
                                                    Partial Cashout is available for this wager</div>
                                                <button className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-2 h-7 bg-light-50 dark:bg-dark-800 dark:hover:bg-dark-700 dark:focus:bg-dark-700 dark:text-light-50 text-dark-600 hover:bg-light-200 focus:bg-light-200 relative capitalize w-full lg:w-auto h-[20px] text-xs" type="button" aria-label="Partial">
                                                    <div className="flex justify-center items-center text-center w-full">
                                                        <svg className="mr-1 w-4 h-4 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" name="icon">
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
                        :
                        <div className="flex flex-col items-center w-full gap-1 py-2 border-t md:h-6 md:flex-row lg:py-0 lg:w-auto border-t-light-500 dark:border-t-dark-500 lg:border-none">
                            <div className="flex items-center gap-2 overflow-hidden">
                                <div data-v-5a5e0e10 className="loader flex justify-center items-center w-6 h-6">
                                    <svg data-v-5a5e0e10 viewBox="0 0 866 866" className="w-[100px] h-[100px]" xmlns="http://www.w3.org/2000/svg">
                                        <svg data-v-5a5e0e10 id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.83 151.5">
                                            <path data-v-5a5e0e10 className="path-0 fill-primary-600" d="M117.24,69.24A8,8,0,0,0,115.67,67c-4.88-4-9.8-7.89-14.86-11.62A4.93,4.93,0,0,0,96.93,55c-5.76,1.89-11.4,4.17-17.18,6a4.36,4.36,0,0,0-3.42,4.12c-1,6.89-2.1,13.76-3,20.66a4,4,0,0,0,1,3.07c5.12,4.36,10.39,8.61,15.68,12.76a3.62,3.62,0,0,0,2.92.75c6.29-2.66,12.52-5.47,18.71-8.36a3.49,3.49,0,0,0,1.68-2.19c1.34-7.25,2.54-14.55,3.9-22.58Z" />
                                            <path data-v-5a5e0e10 className="path-1 fill-primary-600" d="M97.55,38.68A43.76,43.76,0,0,1,98,33.44c.41-2.36-.5-3.57-2.57-4.64C91.1,26.59,87,24,82.66,21.82a6.18,6.18,0,0,0-4-.71C73.45,22.55,68.32,24.25,63.22,26c-3.63,1.21-6.08,3.35-5.76,7.69a26.67,26.67,0,0,1-.6,4.92c-1.08,8.06-1.08,8.08,5.86,11.92,3.95,2.19,7.82,5.75,11.94,6.08s8.76-2.41,13.12-3.93c9.33-3.29,9.33-3.3,9.78-14Z" />
                                            <path data-v-5a5e0e10 className="path-2 fill-primary-600" d="M66.11,126.56c5.91-.91,11.37-1.7,16.81-2.71a3.3,3.3,0,0,0,1.87-2.17c1-4.06,1.73-8.19,2.84-12.24.54-2-.11-3-1.55-4.15-5-4-9.9-8.12-15-12a6.19,6.19,0,0,0-4.15-1.1c-5.35.66-10.7,1.54-16,2.54A4,4,0,0,0,48.34,97a109.13,109.13,0,0,0-3,12.19,4.47,4.47,0,0,0,1.34,3.6c5.54,4.36,11.23,8.53,16.91,12.69a10.84,10.84,0,0,0,2.57,1.11Z" />
                                            <path data-v-5a5e0e10 className="path-3 fill-primary-600" d="M127.42,104.12c4.1-2.1,8-3.93,11.72-6a6,6,0,0,0,2.27-3,58.22,58.22,0,0,0,3.18-29.92c-.26-1.7-8-7.28-9.71-6.85A5,5,0,0,0,133,59.65c-2.81,2.49-5.71,4.88-8.33,7.56a9.46,9.46,0,0,0-2.47,4.4c-1.29,6.49-2.38,13-3.35,19.55a5.73,5.73,0,0,0,.83,3.91c2.31,3.08,5,5.88,7.7,9Z" />
                                            <path data-v-5a5e0e10 className="path-4 fill-primary-600" d="M52.58,29.89c-2.15-.36-3.78-.54-5.39-.9-2.83-.64-4.92.1-7,2.32A64.1,64.1,0,0,0,26.09,54.64c-2.64,7.92-2.62,7.84,5.15,10.87,1.76.69,2.73.45,3.93-1C39.79,59,44.54,53.65,49.22,48.2a4.2,4.2,0,0,0,1.13-2c.8-5.32,1.49-10.68,2.24-16.34Z" />
                                            <path data-v-5a5e0e10 className="path-5 fill-primary-600" d="M23,68.13c0,2.51,0,4.7,0,6.87a60.49,60.49,0,0,0,9.75,32.15c1.37,2.13,6.4,3,7,1.2,1.55-5,2.68-10.2,3.82-15.34.13-.58-.58-1.38-.94-2.06-2.51-4.77-5.47-9.38-7.45-14.37C32.94,71,28.22,69.84,23,68.13Z" />
                                            <path data-v-5a5e0e10 className="path-6 fill-primary-600" d="M83.91,12.86c-.32.36-.66.71-1,1.07.9,1.13,1.57,2.62,2.73,3.33,4.71,2.84,9.56,5.48,14.39,8.1a9.29,9.29,0,0,0,3.13.83c5.45.69,10.89,1.38,16.35,1.94a10.41,10.41,0,0,0,3.07-.71c-11.48-9.9-24.26-14.61-38.71-14.56Z" />
                                            <path data-v-5a5e0e10 className="path-7 fill-primary-600" d="M66.28,132.51c13.36,3.78,25.62,3.5,38-.9C91.68,129.59,79.36,128,66.28,132.51Z" />
                                            <path data-v-5a5e0e10 className="path-8 fill-primary-600" d="M127.2,30.66l-1.27.37a18.58,18.58,0,0,0,1,3.08c3,5.52,6.21,10.89,8.89,16.54,1.34,2.83,3.41,3.82,6.49,4.9a60.38,60.38,0,0,0-15.12-24.9Z" />
                                            <path data-v-5a5e0e10 className="bb-9 fill-primary-600" d="M117.35,125c5.58-2.32,16.9-13.84,18.1-19.2-2.41,1.46-5.18,2.36-6.78,4.23-4.21,5-7.89,10.37-11.32,15Z" />
                                        </svg>
                                    </svg>
                                </div>
                            Loading Cashout Offer</div>
                        </div>

                    :
                    <div className="flex flex-col items-center w-full gap-1 py-2 border-t md:h-6 md:flex-row lg:py-0 lg:w-auto border-t-light-500 dark:border-t-dark-500 lg:border-none">
                        <div className={`md:h-6 md:w-auto m-0 w-full flex items-center justify-center p-2 text-xs m-1 font-bold rounded ${color} ${backgroundColor}`}>
                            {ticket.filter == 'Win' ? winSvg : ticket.filter == 'Loss' ? lossSvg : cancelledSvg} &nbsp; {ticket.filter}
                        </div>
                        {(ticket.filter == 'Win' && country.flauntText) && <div className="flex justify-end px-1 md:px-0 h-11 font-bold bg-cover w-full md:w-[191px] rounded-md md:h-[24px] items-center bg-[url('https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/v2/flaunt-bg-banner.svg')]">
                            <button
                                className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 bg-primary-600 text-light-50 hover:bg-primary-500 focus:bg-primary-400 text-lg md:text-xs h-8 md:h-5 flex text-xs text-light-50 px-2 m-0.5 md:m-1 items-center relative"
                                type="button"
                                aria-label="Iwonetse"
                                id=""
                            >
                                <div className="flex justify-center items-center text-center w-full">
                                <span className="text-sm md:text-xs">{country.flauntText}</span>
                                <svg
                                    className="fill-light-50 ml-1  w-5 h-5 md:w-3 md:h-3 contain flex-shrink-0"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    name="icon"
                                >
                                    <path
                                    className=""
                                    d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"
                                    strokeLinecap="square"
                                    />
                                </svg>
                                </div>
                            </button>
                        </div>}
                    </div>
                }
            </div>
        </div>
    )
})

export const TicketPlaceHolder = () => {
    return (
        <div className="w-full rounded-sm shadow bg-light-50 dark:bg-dark-800 dark:shadow-none">
            <div className="h-[35px] w-full border-b border-b-light-500 dark:border-b-dark-500 items-center p-2 justify-between hidden lg:flex">
                <div className="rounded animate-pulse bg-dark-300 w-[200px] h-[14px] bg-light-500 dark:bg-dark-500">
                    <span className="opacity-0" />
                </div>
                <div className="flex items-center gap-4">
                    <div className="rounded animate-pulse bg-dark-300 w-[170px] h-[14px] bg-light-500 dark:bg-dark-500">
                        <span className="opacity-0" />
                    </div>
                    <div className="rounded animate-pulse bg-dark-300 w-[100px] h-[28px] bg-light-500 dark:bg-dark-500">
                        <span className="opacity-0" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full px-2 lg:hidden">
                <div className="flex items-center justify-between pt-3 pb-2 h-[56px]">
                    <div>
                        <div className="rounded animate-pulse bg-dark-300 w-[90px] h-[14px] mb-1 bg-light-500 dark:bg-dark-500">
                            <span className="opacity-0" />
                        </div>
                        <div className="rounded animate-pulse bg-dark-300 w-[114px] h-[14px] bg-light-500 dark:bg-dark-500">
                            <span className="opacity-0" />
                        </div>
                    </div>
                    <div>
                        <div className="rounded animate-pulse bg-dark-300 w-[100px] h-[14px] mb-1 bg-light-500 dark:bg-dark-500">
                            <span className="opacity-0" />
                        </div>
                        <div className="rounded animate-pulse bg-dark-300 w-[100px] h-[28px] mb-1 bg-light-500 dark:bg-dark-500">
                            <span className="opacity-0" />
                        </div>
                    </div>
                </div>
                <div className="flex border-t border-t-light-500 dark:border-t-dark-500 h-[46px] items-center py-2 w-full">
                    <div className="rounded animate-pulse bg-dark-300 w-[177px] h-[26px] bg-light-500 dark:bg-dark-500">
                        <span className="opacity-0" />
                    </div>
                </div>
                <div className="border-y border-y-light-500 dark:border-y-dark-500 h-[43px] items-center py-1 w-full">
                    <div className="flex justify-between">
                        <div className="rounded animate-pulse bg-dark-300 w-[100px] h-[10px] bg-light-500 dark:bg-dark-500">
                            <span className="opacity-0" />
                        </div>
                        <div className="rounded animate-pulse bg-dark-300 w-[50px] h-[10px] bg-light-500 dark:bg-dark-500">
                            <span className="opacity-0" />
                        </div>
                    </div>
                    <div className="flex justify-between mt-0.5">
                        <div className="rounded animate-pulse bg-dark-300 w-[100px] h-[10px] bg-light-500 dark:bg-dark-500">
                            <span className="opacity-0" />
                        </div>
                        <div className="rounded animate-pulse bg-dark-300 w-[30px] h-[10px] bg-light-500 dark:bg-dark-500">
                            <span className="opacity-0" />
                        </div>
                    </div>
                    <div className="flex justify-between mt-0.5">
                        <div className="rounded animate-pulse bg-dark-300 w-[100px] h-[10px] bg-light-500 dark:bg-dark-500">
                            <span className="opacity-0" />
                        </div>
                        <div className="rounded animate-pulse bg-dark-300 w-[50px] h-[10px] bg-light-500 dark:bg-dark-500">
                            <span className="opacity-0" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[30px] w-full hidden p-2 pl-[2px] items-center lg:flex border-b border-b-light-500 dark:border-b-dark-500">
                <div className="rounded animate-pulse bg-dark-300 w-[200px] h-[14px] bg-light-500 ml-1 dark:bg-dark-500">
                    <span className="opacity-0" />
                </div>
            </div>
            <div className="h-[34px] w-full p-2 pl-[2px] items-center flex">
                <div className="hidden w-full lg:flex justify-between">
                    <div>
                        <div className="rounded animate-pulse bg-dark-300 w-[230px] h-[12px] bg-light-500 m-1 dark:bg-dark-500">
                            <span className="opacity-0" />
                        </div>
                        <div className="rounded animate-pulse bg-dark-300 w-[200px] h-[14px] bg-light-500 m-1 dark:bg-dark-500">
                            <span className="opacity-0" />
                        </div>
                    </div>
                    <div>
                        <div className="rounded animate-pulse bg-dark-300 w-[230px] h-[15px] bg-light-500 m-1 mt-2 dark:bg-dark-500">
                            <span className="opacity-0" />
                        </div>
                    </div>
                </div>
                <div className="rounded animate-pulse bg-dark-300 block lg:hidden h-[16px] w-[200px] bg-light-500 dark:bg-dark-500 mx-auto">
                    <span className="opacity-0" />
                </div>
            </div>
        </div>

    );
}

export default Ticket;