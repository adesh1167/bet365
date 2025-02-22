import { useApp } from '../contexts/appContext';
import formatNumber from '../functions/formatNumber';
import logo from './img/logo.svg';

const Head = ({setPopup, loadStage}) => {

    const {balance, country, lang, user} = useApp(); 

    return (
          
        <div data-v-d42dc4c6 className="fixed top-0 w-full z-40 padding-top-56">
            <header data-v-d42dc4c6 className="w-full lg:h-[100px] h-[60px] bg-dark-900 flex justify-center items-center">
            {country.flag &&
                <div className="fixed left-0 lg:h-[100px] h-[60px]">
                    <div className="h-full" style={{background: "linear-gradient(90deg, transparent, rgb(0, 0, 0))"}}>
                        <img src={`https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/${country.flag}`} alt="GH" data-nuxt-img="" className="z-[-1] h-full relative"/>
                    </div>
                </div>
            }
            <div className="container relative flex items-center justify-between text-light-50">
                <div className="flex items-center">
                    <svg onClick={()=>setPopup('fullMenu')} className="flex flex-shrink-0 mr-2 cursor-pointer md:mr-6 w-7 h-7 fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" strokeLinecap="square">
                        </path>
                    </svg>
                    <a aria-current="page" href="/" className="router-link-active router-link-exact-active">
                        <img src={logo} alt="" className="sm:w-[140px] sm:h-[40px] h-[24px] w-[87px]" />
                    </a>
                </div>
                {(loadStage > 85) &&
                    (user ?
                        <LoggedInHeader/>
                        :
                        <LoggedOutHeader/>
                    )
                }
            </div>
            </header>
            <nav data-v-42de44d5 data-v-d42dc4c6 className="flex w-full h-[52px] bg-dark-800 relative z-10">
            <div data-v-42de44d5 className="container flex items-center justify-between">
                <div data-v-42de44d5 className="relative flex flex-1 h-full scrollbar-hidden text-light-50 max-sm:!p-0 overflow-x-scroll">
                <div data-v-42de44d5 className="sticky top-0 left-0 z-10 flex items-center justify-center flex-shrink-0 visible w-10 h-full bg-dark-800 md:hidden shadow-[2px_0px_8px_0px_#000]">
                    <svg data-v-42de44d5 className="w-6 h-6 fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" strokeLinecap="square">
                    </path>
                    </svg>
                </div>
                <a data-v-42de44d5 href="/sport/soccer" className="flex items-center flex-col  lowercase h-full text-light-50 hover:text-light-50 w-full flex-shrink-0 justify-center max-w-[72px]  transition-all ease-in-out bg-dark-800 hover:bg-dark-700  text-xs font-bold relative bg-identity hover:bg-identity isActive">
                    <div data-v-42de44d5 className="relative" style={{}}>
                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/productnav/product-sport.svg" width={24} height={24} alt="" data-nuxt-img className="opacity-100" />
                    </div>
                    <span data-v-42de44d5 className="flex items-center justify-center w-full max-w-full px-2 leading-3 text-center h-1/2">{lang["sport"]}</span>
                </a>
                <a data-v-42de44d5 href="/live" className="flex items-center flex-col  lowercase h-full text-light-50 hover:text-light-50 w-full flex-shrink-0 justify-center max-w-[72px]  transition-all ease-in-out bg-dark-800 hover:bg-dark-700  text-xs font-bold relative">
                    <div data-v-42de44d5 className="relative" style={{}}>
                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/productnav/product-live.svg" width={24} height={24} alt="" data-nuxt-img className="opacity-100" />
                    </div>
                    <span data-v-42de44d5 className="flex items-center justify-center w-full max-w-full px-2 leading-3 text-center h-1/2">{lang["live"]}</span>
                </a>
                <a data-v-42de44d5 href="/lobby/Casino/featured/Aviator" className="flex items-center flex-col  lowercase h-full text-light-50 hover:text-light-50 w-full flex-shrink-0 justify-center max-w-[72px]  transition-all ease-in-out bg-dark-800 hover:bg-dark-700  text-xs font-bold relative">
                    <div data-v-42de44d5 className="relative" style={{}}>
                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/productnav/product-aviator.svg" width={24} height={24} alt="" data-nuxt-img className="opacity-100" />
                    </div>
                    <span data-v-42de44d5 className="flex items-center justify-center w-full max-w-full px-2 leading-3 text-center h-1/2">{lang["aviator"]}</span>
                </a>
                <a data-v-42de44d5 href="/lobby/casino" className="flex items-center flex-col  lowercase h-full text-light-50 hover:text-light-50 w-full flex-shrink-0 justify-center max-w-[72px]  transition-all ease-in-out bg-dark-800 hover:bg-dark-700  text-xs font-bold relative">
                    <div data-v-42de44d5 className="relative" style={{}}>
                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/productnav/product-casino.svg" width={24} height={24} alt="" data-nuxt-img className="opacity-100" />
                    </div>
                    <span data-v-42de44d5 className="flex items-center justify-center w-full max-w-full px-2 leading-3 text-center h-1/2">Casino</span>
                </a>
                <a data-v-42de44d5 href="/lobby/livecasino" className="flex items-center flex-col  lowercase h-full text-light-50 hover:text-light-50 w-full flex-shrink-0 justify-center max-w-[72px]  transition-all ease-in-out bg-dark-800 hover:bg-dark-700  text-xs font-bold relative">
                    <div data-v-42de44d5 className="relative" style={{}}>
                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/productnav/product-livecasino.svg" width={24} height={24} alt="" data-nuxt-img className="opacity-100" />
                    </div>
                    <span data-v-42de44d5 className="flex items-center justify-center w-full max-w-full px-2 leading-3 text-center h-1/2">Live Casino</span>
                </a>
                <a data-v-42de44d5 href="/luckynumbers" className="flex items-center flex-col  lowercase h-full text-light-50 hover:text-light-50 w-full flex-shrink-0 justify-center max-w-[72px]  transition-all ease-in-out bg-dark-800 hover:bg-dark-700  text-xs font-bold relative">
                    <div data-v-42de44d5 className="relative" style={{}}>
                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/productnav/product-luckynumbers.svg" width={24} height={24} alt="" data-nuxt-img className="opacity-100" />
                    </div>
                    <span data-v-42de44d5 className="flex items-center justify-center w-full max-w-full px-2 leading-3 text-center h-1/2">Lucky Numbers</span>
                </a>
                <a data-v-42de44d5 href="/lobby/betgames" className="flex items-center flex-col  lowercase h-full text-light-50 hover:text-light-50 w-full flex-shrink-0 justify-center max-w-[72px]  transition-all ease-in-out bg-dark-800 hover:bg-dark-700  text-xs font-bold relative">
                    <div data-v-42de44d5 className="relative" style={{}}>
                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/productnav/product-betgames.svg" width={24} height={24} alt="" data-nuxt-img className="opacity-100" />
                    </div>
                    <span data-v-42de44d5 className="flex items-center justify-center w-full max-w-full px-2 leading-3 text-center h-1/2">Betgames</span>
                </a>
                <a data-v-42de44d5 href="/jackpots" className="flex items-center flex-col  lowercase h-full text-light-50 hover:text-light-50 w-full flex-shrink-0 justify-center max-w-[72px]  transition-all ease-in-out bg-dark-800 hover:bg-dark-700  text-xs font-bold relative">
                    <div data-v-42de44d5 className="relative" style={{}}>
                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/productnav/product-fallback.svg" width={24} height={24} alt="" data-nuxt-img className="absolute opacity-100" />
                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/productnav/product-jackpots.svg" width={24} height={24} alt="" data-nuxt-img className="opacity-0" />
                    </div>
                    <span data-v-42de44d5 className="flex items-center justify-center w-full max-w-full px-2 leading-3 text-center h-1/2">jackpots</span>
                </a>
                <a data-v-42de44d5 href="/esports" className="flex items-center flex-col  lowercase h-full text-light-50 hover:text-light-50 w-full flex-shrink-0 justify-center max-w-[72px]  transition-all ease-in-out bg-dark-800 hover:bg-dark-700  text-xs font-bold relative">
                    <div data-v-42de44d5 className="relative" style={{}}>
                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/productnav/product-esports.svg" width={24} height={24} alt="" data-nuxt-img className="opacity-100" />
                    </div>
                    <span data-v-42de44d5 className="flex items-center justify-center w-full max-w-full px-2 leading-3 text-center h-1/2">ESports</span>
                </a>
                <a data-v-42de44d5 href="/promotions" className="flex items-center flex-col  lowercase h-full text-light-50 hover:text-light-50 w-full flex-shrink-0 justify-center max-w-[72px]  transition-all ease-in-out bg-dark-800 hover:bg-dark-700  text-xs font-bold relative">
                    <div data-v-42de44d5 className="relative" style={{}}>
                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/productnav/product-promotions.svg" width={24} height={24} alt="" data-nuxt-img className="opacity-100" />
                    </div>
                    <span data-v-42de44d5 className="flex items-center justify-center w-full max-w-full px-2 leading-3 text-center h-1/2">Promotions</span>
                </a>
                <div data-v-42de44d5 className="top-0 right-0  flex items-center justify-center flex-shrink-0 visible w-10 h-full shadow bg-dark-800 md:hidden sticky z-30 shadow-[-4px_0_8px_0_#000]">
                    <svg data-v-42de44d5 className="w-6 h-6 fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" strokeLinecap="square">
                    </path>
                    </svg>
                </div>
                </div>
                <div data-v-42de44d5 className="hidden h-full gap-1 w-[21%] xl:flex">
                <div data-v-42de44d5 className="flex items-center cursor-pointer relative  gap-1 h-full flex-shrink-0 px-4 justify-center text-light-50 transition-colors  ease-in-out bg-dark-800 hover:bg-dark-700 text-base font-bold pr-8">Betslip <span data-v-42de44d5 className="absolute z-10 flex items-center justify-center w-5 h-5 text-xs rounded-full right-2 text-identity-600 bg-identity-50 dark:text-identity-200 dark:bg-identity-900">0</span>
                </div>
                <div data-v-42de44d5 className="flex items-center cursor-pointer relative  gap-1 h-full flex-shrink-0 px-4 justify-center text-light-50 transition-colors  ease-in-out bg-dark-800 hover:bg-dark-700 text-base font-bold pr-8">My Bets
                </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

const LoggedOutHeader = () => {

    const {setPopup} = useApp();
    
    return(
        <div className="flex items-center gap-2">
            {/**/}
            <div className="flex items-center gap-2">
                <form className="relative hidden h-10 lg:block">
                <div className="absolute top-0 flex gap-2 right-full dark">
                    <div
                    data-v-434bc30d=""
                    className="input-wrapper active prefixed fillPrefix w-[210px]"
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
                        {/**/}
                        <span data-v-434bc30d="">+233</span>
                        <input
                        data-v-434bc30d=""
                        data-id=""
                        id="header-username"
                        autoComplete="off"
                        type="text"
                        placeholder="Mobile Number"
                        className=""
                        />
                        {/**/}
                    </div>
                    {/**/}
                    </div>
                    <div
                    data-v-434bc30d=""
                    className="input-wrapper password-input icon icon-right active w-[210px]"
                    >
                    <div data-v-434bc30d="" className="relative text-dark-600">
                        <svg
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
                        {/**/}
                        {/**/}
                        <input
                        data-v-434bc30d=""
                        data-id=""
                        id="header-password"
                        autoComplete="off"
                        type="password"
                        placeholder="Password"
                        className=""
                        />
                        {/**/}
                    </div>
                    {/**/}
                    </div>
                    <div className="absolute right-0 flex justify-between w-full gap-2 text-xs top-10">
                    <div className="overflow-hidden whitespace-nowrap text-error-600 text-ellipsis" />
                    <div className="cursor-pointer text-light-50 whitespace-nowrap">
                        Forgot Password?
                    </div>
                    </div>
                </div>
                <div className="hidden">
                    <button
                    className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-4 h-10 bg-primary-600 text-light-50 hover:bg-primary-500 focus:bg-primary-400 relative hidden"
                    type="submit"
                    aria-label=""
                    id=""
                    hidden=""
                    >
                    {/**/}
                    <div className="flex justify-center items-center text-center w-full">
                        {/**/}
                        <span className="" />
                        {/**/}
                    </div>
                    </button>
                </div>
                </form>
                <button
                className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-4 h-10 bg-light-50 text-identity hover:bg-light-200 relative"
                type="button"
                aria-label="Login"
                id="login-btn"
                >
                {/**/}
                <div className="flex justify-center items-center text-center w-full" onClick={()=>setPopup("loginModal")}>
                    {/**/}
                    <span className="">Login</span>
                    {/**/}
                </div>
                </button>
                <button
                className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-4 h-10 bg-identity hover:bg-identity-hover text-light-50 relative"
                type="button"
                aria-label="Sign Up"
                id="sign-up-btn"
                >
                {/**/}
                <div className="flex justify-center items-center text-center w-full">
                    {/**/}
                    <span className="">Sign Up</span>
                    {/**/}
                </div>
                </button>
                <svg
                className="hidden w-8 h-8 cursor-pointer md:block fill-light-50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    className=""
                    d="M15,4V11H5.17L4,12.17V4H15M16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12V3A1,1 0 0,0 16,2M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z"
                    strokeLinecap="square"
                />
                </svg>
            </div>
        </div>

    )
}

const LoggedInHeader = () => {

    const {balance, country, lang} = useApp();

    return(
        <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-between gap-1 md:gap-2 text-light-50">
                <div className="flex items-center gap-2 text-xs leading-4">
                <svg className="hidden w-8 cursor-pointer h-9 fill-light-50 lg:block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" strokeLinecap="square">
                    </path>
                </svg>
                <div className="hidden capitalize lg:block">Welcome<br />
                    <strong>noel chilombo</strong>
                </div>
                </div>
                <svg className="w-6 h-6 cursor-pointer fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z" strokeLinecap="square">
                </path>
                </svg>
                <div className="px-1 text-xs leading-4 rounded-sm cursor-pointer bg-dark-800 relative text-primary-600 py-[2px]">
                <svg className="w-3 h-3 fill-light-50 absolute top-[2px] right-[2px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" strokeLinecap="square">
                    </path>
                </svg>
                <strong className="block overflow-hidden whitespace-nowrap lg:max-w-none text-ellipsis pr-4">{lang["cash"]}</strong>
                <div className="inline-block h-[14px]">
                    <span >
                    <span className="text-light-50 whitespace-nowrap">
                        <span>
                        <span>{country.currency} {formatNumber(balance, country.balanceHasComma, country.lang)} </span>
                        </span>
                    </span>
                    </span>
                </div>
                </div>
                <div className="px-1 text-xs leading-4 rounded-sm cursor-pointer bg-dark-800 relative text-primary-600 py-[2px] hidden lg:block">
                <svg className="w-3 h-3 fill-light-50 absolute top-[2px] right-[2px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" strokeLinecap="square">
                    </path>
                </svg>
                <strong className="block overflow-hidden whitespace-nowrap lg:max-w-none text-ellipsis pr-4">Freebet</strong>
                <div className="inline-block h-[14px]">
                    <span >
                    <span className="text-light-50 whitespace-nowrap">
                        <span>
                        <span>{country.currency} 0.00</span>
                        </span>
                    </span>
                    </span>
                </div>
                </div>
                <div className="px-1 text-xs leading-4 rounded-sm cursor-pointer bg-dark-800 relative text-primary-600 py-[2px] hidden lg:block">
                <svg className="w-3 h-3 fill-light-50 absolute top-[2px] right-[2px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" strokeLinecap="square">
                    </path>
                </svg>
                <strong className="block overflow-hidden whitespace-nowrap lg:max-w-none text-ellipsis pr-4">Sports Bonus</strong>
                <div className="inline-block h-[14px]">
                    <span >
                    <span className="text-light-50 whitespace-nowrap">
                        <span>
                        <span>{country.currency} 0.00</span>
                        </span>
                    </span>
                    </span>
                </div>
                </div>
                <div className="px-1 text-xs leading-4 rounded-sm cursor-pointer bg-dark-800 relative text-casino-800 py-[2px] hidden lg:block">
                <svg className="w-3 h-3 fill-light-50 absolute top-[2px] right-[2px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" strokeLinecap="square">
                    </path>
                </svg>
                <strong className="block overflow-hidden whitespace-nowrap lg:max-w-none text-ellipsis pr-4">Casino Bonus</strong>
                <div className="inline-block h-[14px]">
                    <span >
                    <span className="text-light-50 whitespace-nowrap">
                        <span>
                        <span>{country.currency} 0.00</span>
                        </span>
                    </span>
                    </span>
                </div>
                </div>
                <div className="relative block md:hidden">
                <div className="flex items-center justify-center w-6 rounded-sm cursor-pointer bg-dark-800 h-9">
                    <svg className="w-5 h-5 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" strokeLinecap="square">
                    </path>
                    </svg>
                </div>
                <div className="absolute right-0 z-20 block rounded-b top-full bg-dark-800" style={{display: 'none'}}>
                    <div className="px-1 text-xs leading-4 rounded-sm cursor-pointer bg-dark-800 relative text-primary-600 py-[2px]">
                    <strong className="block overflow-hidden whitespace-nowrap lg:max-w-none text-ellipsis pr-4">Freebet</strong>
                    <div className="inline-block h-[14px]">
                        <span >
                        <span className="text-light-50 whitespace-nowrap">
                            <span>
                            <span>{country.currency} 0.00</span>
                            </span>
                        </span>
                        </span>
                    </div>
                    </div>
                    <div className="px-1 text-xs leading-4 rounded-sm cursor-pointer bg-dark-800 relative text-primary-600 py-[2px]">
                    <strong className="block overflow-hidden whitespace-nowrap lg:max-w-none text-ellipsis pr-4">Sports Bonus</strong>
                    <div className="inline-block h-[14px]">
                        <span >
                        <span className="text-light-50 whitespace-nowrap">
                            <span>
                            <span>{country.currency} 0.00</span>
                            </span>
                        </span>
                        </span>
                    </div>
                    </div>
                    <div className="px-1 text-xs leading-4 rounded-sm cursor-pointer bg-dark-800 relative text-casino-900 py-[2px]">
                    <strong className="block overflow-hidden whitespace-nowrap lg:max-w-none text-ellipsis pr-4">Casino Bonus</strong>
                    <div className="inline-block h-[14px]">
                        <span >
                        <span className="text-light-50 whitespace-nowrap">
                            <span>
                            <span>{country.currency} 0.00</span>
                            </span>
                        </span>
                        </span>
                    </div>
                    </div>
                </div>
                </div>
                <button className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-4 h-9 bg-identity hover:bg-identity-hover text-light-50 relative" type="button" aria-label="Deposit">
                <div className="flex justify-center items-center text-center w-full">
                    <span >{lang["deposit"]}</span>
                </div>
                </button>
                <svg className="hidden w-8 h-8 cursor-pointer fill-light-50 lg:block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15,4V11H5.17L4,12.17V4H15M16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12V3A1,1 0 0,0 16,2M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" strokeLinecap="square">
                </path>
                </svg>
                <div className="relative items-center justify-center hidden lg:flex">
                <svg className="w-8 h-8 cursor-pointer fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z" strokeLinecap="square">
                    </path>
                </svg>
                </div>
            </div>
        </div>
    )
}

export default Head;