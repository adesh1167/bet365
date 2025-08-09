import { Suspense, lazy } from 'react';
import AppProvider, { useApp } from './contexts/appContext';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import './index2.css';
import './added.css';
const BrowserIphone = lazy(() => import('./components/browserIphone'));
const BrowserFirefox  = lazy(() => import('./components/browserFirefox'));
const MainContent = lazy(() => import('./AppWrapper'));


const isIOS = typeof navigator.standalone === 'boolean';

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

  return(
    <div className="App" onClick={e => { toggleDropDown(e, null); }}>
    <Suspense>
      {isIOS ? <BrowserIphone/> : <BrowserFirefox/>}
    </Suspense>
    <Suspense>
      <MainContent/>
    </Suspense>
    </div>
  )
}

export default App;