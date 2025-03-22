import "./styles/realityCheck.css";

const RealityChecks = () => {
    return (
        <div className="rcm-RealityCheckModule ">
            <div className="rcm-MainPage ">
                <div className="rcm-Paragraph ">
                    <div className="rcm-Paragraph_Para ">
                        To support you in managing the amount of time you spend playing, you can
                        set up a Reality Check on your account. Once this is set, a pop-up alert
                        will be displayed as a reminder that you have been logged into your
                        account for the specified period of time (excludes poker game play).
                    </div>
                    <div className="rcm-Paragraph_Para " style={{}}>
                        The Reality Check timer starts when you log in. If you make any changes
                        to this, the new setting will only take effect the next time you log in.
                    </div>
                    <div className="rcm-Paragraph_Para ">
                        If you wish to reduce your Reality Check setting, the changes selected
                        will be applied straight away. Any increases to this setting will be
                        applied 24 hours after the request.
                    </div>
                    <div className="rcm-Paragraph_Para ">
                        When the Reality Check alert is received you can choose to remain logged
                        in, view your account history or log out of your account. If you choose
                        to remain logged in then you will receive another alert after the same
                        length of time so that you can keep track of your total time spent
                        playing.
                    </div>
                </div>
                <div className="rcm-MainPage_SecondaryTitle ">
                    Your existing Reality Check setting is:
                </div>
                <div className="rcm-MainPage_Time ">No Check</div>
                <button className="rcm-ChangeButton ">
                    <div className="rcm-ChangeButton_Text ">Change</div>
                </button>
            </div>
        </div>

    )
}

export default RealityChecks
