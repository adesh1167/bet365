import React, { useEffect, useMemo, useState } from 'react'
import NavigationMenuLoadingSpinner from './navigationMenuLoadingSpinner';
import { useApp } from '../contexts/appContext';
import BetSummary from './betSummary';
import formatNumber from '../functions/formatNumber';
import generateUUID from '../functions/generateId';
import formatDate, { isGreaterThanTime, ticketDate } from '../functions/formatDate';
import { baseApiUrl } from '../data/url';
import LoadingSvg from './loadingSvg';

const ManageTransactionHistory = ({ toggleMenu, goBack, hidden, type, title, duration, label }) => {

    const dates = useMemo(() => {
        return {
            start: Date.now() - 60 * 60 * 24 * duration * 1000,
            end: Date.now()
        }
    }, [duration]);

    const { transactions, country, user, setTransactions, setBalance } = useApp();

    const [loaded, setLoaded] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoaded(true)
    //     }, 500 + Math.random() * 1500);
    // }, []);

    // console.log(filteredTransactions, type);

    async function deleteTransaction(id){
        return window.$.ajax({
            url: `${baseApiUrl}/delete-transaction.php`,
            dataType: 'JSON',
            type: 'POST',
            data: {user: user, id},
            success: (res)=>{
              console.log(res)
              if(res.status = 'success'){
                setTransactions(res.data.transactions);
                setBalance(res.data.transactions[0]?.balance);
              }
              else{
                alert('Failed to delete transaction: '+res.data.message)
              }
              return res;
            },
            error: (res)=>{
              console.log(res)
              alert('Failed to delete transaction. Check your internet')
              return new Error(res)
            }
        })
    }

    return (
        <>
            <div className="wc-PageView_ContentContainer ">
                <div>
                    <div className="h-HistoryModule ">
                        {loaded && <div className="hl-SummaryRenderer ">
                            <div className="hl-SummaryRenderer_Title ">
                                
                            </div>
                            {transactions.length === 0 ?
                                <div className="hl-SummaryRenderer_Message " style={{}}>
                                    Sorry, there is no history information available
                                </div>
                                :
                                <div className="hl-SummaryRenderer_Container ">
                                    {transactions.map(transaction =>
                                        <Transaction transaction={transaction} deleteTransaction={deleteTransaction} label={label}/>    
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

const Transaction = ({ transaction, label, deleteTransaction }) => {

    const {country} = useApp();

    const [loading, setLoading] = useState(false);

    function deleteTx(){
        if(window.confirm("Are you sure you want to delete this transaction?") == false) return;
        setLoading(true);
        deleteTransaction(transaction.id)
            .then(res=>{
                setLoading(false);
            })
            .catch(res=>{
                setLoading(false);
            });
    }

    return (
        <div className="dwh-DepositWithdrawalResult " style={{backgroundColor: "#ddd", position: "relative"}}>
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
                    {transaction.tx_type}
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
            <div className="delete-transaction" onClick={deleteTx}>
                {loading ? <LoadingSvg width={20}/> : "Delete"}
            </div>
        </div>
    )
}

export default ManageTransactionHistory;
