import './App.css';
import Head from './components/head';
import { useEffect, useMemo, useRef, useState } from 'react';
import AppProvider, { useApp } from './contexts/appContext';
import Browser from './components/browser';
import BodyWrapper from './components/bodyWrapper';
import Login from './components/login';
import GameButton from './components/gameButton';
import GetAppAd from './components/getAppAd';
import Preloader from './components/preloader';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import BrowserFirefox from './components/browserFirefox';

function App() {
  return (
    <AppProvider>
      <Router>
        <Root />
      </Router>
    </AppProvider>
  );;
}

function Root() {

  const { popup, setPopup, toggleDropDown, highlights, country, featuredMatches, loadStage, setloadStage } = useApp();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const lastPathName = sessionStorage.getItem("lastPathName");
    if ((lastPathName === "/UT" || lastPathName === "/MaB" || lastPathName === "/TR") && location.pathname === "/HO") setPopup("profile");
    else setPopup(null);
    console.log("Last Path Name: ", lastPathName);
    sessionStorage.setItem("lastPathName", location.pathname);
  }, [location.pathname])

  // console.log("Location: ", location);

  useEffect(() => {
    if (featuredMatches && location.pathname === "/") navigate('/HO', {replace: true});
  }, [featuredMatches])

  const content = useMemo(() => {
    return (
      <>
        {popup === "login" && <Login />}
        <div className='base'>
          <Head />
          <BodyWrapper />
        </div>
        {popup === "getAppAd" && <GetAppAd />}
        {location.pathname.startsWith("/HO") && <GameButton />}
      </>
    )
  }, [location.pathname, popup])

  // return <Preloader/>

  return (
    <div className="App" onClick={e => { toggleDropDown(e, null); }}>
      <BrowserFirefox />
      <>
        {(loadStage < 10) ? null :

          (
            (loadStage > 50 && featuredMatches) ?
              content
              :
              <Preloader />
          )
        }
      </>
    </div>
  );
}

export default App;
