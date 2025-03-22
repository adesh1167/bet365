import React from 'react'
import "./styles/depositLimits.css";

const DepositLimits = () => {
    return (
        <div className="dlm-DepositLimitsModule ">
            <div>
                <div className="dll-DepositLimitsIntro ">
                    <div>
                        <div className="dll-DepositLimitsIntro_Para ">
                            This facility enables you to limit the amount of money that you
                            are able to deposit online into your account on either a 24 hour,
                            7 day and/or 30 day basis.
                        </div>
                        <div className="dll-DepositLimitsIntro_Para ">
                            These amounts may be revised downwards at any time but any
                            increase will only be implemented 24 hours after the request. Our
                            Customer Services staff will be available to provide any further
                            information required but are unable to override limits set by you.
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="dlm-DepositLimitsOverview_Heading ">
                        Your existing deposit limits are:
                    </div>
                    <div className="dlm-DepositLimitsOverview_DepositLimits ">
                        <div className="dlm-DepositLimit ">
                            <div className="dlm-DepositLimit_TopWrapper dlm-DepositLimit_NoDepositLimitsSetWrapper ">
                                <div
                                    className="dlm-DepositLimit_DescriptionWrapper "
                                    style={{ width: 136 }}
                                >
                                    <div className="dlm-DepositLimit_DepositLimitPeriodLabel ">
                                        Deposit Limit
                                    </div>
                                </div>
                                <div className="dlm-DepositLimit_DepositLimitValue dlm-DepositLimit_NoDepositLimitsSetValue ">
                                    No Deposit Limit Set
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dlm-DepositLimitsOverview_ChangeButtonContainer ">
                        <div className="dlm-DepositLimitsOverview_ChangeButtonLabel ">
                            Change
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DepositLimits
