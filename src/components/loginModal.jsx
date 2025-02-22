import { useState } from "react"
import { useApp } from "../contexts/appContext";
import { baseApiUrl } from "../data/url";

const LoginModal = () => {

    const [form, setForm] = useState({
        number: "",
        password: "",
        passwordVisible: false
    });

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const {country, user, setUser, setPopup} = useApp();

    function login(){
        const data = {
            number: `${country.countryCode}${form.number.trim()}`,
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
                // console.log(res);
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

    return(
        <div
            data-v-76478e6d=""
            className="fixed margin-top-56 top-0 left-0 bottom-0 right-0 z-50 flex justify-center bg-dark-700/40 pb-[55px] pt-[60px] md:pt-[100px] items-start md:items-center"
            >
            <div
                data-v-76478e6d=""
                className="w-full md:w-[345px] relative z-10 drop-shadow-sm max-w-[95%] box-content rounded-md  scrollbar-hidden max-h-full overflow-hidden overflow-y-scroll overflow-x-hidden"
            >
                <div
                data-v-76478e6d=""
                className="border-none sticky top-0 left-0 z-20 flex items-center w-full px-2 py-4 pr-12 text-base font-bold capitalize lg:p-4 h-14 bg-dark-900 text-light-50 rounded-tl-md rounded-tr-md"
                >
                <span data-v-76478e6d="">Login</span>
                <svg
                    data-v-76478e6d=""
                    className="absolute w-6 h-6 cursor-pointer fill-light-50 top-4 right-4"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    id="modal-close-btn"
                    onClick={()=>setPopup(null)}
                >
                    <path
                    className=""
                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                    strokeLinecap="square"
                    />
                </svg>
                </div>
                <div data-v-76478e6d="" className="relative z-10">
                
                <div data-v-76478e6d="" className="relative rounded-b-md">
                    <div
                    data-v-76478e6d=""
                    className="bg-light-200 dark:bg-dark-800 relative text-dark-800 dark:text-light-50 overflow-hidden rounded-bl rounded-br"
                    >
                    <form>
                        <div className="px-4 pt-3">
                        <div
                            data-v-434bc30d=""
                            className={`input-wrapper mb-3 mt-1.5 prefixed ${form.number && "active"}`}
                        >
                            <div data-v-434bc30d="" className="relative text-dark-600">
                            <svg
                                data-v-434bc30d=""
                                className="w-5 h-5 fill-[currentColor]"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                name=""
                            >
                                <path className="" d="" strokeLinecap="square" />
                            </svg>
                            
                            <span data-v-434bc30d="">{country.countryCode}</span>
                            <input
                                data-v-434bc30d=""
                                data-id=""
                                id="login-mobile"
                                autoComplete="off"
                                type="tel"
                                placeholder=""
                                className=""
                                value={form.number}
                                onChange={e=>setForm(prev => ({...prev, number: e.target.value}))}
                            /><label
                                data-v-434bc30d=""
                                className="after:bg-light-50 after:dark:bg-dark-800"
                                htmlFor="login-mobile"
                            >
                                Mobile Number
                            </label>
                            </div>
                            
                        </div>
                        <div
                            data-v-434bc30d=""
                            className={`icon icon-right input-wrapper mb-2 mt-1.5 password-input ${form.password && "active"}`}
                        >
                            <div data-v-434bc30d="" className="relative text-dark-600">
                            {
                                form.passwordVisible ? 

                                <svg
                                    onClick={()=>setForm(prev=>({...prev, passwordVisible: false}))}
                                    data-v-434bc30d=""
                                    className="w-5 h-5 fill-[currentColor]"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    name="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"
                                    >
                                    <path
                                        className=""
                                        d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"
                                        strokeLinecap="square"
                                    />
                                </svg>
                                :
                                <svg
                                    onClick={()=>setForm(prev=>({...prev, passwordVisible: true}))}
                                    data-v-434bc30d=""
                                    className="w-5 h-5 fill-[currentColor]"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    name="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                                >
                                    <path
                                    className=""
                                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                                    strokeLinecap="square"
                                    />
                                </svg>
                            }
                            
                            
                            <input
                                data-v-434bc30d=""
                                data-id=""
                                id="login-password"
                                autoComplete="off"
                                type={form.passwordVisible ? "text" : "password"}
                                placeholder=""
                                className=""
                                value={form.password}
                                onChange={e=>setForm(prev => ({...prev, password: e.target.value}))}
                            />
                            <label
                                data-v-434bc30d=""
                                className="after:bg-light-50 after:dark:bg-dark-800"
                                htmlFor="login-password"
                            >
                                Password
                            </label>
                            </div>
                            
                        </div>
                        <p className="mb-2 text-xs text-right cursor-pointer">
                            Forgot Password?
                        </p>

                        {error && <div className="w-full pt-1 pb-1 pl-8 pr-1 text-xs leading-4 rounded text-dark-800 border relative border-error-200 bg-error-50 mb-4">
                            <svg
                                className="w-5 h-5 fill-[currentColor] absolute top-[2px] left-[5px] fill-error-500"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                className=""
                                d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
                                strokeLinecap="square"
                                />
                            </svg>
                            {error}
                        </div>}

                        </div>
                        <div className="w-full p-4 bg-light-50 dark:bg-dark-900">
                        <div className="flex items-center justify-between w-full p-2 mb-4 text-xs rounded-md bg-light-200 dark:bg-dark-800 text-dark-800 dark:text-light-50">
                            <p>Don't have an account yet?</p>
                            <button
                            className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-2 h-7 relative"
                            type="button"
                            aria-label="Sign Up"
                            id=""
                            >
                            
                            <div className="flex justify-center items-center text-center w-full">
                                
                                <span className="">Sign Up</span>
                                <svg
                                className="ml-1 fill-[currentColor] w-5 h-5"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                name="icon"
                                >
                                <path
                                    className=""
                                    d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                                    strokeLinecap="square"
                                />
                                </svg>
                            </div>
                            </button>
                        </div>
                            
                        {submitting ? 
                            <button
                                className="p-button p-component p-disabled rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-4 h-10 bg-identity hover:bg-identity-hover text-light-50 relative w-full"
                                type="submit"
                                aria-label="Login"
                                id=""
                                disabled
                            >
                                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                                <svg
                                    className="animate-spin fill-[currentColor] w-5 h-5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    className=""
                                    d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
                                    strokeLinecap="square"
                                    />
                                </svg>
                                </div>
                                <div className="text-[transparent] flex justify-center items-center text-center w-full">
                                {/**/}
                                <span className="">Login</span>
                                {/**/}
                                </div>
                            </button>
                          
                            :
                            <button
                                className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-4 h-10 bg-identity hover:bg-identity-hover text-light-50 relative w-full"
                                type="button"
                                aria-label="Login"
                                id=""
                                onClick={login}
                            >
                                
                                <div className="flex justify-center items-center text-center w-full">
                                <span className="">Login</span>
                                
                                </div>
                            </button>
                        }
                            
                        </div>
                    </form>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>

    )
}

export default LoginModal;