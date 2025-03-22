import React from 'react'
import "./styles/selfExclusion.css";

const SelfExclusion = () => {
    return (
        <div className="sem-SelfExclusionModule ">
            <div className="sem-SelfExclusionModule_Form ">
                <div>
                    <div className="sem-ParagraphTextBasicComponent ">
                        <span>
                            If you feel you are at risk of developing a gambling problem or
                            believe you currently have a gambling problem, please consider
                            Self-Exclusion.
                        </span>
                    </div>
                    <div className="sem-ParagraphTextBasicComponent ">
                        <span>
                            If you want to stop playing for any other reason, please visit our{" "}
                        </span>
                        <span className="sem-ParagraphLink sem-ParagraphLink-bold ">
                            Time-Out
                        </span>
                        <span> and </span>
                        <span className="sem-ParagraphLink sem-ParagraphLink-bold ">
                            Account Closure
                        </span>
                        <span> pages.</span>
                    </div>
                    <div className="sem-ParagraphTextBasicComponent ">
                        <span>
                            bet365 provides the facility to allow a customer to self-exclude
                            themselves from their account or specific products for a set period of
                            time. Once this change has been made, it will not be possible for the
                            selected products to be re-activated for any reason until after the
                            set period has expired.
                        </span>
                    </div>
                    <div className="sem-ParagraphTextBasicComponent ">
                        <span style={{}}>
                            During the period of self-exclusion bet365 will do all it can to
                            prevent new accounts being opened.
                        </span>
                    </div>
                    <div className="sem-ParagraphTextBasicComponent ">
                        <span style={{}}>
                            If you would like further information regarding self-exclusion, please
                            contact us and one of our highly trained Customer Service team will be
                            pleased to assist you.
                        </span>
                    </div>
                    <div className="sem-ParagraphTextBasicComponent ">
                        <span style={{}}>
                            If you wish to self-exclude yourself now, you can do so by selecting
                            the period of self-exclusion and the products you wish to be
                            self-excluded from below. You will be asked to confirm the details, at
                            which point the self-exclusion will become effective immediately.
                        </span>
                    </div>
                </div>
                <div>
                    <div className="sem-FieldSelectPeriod fml-FieldSelect ">
                        <label
                            htmlFor="self_exclusion_period"
                            className="fml-FieldSelect_Label "
                        >
                            Self-Exclusion Period
                        </label>
                        <div className="fml-FieldSelect_InputRow ">
                            <select
                                id="self_exclusion_period"
                                className="fml-FieldSelect_Select fml-FieldSelect_Select-placeholder "
                            >
                                <option value="" selected="" className="fml-FieldSelect_Option ">
                                    Please Select
                                </option>
                                <option value={1} className="fml-FieldSelect_Option ">
                                    6 Months
                                </option>
                                <option value={2} className="fml-FieldSelect_Option ">
                                    1 Year
                                </option>
                                <option value={3} className="fml-FieldSelect_Option ">
                                    2 Years
                                </option>
                                <option value={4} className="fml-FieldSelect_Option ">
                                    5 Years
                                </option>
                            </select>
                        </div>
                    </div>
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                </div>
                <div>
                    <div className="sem-FieldGroupCheckboxes_Header ">
                        Please select at least one Product
                    </div>
                    <div className="sem-FieldCheckboxInput ">
                        <div className="sem-FieldCheckboxInput_Container ">
                            <input
                                type="checkbox"
                                name="All Products"
                                defaultValue={1}
                                id="all_products_id"
                                className="sem-FieldCheckboxInput_Input"
                            />
                            <label
                                htmlFor="all_products_id"
                                className="sem-FieldCheckboxInput_Checkbox "
                            />
                            <div className="sem-FieldCheckboxInput_TextContainer ">
                                <label
                                    htmlFor="all_products_id"
                                    className="sem-FieldCheckboxInput_Label "
                                >
                                    All Products
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="sem-FieldCheckboxInput ">
                        <div className="sem-FieldCheckboxInput_Container ">
                            <input
                                type="checkbox"
                                name="Sports"
                                defaultValue={1}
                                id="sports_id"
                                className="sem-FieldCheckboxInput_Input"
                            />
                            <label
                                htmlFor="sports_id"
                                className="sem-FieldCheckboxInput_Checkbox "
                            />
                            <div className="sem-FieldCheckboxInput_TextContainer ">
                                <label
                                    htmlFor="sports_id"
                                    className="sem-FieldCheckboxInput_Label "
                                >
                                    Sports
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="sem-FieldCheckboxInput ">
                        <div className="sem-FieldCheckboxInput_Container ">
                            <input
                                type="checkbox"
                                name="Casino"
                                defaultValue={1}
                                id="games_id"
                                className="sem-FieldCheckboxInput_Input"
                            />
                            <label
                                htmlFor="games_id"
                                className="sem-FieldCheckboxInput_Checkbox "
                            />
                            <div className="sem-FieldCheckboxInput_TextContainer ">
                                <label htmlFor="games_id" className="sem-FieldCheckboxInput_Label ">
                                    Casino
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="fml-FieldSubmitButton ">Continue</button>
                </div>
            </div>
        </div>
    )
}

export default SelfExclusion
