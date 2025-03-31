import { useEffect, useRef, useState } from "react";
import { useApp } from "../contexts/appContext";
import './styles/browserIphone.css';
import { useLocation } from "react-router-dom";

export default function BrowserIphone({ }) {

    const location = useLocation();

    const { country } = useApp();

    const [loadingProgress, setLoadingProgress] = useState('0');

    useEffect(() => {
        setTimeout(() => { setLoadingProgress(30) }, 500)
        setTimeout(() => { setLoadingProgress(35) }, 800)
        setTimeout(() => { setLoadingProgress(75) }, 1200)
        setTimeout(() => { setLoadingProgress(82) }, 1700)
        setTimeout(() => { setLoadingProgress(100) }, 2300)

    }, [])

    const [tabs, setTabs] = useState(localStorage.getItem('tabs') || (Number((10 + Math.random() * 20).toFixed()) + 10))

    useEffect(() => {
        localStorage.setItem('tabs', tabs)
    }, [tabs])

    return (
        <>
            <div className="browser-head">
                <div className="address-bar">
                    <span className="url" type="text">
                        <div className="url-wrapper">
                            {country && <span>{country.link}</span>}
                        </div>
                    </span>
                    <svg className="browser-share" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="800px" height="800px" viewBox="0 0 50 50"><path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z" /><path d="M24 7h2v21h-2z" /><path d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z" /></svg>
                </div>
                {(loadingProgress > 0 && loadingProgress < 100) &&
                    <div className="browser-loading-bar">
                        <div className="browser-loading-fill" style={{ width: `${loadingProgress}%` }}></div>
                    </div>
                }
            </div>
            <div className="browser-foot">
                <div className="browser-buttons">
                    <svg className="browser-button" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="800px" height="800px" viewBox="0 0 24 24"><path d="M1.293,12.707a1,1,0,0,1-.216-.325.986.986,0,0,1,0-.764,1,1,0,0,1,.216-.325l8-8a1,1,0,1,1,1.414,1.414L4.414,11H22a1,1,0,0,1,0,2H4.414l6.293,6.293a1,1,0,0,1-1.414,1.414Z" /></svg>
                    <svg className="browser-button" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="800px" height="800px" viewBox="0 0 24 24"><path d="M14.707,20.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L13.293,4.707a1,1,0,0,1,1.414-1.414l8,8a1,1,0,0,1,.216.325.986.986,0,0,1,0,.764,1,1,0,0,1-.216.325Z" /></svg>                <div className="browser-button circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24">
                            <title />
                            <g id="Complete">
                                <g data-name="add" id="add-2">
                                    <g>
                                        <line fill="none" stroke="#dddddd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5" />
                                        <line fill="none" stroke="#dddddd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className=" browser-button browser-tabs">
                        <div className="browser-tabs-wrapper">
                            <div className="browser-tabs-decoy">{(tabs == 0 || Number(tabs) > 99) ? ':D' : tabs}</div>
                            <input className="browser-tabs-box" type="number" value={tabs} onChange={e => setTabs(e.target.value)} />
                        </div>
                    </div>
                    <svg className="browser-button ellipsis" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="#ffffff">
                        <path d="M12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z" />
                        <path d="M19 13.75C19.9665 13.75 20.75 12.9665 20.75 12C20.75 11.0335 19.9665 10.25 19 10.25C18.0335 10.25 17.25 11.0335 17.25 12C17.25 12.9665 18.0335 13.75 19 13.75Z" />
                        <path d="M5 13.75C5.9665 13.75 6.75 12.9665 6.75 12C6.75 11.0335 5.9665 10.25 5 10.25C4.0335 10.25 3.25 11.0335 3.25 12C3.25 12.9665 4.0335 13.75 5 13.75Z" />
                    </svg>
                </div>
            </div>
        </>
    )
}


