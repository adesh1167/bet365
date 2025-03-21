import React, { useEffect, useMemo, useState } from 'react'
import { useApp } from '../../contexts/appContext';
import formatDate, { formatDuration, isGreaterThanTime, myActivityDate, xAxisDate } from '../../functions/formatDate';
import NavigationMenuLoadingSpinner from '../navigationMenuLoadingSpinner';
import { computeDepositWithdrawal, computePlayTime, computeStake, computeWinLoss, filterByDateRange } from '../../functions/myActivity';
import formatNumber from '../../functions/formatNumber';
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import * as ttt from 'chartjs-adapter-luxon';

ChartJS.register(...registerables);

const RangeButtons = [
    {
        text: "7 days",
        duration: 7
    },
    {
        text: "30 Days",
        duration: 30
    },
    {
        text: "12 Months",
        duration: 365,
        hasCalender: true,
    },
]

const MyActivity = ({ toggleMenu, goBack, hidden, status, title }) => {


    const [loaded, setLoaded] = useState(false);
    const [selected, setSelected] = useState(0);
    const [duration, setDuration] = useState(7);
    const [metrics, setMetrics] = useState({
        depositWithdrawal: {

        },
        winLoss: {

        },
        totalStake: {

        },
        totalPlayTime: {

        }
    })

    const { loadedTickets, transactions, country } = useApp();

    const filteredTickets = useMemo(() => {
        if (loadedTickets.tickets) return filterByDateRange(loadedTickets.tickets, duration, "stakeTime")
        else return [];
    }, [duration, loadedTickets]);

    const filteredTransactions = useMemo(() => {
        if (transactions) return filterByDateRange(transactions, duration, "tx_time")
        else return [];
    }, [duration, transactions]);

    const dates = useMemo(() => {

        const startDate = new Date();
        startDate.setDate(startDate.getDate() - duration - 2);
        const endDate = new Date();
        endDate.setDate(endDate.getDate() - 3);

        return ({
            fromDate: formatDate(endDate),
            startDate: myActivityDate(startDate, duration),
            endDate: myActivityDate(endDate, duration),
        })
    }, [duration])

    useEffect(() => {
        if (transactions) computeData();
    }, [duration, transactions])

    function computeData() {
        const tempDW = computeDepositWithdrawal(filteredTransactions, country.factor);
        const tempWL = computeWinLoss(filteredTransactions, duration, country.factor);
        const tempTS = computeStake(filteredTransactions, duration, country.factor);
        const tempTP = computePlayTime(filteredTransactions, duration);
        setMetrics({
            depositWithdrawal: tempDW,
            winLoss: tempWL,
            totalStake: tempTS,
            totalPlayTime: tempTP
        });
    }

    useEffect(() => {
        setTimeout(() => {
            if (loadedTickets.tickets && transactions) setLoaded(true)
        }, 500 + Math.random() * 1500);
    }, [loadedTickets, transactions]);

    if (!hidden) return null;

    // console.log("WinLoss: ", metrics.winLoss);

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

                    {loaded &&
                        <div className="mya-MyActivityModule ">
                            <div className="mya-MyActivityModule_PageWrapper ">
                                <div className="mya-TripleToggleButtons " style={{ zIndex: "+1" }}>
                                    {RangeButtons.map((button, index) =>
                                        <div
                                            key={index}
                                            className={`mya-TimeRangeButton ${selected === index ? "mya-TimeRangeButton-selected" : ""}`}
                                            onClick={() => {
                                                setDuration(button.duration)
                                                setSelected(index);
                                            }}
                                        >
                                            {button.text}
                                        </div>
                                    )}
                                </div>
                                <div className="mya-MyActivityModule_HeaderText " style={{}}>
                                    The figures displayed here include transactions made up to midnight on {dates.fromDate} GMT{country.timeZone}, with the exception of Deposit Limit data which is real-time.
                                </div>
                                <div className="mya-MyActivityModule_SectionContainer ">
                                    <div className="mya-MyActivityModule_Section ">
                                        <div className="mya-WinLossSection_HeaderWrapper ">
                                            <div className="mya-WinLossSection_HeaderLeft ">
                                                <div className="mya-WinLossSection_HeaderTitleWrapper ">
                                                    <div className="mya-WinLossSection_HeaderTitle ">Win/Loss</div>
                                                    <div className="mya-WinLossSection_InfoButtonWrapper ">
                                                        <div className="mya-WinLossSection_InfoButton " />
                                                    </div>
                                                </div>
                                                <div className="mya-WinLossSection_HeaderDescription " style={{}}>
                                                    Your total returns minus your total stakes
                                                </div>
                                            </div>
                                            <div className="mya-WinLossSection_HeaderRight ">
                                                <div className="mya-WinLossSection_HeaderAmount ">{country.currency}{formatNumber(metrics.winLoss.netReturns)}</div>
                                                <div className="mya-WinLossSection_HeaderDate ">
                                                    {dates.startDate} - {dates.endDate}
                                                </div>
                                            </div>
                                        </div>
                                        {metrics.winLoss.dateMap &&
                                            <div style={{ height: "144px", paddingBottom: 20 }}>
                                                <Chart
                                                    key={duration}
                                                    type="bar"
                                                    data={{
                                                        labels: metrics.winLoss.dateMap.map(entry => {
                                                            // console.log(entry.label);
                                                            return entry.label
                                                        }),
                                                        datasets: [{
                                                            label: 'Test',
                                                            data: metrics.winLoss.dateMap.map(entry => ({
                                                                x: entry.label,
                                                                y: entry.net
                                                            })),
                                                            barPercentage: 1,
                                                            categoryPercentage: 0.8,
                                                            borderRadius: 0,
                                                            borderSkipped: false,
                                                            backgroundColor: "#d4d4d4"
                                                        }],
                                                    }}
                                                    options={{
                                                        animation: false,
                                                        maintainAspectRatio: false,
                                                        responsive: true,
                                                        scales: {
                                                            x: {
                                                                type: "time",
                                                                time: {
                                                                    unit: duration > 30 ? "month" : "day",
                                                                    round: duration > 30 ? "month" : "day",
                                                                },
                                                                grid: {
                                                                    display: false,
                                                                    drawOnChartArea: true,
                                                                    lineWidth: 10,
                                                                    color: "#f00"

                                                                },
                                                                ticks: {
                                                                    callback: (value) => {
                                                                        return xAxisDate(value, duration);
                                                                    },
                                                                    font: {
                                                                        size: 10,
                                                                    },
                                                                    maxRotation: 0,
                                                                    maxTicksLimit: duration === 7 ? 7 : duration === 30 ? 6 : 13,
                                                                    autoSkip: false,
                                                                },
                                                                border: {
                                                                    width: 0,
                                                                    color: "#d4d4d4"
                                                                }


                                                            },
                                                            y: {
                                                                afterDataLimits: (scale) => {
                                                                    const maxAbsValue = Math.max(Math.abs(scale.max), Math.abs(scale.min));
                                                                    scale.max = maxAbsValue;
                                                                    scale.min = -maxAbsValue;
                                                                },
                                                                grid: {
                                                                    display: true,
                                                                    drawOnChartArea: true,
                                                                    lineWidth: ctx => ctx.tick.value === 0 ? 1 : 1,
                                                                    color: ctx => ctx.tick.value === 0 ? "#777" : "#e9e9e9",
                                                                    drawTicks: false,
                                                                },
                                                                ticks: {
                                                                    callback: (value, i, ticks) => {
                                                                        const maxValue = ticks[ticks.length - 1]?.value;
                                                                        if (maxValue >= 2) return country.currency + value.toFixed(0);
                                                                        else return country.currency + formatNumber(value);
                                                                    },
                                                                    font: {
                                                                        size: 10
                                                                    },
                                                                    maxTicksLimit: 6,
                                                                },
                                                                border: {
                                                                    width: 1,
                                                                    color: "#777"
                                                                }
                                                            }
                                                        },
                                                        plugins: {
                                                            legend: {
                                                                display: false
                                                            }
                                                        }
                                                    }}
                                                />
                                            </div>
                                        }
                                        {/* <div className="mya-WinLossChart ">
                                            <div className="mya-WinLossChart_YAxisContainer ">
                                                <div className="mya-WinLossChart_YAxisContainerInner ">
                                                    <div className="mya-WinLossChart_YAxisText ">$1.80</div>
                                                    <div className="mya-WinLossChart_YAxisText ">$0.90</div>
                                                    <div className="mya-WinLossChart_YAxisText ">$0</div>
                                                    <div className="mya-WinLossChart_YAxisText ">$-0.90</div>
                                                    <div className="mya-WinLossChart_YAxisText ">$-1.80</div>
                                                </div>
                                            </div>
                                            <div className="mya-WinLossChart_XAxisContainer ">
                                                <div className="mya-WinLossChart_ChartContainer ">
                                                    <div className="mya-WinLossChart_ChartWinContainer ">
                                                        <div className="mya-WinLossChart_BarContainer mya-WinLossChart_BarContainer-sevendays " />
                                                        <div className="mya-WinLossChart_BarContainer mya-WinLossChart_BarContainer-sevendays " />
                                                        <div className="mya-WinLossChart_BarContainer mya-WinLossChart_BarContainer-sevendays " />
                                                        <div className="mya-WinLossChart_BarContainer mya-WinLossChart_BarContainer-sevendays " />
                                                        <div className="mya-WinLossChart_BarContainer mya-WinLossChart_BarContainer-sevendays ">
                                                            <div
                                                                className="mya-WinLossChart_Bar "
                                                                style={{ height: "1.66667%" }}
                                                            />
                                                            <div
                                                                className="mya-WinLossBarHotspot mya-WinLossBarHotspot-win "
                                                                style={{ height: "1.66667%" }}
                                                            />
                                                        </div>
                                                        <div className="mya-WinLossChart_BarContainer mya-WinLossChart_BarContainer-sevendays " />
                                                        <div className="mya-WinLossChart_BarContainer mya-WinLossChart_BarContainer-sevendays " />
                                                    </div>
                                                    <div className="mya-WinLossChart_ChartLossContainer ">
                                                        <div className="mya-WinLossChart_BarContainer mya-WinLossChart_BarContainer-sevendays ">
                                                            <div
                                                                className="mya-WinLossChart_Bar "
                                                                style={{ height: "56.6667%" }}
                                                            />
                                                            <div
                                                                className="mya-WinLossBarHotspot mya-WinLossBarHotspot-loss "
                                                                style={{ height: "56.6667%" }}
                                                            />
                                                        </div>
                                                        <div className="mya-WinLossChart_BarContainer mya-WinLossChart_BarContainer-sevendays ">
                                                            <div
                                                                className="mya-WinLossChart_Bar "
                                                                style={{ height: "61.1111%" }}
                                                            />
                                                            <div
                                                                className="mya-WinLossBarHotspot mya-WinLossBarHotspot-loss "
                                                                style={{ height: "61.1111%" }}
                                                            />
                                                        </div>
                                                        <div className="mya-WinLossChart_BarContainer mya-WinLossChart_BarContainer-sevendays ">
                                                            <div
                                                                className="mya-WinLossChart_Bar "
                                                                style={{ height: "88.8889%" }}
                                                            />
                                                            <div
                                                                className="mya-WinLossBarHotspot mya-WinLossBarHotspot-loss "
                                                                style={{ height: "88.8889%" }}
                                                            />
                                                        </div>
                                                        <div className="mya-WinLossChart_BarContainer mya-WinLossChart_BarContainer-sevendays " />
                                                        <div className="mya-WinLossChart_BarContainer mya-WinLossChart_BarContainer-sevendays " />
                                                        <div className="mya-WinLossChart_BarContainer mya-WinLossChart_BarContainer-sevendays " />
                                                        <div className="mya-WinLossChart_BarContainer mya-WinLossChart_BarContainer-sevendays " />
                                                    </div>
                                                </div>
                                                <div className="mya-WinLossChart_XAxisLabelContainer ">
                                                    <div className="mya-WinLossChart_XAxisText mya-WinLossChart_XAxisText-sevendays ">
                                                        Wed
                                                    </div>
                                                    <div className="mya-WinLossChart_XAxisText mya-WinLossChart_XAxisText-sevendays ">
                                                        Thu
                                                    </div>
                                                    <div className="mya-WinLossChart_XAxisText mya-WinLossChart_XAxisText-sevendays ">
                                                        Fri
                                                    </div>
                                                    <div className="mya-WinLossChart_XAxisText mya-WinLossChart_XAxisText-sevendays ">
                                                        Sat
                                                    </div>
                                                    <div className="mya-WinLossChart_XAxisText mya-WinLossChart_XAxisText-sevendays ">
                                                        Sun
                                                    </div>
                                                    <div className="mya-WinLossChart_XAxisText mya-WinLossChart_XAxisText-sevendays ">
                                                        Mon
                                                    </div>
                                                    <div className="mya-WinLossChart_XAxisText mya-WinLossChart_XAxisText-sevendays ">
                                                        Tue
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="mya-MyActivityModule_Section mya-NetDepositsSection ">
                                        <div className="mya-NetDepositsSection_HeaderWrapper ">
                                            <div className="mya-NetDepositsSection_HeaderLeft ">
                                                <div className="mya-NetDepositsSection_HeaderTitleWrapper ">
                                                    <div className="mya-NetDepositsSection_HeaderTitle ">
                                                        Net Deposits
                                                    </div>
                                                    <div className="mya-NetDepositsSection_InfoButtonWrapper ">
                                                        <div className="mya-NetDepositsSection_InfoButton " />
                                                    </div>
                                                </div>
                                                <div className="mya-NetDepositsSection_HeaderDescription ">
                                                    Your total deposits minus your total withdrawals
                                                </div>
                                            </div>
                                            <div className="mya-NetDepositsSection_HeaderRight ">
                                                <div className="mya-NetDepositsSection_HeaderAmount ">{country.currency}{metrics.depositWithdrawal.netDeposits}</div>
                                                <div className="mya-NetDepositsSection_HeaderDate ">
                                                    {dates.startDate} - {dates.endDate}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mya-NetDepositsSection_DepositsWrapper ">
                                            <div className="mya-NetDepositsSection_TotalDepositsWrapper ">
                                                <div className="mya-NetDepositsSection_TotalDepositsTitle ">
                                                    Total Deposits
                                                </div>
                                                <div className="mya-NetDepositsSection_TotalDepositsAmount ">
                                                    {country.currency}{metrics.depositWithdrawal.totalDeposits}
                                                </div>
                                            </div>
                                            <div className="mya-NetDepositsSection_TotalWithdrawalsWrapper ">
                                                <div className="mya-NetDepositsSection_TotalWithdrawalsTitle ">
                                                    Total Withdrawals
                                                </div>
                                                <div className="mya-NetDepositsSection_TotalWithdrawalsAmount ">
                                                    {country.currency}{metrics.depositWithdrawal.totalWithdrawals}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mya-MyActivityModule_Section ">
                                        <div className="mya-DepositLimitsSection_HeaderWrapper ">
                                            <div className="mya-DepositLimitsSection_HeaderTop ">
                                                <div className="mya-DepositLimitsSection_HeaderTitle ">
                                                    Deposit Limits
                                                </div>
                                                <div className="mya-DepositLimitsSection_HeaderChangeButton ">
                                                    Change
                                                </div>
                                            </div>
                                            <div className="mya-DepositLimitsSection_HeaderBottom ">
                                                <div className="mya-DepositLimitsSection_HeaderDescription ">
                                                    Limit the amount you are able to deposit
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mya-DepositLimitsSection_NoLimit ">No limits</div>
                                    </div>
                                    <div className="mya-MyActivityModule_Section ">
                                        <div className="mya-AmountStakedSection_HeaderWrapper ">
                                            <div className="mya-AmountStakedSection_HeaderLeft ">
                                                <div className="mya-AmountStakedSection_HeaderTitleWrapper ">
                                                    <div className="mya-AmountStakedSection_HeaderTitle ">
                                                        Amount Staked
                                                    </div>
                                                    <div className="mya-AmountStakedSection_InfoButtonWrapper ">
                                                        <div className="mya-AmountStakedSection_InfoButton " />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mya-AmountStakedSection_HeaderRight ">
                                                <div className="mya-AmountStakedSection_HeaderAmount ">{country.currency}{metrics.totalStake.totalStakes}</div>
                                                <div className="mya-AmountStakedSection_HeaderDate ">
                                                    {dates.startDate} - {dates.endDate}
                                                </div>
                                            </div>
                                        </div>
                                        {metrics.totalStake.dateMap &&
                                            <div style={{ height: "144px", paddingBottom: 20 }}>
                                                <Chart
                                                    key={duration}
                                                    type="line"
                                                    data={{
                                                        labels: metrics.totalStake.dateMap.map(entry => {
                                                            // console.log(entry.label);
                                                            return entry.label
                                                        }),
                                                        datasets: [{
                                                            label: 'Test',
                                                            data: metrics.totalStake.dateMap.map(entry => ({
                                                                x: entry.label,
                                                                y: entry.totalStake
                                                            })),
                                                            borderColor: "#777",
                                                            borderWidth: 1,
                                                            barPercentage: 1,
                                                            pointRadius: 1.5,
                                                            pointBackgroundColor: "#00bb88",
                                                            pointBorderColor: "#00bb88",
                                                            categoryPercentage: 0.8,
                                                            borderRadius: 0,
                                                            borderSkipped: false,
                                                            backgroundColor: "#d4d4d4"
                                                        }],
                                                    }}
                                                    options={{
                                                        animation: false,
                                                        maintainAspectRatio: false,
                                                        responsive: true,
                                                        scales: {
                                                            x: {
                                                                type: "time",
                                                                time: {
                                                                    unit: duration > 30 ? "month" : "day",
                                                                    round: duration > 30 ? "month" : "day",
                                                                },
                                                                grid: {
                                                                    display: false,
                                                                    drawOnChartArea: true,
                                                                    lineWidth: 10,
                                                                    color: "#f00"

                                                                },
                                                                ticks: {
                                                                    callback: (value, i, ticks) => {
                                                                        return xAxisDate(value, duration);
                                                                    },
                                                                    font: {
                                                                        size: 10,
                                                                    },
                                                                    maxRotation: 0,
                                                                    maxTicksLimit: duration === 7 ? 7 : duration === 30 ? 6 : 13,
                                                                    autoSkip: false,
                                                                },
                                                                border: {
                                                                    width: 0,
                                                                    color: "#d4d4d4"
                                                                }


                                                            },
                                                            y: {
                                                                // afterDataLimits: (scale) => {
                                                                //     const maxAbsValue = Math.max(Math.abs(scale.max), Math.abs(scale.min));
                                                                //     scale.max = maxAbsValue;
                                                                //     scale.min = -maxAbsValue;
                                                                // },
                                                                grid: {
                                                                    display: true,
                                                                    drawOnChartArea: true,
                                                                    lineWidth: ctx => ctx.tick.value === 0 ? 1 : 1,
                                                                    color: ctx => ctx.tick.value === 0 ? "#777" : "#e9e9e9",
                                                                    drawTicks: false,
                                                                },
                                                                ticks: {
                                                                    callback: (value, i, ticks) => {
                                                                        const maxValue = ticks[ticks.length - 1]?.value;
                                                                        if (maxValue >= 2) return country.currency + value.toFixed(0);
                                                                        else return country.currency + formatNumber(value);
                                                                    },
                                                                    font: {
                                                                        size: 10
                                                                    },
                                                                    maxTicksLimit: 6,
                                                                },
                                                                border: {
                                                                    width: 1,
                                                                    color: "#777"
                                                                }
                                                            }
                                                        },
                                                        plugins: {
                                                            legend: {
                                                                display: false
                                                            }
                                                        }
                                                    }}
                                                />
                                            </div>
                                        }
                                        {/* <div className="mya-AmountStakedChart ">
                                            <div className="mya-AmountStakedChart_YAxisContainer ">
                                                <div className="mya-AmountStakedChart_YAxisContainerInner ">
                                                    <div className="mya-AmountStakedChart_YAxisText ">$8</div>
                                                    <div className="mya-AmountStakedChart_YAxisText ">$6</div>
                                                    <div className="mya-AmountStakedChart_YAxisText ">$4</div>
                                                    <div className="mya-AmountStakedChart_YAxisText ">$2</div>
                                                    <div className="mya-AmountStakedChart_YAxisText ">$0</div>
                                                </div>
                                            </div>
                                            <div className="mya-AmountStakedChart_XAxisContainer ">
                                                <div className="mya-AmountStakedChart_ChartContainer ">
                                                    <svg
                                                        className="mya-AmountStakedChart_Chart "
                                                        style={{ width: "100%" }}
                                                    >
                                                        <polyline
                                                            fill="none"
                                                            className="mya-AmountStakedChart_ChartLine "
                                                            points="30.2723 18 79.817 96 129.362 109 178.906 109 228.451 109 277.996 109 327.54 109"
                                                        />
                                                        <circle
                                                            r={2}
                                                            className="mya-AmountStakedChart_ChartPoint "
                                                            cx="30.272321428571427"
                                                            cy={18}
                                                        />
                                                        <rect
                                                            width={10}
                                                            height={10}
                                                            className="mya-AmountStakedPointHotspot "
                                                            x="25.272321428571427"
                                                            y={13}
                                                        />
                                                        <circle
                                                            r={2}
                                                            className="mya-AmountStakedChart_ChartPoint "
                                                            cx="79.81696428571428"
                                                            cy={96}
                                                        />
                                                        <rect
                                                            width={10}
                                                            height={10}
                                                            className="mya-AmountStakedPointHotspot "
                                                            x="74.81696428571428"
                                                            y={91}
                                                        />
                                                        <circle
                                                            r={2}
                                                            className="mya-AmountStakedChart_ChartPoint "
                                                            cx="129.36160714285714"
                                                            cy={109}
                                                        />
                                                        <rect
                                                            width={10}
                                                            height={10}
                                                            className="mya-AmountStakedPointHotspot "
                                                            x="124.36160714285714"
                                                            y={104}
                                                        />
                                                        <circle
                                                            r={2}
                                                            className="mya-AmountStakedChart_ChartPoint "
                                                            cx="178.90624999999997"
                                                            cy={109}
                                                        />
                                                        <rect
                                                            width={10}
                                                            height={10}
                                                            className="mya-AmountStakedPointHotspot "
                                                            x="173.90624999999997"
                                                            y={104}
                                                        />
                                                        <circle
                                                            r={2}
                                                            className="mya-AmountStakedChart_ChartPoint "
                                                            cx="228.45089285714283"
                                                            cy={109}
                                                        />
                                                        <rect
                                                            width={10}
                                                            height={10}
                                                            className="mya-AmountStakedPointHotspot "
                                                            x="223.45089285714283"
                                                            y={104}
                                                        />
                                                        <circle
                                                            r={2}
                                                            className="mya-AmountStakedChart_ChartPoint "
                                                            cx="277.9955357142857"
                                                            cy={109}
                                                        />
                                                        <rect
                                                            width={10}
                                                            height={10}
                                                            className="mya-AmountStakedPointHotspot "
                                                            x="272.9955357142857"
                                                            y={104}
                                                        />
                                                        <circle
                                                            r={2}
                                                            className="mya-AmountStakedChart_ChartPoint "
                                                            cx="327.54017857142856"
                                                            cy={109}
                                                        />
                                                        <rect
                                                            width={10}
                                                            height={10}
                                                            className="mya-AmountStakedPointHotspot "
                                                            x="322.54017857142856"
                                                            y={104}
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="mya-AmountStakedChart_XAxisLabelContainer ">
                                                    <div className="mya-AmountStakedChart_XAxisText mya-AmountStakedChart_XAxisText-sevendays ">
                                                        Wed
                                                    </div>
                                                    <div className="mya-AmountStakedChart_XAxisText mya-AmountStakedChart_XAxisText-sevendays ">
                                                        Thu
                                                    </div>
                                                    <div className="mya-AmountStakedChart_XAxisText mya-AmountStakedChart_XAxisText-sevendays ">
                                                        Fri
                                                    </div>
                                                    <div className="mya-AmountStakedChart_XAxisText mya-AmountStakedChart_XAxisText-sevendays ">
                                                        Sat
                                                    </div>
                                                    <div className="mya-AmountStakedChart_XAxisText mya-AmountStakedChart_XAxisText-sevendays ">
                                                        Sun
                                                    </div>
                                                    <div className="mya-AmountStakedChart_XAxisText mya-AmountStakedChart_XAxisText-sevendays ">
                                                        Mon
                                                    </div>
                                                    <div className="mya-AmountStakedChart_XAxisText mya-AmountStakedChart_XAxisText-sevendays ">
                                                        Tue
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="mya-MyActivityModule_Section ">
                                        <div className="mya-TimeSpentPlayingSection_HeaderWrapper ">
                                            <div className="mya-TimeSpentPlayingSection_HeaderLeft ">
                                                <div className="mya-TimeSpentPlayingSection_HeaderTitleWrapper ">
                                                    <div className="mya-TimeSpentPlayingSection_HeaderTitle ">
                                                        Time Spent Playing
                                                    </div>
                                                    <div className="mya-TimeSpentPlayingSection_InfoButtonWrapper ">
                                                        <div className="mya-TimeSpentPlayingSection_InfoButton " />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mya-TimeSpentPlayingSection_HeaderRight ">
                                                <div className="mya-TimeSpentPlayingSection_HeaderTimeSpent ">
                                                    {formatDuration(metrics.totalPlayTime.totalPlayTime, true)}
                                                </div>
                                                <div className="mya-TimeSpentPlayingSection_HeaderDate ">
                                                    12th Mar - 18th Mar
                                                </div>
                                            </div>
                                        </div>
                                        {metrics.winLoss.dateMap &&
                                            <div style={{ height: "144px", paddingBottom: 20 }}>
                                                <Chart
                                                    key={duration}
                                                    type="bar"
                                                    data={{
                                                        labels: metrics.totalPlayTime.dateMap.map(entry => {
                                                            // console.log(entry.label);
                                                            return entry.label
                                                        }),
                                                        datasets: [{
                                                            label: 'Test',
                                                            data: metrics.totalPlayTime.dateMap.map(entry => ({
                                                                x: entry.label,
                                                                y: entry.totalPlayTime
                                                            })),
                                                            barPercentage: 1,
                                                            categoryPercentage: 0.8,
                                                            borderRadius: 0,
                                                            borderSkipped: false,
                                                            backgroundColor: "#58d7af"
                                                        }],
                                                    }}
                                                    options={{
                                                        animation: false,
                                                        maintainAspectRatio: false,
                                                        responsive: true,
                                                        scales: {
                                                            x: {
                                                                type: "time",
                                                                time: {
                                                                    unit: duration > 30 ? "month" : "day",
                                                                    round: duration > 30 ? "month" : "day",
                                                                },
                                                                grid: {
                                                                    display: false,
                                                                    drawOnChartArea: true,
                                                                    lineWidth: 10,
                                                                    color: "#f00"

                                                                },
                                                                ticks: {
                                                                    callback: (value) => {
                                                                        return xAxisDate(value, duration);
                                                                    },
                                                                    font: {
                                                                        size: 10,
                                                                    },
                                                                    maxRotation: 0,
                                                                    maxTicksLimit: duration === 7 ? 7 : duration === 30 ? 6 : 13,
                                                                    autoSkip: false,
                                                                },
                                                                border: {
                                                                    width: 0,
                                                                    color: "#d4d4d4"
                                                                }


                                                            },
                                                            y: {
                                                                // afterDataLimits: (scale) => {
                                                                //     const maxAbsValue = Math.max(Math.abs(scale.max), Math.abs(scale.min));
                                                                //     scale.max = maxAbsValue;
                                                                //     scale.min = -maxAbsValue;
                                                                // },
                                                                grid: {
                                                                    display: true,
                                                                    drawOnChartArea: true,
                                                                    lineWidth: ctx => ctx.tick.value === 0 ? 1 : 1,
                                                                    color: ctx => ctx.tick.value === 0 ? "#777" : "#e9e9e9",
                                                                    drawTicks: false,
                                                                },
                                                                ticks: {
                                                                    callback: (value, i, ticks) => {
                                                                        return formatDuration(value)
                                                                    },
                                                                    font: {
                                                                        size: 10
                                                                    },
                                                                    maxTicksLimit: 3,
                                                                },
                                                                border: {
                                                                    width: 1,
                                                                    color: "#777"
                                                                }
                                                            }
                                                        },
                                                        plugins: {
                                                            legend: {
                                                                display: false
                                                            }
                                                        }
                                                    }}
                                                />
                                            </div>
                                        }
                                        {/* <div className="mya-TimeSpentPlayingChart ">
                                            <div className="mya-TimeSpentPlayingChart_YAxisContainer ">
                                                <div className="mya-TimeSpentPlayingChart_YAxisContainerInner ">
                                                    <div className="mya-TimeSpentPlayingChart_YAxisText ">30m</div>
                                                    <div className="mya-TimeSpentPlayingChart_YAxisText ">15m</div>
                                                    <div className="mya-TimeSpentPlayingChart_YAxisText ">0m</div>
                                                </div>
                                            </div>
                                            <div className="mya-TimeSpentPlayingChart_XAxisContainer ">
                                                <div className="mya-TimeSpentPlayingChart_ChartContainer ">
                                                    <div className="mya-TimeSpentPlayingChart_BarContainer mya-TimeSpentPlayingChart_BarContainer-sevendays ">
                                                        <div
                                                            className="mya-TimeSpentPlayingChart_Bar "
                                                            style={{ height: "100%" }}
                                                        />
                                                        <div
                                                            className="mya-TimeSpentBarHotspot "
                                                            style={{ height: "100%" }}
                                                        />
                                                    </div>
                                                    <div className="mya-TimeSpentPlayingChart_BarContainer mya-TimeSpentPlayingChart_BarContainer-sevendays ">
                                                        <div
                                                            className="mya-TimeSpentPlayingChart_Bar "
                                                            style={{ height: "100%" }}
                                                        />
                                                        <div
                                                            className="mya-TimeSpentBarHotspot "
                                                            style={{ height: "100%" }}
                                                        />
                                                    </div>
                                                    <div className="mya-TimeSpentPlayingChart_BarContainer mya-TimeSpentPlayingChart_BarContainer-sevendays ">
                                                        <div
                                                            className="mya-TimeSpentPlayingChart_Bar "
                                                            style={{ height: "0%" }}
                                                        />
                                                        <div
                                                            className="mya-TimeSpentBarHotspot "
                                                            style={{ height: "0%" }}
                                                        />
                                                    </div>
                                                    <div className="mya-TimeSpentPlayingChart_BarContainer mya-TimeSpentPlayingChart_BarContainer-sevendays ">
                                                        <div
                                                            className="mya-TimeSpentPlayingChart_Bar "
                                                            style={{ height: "0%" }}
                                                        />
                                                        <div
                                                            className="mya-TimeSpentBarHotspot "
                                                            style={{ height: "0%" }}
                                                        />
                                                    </div>
                                                    <div className="mya-TimeSpentPlayingChart_BarContainer mya-TimeSpentPlayingChart_BarContainer-sevendays ">
                                                        <div
                                                            className="mya-TimeSpentPlayingChart_Bar "
                                                            style={{ height: "50%" }}
                                                        />
                                                        <div
                                                            className="mya-TimeSpentBarHotspot "
                                                            style={{ height: "50%" }}
                                                        />
                                                    </div>
                                                    <div className="mya-TimeSpentPlayingChart_BarContainer mya-TimeSpentPlayingChart_BarContainer-sevendays ">
                                                        <div
                                                            className="mya-TimeSpentPlayingChart_Bar "
                                                            style={{ height: "0%" }}
                                                        />
                                                        <div
                                                            className="mya-TimeSpentBarHotspot "
                                                            style={{ height: "0%" }}
                                                        />
                                                    </div>
                                                    <div className="mya-TimeSpentPlayingChart_BarContainer mya-TimeSpentPlayingChart_BarContainer-sevendays ">
                                                        <div
                                                            className="mya-TimeSpentPlayingChart_Bar "
                                                            style={{ height: "0%" }}
                                                        />
                                                        <div
                                                            className="mya-TimeSpentBarHotspot "
                                                            style={{ height: "0%" }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mya-TimeSpentPlayingChart_XAxisLabelContainer ">
                                                    <div className="mya-TimeSpentPlayingChart_XAxisText mya-TimeSpentPlayingChart_XAxisText-sevendays ">
                                                        Wed
                                                    </div>
                                                    <div className="mya-TimeSpentPlayingChart_XAxisText mya-TimeSpentPlayingChart_XAxisText-sevendays ">
                                                        Thu
                                                    </div>
                                                    <div className="mya-TimeSpentPlayingChart_XAxisText mya-TimeSpentPlayingChart_XAxisText-sevendays ">
                                                        Fri
                                                    </div>
                                                    <div className="mya-TimeSpentPlayingChart_XAxisText mya-TimeSpentPlayingChart_XAxisText-sevendays ">
                                                        Sat
                                                    </div>
                                                    <div className="mya-TimeSpentPlayingChart_XAxisText mya-TimeSpentPlayingChart_XAxisText-sevendays ">
                                                        Sun
                                                    </div>
                                                    <div className="mya-TimeSpentPlayingChart_XAxisText mya-TimeSpentPlayingChart_XAxisText-sevendays ">
                                                        Mon
                                                    </div>
                                                    <div className="mya-TimeSpentPlayingChart_XAxisText mya-TimeSpentPlayingChart_XAxisText-sevendays ">
                                                        Tue
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="mya-MyActivityModule_Section ">
                                        <div className="mya-RealityChecksSection_HeaderWrapper ">
                                            <div className="mya-RealityChecksSection_HeaderTop ">
                                                <div className="mya-RealityChecksSection_HeaderTitle ">
                                                    Reality Checks
                                                </div>
                                                <div className="mya-RealityChecksSection_HeaderChangeButton ">
                                                    Change
                                                </div>
                                            </div>
                                            <div className="mya-RealityChecksSection_HeaderBottom ">
                                                <div className="mya-RealityChecksSection_HeaderDescription ">
                                                    A reminder of the time you have spent logged in
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mya-RealityChecksSection_InfoWrapper ">
                                            <div className="mya-RealityChecksSection_InfoTitle ">
                                                Checks every:
                                            </div>
                                            <div className="mya-RealityChecksSection_InfoDuration ">No Check</div>
                                        </div>
                                    </div>
                                    <div className="mya-MyActivityModule_Section ">
                                        <div className="mya-TimeOfBetPlacementSection_HeaderWrapper ">
                                            <div className="mya-TimeOfBetPlacementSection_HeaderLeft ">
                                                <div className="mya-TimeOfBetPlacementSection_HeaderTitleWrapper ">
                                                    <div className="mya-TimeOfBetPlacementSection_HeaderTitle ">
                                                        Time of Bet Placement
                                                    </div>
                                                    <div className="mya-TimeOfBetPlacementSection_InfoButtonWrapper ">
                                                        <div className="mya-TimeOfBetPlacementSection_InfoButton " />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mya-TimeOfBetPlacementSection_HeaderRight ">
                                                <div className="mya-TimeOfBetPlacementSection_HeaderDate ">
                                                    12th Mar - 18th Mar
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mya-TimeOfBetPlacementChart ">
                                            <div className="mya-TimeOfBetPlacementChart_YAxisContainer ">
                                                <div className="mya-TimeOfBetPlacementChart_YAxisContainerInner ">
                                                    <div className="mya-TimeOfBetPlacementChart_YAxisText ">6pm</div>
                                                    <div className="mya-TimeOfBetPlacementChart_YAxisText ">12pm</div>
                                                    <div className="mya-TimeOfBetPlacementChart_YAxisText ">6am</div>
                                                    <div className="mya-TimeOfBetPlacementChart_YAxisText ">12am</div>
                                                </div>
                                            </div>
                                            <div className="mya-TimeOfBetPlacementChart_XAxisContainer ">
                                                <div className="mya-TimeOfBetPlacementChart_ChartContainer ">
                                                    <div className="mya-TimeOfBetPlacementChart_ChartContainerInner ">
                                                        <div className="mya-TimeOfBetPlacementChart_PointContainer mya-TimeOfBetPlacementChart_PointContainer-sevendays ">
                                                            <div
                                                                className="mya-TimeOfBetPlacementChart_Point "
                                                                style={{ bottom: "59.3333px" }}
                                                            />
                                                        </div>
                                                        <div className="mya-TimeOfBetPlacementChart_PointContainer mya-TimeOfBetPlacementChart_PointContainer-sevendays ">
                                                            <div
                                                                className="mya-TimeOfBetPlacementChart_Point "
                                                                style={{ bottom: "50.6667px" }}
                                                            />
                                                            <div
                                                                className="mya-TimeOfBetPlacementChart_Point "
                                                                style={{ bottom: 68 }}
                                                            />
                                                        </div>
                                                        <div className="mya-TimeOfBetPlacementChart_PointContainer mya-TimeOfBetPlacementChart_PointContainer-sevendays " />
                                                        <div className="mya-TimeOfBetPlacementChart_PointContainer mya-TimeOfBetPlacementChart_PointContainer-sevendays " />
                                                        <div className="mya-TimeOfBetPlacementChart_PointContainer mya-TimeOfBetPlacementChart_PointContainer-sevendays ">
                                                            <div
                                                                className="mya-TimeOfBetPlacementChart_Point "
                                                                style={{ bottom: "59.3333px" }}
                                                            />
                                                        </div>
                                                        <div className="mya-TimeOfBetPlacementChart_PointContainer mya-TimeOfBetPlacementChart_PointContainer-sevendays " />
                                                        <div className="mya-TimeOfBetPlacementChart_PointContainer mya-TimeOfBetPlacementChart_PointContainer-sevendays " />
                                                    </div>
                                                </div>
                                                <div className="mya-TimeOfBetPlacementChart_XAxisLabelContainer ">
                                                    <div className="mya-TimeOfBetPlacementChart_XAxisText mya-TimeOfBetPlacementChart_XAxisText-sevendays ">
                                                        Wed
                                                    </div>
                                                    <div className="mya-TimeOfBetPlacementChart_XAxisText mya-TimeOfBetPlacementChart_XAxisText-sevendays ">
                                                        Thu
                                                    </div>
                                                    <div className="mya-TimeOfBetPlacementChart_XAxisText mya-TimeOfBetPlacementChart_XAxisText-sevendays ">
                                                        Fri
                                                    </div>
                                                    <div className="mya-TimeOfBetPlacementChart_XAxisText mya-TimeOfBetPlacementChart_XAxisText-sevendays ">
                                                        Sat
                                                    </div>
                                                    <div className="mya-TimeOfBetPlacementChart_XAxisText mya-TimeOfBetPlacementChart_XAxisText-sevendays ">
                                                        Sun
                                                    </div>
                                                    <div className="mya-TimeOfBetPlacementChart_XAxisText mya-TimeOfBetPlacementChart_XAxisText-sevendays ">
                                                        Mon
                                                    </div>
                                                    <div className="mya-TimeOfBetPlacementChart_XAxisText mya-TimeOfBetPlacementChart_XAxisText-sevendays ">
                                                        Tue
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mya-MyActivityModule_ResponsibleGamblingWrapper ">
                                    <div className="mya-ResponsibleGamblingBanner ">
                                        <div className="mya-ResponsibleGamblingBanner_Wrapper ">
                                            <div className="mya-ResponsibleGamblingBanner_Text ">
                                                Visit our dedicated Responsible Gambling site for helpful tools and
                                                advice.
                                            </div>
                                            <div className="mya-ResponsibleGamblingBanner_Button ">
                                                Find Out More
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
            {loaded || <NavigationMenuLoadingSpinner height="570px" />}
        </>


    )
}


export default MyActivity;
