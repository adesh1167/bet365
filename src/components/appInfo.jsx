const AppInfo = ({setOverlay, overlay}) => {

    return (
        <div className="ut-overlay-content">
            <div className="ut-overlay-close" onClick={() => setOverlay(false)}>✕</div>
            {overlay === 'info' && <div className="ut-overlay-info">
                <div className="ut-overlay-title">How to use</div>
                <div className="ut-overlay-info-content">
                    <ol>
                        <li className="ut-overlay-info-content-text">Copy the ticket from the official betway website.</li>
                        <li className="ut-overlay-info-content-text">Come back to the clone app and paste in the top box. Click on <b>Open</b>, <b>Won</b> or <b>As Is</b> button to generate the ticket as needed.</li>
                        <li className="ut-overlay-info-content-text">Edit <b>wager</b> and other data then press upload.</li>
                    </ol>
                    <hr />
                    <div className="ut-overlay-title">Navigation</div>
                    <ol>
                        {/* <li className="ut-overlay-info-content-text relative"><b>Load Official Betway</b>: On the betway home screen, click on <a style={{ display: "inline-block", width: 25, height: 15, position: "absolute" }} href="?url=new.betway.co.za&&url2=betway.com.ng" className="">
                            <div style={{ display: "inline-flex", width: 25, height: 25, position: "relative", top: 0, }} className="flex items-center justify-center cursor-pointer overflow-hidden bg-dark-700 rounded h-[50px] w-[50px]">
                                <svg
                                    className="w-7 h-7 fill-light-50"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ width: 18 }}
                                >
                                    <path
                                        className=""
                                        d="M9.25,5L12.5,1.75L15.75,5H9.25M15.75,19L12.5,22.25L9.25,19H15.75M8.89,14.3H6L5.28,17H2.91L6,7H9L12.13,17H9.67L8.89,14.3M6.33,12.68H8.56L7.93,10.56L7.67,9.59L7.42,8.63H7.39L7.17,9.6L6.93,10.58L6.33,12.68M13.05,17V15.74L17.8,8.97V8.91H13.5V7H20.73V8.34L16.09,15V15.08H20.8V17H13.05Z"
                                        strokeLinecap="square"
                                    />
                                </svg>
                            </div>
                        </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;. The official betway website will popup. Login with your real Betway details then you can click on <b>Betslip ID</b> to copy tickets</li> */}
                        <li className="ut-overlay-info-content-text"><b>Upload Ticket</b>: Menu &gt; Customer Hub &gt; How To.</li>
                        <li className="ut-overlay-info-content-text"><b>Manage Tickets</b>: Menu &gt; Customer Hub &gt; Live Chat.</li>
                        <li className="ut-overlay-info-content-text"><b>Delete Transaction</b>: Menu &gt; My Account &gt; Transaction Summary. Then click on <svg
                            className=""
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ display: "inline", position: "relative", width: 20, top: 3 }}
                        >
                            <path
                                className=""
                                d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z"
                                strokeLinecap="square"
                            />
                        </svg> of each transaction to delete.
                        </li>
                        <li className="ut-overlay-info-content-text"><b>API Usage(AI)</b>: Menu &gt; Balance. Click on your balance.</li>
                    </ol>
                    <hr />
                    <div className="ut-overlay-title">Use of AI</div>
                    <span className="ut-overlay-info-content-text">In case winning selection was not stated on Betway and fall back fulltime score is not present, toggle ON <b>Use AI</b> to get the winning selections automatically.</span>
                    <br />
                    <br />
                    <span><b>→ Note:</b> Using AI attracts charges. Your AI data usage can be viewed under <b>Menu &gt; Balance</b>.
                        <br />
                        <i>So use AI only when needed.</i>
                    </span>

                    <br/>
                    <br/>

                    <span><b>List of game types AI can obtain winning selection for</b></span>
                    <ul>
                        <li>Correct Score</li>
                        <li>1X2</li>
                        <li>Exact Goals</li>
                        <li>Half Time/Full Time</li>
                        <li>Goal Margin</li>
                        <li>Goal Range</li>
                        <li>Total Goals (Overs/Unders)</li>
                        <li>Both Teams To Score</li>
                        <li>Double Chance</li>
                        <li>Winning Margin</li>
                        <li>1st Half - 1X2</li>
                        <li>1st Half - Exact Goals</li>
                        <li>1st Half - Correct Score</li>
                        <li>1X2 & Both Teams To Score</li>
                        <li>1X2 & Total Goals (Overs/Unders)</li>
                        <li>Double Chance & Total Goals (Over/Unders)</li>
                        <li>Excact Goals For Home or Away</li>
                    </ul>

                    <br/>

                    <span>If AI is unable to resolve any of the matches, it will indicate the affected match(es) so that you can manually fix them before uploading.</span>

                    <hr />
                    <div className="ut-overlay-title">Toggle Score</div>
                    <span className="ut-overlay-info-content-text">Toggle ON <b>Score</b> to show the Fulltime score of matches on the ticket. Adjust based on the official Betway UI.</span>
                    <hr />
                    <div className="ut-overlay-title">App Reload and Configuration</div>
                    <ol>
                        <li>If you need to reload the app, click on the bottom right corner of the screen.</li>
                        <li>If you want to change startup configuration, long press the bottom right corner of the sceen for 3 seconds</li>
                    </ol>
                    <hr />
                    <div className="ut-overlay-title">Important Updates</div>
                    <ul>
                        <li><b>Support for manual copying is ending: </b> <s>Drag to copy</s> from the official betway is ending soon. Switch to automatic copying</li>
                        <ul>
                            <li>Click on the <b>Betslip ID</b> of any ticket to automatically copy the betslip. <i>Ensure you selected <b>Data Injector</b> for Injected Modal Script during app configuration</i></li>
                        </ul>
                    </ul>
                    <br />
                    <br />
                </div>
            </div>}
        </div>
    )
}

export default AppInfo;