import React from 'react'
import "./styles/timeOut.css";

const TimeOut = () => {
    return (
        <div className="tom-TimeOutModule ">
            <div className="tom-TabScroller tom-TabScroller-mouse tom-TabScroller-0 ">
                {/**/}
                <div className="tom-TabScroller_Wrapper">
                    <div className="tom-TabScroller_ScrollContent ">
                        <div className="tom-TabMenuItem tom-TabMenuItem-selected ">
                            <div className="tom-TabMenuItem_Title ">Create a Time-Out</div>
                        </div>
                        <div className="tom-TabMenuItem ">
                            <div className="tom-TabMenuItem_Title ">Existing Time-Outs</div>
                        </div>
                    </div>
                </div>
                {/**/}
            </div>
            <div className="tom-CreateTimeOut ">
                <div className="tom-CreateTimeOut_Intro">
                    <p className="tom-CreateTimeOut_IntroParagraph " style={{}}>
                        If you want to take a short break from playing with us, you may do so by
                        taking a Time-Out for a specified period of time.
                    </p>
                    <p className="tom-CreateTimeOut_IntroParagraph " style={{}}>
                        You can also restrict access to gambling at specific times and/or on
                        specific days by selecting 'Custom' from the menu below.
                    </p>
                    <p className="tom-CreateTimeOut_IntroParagraph ">
                        Once you begin your Time-Out, you will no longer be able to deposit
                        funds or play in any of our products. However, you will be able to
                        withdraw any balance you may have.
                    </p>
                    <p className="tom-CreateTimeOut_IntroParagraph ">
                        <span>
                            If you feel you are at risk of developing a gambling problem or
                            believe you currently have a gambling problem, please visit our{" "}
                        </span>
                        <span className="tom-SelfExclusionLink ">Self-Exclusion</span>
                        <span> page.</span>
                    </p>
                </div>
                <div className="tom-CreateTimeOut_Form ">
                    <div>
                        <div className="fml-FieldSelect ">
                            <label htmlFor="periodid" className="fml-FieldSelect_Label ">
                                Time-Out Period
                            </label>
                            <div className="fml-FieldSelect_InputRow ">
                                <select
                                    id="periodid"
                                    className="fml-FieldSelect_Select fml-FieldSelect_Select-placeholder "
                                >
                                    <option value="" className="fml-FieldSelect_Option ">
                                        Please select
                                    </option>
                                    <option value={1} className="fml-FieldSelect_Option ">
                                        24 Hours
                                    </option>
                                    <option value={2} className="fml-FieldSelect_Option ">
                                        48 Hours
                                    </option>
                                    <option value={3} className="fml-FieldSelect_Option ">
                                        7 Days
                                    </option>
                                    <option value={4} className="fml-FieldSelect_Option ">
                                        30 Days
                                    </option>
                                    <option value={5} className="fml-FieldSelect_Option ">
                                        Custom
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    <div>
                        <button className="fml-FieldSubmitButton ">Continue</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TimeOut
