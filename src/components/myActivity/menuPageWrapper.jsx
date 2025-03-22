import React from 'react'
import DepositLimits from './depositLimits'
import TimeOut from './timeOut'
import SelfExclusion from './selfExclusion'
import AccountClosure from './accountClosure'
import RealityChecks from './realityChecks'

const MenuPageWrapper = ({ toggleMenu, duration, hidden, title, status, route }) => {

    if (!hidden) return null;

    return (
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
                {route === "depositLimits" ?
                    <DepositLimits status={status} duration={duration} title={title} />
                    :
                    route === "timeOut" ?
                        <TimeOut/>
                        :
                        route === "selfExclusion" ?
                            <SelfExclusion status={status} duration={duration} title={title} />
                            :
                            route === "accountClosure" ?
                                <AccountClosure status={status} duration={duration} title={title} />
                                :
                                route === "realityChecks" ?
                                    <RealityChecks status={status} duration={duration} title={title} />
                                    :
                                    route === "netDeposits" ?
                                        <div>Net Deposits</div>
                                        :
                                        route === "winLoss" ?
                                            <div>Win/Loss</div>
                                            :
                                            null
                }
            </div>
        </div>

    )
}

export default MenuPageWrapper
