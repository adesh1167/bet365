import { useApp } from "../contexts/appContext";
import History from "./history";
import HomePage from "./homepage";
import ManageBets from "./manageBets";
import MyBets from "./myBets";
import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UploadTickets from "./uploadTicket";
import MyActivity from "./myActivity";

const BodyWrapper = () => {

    const {user} = useApp();

    return(
        <div className="wc-PageView">
            <div className="wc-PageView_Main wc-ResponsiveHomePage_PageViewMain">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/HO" element={<HomePage/>}/>
                    <Route path="/AZ" element={<HomePage/>}/>
                    <Route path="/MB" element={user ? <MyBets/> : <Navigate to="/HO"/>}/>
                    <Route path="/ME" element={user ? <HomePage/> : <Navigate to="/HO"/>}/>
                    <Route path="/MaB" element={user ? <ManageBets/> : <Navigate to="/HO"/>}/>
                    <Route path="/UT" element={user ? <UploadTickets/> : <Navigate to="/HO"/>}/>
                    <Route path="/ME/X8020" element={user ? <History/> : <Navigate to="/HO"/>}/>
                    <Route path="/ME/X6565" element={user ? <MyActivity/> : <Navigate to="/HO"/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default BodyWrapper;