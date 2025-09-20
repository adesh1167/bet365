// import './App.css';
import Head from './components/head';
import {useNavigate, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect, useMemo, useRef, useState } from 'react';
import { useApp } from './contexts/appContext';
import BodyWrapper from './components/bodyWrapper';
import Login from './components/login';
import GameButton from './components/gameButton';
import GetAppAd from './components/getAppAd';
import Preloader from './components/preloader';

function MainContent() {

  const { popup, setPopup, toggleDropDown, featuredMatches, loadStage } = useApp();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const lastPathName = sessionStorage.getItem("lastPathName");
    if ((lastPathName === "/UT" || lastPathName === "/MaB" || lastPathName === "/TR") && location.pathname === "/HO") setPopup("profile");
    else setPopup(null);
    console.log("Last Path Name: ", lastPathName);
    sessionStorage.setItem("lastPathName", location.pathname);
  }, [location.pathname])


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

  return (
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
  );
}

export default MainContent;
