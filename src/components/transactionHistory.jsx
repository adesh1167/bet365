import React, { useEffect, useMemo, useState } from 'react'
import NavigationMenuLoadingSpinner from './navigationMenuLoadingSpinner';
import { useApp } from '../contexts/appContext';
import BetSummary from './betSummary';
import formatNumber from '../functions/formatNumber';
import generateUUID from '../functions/generateId';
import formatDate, { isGreaterThanTime, ticketDate } from '../functions/formatDate';

const TransactionHistory = ({ toggleMenu, goBack, hidden, type, title, duration, label }) => {

    const dates = useMemo(() => {
        return {
            start: Date.now() - 60 * 60 * 24 * duration * 1000,
            end: Date.now()
        }
    }, [duration]);

    const { transactions, country,  } = useApp();

    const filteredTransactions = useMemo(() => {
        const newTransactions =  transactions.filter(transaction => transaction.tx_type === type);
        return newTransactions.filter(transaction => {
            const txTime = transaction.tx_time;
            if(isGreaterThanTime(txTime, dates.start)) return true;
            else return false;
        });
        
    }, [transactions])

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 500 + Math.random() * 1500);
    }, []);

    console.log(filteredTransactions, type);

    if (!hidden) return null;

    return (
        <>
            <div className="wc-PageView_ContentContainer ">
                <div>
                    <div className="nh-NavigationHeaderModule " onClick={toggleMenu}>
                        <div className="nh-NavigationHeaderModule_Title ">{title}</div>
                        <div className="nh-BurgerIcon ">
                            <div className="nh-BurgerIcon_Icon " />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="h-HistoryModule ">
                        <div className="hl-BackButton " onClick={goBack}>Back</div>
                        {loaded && <div className="hl-SummaryRenderer ">
                            <div className="hl-SummaryRenderer_Title ">
                                From {formatDate(dates.start)} To {formatDate(dates.end)}
                            </div>
                            {filteredTransactions.length === 0 ?
                                <div className="hl-SummaryRenderer_Message " style={{}}>
                                    Sorry, there is no history information available
                                </div>
                                :
                                <div className="hl-SummaryRenderer_Container ">
                                    {filteredTransactions.map(transaction =>
                                        <Transaction transaction={transaction} label={label}/>    
                                    )}
                                </div>
                            }
                        </div>}
                    </div>
                </div>
            </div>

            {loaded || <NavigationMenuLoadingSpinner height="570px" />}
        </>


    )
}

const Transaction = ({ transaction, label }) => {

    const {country} = useApp();

    const [id, setId] = useState("");

    // useEffect(()=>{
    //     if(transaction.tx_type == "Card Deposit" || transaction.tx_type == "Withdrawal"){
    //         generateUUID(transaction.tx_time).then(res=>setId(res));
    //     } else{
    //         setId(transaction.bet_id);
    //     }
    // }, [])

    return (
        <div className="dwh-DepositWithdrawalResult ">
            <div className="dwh-DepositWithdrawalResult_Header">
                <div
                    className="dwh-DepositWithdrawalResult_HeaderLabel "
                    style={{}}
                >
                    {label} Amount
                </div>
                <div className="dwh-DepositWithdrawalResult_ValueLabel ">
                    {country.currency}{formatNumber(transaction.amount * country.factor, country.hasComma, country.lang)}
                </div>
            </div>
            <div className="dwh-DepositWithdrawalResult_Paragraph">
                <div
                    className="dwh-DepositWithdrawalResult_DepositLabel "
                    style={{}}
                >
                    {transaction.tx_type === "Card Deposit" ? "Deposit AstroPay" : transaction.tx_type}
                </div>
                <div className="dwh-DepositWithdrawalResult_ReferenceLabel ">
                    Reference: {generateUUID(transaction.tx_time)}
                </div>
                <div
                    className="dwh-DepositWithdrawalResult_TimeStampLabel "
                    style={{}}
                >
                    {ticketDate(transaction.tx_time, country.timeZone)}
                </div>
            </div>
        </div>
    )
}

export default TransactionHistory;
