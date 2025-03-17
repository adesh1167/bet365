import { useApp } from "../contexts/appContext";
import History from "./history";
import HomePage from "./homepage";
import MyBets from "./myBets";
import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

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
                    <Route path="/ME/X8020" element={user ? <History/> : <Navigate to="/HO"/>}>

                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default BodyWrapper;