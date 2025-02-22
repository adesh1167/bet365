import logo from './logo.svg';
import './App.css';
import Head from './components/head';
import "./components/styles/entry.css";
import "./components/styles/feeds.css";
import "./components/styles/default.css";
import "./components/styles/loader.css";
import Footer from './components/footer';
import Body from './components/body';
import Betslip from './components/betslip';
import MyBets from './components/myBets';
import FullMenu from './components/fullMenu';
import TransactionSummary from './components/transactionSummary';
import { useEffect, useRef, useState } from 'react';
import AppProvider, { useApp } from './contexts/appContext';
import UploadTickets from './components/upload-ticket';
import HomeLoader from './components/homeLoader';
import Browser from './components/browser';
import ManageBets from './components/manageBets';
import LiveChatButton from './components/liveChatButton';
import LoginModal from './components/loginModal';

function App() {
  return (
    <AppProvider>
      <Root/>
    </AppProvider>
  );;
}

function Root(){
  
  const {popup, setPopup, toggleDropDown, highlights, country} = useApp();

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
  
  return (
    <div className="App" onClick={e=>{toggleDropDown(e, null);}}>
      <Browser/>
      {highlights && country && loadStage > 50  ? 
        <>
          {loadStage > 20 && <div className='base'>
            <Head setPopup={setPopup} loadStage={loadStage}/>
            <FullMenu popup={popup} setPopup={setPopup}/>
            <Body loadStage={loadStage}/>
            <Footer loadStage={loadStage}/>
          </div>}
          {popup == 'transactionHistory' && <TransactionSummary/>}
          {popup == 'betslip' && <Betslip/>}
          {popup == 'myBets' && <MyBets/>}
          {popup == 'manageBets' && <ManageBets/>}
          {popup == 'loginModal' && <LoginModal/>}
          <UploadTickets visible={popup == 'uploadTickets'}/>
          <LiveChatButton/>
        </>
        :
        loadStage > 30 &&<HomeLoader/>
      }
    </div>
  );
}

export default App;
