import './styles/accountClosure.css'

const AccountClosure = () => {
  return (
<div className="acm-AccountClosureModule ">
  <div className="acm-AccountClosureParagraph ">
    <div className="acm-AccountClosureParagraph_Para " style={{}}>
      If you want to stop playing with us, you may do so by closing your
      account.
    </div>
    <div className="acm-AccountClosureParagraph_Para ">
      If you feel you are at risk of developing a gambling problem or believe
      you currently have a gambling problem, please visit our{" "}
      <span className="acm-AccountClosureParagraph_Link ">Self-Exclusion</span>
      <span> page.</span>
    </div>
    <div className="acm-AccountClosureParagraph_Para " style={{}}>
      Once you close your account, you will be able to withdraw any remaining
      balance you may have. However, you will no longer be able to deposit funds
      or play in any of our products. Should you wish to re-open your account
      during this period, you will be required to answer additional security
      questions to safeguard your account.
    </div>
    <div className="acm-AccountClosureParagraph_Para " style={{}}>
      In order to finalise the closure of your account, please select the
      closure period and the main reason for closure.
    </div>
  </div>
  <div className="acm-AccountClosureModule_Form ">
    <div>
      <div className="fml-FieldGroupWithHeader_Header ">Closure Period:</div>
      <div className="acm-FieldInputRadioCheckbox ">
        <div className="acm-FieldInputRadioCheckbox_OptionsWrapper ">
          <div className="acm-RadioButtonCheckbox acm-RadioButtonCheckbox-selected ">
            <input
              type="radio"
              name="closure_type"
              defaultValue="closure_period"
              id="closure_type_closure_period"
              className="acm-RadioButtonCheckbox_Input"
            />
            <label
              htmlFor="closure_type_closure_period"
              className="acm-RadioButtonCheckbox_Label "
            >
              Duration
            </label>
          </div>
          <div className="acm-RadioButtonCheckbox ">
            <input
              type="radio"
              name="closure_type"
              defaultValue="close_until"
              id="closure_type_close_until"
              className="acm-RadioButtonCheckbox_Input"
            />
            <label
              htmlFor="closure_type_close_until"
              className="acm-RadioButtonCheckbox_Label "
            >
              Until
            </label>
          </div>
        </div>
      </div>
      <div className="fml-FieldSelect acm-AccountClosureSelect ">
        <div className="fml-FieldSelect_InputRow ">
          <select
            id="closure_period"
            className="fml-FieldSelect_Select fml-FieldSelect_Select-placeholder "
          >
            <option value="" selected="" className="fml-FieldSelect_Option ">
              Please Select
            </option>
            <option value={1} className="fml-FieldSelect_Option ">
              One Week
            </option>
            <option value={2} className="fml-FieldSelect_Option ">
              One Month
            </option>
            <option value={3} className="fml-FieldSelect_Option ">
              3 Months
            </option>
            <option value={4} className="fml-FieldSelect_Option ">
              6 Months
            </option>
            <option value={5} className="fml-FieldSelect_Option ">
              12 Months
            </option>
            <option value={6} className="fml-FieldSelect_Option ">
              Indefinitely
            </option>
          </select>
        </div>
      </div>
      <div className="acm-AccountClosureDate Hidden ">
        <div className="acm-AccountClosureDate_SelectRow ">
          <div className="acm-AccountClosureDate_SelectContainer ">
            <select className="acm-AccountClosureDate_Select acm-SelectComponent acm-SelectComponent-placeholder ">
              <option value="" className="acm-SelectComponent_Option ">
                DD
              </option>
              <option value={1} className="acm-SelectComponent_Option ">
                1
              </option>
              <option value={2} className="acm-SelectComponent_Option ">
                2
              </option>
              <option value={3} className="acm-SelectComponent_Option ">
                3
              </option>
              <option value={4} className="acm-SelectComponent_Option ">
                4
              </option>
              <option value={5} className="acm-SelectComponent_Option ">
                5
              </option>
              <option value={6} className="acm-SelectComponent_Option ">
                6
              </option>
              <option value={7} className="acm-SelectComponent_Option ">
                7
              </option>
              <option value={8} className="acm-SelectComponent_Option ">
                8
              </option>
              <option value={9} className="acm-SelectComponent_Option ">
                9
              </option>
              <option value={10} className="acm-SelectComponent_Option ">
                10
              </option>
              <option value={11} className="acm-SelectComponent_Option ">
                11
              </option>
              <option value={12} className="acm-SelectComponent_Option ">
                12
              </option>
              <option value={13} className="acm-SelectComponent_Option ">
                13
              </option>
              <option value={14} className="acm-SelectComponent_Option ">
                14
              </option>
              <option value={15} className="acm-SelectComponent_Option ">
                15
              </option>
              <option value={16} className="acm-SelectComponent_Option ">
                16
              </option>
              <option value={17} className="acm-SelectComponent_Option ">
                17
              </option>
              <option value={18} className="acm-SelectComponent_Option ">
                18
              </option>
              <option value={19} className="acm-SelectComponent_Option ">
                19
              </option>
              <option value={20} className="acm-SelectComponent_Option ">
                20
              </option>
              <option value={21} className="acm-SelectComponent_Option ">
                21
              </option>
              <option value={22} className="acm-SelectComponent_Option ">
                22
              </option>
              <option value={23} className="acm-SelectComponent_Option ">
                23
              </option>
              <option value={24} className="acm-SelectComponent_Option ">
                24
              </option>
              <option value={25} className="acm-SelectComponent_Option ">
                25
              </option>
              <option value={26} className="acm-SelectComponent_Option ">
                26
              </option>
              <option value={27} className="acm-SelectComponent_Option ">
                27
              </option>
              <option value={28} className="acm-SelectComponent_Option ">
                28
              </option>
              <option value={29} className="acm-SelectComponent_Option ">
                29
              </option>
              <option value={30} className="acm-SelectComponent_Option ">
                30
              </option>
              <option value={31} className="acm-SelectComponent_Option ">
                31
              </option>
            </select>
          </div>
          <div className="acm-AccountClosureDate_SelectContainer ">
            <select className="acm-AccountClosureDate_Select acm-SelectComponent acm-SelectComponent-placeholder ">
              <option value="" className="acm-SelectComponent_Option ">
                MM
              </option>
              <option value={1} className="acm-SelectComponent_Option ">
                Jan
              </option>
              <option value={2} className="acm-SelectComponent_Option ">
                Feb
              </option>
              <option value={3} className="acm-SelectComponent_Option ">
                Mar
              </option>
              <option value={4} className="acm-SelectComponent_Option ">
                Apr
              </option>
              <option value={5} className="acm-SelectComponent_Option ">
                May
              </option>
              <option value={6} className="acm-SelectComponent_Option ">
                Jun
              </option>
              <option value={7} className="acm-SelectComponent_Option ">
                Jul
              </option>
              <option value={8} className="acm-SelectComponent_Option ">
                Aug
              </option>
              <option value={9} className="acm-SelectComponent_Option ">
                Sep
              </option>
              <option value={10} className="acm-SelectComponent_Option ">
                Oct
              </option>
              <option value={11} className="acm-SelectComponent_Option ">
                Nov
              </option>
              <option value={12} className="acm-SelectComponent_Option ">
                Dec
              </option>
            </select>
          </div>
          <div className="acm-AccountClosureDate_SelectContainer ">
            <select className="acm-AccountClosureDate_Select acm-SelectComponent acm-SelectComponent-placeholder ">
              <option value="" className="acm-SelectComponent_Option ">
                YYYY
              </option>
              <option value={2025} className="acm-SelectComponent_Option ">
                2025
              </option>
              <option value={2026} className="acm-SelectComponent_Option ">
                2026
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="fml-FieldGroupWithHeader_Header ">
        Please select the main reason for closure:
      </div>
      <div className="fml-FieldSelect ">
        <div className="fml-FieldSelect_InputRow ">
          <select
            id="closure_reason"
            className="fml-FieldSelect_Select fml-FieldSelect_Select-placeholder "
          >
            <option value="" selected="" className="fml-FieldSelect_Option ">
              Please Select
            </option>
            <option value={8} className="fml-FieldSelect_Option ">
              Do not have time, e.g. going on a holiday, preparing for an exam
              etc
            </option>
            <option value={59} className="fml-FieldSelect_Option ">
              Not interested in online gambling anymore
            </option>
            <option value={65} className="fml-FieldSelect_Option ">
              Not happy with your service/product
            </option>
            <option value={63} className="fml-FieldSelect_Option ">
              Not happy with your offers
            </option>
            <option value={59} className="fml-FieldSelect_Option ">
              Want to play (or already playing) at a different provider
            </option>
            <option value={67} className="fml-FieldSelect_Option ">
              Prefer not to specify
            </option>
          </select>
        </div>
      </div>
    </div>
    <div>
      {/**/}
      {/**/}
      <button className="fml-FieldSubmitButton ">Continue</button>
    </div>
  </div>
</div>

  )
}

export default AccountClosure
