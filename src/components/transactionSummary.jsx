import { useCallback, useEffect, useState } from "react";
import { useApp } from "../contexts/appContext";
import { ticketDate, transactionDate } from "../functions/formatDate";
import generateUUID from "../functions/generateId";
import { baseApiUrl } from "../data/url";
import { memo } from "react";
import { useMemo } from "react";

const TransactionSummary = () => {

    const {setPopup, lang, transactions, setTransactions, setBalance, country, user} = useApp();
    const [filter, setFilter] = useState('all');
    const [visited, setVisited] = useState({
        all: true
    });

    const filteredTransactions = useMemo(()=>{
        if(filter == 'all') return transactions;
        if(filter == 'Sports') return transactions.filter(transaction => transaction.tx_type == "Wager" || transaction.tx_type == "Payout" || transaction.tx_type == "Win Boost Cash Bonus");
        else return transactions.filter(transaction => transaction.tx_type == filter)
    }, [filter, transactions])

    function getTransactions(){
        window.$.ajax({
            url: `${baseApiUrl}/get-transactions.php`,
            dataType: 'JSON',
            type: 'POST',
            data: {user: user, limit: 20},
            success: (res)=>{
              console.log(res)
              if(res.status = 'success') setTransactions(res.data.transactions)
              else setBalance(400)
            },
            error: (res)=>{
              console.log(res)
            }
        })
    }

    function changeFilter(newFilter){
        setFilter(newFilter);
        setTimeout(()=>{
            setVisited(prev=>({...prev, [newFilter]: true}))
        }, 2000)
    }

    useEffect(()=>{
        if(transactions === null) getTransactions();
    }, [])

    console.log(filter, filteredTransactions)

    return (

        <div
            data-v-76478e6d=""
            className="margin-top-56 fixed top-0 left-0 bottom-0 right-0 z-50 flex justify-center bg-dark-700/40 pb-[55px] pt-[60px] md:pt-[100px] items-start md:items-center"
            >
            <div
                data-v-76478e6d=""
                className="w-full md:w-[1080px] relative z-10 drop-shadow-sm max-w-[95%] box-content rounded-md  scrollbar-hidden max-h-full overflow-hidden overflow-y-scroll overflow-x-hidden"
            >
                <div
                data-v-76478e6d=""
                className="border-none sticky top-0 left-0 z-20 flex items-center w-full px-2 py-4 pr-12 text-base font-bold capitalize lg:p-4 h-14 bg-dark-900 text-light-50 rounded-tl-md rounded-tr-md"
                >
                <span data-v-76478e6d="" className="h-full">
                    <div className="block -mt-2 dark lg:hidden w-[200px]">
                    <div data-v-48b0c13f="" className="relative w-full">
                        <div
                        data-v-48b0c13f=""
                        className="p-dropdown p-component p-inputwrapper p-inputwrapper-filled h-10 w-full border rounded appearance-none transition-all text-dark-800 dark:text-light-50 bg-[transparent] outline-none pl-4 pr-8 cursor-pointer flex items-center bg-light-50 dark:bg-dark-800 rounded border-light-500 dark:border-dark-600"
                        id="pv_id_6"
                        >
                        <span
                            className="p-dropdown-label p-inputtext"
                            tabIndex={0}
                            role="combobox"
                            aria-label="Transaction History"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            aria-controls="pv_id_6_list"
                            aria-disabled="false"
                        >
                            <div
                            data-v-48b0c13f=""
                            className="absolute top-0 left-0 flex items-center justify-start w-full h-full gap-2 pl-4 pr-[30px] align-items-center"
                            >
                            {/**/}
                            <span
                                data-v-48b0c13f=""
                                className="overflow-hidden text-ellipsis whitespace-nowrap"
                            >
                                {lang['transaction-history']}
                            </span>
                            </div>
                        </span>
                        {/**/}
                        <div className="p-dropdown-trigger">
                            <div
                            data-v-48b0c13f=""
                            className="absolute top-0 flex items-center justify-center w-6 pointer-events-none right-2 h-10"
                            >
                            <svg
                                data-v-48b0c13f=""
                                className="absolute w-6 h-6 fill-dark-800 dark:fill-light-50"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                className=""
                                d="M7,10L12,15L17,10H7Z"
                                strokeLinecap="square"
                                />
                            </svg>
                            </div>
                        </div>
                        {/**/}
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                    </div>
                    <span className="hidden lg:block">{lang['account-options']}: 233249648594</span>
                </span>
                <svg
                    onClick={()=>setPopup(null)}
                    data-v-76478e6d=""
                    className="absolute w-6 h-6 cursor-pointer fill-light-50 top-4 right-4"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    id="modal-close-btn"
                >
                    <path
                    className=""
                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                    strokeLinecap="square"
                    />
                </svg>
                {/**/}
                </div>
                <div data-v-76478e6d="" className="relative z-10">
                {/**/}
                <div data-v-76478e6d="" className="relative rounded-b-md">
                    <div
                    data-v-76478e6d=""
                    className="bg-light-200 dark:bg-dark-800 relative text-dark-800 dark:text-light-50 overflow-hidden h-[calc(80vh-78px)] rounded-bl rounded-br"
                    >
                    <div className="relative flex h-full dark:bg-dark-900">
                        <div className="w-[220px] relative overflow-y-scroll overflow-x-hidden flex-shrink-0 flex-col scrollbar-hidden p-2 gap-2 bg-light-50 dark:bg-dark-800 hidden lg:flex h-full border-r border-r-light-500 dark:border-r-dark-500">
                        <div
                            id="deposit-account-nav"
                            className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50"
                        >
                            <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                className=""
                                d="M11.995 2.88208C10.722 2.88208 9.50106 3.38779 8.60088 4.28797C7.70071 5.18814 7.195 6.40904 7.195 7.68208C7.195 8.95512 7.70071 10.176 8.60088 11.0762C9.50106 11.9764 10.722 12.4821 11.995 12.4821C12.6253 12.4821 13.2495 12.3579 13.8319 12.1167C14.4142 11.8755 14.9434 11.5219 15.3891 11.0762C15.8348 10.6305 16.1884 10.1013 16.4296 9.51896C16.6708 8.9366 16.795 8.31243 16.795 7.68208C16.795 7.05174 16.6708 6.42756 16.4296 5.8452C16.1884 5.26284 15.8348 4.73369 15.3891 4.28797C14.9434 3.84225 14.4142 3.48868 13.8319 3.24746C13.2495 3.00624 12.6253 2.88208 11.995 2.88208ZM11.995 4.80208C12.3732 4.80195 12.7478 4.87635 13.0973 5.02104C13.4468 5.16573 13.7643 5.37786 14.0318 5.64532C14.2992 5.91278 14.5114 6.23032 14.656 6.5798C14.8007 6.92928 14.8751 7.30384 14.875 7.68208C14.8737 8.44504 14.5697 9.17629 14.0297 9.71532C13.4897 10.2543 12.758 10.5571 11.995 10.5571C11.2312 10.5571 10.4986 10.2537 9.95853 9.71355C9.41842 9.17345 9.115 8.44091 9.115 7.67708C9.11632 6.91413 9.42033 6.18287 9.96029 5.64384C10.5003 5.10482 11.232 4.80208 11.995 4.80208ZM12.387 5.76208L10.564 6.50808V7.50808L11.326 7.21408V9.60608H12.631V5.75708L12.387 5.76208ZM2.395 8.64208V19.2021C2.39553 19.7111 2.59798 20.1992 2.95794 20.5591C3.31789 20.9191 3.80594 21.1216 4.315 21.1221H19.675C20.184 21.1216 20.6721 20.9191 21.0321 20.5591C21.392 20.1992 21.5945 19.7111 21.595 19.2021V8.64208H19.675V19.2021H4.32V8.64208H2.395ZM8.155 14.4021L11.995 18.2421L15.835 14.4021H8.155Z"
                                strokeLinecap="square"
                            />
                            </svg>{" "}
                            {lang['deposit-funds']}
                        </div>
                        <div
                            id="withdraw-account-nav"
                            className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50"
                        >
                            <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                className=""
                                d="M11.498 2.8811L7.66 6.7181H15.339L11.498 2.8811ZM1.898 8.6401V19.1981C1.89853 19.7077 2.1014 20.1962 2.462 20.5562C2.82261 20.9163 3.31143 21.1184 3.821 21.1181H19.178C19.6871 21.1176 20.1751 20.9151 20.5351 20.5552C20.895 20.1952 21.0975 19.7072 21.098 19.1981V8.6401H19.178V19.1981H3.821V8.6401H1.898ZM11.498 8.6401C10.5487 8.6401 9.62062 8.92162 8.83127 9.44905C8.04191 9.97648 7.42668 10.7261 7.06338 11.6032C6.70008 12.4803 6.60502 13.4454 6.79023 14.3765C6.97544 15.3076 7.4326 16.1629 8.10389 16.8342C8.77518 17.5055 9.63046 17.9627 10.5616 18.1479C11.4927 18.3331 12.4578 18.238 13.3349 17.8747C14.212 17.5114 14.9616 16.8962 15.4891 16.1068C16.0165 15.3175 16.298 14.3895 16.298 13.4401C16.298 12.1671 15.7923 10.9462 14.8921 10.046C13.9919 9.14582 12.771 8.6401 11.498 8.6401ZM11.498 10.5601C12.0674 10.5601 12.624 10.729 13.0975 11.0453C13.5709 11.3617 13.9399 11.8113 14.1579 12.3374C14.3758 12.8634 14.4328 13.4423 14.3217 14.0008C14.2106 14.5592 13.9364 15.0722 13.5338 15.4749C13.1311 15.8775 12.6181 16.1517 12.0597 16.2628C11.5012 16.3739 10.9223 16.3169 10.3963 16.099C9.87019 15.881 9.42055 15.512 9.1042 15.0386C8.78785 14.5651 8.619 14.0085 8.619 13.4391C8.619 12.6755 8.92233 11.9433 9.46224 11.4033C10.0022 10.8634 10.7344 10.5601 11.498 10.5601ZM11.89 11.5191L10.067 12.2651V13.2651L10.828 12.9711V15.3631H12.133V11.5181L11.89 11.5191Z"
                                strokeLinecap="square"
                            />
                            </svg>{" "}
                            {lang['withdraw-funds']}
                        </div>
                        <div
                            id="my-bets-account-nav"
                            className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50"
                        >
                            <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                className=""
                                d="M4.503 3.604V14.796H2.637V17.596C2.637 18.3386 2.932 19.0508 3.4571 19.5759C3.9822 20.101 4.69439 20.396 5.437 20.396H17.562C18.3036 20.3926 19.0138 20.0965 19.5381 19.5721C20.0625 19.0478 20.3586 18.3376 20.362 17.596V3.604H4.503ZM6.369 5.47H18.496V17.596C18.4979 17.719 18.475 17.8411 18.4288 17.9551C18.3826 18.0691 18.3139 18.1727 18.2269 18.2596C18.1399 18.3465 18.0362 18.4151 17.9222 18.4612C17.8081 18.5073 17.686 18.53 17.563 18.528C17.3158 18.5277 17.0788 18.4295 16.9039 18.2548C16.729 18.0801 16.6305 17.8432 16.63 17.596V14.796H6.369V5.47ZM8.235 7.335V9.201H10.1V7.335H8.235ZM11.967 7.335V9.201H16.631V7.335H11.967ZM8.235 11.066V12.932H10.1V11.067L8.235 11.066ZM11.967 11.066V12.932H16.631V11.067L11.967 11.066ZM4.504 16.666H14.762V17.596C14.7619 17.9135 14.816 18.2287 14.922 18.528H5.435C5.18798 18.5275 4.95123 18.4291 4.77656 18.2544C4.60189 18.0798 4.50353 17.843 4.503 17.596L4.504 16.666Z"
                                strokeLinecap="square"
                            />
                            </svg>{" "}
                            {lang['my-bets']}
                        </div>
                        <div
                            id="bonus-summary-account-nav"
                            className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50"
                        >
                            <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                className=""
                                d="M4.503 3.604V14.796H2.637V17.596C2.637 18.3386 2.932 19.0508 3.4571 19.5759C3.9822 20.101 4.69439 20.396 5.437 20.396H17.562C18.3036 20.3926 19.0138 20.0965 19.5381 19.5721C20.0625 19.0478 20.3586 18.3376 20.362 17.596V3.604H4.503ZM6.369 5.47H18.496V17.596C18.4979 17.719 18.475 17.8411 18.4288 17.9551C18.3826 18.0691 18.3139 18.1727 18.2269 18.2596C18.1399 18.3465 18.0362 18.4151 17.9222 18.4612C17.8081 18.5073 17.686 18.53 17.563 18.528C17.3158 18.5277 17.0788 18.4295 16.9039 18.2548C16.729 18.0801 16.6305 17.8432 16.63 17.596V14.796H6.369V5.47ZM8.235 7.335V9.201H10.1V7.335H8.235ZM11.967 7.335V9.201H16.631V7.335H11.967ZM8.235 11.066V12.932H10.1V11.067L8.235 11.066ZM11.967 11.066V12.932H16.631V11.067L11.967 11.066ZM4.504 16.666H14.762V17.596C14.7619 17.9135 14.816 18.2287 14.922 18.528H5.435C5.18798 18.5275 4.95123 18.4291 4.77656 18.2544C4.60189 18.0798 4.50353 17.843 4.503 17.596L4.504 16.666Z"
                                strokeLinecap="square"
                            />
                            </svg>{" "}
                            {lang['bonus-summary']}
                        </div>
                        <div
                            id="transaction-history-account-nav"
                            className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap bg-identity-50 text-dark-800 fill-identity-600"
                        >
                            <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                className=""
                                d="M3.612 2.67798V13.864H1.747V16.664C1.747 17.4066 2.042 18.1188 2.5671 18.6439C3.09221 19.169 3.8044 19.464 4.547 19.464H12.004V17.592H4.543C4.29581 17.5914 4.05891 17.4929 3.88421 17.3181C3.70951 17.1432 3.61127 16.9062 3.611 16.659V15.727H13.864L12 13.863H5.475V4.54198H17.593V8.27098H19.458V2.67798H3.612ZM7.341 6.40598V8.27098H9.205V6.40598H7.341ZM11.07 6.40598V8.27098H15.73V6.40598H11.07ZM7.341 10.134V11.998H9.205V10.135L7.341 10.134ZM13.865 10.134V11.998H14.797V13.782L16.741 15.726L14.797 17.67V19.454H13.865V21.321H22.254V19.456H21.319V17.672L19.375 15.728L21.319 13.783V11.999H22.251V10.135L13.865 10.134ZM16.665 11.998H19.465V13.011L18.065 14.411L16.665 13.011V11.998ZM18.065 17.044L19.465 18.444V19.456H16.665V18.444L18.065 17.044Z"
                                strokeLinecap="square"
                            />
                            </svg>{" "}
                            {lang['transaction-history']}
                        </div>
                        <div
                            id="booking-codes-account-nav"
                            className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50"
                        >
                            <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                className=""
                                d="M17,18V5H7V18L12,15.82L17,18M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,7H13V9H15V11H13V13H11V11H9V9H11V7Z"
                                strokeLinecap="square"
                            />
                            </svg>{" "}
                            {lang['influencer']}
                        </div>
                        <div
                            id="promo-voucher-account-nav"
                            className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50"
                        >
                            <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                className=""
                                d="M11.498 2.8811L7.66 6.7181H15.339L11.498 2.8811ZM1.898 8.6401V19.1981C1.89853 19.7077 2.1014 20.1962 2.462 20.5562C2.82261 20.9163 3.31143 21.1184 3.821 21.1181H19.178C19.6871 21.1176 20.1751 20.9151 20.5351 20.5552C20.895 20.1952 21.0975 19.7072 21.098 19.1981V8.6401H19.178V19.1981H3.821V8.6401H1.898ZM11.498 8.6401C10.5487 8.6401 9.62062 8.92162 8.83127 9.44905C8.04191 9.97648 7.42668 10.7261 7.06338 11.6032C6.70008 12.4803 6.60502 13.4454 6.79023 14.3765C6.97544 15.3076 7.4326 16.1629 8.10389 16.8342C8.77518 17.5055 9.63046 17.9627 10.5616 18.1479C11.4927 18.3331 12.4578 18.238 13.3349 17.8747C14.212 17.5114 14.9616 16.8962 15.4891 16.1068C16.0165 15.3175 16.298 14.3895 16.298 13.4401C16.298 12.1671 15.7923 10.9462 14.8921 10.046C13.9919 9.14582 12.771 8.6401 11.498 8.6401ZM11.498 10.5601C12.0674 10.5601 12.624 10.729 13.0975 11.0453C13.5709 11.3617 13.9399 11.8113 14.1579 12.3374C14.3758 12.8634 14.4328 13.4423 14.3217 14.0008C14.2106 14.5592 13.9364 15.0722 13.5338 15.4749C13.1311 15.8775 12.6181 16.1517 12.0597 16.2628C11.5012 16.3739 10.9223 16.3169 10.3963 16.099C9.87019 15.881 9.42055 15.512 9.1042 15.0386C8.78785 14.5651 8.619 14.0085 8.619 13.4391C8.619 12.6755 8.92233 11.9433 9.46224 11.4033C10.0022 10.8634 10.7344 10.5601 11.498 10.5601ZM11.89 11.5191L10.067 12.2651V13.2651L10.828 12.9711V15.3631H12.133V11.5181L11.89 11.5191Z"
                                strokeLinecap="square"
                            />
                            </svg>{" "}
                            {lang['promo-voucher']}
                        </div>
                        <div
                            id="update-details-account-nav"
                            className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50"
                        >
                            <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                className=""
                                d="M9.81045 2.69092L9.37947 5.11195C8.60742 5.41654 7.89056 5.84571 7.25745 6.38238L4.92585 5.62178L2.75857 9.52574L4.64194 11.1042C4.57975 11.5131 4.55065 11.9264 4.55492 12.34C4.56521 12.7535 4.60834 13.1655 4.68389 13.5722L2.85543 15.2237L5.15512 19.0498L7.45652 18.2104C8.10823 18.7255 8.83991 19.1304 9.62252 19.4089L10.1355 21.8139L14.5985 21.7381L15.0265 19.3171C15.7996 19.0128 16.5175 18.5836 17.1515 18.0466L19.4821 18.8072L21.6494 14.9042L19.768 13.3208C19.8981 12.5023 19.8839 11.6673 19.726 10.8538L21.5526 9.20525L19.2529 5.37922L16.9505 6.2186C16.2972 5.70304 15.5638 5.29818 14.7795 5.02015L14.2694 2.61512L9.81045 2.69092ZM11.419 4.57613L12.73 4.55384L13.1334 6.45854L14.1399 6.81954C14.7271 7.02658 15.2764 7.32883 15.7655 7.71417L16.602 8.37614L18.4293 7.7139L19.1036 8.83576L17.6573 10.1377L17.8431 11.1859C17.9656 11.7976 17.9763 12.4264 17.8747 13.0419L17.7226 14.0958L19.2094 15.3578L18.5756 16.4989L16.7269 15.9002L15.9115 16.5923C15.4365 16.9943 14.8985 17.3154 14.3192 17.5426L13.3256 17.9366L12.9861 19.8549L11.6781 19.8771L11.2736 17.9715L10.2672 17.6115C9.68015 17.404 9.13126 17.1014 8.64246 16.7158L7.80497 16.0539L5.9787 16.7161L5.30644 15.5942L6.7547 14.2902L6.56683 13.2421C6.50908 12.9357 6.4757 12.6252 6.46702 12.3135C6.4648 12.0024 6.48761 11.6916 6.53524 11.3841L6.68738 10.3302L5.19562 9.0752L5.83132 7.92906L7.67908 8.53083L8.49454 7.83777C8.97002 7.43613 9.50831 7.1154 10.0879 6.88842L11.0814 6.49342L11.419 4.57613ZM12.14 8.38898C11.3837 8.40203 10.6483 8.63904 10.0267 9.07004C9.40512 9.50103 8.9253 10.1067 8.6479 10.8103C8.3705 11.514 8.30799 12.2841 8.46826 13.0234C8.62853 13.7626 9.00439 14.4376 9.54832 14.9633C10.0922 15.4889 10.7798 15.8414 11.5241 15.9762C12.2683 16.1111 13.0359 16.0222 13.7296 15.7209C14.4234 15.4196 15.0122 14.9193 15.4217 14.2833C15.8311 13.6473 16.0428 12.9042 16.03 12.148C16.0083 11.1344 15.5867 10.1706 14.8573 9.46667C14.1278 8.76271 13.1496 8.37571 12.136 8.39005L12.14 8.38898ZM12.1725 10.301C12.5506 10.2947 12.9221 10.4008 13.2399 10.6056C13.5578 10.8105 13.8078 11.105 13.9583 11.452C14.1088 11.7989 14.153 12.1827 14.0855 12.5547C14.0179 12.9268 13.8415 13.2705 13.5786 13.5424C13.3157 13.8142 12.9781 14.002 12.6085 14.082C12.2389 14.162 11.8538 14.1306 11.5021 13.9918C11.1503 13.853 10.8476 13.613 10.6322 13.3022C10.4168 12.9913 10.2984 12.6236 10.292 12.2455C10.2862 11.9943 10.3304 11.7445 10.4218 11.5105C10.5133 11.2765 10.6502 11.063 10.8247 10.8822C10.9992 10.7015 11.2078 10.5572 11.4385 10.4576C11.6692 10.358 11.9173 10.3051 12.1685 10.302L12.1725 10.301Z"
                                strokeLinecap="square"
                            />
                            </svg>{" "}
                            {lang['update-details']}
                        </div>
                        <div
                            id="responsible-gaming-account-nav"
                            className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50"
                        >
                            <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                className=""
                                d="M11.5 2.3999L3.64501 5.8909V11.1269C3.6335 13.4902 4.39473 15.7926 5.81278 17.6832C7.23083 19.5739 9.22797 20.9493 11.5 21.5999C13.7719 20.9491 15.7688 19.5737 17.1866 17.683C18.6045 15.7923 19.3656 13.4901 19.354 11.1269V5.8909L11.5 2.3999ZM11.5 4.3109L17.609 7.0259V11.1259C17.6082 13.0249 17.0209 14.8773 15.9275 16.4299C14.834 17.9824 13.2877 19.1594 11.5 19.7999C9.71261 19.1595 8.16656 17.9829 7.07312 16.4307C5.97969 14.8785 5.39222 13.0265 5.39101 11.1279V7.0279L11.5 4.3109ZM15.683 8.3299L10.627 13.3839L8.20801 10.9659L6.97401 12.1999L10.627 15.8529L16.915 9.5629L15.683 8.3299Z"
                                strokeLinecap="square"
                            />
                            </svg>{" "}
                            {lang['responsible-gaming']}
                        </div>
                        <div
                            id="document-verification-account-nav"
                            className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50"
                        >
                            <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                className=""
                                d="M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M6 2C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H13.81C13.45 21.38 13.2 20.7 13.08 20H6V4H13V9H18V13.08C18.33 13.03 18.67 13 19 13C19.34 13 19.67 13.03 20 13.08V8L14 2M8 12V14H16V12M8 16V18H13V16Z"
                                strokeLinecap="square"
                            />
                            </svg>{" "}
                            {lang['document-verification']}
                        </div>
                        {/**/}
                        <div
                            id="change-password-account-nav"
                            className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50"
                        >
                            <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                className=""
                                d="M9.81045 2.69092L9.37947 5.11195C8.60742 5.41654 7.89056 5.84571 7.25745 6.38238L4.92585 5.62178L2.75857 9.52574L4.64194 11.1042C4.57975 11.5131 4.55065 11.9264 4.55492 12.34C4.56521 12.7535 4.60834 13.1655 4.68389 13.5722L2.85543 15.2237L5.15512 19.0498L7.45652 18.2104C8.10823 18.7255 8.83991 19.1304 9.62252 19.4089L10.1355 21.8139L14.5985 21.7381L15.0265 19.3171C15.7996 19.0128 16.5175 18.5836 17.1515 18.0466L19.4821 18.8072L21.6494 14.9042L19.768 13.3208C19.8981 12.5023 19.8839 11.6673 19.726 10.8538L21.5526 9.20525L19.2529 5.37922L16.9505 6.2186C16.2972 5.70304 15.5638 5.29818 14.7795 5.02015L14.2694 2.61512L9.81045 2.69092ZM11.419 4.57613L12.73 4.55384L13.1334 6.45854L14.1399 6.81954C14.7271 7.02658 15.2764 7.32883 15.7655 7.71417L16.602 8.37614L18.4293 7.7139L19.1036 8.83576L17.6573 10.1377L17.8431 11.1859C17.9656 11.7976 17.9763 12.4264 17.8747 13.0419L17.7226 14.0958L19.2094 15.3578L18.5756 16.4989L16.7269 15.9002L15.9115 16.5923C15.4365 16.9943 14.8985 17.3154 14.3192 17.5426L13.3256 17.9366L12.9861 19.8549L11.6781 19.8771L11.2736 17.9715L10.2672 17.6115C9.68015 17.404 9.13126 17.1014 8.64246 16.7158L7.80497 16.0539L5.9787 16.7161L5.30644 15.5942L6.7547 14.2902L6.56683 13.2421C6.50908 12.9357 6.4757 12.6252 6.46702 12.3135C6.4648 12.0024 6.48761 11.6916 6.53524 11.3841L6.68738 10.3302L5.19562 9.0752L5.83132 7.92906L7.67908 8.53083L8.49454 7.83777C8.97002 7.43613 9.50831 7.1154 10.0879 6.88842L11.0814 6.49342L11.419 4.57613ZM12.14 8.38898C11.3837 8.40203 10.6483 8.63904 10.0267 9.07004C9.40512 9.50103 8.9253 10.1067 8.6479 10.8103C8.3705 11.514 8.30799 12.2841 8.46826 13.0234C8.62853 13.7626 9.00439 14.4376 9.54832 14.9633C10.0922 15.4889 10.7798 15.8414 11.5241 15.9762C12.2683 16.1111 13.0359 16.0222 13.7296 15.7209C14.4234 15.4196 15.0122 14.9193 15.4217 14.2833C15.8311 13.6473 16.0428 12.9042 16.03 12.148C16.0083 11.1344 15.5867 10.1706 14.8573 9.46667C14.1278 8.76271 13.1496 8.37571 12.136 8.39005L12.14 8.38898ZM12.1725 10.301C12.5506 10.2947 12.9221 10.4008 13.2399 10.6056C13.5578 10.8105 13.8078 11.105 13.9583 11.452C14.1088 11.7989 14.153 12.1827 14.0855 12.5547C14.0179 12.9268 13.8415 13.2705 13.5786 13.5424C13.3157 13.8142 12.9781 14.002 12.6085 14.082C12.2389 14.162 11.8538 14.1306 11.5021 13.9918C11.1503 13.853 10.8476 13.613 10.6322 13.3022C10.4168 12.9913 10.2984 12.6236 10.292 12.2455C10.2862 11.9943 10.3304 11.7445 10.4218 11.5105C10.5133 11.2765 10.6502 11.063 10.8247 10.8822C10.9992 10.7015 11.2078 10.5572 11.4385 10.4576C11.6692 10.358 11.9173 10.3051 12.1685 10.302L12.1725 10.301Z"
                                strokeLinecap="square"
                            />
                            </svg>{" "}
                            {lang['change-password']}
                        </div>
                        <div
                            id="log-out-account-nav"
                            className="flex items-center w-full h-10 p-2 text-sm rounded cursor-pointer transition-all whitespace-nowrap fill-dark-800 dark:fill-light-50"
                        >
                            <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                className=""
                                d="M11.037 2.36304V12H12.964V2.36304H11.037ZM9.11 2.80504C6.91359 3.49575 5.03706 4.95002 3.8201 6.90458C2.60315 8.85915 2.12621 11.1848 2.47561 13.4606C2.82501 15.7364 3.97767 17.8119 5.72492 19.3114C7.47217 20.8108 9.69854 21.6352 12.001 21.6352C14.3035 21.6352 16.5298 20.8108 18.2771 19.3114C20.0243 17.8119 21.177 15.7364 21.5264 13.4606C21.8758 11.1848 21.3988 8.85915 20.1819 6.90458C18.9649 4.95002 17.0884 3.49575 14.892 2.80504V4.85704C16.5507 5.52795 17.9244 6.7549 18.7778 8.32758C19.6311 9.90027 19.9108 11.7208 19.5691 13.4771C19.2273 15.2334 18.2853 16.8162 16.9046 17.9542C15.5238 19.0922 13.7903 19.7145 12.001 19.7145C10.2117 19.7145 8.47817 19.0922 7.09741 17.9542C5.71666 16.8162 4.77469 15.2334 4.43294 13.4771C4.09119 11.7208 4.37094 9.90027 5.22424 8.32758C6.07755 6.7549 7.45128 5.52795 9.11 4.85704V2.80504Z"
                                strokeLinecap="square"
                            />
                            </svg>{" "}
                            {lang['log-out']}
                        </div>
                        </div>
                        <div
                        className="relative w-full h-full overflow-x-hidden overflow-y-auto scrollbar-hidden"
                        id="my-account-main"
                        >
                        <div className="bg-light-50 dark:bg-dark-800 h-full flex justify-between flex-col">
                            <div>
                            <div className="sticky top-0 left-0 bg-light-200 dark:bg-dark-700 shadow p-2 flex flex-col gap-2 z-10">
                                <div className="flex items-center justify-center w-full">
                                <div className="p-[2px] rounded-lg flex bg-light-600 dark:bg-dark-900 max-w-full dark:border-dark-500 dark:border h-10 gap-1 overflow-x-scroll overflow-y-hidden scrollbar-hidden">
                                    <div
                                    id="transaction-history-All-btn"
                                    className={`flex gap-2 p-2 rounded-md cursor-pointer h-full transition-all font-bold items-center overflow-hidden select-none ${filter == "all" ? "bg-light-50" : ""} dark:bg-dark-700 text-dark-800 dark:text-light-50 shrink-0`}
                                    onClick={()=>changeFilter("all")}
                                    >
                                    {/**/}
                                    <span className="flex items-center gap-1 overflow-hidden capitalize whitespace-nowrap text-ellipsis">
                                        {lang['transaction-types.all']}
                                    </span>
                                    </div>
                                    <div
                                    id="transaction-history-deposit-btn"
                                    className={`flex gap-2 p-2 rounded-md cursor-pointer h-full transition-all font-bold items-center overflow-hidden select-none ${filter == "Card Deposit" ? "bg-light-50" : ""} dark:bg-dark-700 text-dark-800 dark:text-light-50 shrink-0`}
                                    onClick={()=>changeFilter("Card Deposit")}
                                    >
                                    {/**/}
                                    <span className="flex items-center gap-1 overflow-hidden capitalize whitespace-nowrap text-ellipsis">
                                        {lang['transaction-types.deposit']}
                                    </span>
                                    </div>
                                    <div
                                    id="transaction-history-withdrawal-btn"
                                    className={`flex gap-2 p-2 rounded-md cursor-pointer h-full transition-all font-bold items-center overflow-hidden select-none ${filter == "Withdrawal" ? "bg-light-50" : ""} dark:bg-dark-700 text-dark-800 dark:text-light-50 shrink-0`}
                                    onClick={()=>changeFilter("Withdrawal")}
                                    >
                                    <span className="flex items-center gap-1 overflow-hidden capitalize whitespace-nowrap text-ellipsis">
                                         {/**/} {lang['transaction-types.withdrawal']}
                                    </span>
                                    </div>
                                    <div
                                    id="transaction-history-sports-btn"
                                    className={`flex gap-2 p-2 rounded-md cursor-pointer h-full transition-all font-bold items-center overflow-hidden select-none ${filter == "Sports" ? "bg-light-50" : ""} dark:bg-dark-700 text-dark-800 dark:text-light-50 shrink-0`}
                                    onClick={()=>changeFilter("Sports")}
                                    >
                                    {/**/}
                                    <span className="flex items-center gap-1 overflow-hidden capitalize whitespace-nowrap text-ellipsis">
                                        {/**/} {lang['transaction-types.sports']}
                                    </span>
                                    </div>
                                    <div
                                    id="transaction-history-casino-btn"
                                    className={`flex gap-2 p-2 rounded-md cursor-pointer h-full transition-all font-bold items-center overflow-hidden select-none ${filter == "Casino" ? "bg-light-50" : ""} dark:bg-dark-700 text-dark-800 dark:text-light-50 shrink-0`}
                                    onClick={()=>changeFilter("Casino")}
                                    >
                                    {/**/}
                                    <span className="flex items-center gap-1 overflow-hidden capitalize whitespace-nowrap text-ellipsis">
                                         {/**/} {lang['transaction-types.casino']}
                                    </span>
                                    </div>
                                    <div
                                    id="transaction-history-betgames-btn"
                                    className={`flex gap-2 p-2 rounded-md cursor-pointer h-full transition-all font-bold items-center overflow-hidden select-none ${filter == "BetGames" ? "bg-light-50" : ""} dark:bg-dark-700 text-dark-800 dark:text-light-50 shrink-0`}
                                    onClick={()=>changeFilter("BetGames")}
                                    >
                                    {/**/}
                                    <span className="flex items-center gap-1 overflow-hidden capitalize whitespace-nowrap text-ellipsis">
                                         {/**/} {lang['lobbies.betgames']}
                                    </span>
                                    </div>
                                    <div
                                    id="transaction-history-virtual-btn"
                                    className={`flex gap-2 p-2 rounded-md cursor-pointer h-full transition-all font-bold items-center overflow-hidden select-none ${filter == "Virtuals" ? "bg-light-50" : ""} dark:bg-dark-700 text-dark-800 dark:text-light-50 shrink-0`}
                                    onClick={()=>changeFilter("Virtuals")}
                                    >
                                    {/**/}
                                    <span className="flex items-center gap-1 overflow-hidden capitalize whitespace-nowrap text-ellipsis">
                                         {/**/} {lang['transaction-types.virtuals']}
                                    </span>
                                    </div>
                                    <div
                                    id="transaction-history-jackpot-btn"
                                    className={`flex gap-2 p-2 rounded-md cursor-pointer h-full transition-all font-bold items-center overflow-hidden select-none ${filter == "Jackpots" ? "bg-light-50" : ""} dark:bg-dark-700 text-dark-800 dark:text-light-50 shrink-0`}
                                    onClick={()=>changeFilter("Jackpots")}
                                    >
                                    {/**/}
                                    <span className="flex items-center gap-1 overflow-hidden capitalize whitespace-nowrap text-ellipsis">
                                         {/**/} {lang['transaction-types.jackpot']}
                                    </span>
                                    </div>
                                </div>
                                </div>
                                <div className="w-full flex gap-2 items-center">
                                <form>
                                    <div
                                    data-v-434bc30d=""
                                    className="input-wrapper small icon icon-right clearable"
                                    >
                                    <div
                                        data-v-434bc30d=""
                                        className="relative text-dark-600"
                                    >
                                        <svg
                                        data-v-434bc30d=""
                                        className="w-5 h-5 fill-[currentColor]"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        name="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                                        >
                                        <path
                                            className=""
                                            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                                            strokeLinecap="square"
                                        />
                                        </svg>
                                        {/**/}
                                        {/**/}
                                        <input
                                        data-v-434bc30d=""
                                        data-id=""
                                        id="transaction-history-search-btn"
                                        autoComplete="off"
                                        type="number"
                                        placeholder="Transaction ID"
                                        className=""
                                        />
                                        {/**/}
                                    </div>
                                    {/**/}
                                    </div>
                                </form>
                                <div className="w-[1px] h-8 bg-light-400 dark:bg-dark-500" />
                                <div
                                    id="transaction-history-date-picker"
                                    className="rounded bg-light-50 w-8 h-8 dark:bg-dark-800 flex items-center justify-center cursor-pointer hover:bg-light-500 hover:dark:bg-dark-900 transition-all text-dark-600 dark:text-light-50 relative overflow-hidden"
                                >
                                    <svg
                                    className="w-6 h-6 fill-[currentColor]"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        className=""
                                        d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1"
                                        strokeLinecap="square"
                                    />
                                    </svg>
                                    <div
                                    data-v-433a23e0=""
                                    className="absolute w-full h-full opacity-0"
                                    >
                                    <div
                                        data-v-433a23e0=""
                                        className="relative text-dark-600 calendar-wrapper  h-10"
                                    >
                                        <span
                                        data-v-433a23e0=""
                                        className="p-calendar p-component p-inputwrapper w-full"
                                        >
                                        <input
                                            id="date"
                                            type="text"
                                            role="combobox"
                                            className="p-inputtext p-component cursor-pointer m-0  pl-4 pr-7 box-border block rounded border h-10 text-base text-dark-600 bg-light-50 appearance-none focus:outline-none focus:ring-0 transition-colors dark:text-light-50 border-light-500 dark:border-dark-600 dark:bg-dark-800 focus:border-identity placeholder:text-dark-800 dark:placeholder:text-light-50 overflow-hidden text-ellipsis"
                                            placeholder="Date"
                                            autoComplete="off"
                                            aria-autocomplete="none"
                                            aria-haspopup="dialog"
                                            aria-expanded="false"
                                            aria-controls="pv_id_4_panel"
                                            inputMode="none"
                                            tabIndex={0}
                                        />
                                        {/**/}
                                        </span>
                                        {/**/}
                                        <svg
                                        data-v-433a23e0=""
                                        className="absolute w-5 h-5 -translate-y-1/2 pointer-events-none fill-dark-800 dark:fill-light-50 right-2 top-1/2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            className=""
                                            d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"
                                            strokeLinecap="square"
                                        />
                                        </svg>
                                    </div>
                                    {/**/}
                                    </div>
                                </div>
                                <div className="w-[1px] h-8 bg-light-400 dark:bg-dark-500" />
                                <div
                                    id="transaction-history-export-btn"
                                    className="rounded bg-light-50 w-8 h-8 dark:bg-dark-800 flex items-center justify-center cursor-pointer hover:bg-light-500 hover:dark:bg-dark-900 transition-all text-dark-600 dark:text-light-50"
                                >
                                    <svg
                                    className="w-6 h-6 fill-[currentColor]"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        className=""
                                        d="M23,12L19,8V11H10V13H19V16M1,18V6C1,4.89 1.9,4 3,4H15A2,2 0 0,1 17,6V9H15V6H3V18H15V15H17V18A2,2 0 0,1 15,20H3A2,2 0 0,1 1,18Z"
                                        strokeLinecap="square"
                                    />
                                    </svg>
                                </div>
                                </div>
                                <div className="w-full border-t grid grid-cols-[1fr,70px,1fr,1fr] md:grid-cols-12 md:gap-2 border-t-light-400 dark:border-t-dark-500 text-xs font-bold leading-3 pt-2 pr-6 md:pl-2 md:pr-6 items-center">
                                <div className="md:col-span-2">
                                    <div className="flex gap-1 items-center">
                                    {" "} {lang['date']}
                                    <svg
                                        className="w-5 h-6 md:w-6 md:h-6 fill-dark-600 dark:fill-light-50 cursor-pointer"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        className=""
                                        d="M19 7H22L18 3L14 7H17V21H19M2 17H12V19H2M6 5V7H2V5M2 11H9V13H2V11Z"
                                        strokeLinecap="square"
                                        />
                                    </svg>
                                    </div>
                                </div>
                                <div className="md:col-span-3">Type</div>
                                <div className="md:col-span-2">
                                    <div className="flex gap-1 items-center">
                                    {" "} {lang['transaction-table-headers.amount']}
                                    <svg
                                        className="w-5 h-6 md:w-6 md:h-6 fill-dark-600 dark:fill-light-50 cursor-pointer"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        className=""
                                        d="M18 21L14 17H17V7H14L18 3L22 7H19V17H22M2 19V17H12V19M2 13V11H9V13M2 7V5H6V7H2Z"
                                        strokeLinecap="square"
                                        />
                                    </svg>
                                    </div>
                                </div>
                                <div className="md:col-span-5 md:block whitespace-nowrap">
                                    Transaction
                                </div>
                                </div>
                            </div>
                            <div className="w-full px-2 text-[11px] md:text-xs bg-light-50 dark:bg-dark-800">

                                { transactions && visited[filter] ? 
                                    (filteredTransactions.length > 0 ?
                                        filteredTransactions.map((transaction, index)=> 
                                            <Transaction transaction={transaction} country={country}/>
                                        )
                                        :
                                        <div className="flex p-4">
                                            <div className="w-full pt-1 pb-1 pl-8 pr-1 text-xs leading-4 rounded text-dark-800 border relative border-warning-200 bg-warning-50">
                                                <svg
                                                className="w-5 h-5 fill-[currentColor] absolute top-[2px] left-[5px] fill-warning-500"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path
                                                    className=""
                                                    d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
                                                    strokeLinecap="square"
                                                />
                                                </svg>
                                                No transactions were found
                                            </div>
                                        </div>)
                                        :
                                        Array.apply(null, Array(20)).map(item => 
                                            <div className="grid grid-cols-12 gap-2 w-full border-b border-b-light-500 dark:border-b-dark-500 leading-4 p-2 md:px-2 md:py-3 h-[33px] md:h-[41px] items-center">
                                                <div className="col-span-4 md:col-span-2">
                                                    <div className="rounded animate-pulse bg-dark-300 w-[100px] h-[12px] bg-light-500 dark:bg-dark-500">
                                                        <span className="opacity-0" />
                                                    </div>
                                                </div>
                                                    <div className="col-span-4 md:col-span-3">
                                                    <div className="rounded animate-pulse bg-dark-300 w-[90px] h-[12px] bg-light-500 dark:bg-dark-500">
                                                        <span className="opacity-0" />
                                                    </div>
                                                </div>
                                                <div className="col-span-4 md:col-span-2">
                                                    <div className="rounded animate-pulse bg-dark-300 w-[70px] h-[12px] bg-light-500 dark:bg-dark-500">
                                                        <span className="opacity-0" />
                                                    </div>
                                                </div>
                                                <div className="hidden md:block md:col-span-5">
                                                    <div className="rounded animate-pulse bg-dark-300 w-[150px] h-[12px] bg-light-500 dark:bg-dark-500">
                                                        <span className="opacity-0" />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                }
                            </div>
                            </div>
                            <div className="flex justify-between px-2 py-1 sticky bottom-0 left-0 bg-light-50 dark:bg-dark-800 items-center">
                            <div
                                id="transaction-history-prev"
                                className="h-10 flex items-center justify-center cursor-pointer w-10 rounded border bg-[transparent] border-light-400 hover:bg-light-400 dark:border-dark-500 dark:hover:bg-dark-500 transition-all pointer-events-none opacity-50"
                            >
                                <svg
                                className="fill-dark-800 dark:fill-light-50 w-5 h-6"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    className=""
                                    d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
                                    strokeLinecap="square"
                                />
                                </svg>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 capitalize">
                                page 1
                            </div>
                            <div
                                id="transaction-history-next"
                                className="h-10 flex items-center justify-center cursor-pointer w-10 rounded border bg-[transparent] border-light-400 hover:bg-light-400 dark:border-dark-500 dark:hover:bg-dark-500 transition-all pointer-events-none opacity-50"
                            >
                                <svg
                                className="fill-dark-800 dark:fill-light-50 w-5 h-6"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    className=""
                                    d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                                    strokeLinecap="square"
                                />
                                </svg>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/**/}
                </div>
                </div>
            </div>
        </div>

    );
}

const Transaction = ({transaction, country}) => {

    console.log(transaction)

    const [id, setId] = useState("");

    useEffect(()=>{
        if(transaction.tx_type == "Card Deposit" || transaction.tx_type == "Withdrawal"){
            generateUUID(transaction.tx_time).then(res=>setId(res));
        } else{
            setId(transaction.bet_id);
        }
    }, [])

    return(
        <div className="grid grid-cols-[1fr,70px,1fr,1fr] md:grid-cols-12 md:gap-2 w-full border-b border-b-light-500 dark:border-b-dark-500 leading-4 py-2 pr-6 md:pl-2 md:py-3 md:pr-6 relative">
            <div className="md:col-span-2 border-r border-r-light-500 dark:border-r-dark-500 pr-[3px]">
                <span>
                {transactionDate(transaction.tx_time, country.timeZone)}
                </span>
            </div>
            <div className="md:col-span-3 border-r border-r-light-500 dark:border-r-dark-500 px-[3px]">
            {country?.transactionKeywords[transaction.tx_type] || transaction.tx_type}
            </div>
            <div className="md:col-span-2 border-r border-r-light-500 dark:border-r-dark-500 px-[3px]">
                {country.currency}{(transaction.tx_type=='Wager' || transaction.tx_type == 'Withdrawal') && '-'}{(transaction.amount * country.factor).toFixed(2)}
            </div>
            <div className="pl-[3px] overflow-hidden text-ellipsis md:block md:col-span-5">
                <span>{id}</span>
            </div>
            <svg
                className="w-6 h-6 cursor-pointer fill-dark-600 dark:fill-light-50 absolute right-0 top-1/2 -translate-y-1/2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                className=""
                d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z"
                strokeLinecap="square"
                />
            </svg>
        </div>
    )
} 

export default TransactionSummary;