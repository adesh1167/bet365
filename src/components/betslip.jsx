import { useApp } from "../contexts/appContext";

const Betslip = () => {

    const {popup, setPopup, setSubUrl, lang} = useApp();

    function openMyBets(){
        setPopup('myBets');
        setSubUrl('/?account=my-bets');
    }

    return (

        <div data-v-c37e6d79 className="margin-top-56 fixed top-0 left-0 bottom-0 right-0 z-50 flex justify-center bg-dark-700/40 pb-[55px] pt-[60px] md:pt-[100px] items-start md:items-center visible xl:hidden" style={{}}>
            <div data-v-c37e6d79 id="betslip-container-mobile" className="w-full md:w-[600px] relative z-10 drop-shadow-sm max-w-[95%] box-content rounded-md  scrollbar-hidden max-h-full overflow-hidden overflow-y-scroll overflow-x-hidden">
                <div data-v-c37e6d79 className="border-none sticky top-0 left-0 z-20 flex items-center w-full px-2 py-4 pr-12 text-base font-bold capitalize lg:p-4 h-14 bg-dark-900 text-light-50 rounded-tl-md rounded-tr-md">
                    <span data-v-c37e6d79>{lang["betting-slip"]}</span>
                    <svg onClick={()=>setPopup(null)} data-v-c37e6d79 className="absolute w-6 h-6 cursor-pointer fill-light-50 top-4 right-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" strokeLinecap="square" />
                    </svg>
                    <div data-v-c37e6d79 className="absolute -translate-y-1/2 right-12 top-1/2">
                        <button onClick={openMyBets} data-v-c37e6d79 className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-4 h-10 bg-dark-800 dark:bg-dark-600 dark:hover:bg-dark-800 text-light-50 dark:focus:bg-dark-400 hover:bg-dark-600 focus:bg-dark-900 relative" type="button" aria-label="My Bets">
                            <div className="flex justify-center items-center text-center w-full">
                                <span >{lang["my-bets"]}</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div data-v-c37e6d79 className="relative z-10">
                    <div data-v-c37e6d79 className="relative rounded-b-md">
                        <div data-v-c37e6d79 className="bg-light-200 dark:bg-dark-800 relative text-dark-800 dark:text-light-50 overflow-hidden rounded-bl rounded-br">
                            <div data-v-c37e6d79 style={{}}>


                                <div id="betslip-container" className="flex flex-col gap-2 p-2 md:sticky md:left-0 bg-light-200 dark:bg-dark-900 md:top-40">
                                    <div className="flex w-full gap-2">
                                        <div className="p-[2px] rounded-lg flex bg-light-600 dark:bg-dark-900 max-w-full dark:border-dark-500 dark:border h-10 gap-1 flex flex-1">
                                            <div className="flex gap-2 p-2 rounded-md cursor-pointer h-full transition-all font-bold items-center overflow-hidden select-none bg-light-50  dark:bg-dark-700 text-dark-800 dark:text-light-50 justify-center flex-1">
                                                <span className="flex items-center gap-1 overflow-hidden capitalize whitespace-nowrap text-ellipsis">{lang["single"]}
                                                </span>
                                            </div>
                                            <div className="flex gap-2 p-2 rounded-md cursor-pointer h-full transition-all font-bold items-center overflow-hidden select-none bg-[transparent] hover:bg-light-300 dark:hover:bg-dark-700 text-dark-800 dark:text-light-50 justify-center flex-1">
                                                <span className="flex items-center gap-1 overflow-hidden capitalize whitespace-nowrap text-ellipsis">{lang["multi"]}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="relative flex items-center justify-center w-10 transition-all rounded cursor-pointer bg-light-50 hover:bg-light-100 dark:hover:bg-dark-700 dark:bg-dark-800">
                                            <svg className="w-5 h-5 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z" strokeLinecap="square" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full p-4 text-center">
                                        <div className="mb-2">
                                            <strong>{lang["betslip-empty-heading"]}</strong>
                                            <br /> {lang["betslip-empty"]}</div>
                                        <form className="flex flex-col gap-4 text-left">
                                            <div data-v-e232e1c2 className="input-wrapper password-input icon icon-right w-full">
                                                <div data-v-e232e1c2 className="relative text-dark-600">
                                                    <svg data-v-e232e1c2 className="w-5 h-5 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" name="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z">
                                                        <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" strokeLinecap="square" />
                                                    </svg>

                                                    <input data-v-e232e1c2 id="booking-code" autoComplete="off" type="text" placeholder={lang["booking-code"]} />
                                                </div>
                                            </div>
                                            <button className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-4 h-10 bg-identity hover:bg-identity-hover text-light-50 relative capitalize" type="submit" aria-label="load">
                                                <div className="flex justify-center items-center text-center w-full">
                                                    <span >load</span>
                                                </div>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Betslip;