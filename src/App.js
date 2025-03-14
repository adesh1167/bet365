import './App.css';
import Head from './components/head';
import { useEffect, useRef, useState } from 'react';
import AppProvider, { useApp } from './contexts/appContext';
import Browser from './components/browser';
import BodyWrapper from './components/bodyWrapper';
import Login from './components/login';
import GameButton from './components/gameButton';
import GetAppAd from './components/getAppAd';
import Preloader from './components/preloader';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

function App() {
  return (
    <AppProvider>
      <Router>
        <Root/>
      </Router>
    </AppProvider>
  );;
}

function Root(){
  
  const {popup, setPopup, toggleDropDown, highlights, country, featuredMatches} = useApp();

  const navigate = useNavigate();
  const location = useLocation();

  // console.log("Location: ", location);

  const [loadStage, setloadStage] = useState(0);

  const loadInterval = useRef(null);

  useEffect(()=>{
    loadInterval.current = setInterval(()=>{
      setloadStage(prevLoadStage => prevLoadStage + 2);
    }, 100)

    return () => clearInterval(loadInterval.current);
  },[])

  useEffect(()=>{
    if(loadStage >= 125){
      clearInterval(loadInterval.current)
    }
  }, [loadStage])

  useEffect(()=>{
      if(featuredMatches && location.pathname === "/") navigate('/HO');
  }, [featuredMatches])

  // return <Preloader/>
  
  return (
    <div className="App" onClick={e=>{toggleDropDown(e, null);}}>
      <Browser/>
        <>
          {(loadStage < 10) ? null :
          
            (
              (loadStage > 50 && featuredMatches) ?
              <>
                {popup === "login" && <Login/>}
                <div className='base'>
                  <Head/>
                  <BodyWrapper/>
                </div>
                {popup === "getAppAd" && <GetAppAd/>}
                <GameButton/>
              </>
              :
              <Preloader/>
            )
          }
        </>
    </div>
  );
}

export default App;
