import HomePage from "./homepage";
import MyBets from "./myBets";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const BodyWrapper = () => {
    return(
        <div className="wc-PageView">
            <div className="wc-PageView_Main wc-ResponsiveHomePage_PageViewMain">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/HO" element={<HomePage/>}/>
                    <Route path="/MB" element={<MyBets/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default BodyWrapper;