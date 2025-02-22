import { useEffect, useRef, useState } from "react";
import { useApp } from "../contexts/appContext";

const menu = require('./../assets/menu.png');
const secured = require('./../assets/secured.png');

function Browser({}){

  // const [address, setAddress] = useState('betway.co.za');
  const {country, subUrl} = useApp();
  // console.log('subUrl: ', country)
  const [loadingProgress, setLoadingProgress] = useState('betway.co.zm');

  const [tabs, setTabs] = useState(localStorage.getItem('tabs') || (Number((10+Math.random()*20).toFixed())+10))

  useEffect(()=>{
    // console.log(tabs)
    localStorage.setItem('tabs', tabs)
  }, [tabs])

    function openFullscreen(elem) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }

    
    useEffect(()=>{
      setTimeout(()=>{setLoadingProgress(30)}, 500)
      setTimeout(()=>{setLoadingProgress(35)}, 800)
      setTimeout(()=>{setLoadingProgress(75)}, 1200)
      setTimeout(()=>{setLoadingProgress(82)}, 1700)
      setTimeout(()=>{setLoadingProgress(100)}, 2300)
      
    }, [])

    return (
        <div className="browser">
            <div className="address-bar">
                <img className="browser-secured" src={secured}/>
                <span className="url" type="text">
                  <div className="url-wrapper">
                    {country && <span>{country.link}</span>}
                    <span className="sub-url"></span>
                    <span className="sub-url">{subUrl}</span>
                  </div>
                </span>
            </div>
            <div className="browser-buttons">
                <div className=" browser-button browser-tabs">
                  <div className="browser-tabs-wrapper">
                    <div className="browser-tabs-decoy">{(tabs == 0 || Number(tabs) > 99) ? ':D' : tabs}</div>
                    <input className="browser-tabs-box" type="number" value={tabs} onChange={e=>setTabs(e.target.value)}/>
                  </div>
                </div>
                <div className="browser-button browser-options" onClick={()=>openFullscreen(document.documentElement)}>
                    <img className="browser-menu" src={menu}/>
                </div>
            </div>
            {(loadingProgress > 0 && loadingProgress < 100) &&
            <div className="browser-loading-bar">
              <div className="browser-loading-fill" style={{width: `${loadingProgress}%`}}></div>
            </div>}
        </div>
    )
}

export default Browser;