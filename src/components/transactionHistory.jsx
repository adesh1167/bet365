import React, { useEffect, useMemo, useState } from 'react'
import NavigationMenuLoadingSpinner from './navigationMenuLoadingSpinner';
import { useApp } from '../contexts/appContext';
import BetSummary from './betSummary';
import formatNumber from '../functions/formatNumber';
import generateUUID from '../functions/generateId';

const TransactionHistory = ({ toggleMenu, goBack, hidden, type, title, label }) => {

    const { transactions, country,  } = useApp();

    const filteredTransactions = useMemo(() => {
        return transactions.filter(transaction => transaction.tx_type === type);
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
                    <div className="dwh-DepositWithdrawalHistoryModule ">
                        <div className="hl-BackButton " onClick={goBack}>Back</div>
                        {loaded && <div className="hl-SummaryRenderer ">
                            <div className="hl-SummaryRenderer_Title ">
                                From 01/02/2025 To 16/03/2025
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

    useEffect(()=>{
        if(transaction.tx_type == "Card Deposit" || transaction.tx_type == "Withdrawal"){
            generateUUID(transaction.tx_time).then(res=>setId(res));
        } else{
            setId(transaction.bet_id);
        }
    }, [])

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
                    {country.currency}{formatNumber(transaction.amount, country.hasComma, country.lang)}
                </div>
            </div>
            <div className="dwh-DepositWithdrawalResult_Paragraph">
                <div
                    className="dwh-DepositWithdrawalResult_DepositLabel "
                    style={{}}
                >
                    {transaction.tx_type}
                </div>
                <div className="dwh-DepositWithdrawalResult_ReferenceLabel ">
                    Reference: {id}
                </div>
                <div
                    className="dwh-DepositWithdrawalResult_TimeStampLabel "
                    style={{}}
                >
                    {transaction.tx_time}
                </div>
            </div>
        </div>
    )
}

export default TransactionHistory;
