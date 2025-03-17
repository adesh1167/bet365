import { useEffect, useState } from "react";
import { useApp } from "../contexts/appContext";
import { baseApiUrl } from "../data/url";
import HeadOverlay from "./headOverlay";

const Login = () => {

    const {country, user, setUser, setPopup} = useApp();

    const [form, setForm] = useState({
        username: "",
        password: "",
        rememberMe: false,
        passwordVisible: false
    });

    const [expanded, setExpanded] = useState(false);

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    
    function login(){
        const data = {
            number: `${form.username.trim()}`,
            password: form.password.trim()
        }
        window.$.ajax({
            url: `${baseApiUrl}/login.php`,
            data,
            type: "POST",
            dataType: "JSON",
            beforeSend: ()=>{
                setSubmitting(true);
                setError(null);
            },
            success: res => {
                console.log(res);
                if(res.status == "success"){
                    setUser(res.user);
                    setPopup(null);
                } else{
                    setError(res.message);
                }
            },
            error: res => {
                console.error(res);
                setError("An error occured. Check your network")
            },
            complete: ()=>{
                setSubmitting(false);
            }
        })
    }

    useEffect(()=>{
        setExpanded(true);
    }, [])

    return(
        <div className="lms-LoginModule ">
            <div className={`lms-StandardLogin lms-StandardLogin_CurrentSize-0 lms-StandardLogin_Show lms-StandardLogin_MaskHeader ${error ? "lms-StandardLogin_LoginFails" : ""}`}>
                <div className="lms-StandardLogin_Overlay " style={{ top: 146 }} />
                <HeadOverlay/>
                {/* Edited from 90 */}
                <div className="lms-StandardLogin_Mask " style={{ top: 90 }} onClick={()=>setPopup(null)} />
                <div
                className="lms-StandardLogin_Container "
                style={{ transform: expanded ? "translateY(90px)" : "transalateY(-100%)"}}
                >
                <div className="lms-StandardLogin_Content ">
                    <div className="lms-StandardLogin_Header ">
                    <div className="lms-StandardLogin_Header-oot ">
                        Please log in to request other betting opportunities
                    </div>
                    <div className="lms-StandardLogin_Header-myteams ">
                        Please log in to update ‘My Teams’
                    </div>
                    <div className="lms-StandardLogin_Header-stream ">
                        Live Streaming Available
                    </div>
                    <div className="lms-StandardLogin_Header-logintext ">
                        Please log in to view
                    </div>
                    <div className="lms-StandardLogin_Header-favourites ">
                        Please log in to update 'Favourites'
                    </div>
                    </div>
                    <div className={`lms-StandardLogin_InputsContainer ${form.username.length > 0 ? "lms-StandardLogin_NoControl" : ""}`}>
                    <input
                        type="text"
                        placeholder="Username"
                        autoCapitalize="off"
                        autoComplete="off"
                        autoCorrect="off"
                        className="lms-StandardLogin_Username "
                        value={form.username}
                        onChange={e => setForm(prev => ({...prev, username: e.target.value}))}
                    />
                    <div
                        className="lms-StandardLogin_UsernameControl "
                        onClick={() => setForm(prev => ({...prev, username: ""}))}
                    >
                    <div />
                    </div>
                    </div>
                    <div className={`lms-StandardLogin_InputsContainer lms-StandardLogin_InputsContainer-password ${form.password.length > 0 ? "lms-StandardLogin_NoControl" : ""}`}>
                    <input
                        type={form.passwordVisible ? "text" : "password"}
                        placeholder="Password"
                        autoCapitalize="off"
                        autoComplete="off"
                        autoCorrect="off"
                        className="lms-StandardLogin_Password "
                        value={form.password}
                        onChange={e => setForm(prev => ({...prev, password: e.target.value}))}
                    />
                    {form.passwordVisible ? 
                        <div
                            className="lms-StandardLogin_PasswordControlShowHide ll-LoginInput_PasswordControlHide "
                            onClick={()=>setForm(prev => ({...prev, passwordVisible: !prev.passwordVisible}))}
                        ></div>
                        :
                        <div
                            className="lms-StandardLogin_PasswordControlShowHide "
                            onClick={()=>setForm(prev => ({...prev, passwordVisible: !prev.passwordVisible}))}
                        />
                    }
                    </div>
                    {error &&
                        <div className="lmd-LoginModuleDefault_FailedLogin ">
                            <div className="lmd-LoginModuleDefault_FailedLoginHeader ">
                                Your details weren't recognised
                            </div>
                            <div className="lmd-LoginModuleDefault_FailedLoginPasswordCaseSensitive ">
                                Passwords are case sensitive.
                            </div>
                            <div className="lmd-LoginModuleDefault_FailedLoginAccountLock ">
                                Your account will become locked after three failed login attempts.
                            </div>
                        </div>

                    }
                    <div className="ll-Checkbox ">
                    <div className="ll-Checkbox_Container ">
                        <span 
                            type="checkbox"
                            className={`ll-Checkbox_Input ${form.rememberMe ? "ll-Checkbox_Input-Checked" : ""}`}
                            onClick={()=>setForm(prev => ({...prev, rememberMe: !prev.rememberMe}))}
                        />
                    </div>
                    <div className="ll-Checkbox_TextContainer">
                        <label className="ll-Checkbox_Text ">Keep me Logged in</label>
                    </div>
                    </div>
                    {submitting ? 
                        <div className="lms-LoginButton ">
                        <div className="lms-LoginButton_Text ">
                            Logging in
                            <div className="lms-LoginButton_Spinner " />
                        </div>
                        </div>
                        :
                        <div className="lms-LoginButton " onClick={login}>
                            <div className="lms-LoginButton_Text ">
                                Log In
                            </div>
                        </div>
                    }
                    <div className="lms-StandardLogin_AdditionalContainer ">
                    <div className="lms-StandardLogin_JoinNow ">Join Now</div>
                    <div className="lms-LostLogin ">Having trouble logging in?</div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Login;