import appleLogo from './app-store-logos/icons8-apple-logo.svg';
import androidLogo from './app-store-logos/android-playstore.svg';
import { useApp } from '../contexts/appContext';
import { countries } from '../data/countries';
import { useState } from 'react';
import formatNumber from '../functions/formatNumber';

const menuClasses = {
    expanded: {
        class1 : "grid grid-rows-[0fr] transition-[grid-template-rows] duration-[300ms] grid-rows-[1fr]",
        class2 : "min-h-[0] transition-[visibility] duration-[300ms] visible",
    },
    collapsed: {
        class1 : "grid grid-rows-[0fr] transition-[grid-template-rows] duration-[300ms]",
        class2 : "min-h-[0] transition-[visibility] duration-[300ms] invisible overflow-hidden",
    }
}


const FullMenu = () => {

    const {popup, setPopup, dropDown, toggleDropDown, country, setCountryCode, balance, lang, user, logout} = useApp();

    const [expanded, setExpanded] = useState(0);

    function toggleExpanded(index){
        if(index === expanded) setExpanded(null);
        else setExpanded(index);
    }

    return (

        <div data-v-d42dc4c6 className={`top-56 fixed outline-none w-full overflow-y-scroll scrollbar-hidden top-0 h-screen md:w-[320px] bg-light-50 dark:bg-dark-800 z-50 shadow transition-all ease-in-out pb-7 flex flex-col justify-between ${popup == 'fullMenu' ? 'menu-enter-active menu-enter-to' : 'menu-leave-to menu-leave-active'}`} style={{}}>
            <div>
                {user ?
                    <div className="w-full py-1 px-2 flex justify-between gap-2">
                        <div className="flex gap-1 flex-1 relative">
                            <div className="px-2 text-xs leading-4 max-w-full rounded pr-6 cursor-pointer  bg-light-200 dark:bg-dark-700 relative flex flex-1 h-8 items-center text-primary-600 py-[2px] flex flex-1">
                                <svg className="w-4 h-4 fill-dark-800 dark:fill-light-50 absolute top-[2px] right-[2px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" strokeLinecap="square" />
                                </svg>
                                <strong className="inline-block pr-1 overflow-hidden whitespace-nowrap lg:max-w-none text-ellipsis text-dark-800 dark:text-light-50">{lang["cash"]}</strong>
                                <div className="inline-block h-[16px]">
                                    <span >
                                        <span className="text-dark-800 dark:text-light-50">
                                            <span>
                                                <span >
                                                    <span className="text-identity font-bold">{country.currency}</span>
                                                    <span> {formatNumber(balance, country.balanceHasComma, country.lang)}</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-center w-6 cursor-pointer bg-light-200 dark:bg-dark-700 rounded h-full">
                                    <svg className="w-5 h-5 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" strokeLinecap="square" />
                                    </svg>
                                </div>
                                <div className="absolute right-0 z-20 block rounded-b w-full top-full bg-light-200 dark:bg-dark-700" style={{ display: 'none' }}>
                                    <div className="px-2 text-xs leading-4 max-w-full rounded pr-6 cursor-pointer  bg-light-200 dark:bg-dark-700 relative flex flex-1 h-8 items-center text-primary-600 py-[2px]">
                                        <strong className="inline-block pr-1 overflow-hidden whitespace-nowrap lg:max-w-none text-ellipsis text-dark-800 dark:text-light-50">Freebet</strong>
                                        <div className="inline-block h-[16px]">
                                            <span >
                                                <span className="text-dark-800 dark:text-light-50">
                                                    <span>
                                                        <span >
                                                            <span className="text-identity font-bold">K</span>
                                                            <span>0.00</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="px-2 text-xs leading-4 max-w-full rounded pr-6 cursor-pointer  bg-light-200 dark:bg-dark-700 relative flex flex-1 h-8 items-center text-primary-600 py-[2px]">
                                        <strong className="inline-block pr-1 overflow-hidden whitespace-nowrap lg:max-w-none text-ellipsis text-dark-800 dark:text-light-50">Sports Bonus</strong>
                                        <div className="inline-block h-[16px]">
                                            <span >
                                                <span className="text-dark-800 dark:text-light-50">
                                                    <span>
                                                        <span >
                                                            <span className="text-identity font-bold">K</span>
                                                            <span>0.00</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="px-2 text-xs leading-4 max-w-full rounded pr-6 cursor-pointer  bg-light-200 dark:bg-dark-700 relative flex flex-1 h-8 items-center text-casino-900 py-[2px]">
                                        <strong className="inline-block pr-1 overflow-hidden whitespace-nowrap lg:max-w-none text-ellipsis text-dark-800 dark:text-light-50">Casino Bonus</strong>
                                        <div className="inline-block h-[16px]">
                                            <span >
                                                <span className="text-dark-800 dark:text-light-50">
                                                    <span>
                                                        <span >
                                                            <span className="text-identity font-bold">K</span>
                                                            <span>0.00</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <svg className="w-6 h-6 cursor-pointer fill-dark-900 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z" strokeLinecap="square" />
                            </svg>
                            <svg onClick={()=>setPopup(null)} className="w-6 h-6 cursor-pointer fill-dark-900 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" strokeLinecap="square" />
                            </svg>
                        </div>
                    </div>
                    :
                    <div className="w-full py-1 px-2 flex justify-between gap-2">
                        <div className="flex gap-2 flex-1">
                            <button
                            className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-2 h-7 bg-light-50 text-identity hover:bg-light-200 relative flex flex-1 items-center justify-center"
                            type="button"
                            aria-label="Login"
                            id=""
                            >
                            {/**/}
                            <div className="flex justify-center items-center text-center w-full" onClick={()=>setPopup("loginModal")}>
                                {/**/}
                                <span className="">Login</span>
                                {/**/}
                            </div>
                            </button>
                            <button
                            className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-2 h-7 bg-identity hover:bg-identity-hover text-light-50 relative flex flex-1 items-center justify-center"
                            type="button"
                            aria-label="Sign Up"
                            id=""
                            >
                            {/**/}
                            <div className="flex justify-center items-center text-center w-full">
                                {/**/}
                                <span className="">Sign Up</span>
                                {/**/}
                            </div>
                            </button>
                        </div>
                        <div className="flex gap-2 items-center">
                            {/**/}
                            <svg
                            className="w-6 h-6 cursor-pointer fill-dark-900 dark:fill-light-50"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={()=>setPopup(null)}
                            >
                            <path
                                className=""
                                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                strokeLinecap="square"
                            />
                            </svg>
                        </div>
                    </div>

                }
                <div className="relative w-full">
                    <div >
                        <div onClick={()=>{toggleExpanded(0)}}>
                            <div>
                                <div role="button" className="cursor-pointer base-text">
                                    <div className="w-full gap-1 rounded-lg bg-dark-800 dark:bg-dark-700 text-light-50 relative">
                                        <div className="relative w-full px-4 py-2 text-base font-bold cursor-pointer select-none bg-light-50 dark:bg-dark-800 text-dark-800 dark:text-light-50">{lang["my-account"]}</div>
                                        <div className="absolute -translate-y-1/2 right-2 top-1/2">
                                            <svg className={`z-10 transition-all fill-dark-800 dark:fill-light-50 w-6 h-6 ${expanded === 0 ? "" : "rotate-180"}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" strokeLinecap="square" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={expanded === 0 ? menuClasses.expanded.class1 : menuClasses.collapsed.class1}>
                                <div className={expanded === 0 ? menuClasses.expanded.class2 : menuClasses.collapsed.class2}>
                                    <div className="relative burger-menu-accordion-content">
                                        <div className="relative flex flex-col gap-2 px-2 py-3 bg-light-200 dark:bg-dark-900 max-h-[280px] overflow-y-scroll overflow-x-hidden scrollbar-hidden">
                                            <div aria-current="page" href="/?account=deposit" className="router-link-active router-link-exact-active block p-2 rounded bg-light-50 dark:bg-dark-800 relative base-text pl-10">
                                                <svg className="absolute w-6 h-6 -translate-y-1/2 fill-dark-800 dark:fill-light-50 left-2 top-1/2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.995 2.88208C10.722 2.88208 9.50106 3.38779 8.60088 4.28797C7.70071 5.18814 7.195 6.40904 7.195 7.68208C7.195 8.95512 7.70071 10.176 8.60088 11.0762C9.50106 11.9764 10.722 12.4821 11.995 12.4821C12.6253 12.4821 13.2495 12.3579 13.8319 12.1167C14.4142 11.8755 14.9434 11.5219 15.3891 11.0762C15.8348 10.6305 16.1884 10.1013 16.4296 9.51896C16.6708 8.9366 16.795 8.31243 16.795 7.68208C16.795 7.05174 16.6708 6.42756 16.4296 5.8452C16.1884 5.26284 15.8348 4.73369 15.3891 4.28797C14.9434 3.84225 14.4142 3.48868 13.8319 3.24746C13.2495 3.00624 12.6253 2.88208 11.995 2.88208ZM11.995 4.80208C12.3732 4.80195 12.7478 4.87635 13.0973 5.02104C13.4468 5.16573 13.7643 5.37786 14.0318 5.64532C14.2992 5.91278 14.5114 6.23032 14.656 6.5798C14.8007 6.92928 14.8751 7.30384 14.875 7.68208C14.8737 8.44504 14.5697 9.17629 14.0297 9.71532C13.4897 10.2543 12.758 10.5571 11.995 10.5571C11.2312 10.5571 10.4986 10.2537 9.95853 9.71355C9.41842 9.17345 9.115 8.44091 9.115 7.67708C9.11632 6.91413 9.42033 6.18287 9.96029 5.64384C10.5003 5.10482 11.232 4.80208 11.995 4.80208ZM12.387 5.76208L10.564 6.50808V7.50808L11.326 7.21408V9.60608H12.631V5.75708L12.387 5.76208ZM2.395 8.64208V19.2021C2.39553 19.7111 2.59798 20.1992 2.95794 20.5591C3.31789 20.9191 3.80594 21.1216 4.315 21.1221H19.675C20.184 21.1216 20.6721 20.9191 21.0321 20.5591C21.392 20.1992 21.5945 19.7111 21.595 19.2021V8.64208H19.675V19.2021H4.32V8.64208H2.395ZM8.155 14.4021L11.995 18.2421L15.835 14.4021H8.155Z" strokeLinecap="square" />
                                                </svg> {lang["deposit-funds"]}</div>
                                            <div aria-current="page" href="/?account=withdraw" className="router-link-active router-link-exact-active block p-2 rounded bg-light-50 dark:bg-dark-800 relative base-text pl-10">
                                                <svg className="absolute w-6 h-6 -translate-y-1/2 fill-dark-800 dark:fill-light-50 left-2 top-1/2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.498 2.8811L7.66 6.7181H15.339L11.498 2.8811ZM1.898 8.6401V19.1981C1.89853 19.7077 2.1014 20.1962 2.462 20.5562C2.82261 20.9163 3.31143 21.1184 3.821 21.1181H19.178C19.6871 21.1176 20.1751 20.9151 20.5351 20.5552C20.895 20.1952 21.0975 19.7072 21.098 19.1981V8.6401H19.178V19.1981H3.821V8.6401H1.898ZM11.498 8.6401C10.5487 8.6401 9.62062 8.92162 8.83127 9.44905C8.04191 9.97648 7.42668 10.7261 7.06338 11.6032C6.70008 12.4803 6.60502 13.4454 6.79023 14.3765C6.97544 15.3076 7.4326 16.1629 8.10389 16.8342C8.77518 17.5055 9.63046 17.9627 10.5616 18.1479C11.4927 18.3331 12.4578 18.238 13.3349 17.8747C14.212 17.5114 14.9616 16.8962 15.4891 16.1068C16.0165 15.3175 16.298 14.3895 16.298 13.4401C16.298 12.1671 15.7923 10.9462 14.8921 10.046C13.9919 9.14582 12.771 8.6401 11.498 8.6401ZM11.498 10.5601C12.0674 10.5601 12.624 10.729 13.0975 11.0453C13.5709 11.3617 13.9399 11.8113 14.1579 12.3374C14.3758 12.8634 14.4328 13.4423 14.3217 14.0008C14.2106 14.5592 13.9364 15.0722 13.5338 15.4749C13.1311 15.8775 12.6181 16.1517 12.0597 16.2628C11.5012 16.3739 10.9223 16.3169 10.3963 16.099C9.87019 15.881 9.42055 15.512 9.1042 15.0386C8.78785 14.5651 8.619 14.0085 8.619 13.4391C8.619 12.6755 8.92233 11.9433 9.46224 11.4033C10.0022 10.8634 10.7344 10.5601 11.498 10.5601ZM11.89 11.5191L10.067 12.2651V13.2651L10.828 12.9711V15.3631H12.133V11.5181L11.89 11.5191Z" strokeLinecap="square" />
                                                </svg> {lang["withdraw-funds"]}</div>
                                            <div aria-current="page" href="/?account=my-bets" className="router-link-active router-link-exact-active block p-2 rounded bg-light-50 dark:bg-dark-800 relative base-text pl-10">
                                                <svg className="absolute w-6 h-6 -translate-y-1/2 fill-dark-800 dark:fill-light-50 left-2 top-1/2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.503 3.604V14.796H2.637V17.596C2.637 18.3386 2.932 19.0508 3.4571 19.5759C3.9822 20.101 4.69439 20.396 5.437 20.396H17.562C18.3036 20.3926 19.0138 20.0965 19.5381 19.5721C20.0625 19.0478 20.3586 18.3376 20.362 17.596V3.604H4.503ZM6.369 5.47H18.496V17.596C18.4979 17.719 18.475 17.8411 18.4288 17.9551C18.3826 18.0691 18.3139 18.1727 18.2269 18.2596C18.1399 18.3465 18.0362 18.4151 17.9222 18.4612C17.8081 18.5073 17.686 18.53 17.563 18.528C17.3158 18.5277 17.0788 18.4295 16.9039 18.2548C16.729 18.0801 16.6305 17.8432 16.63 17.596V14.796H6.369V5.47ZM8.235 7.335V9.201H10.1V7.335H8.235ZM11.967 7.335V9.201H16.631V7.335H11.967ZM8.235 11.066V12.932H10.1V11.067L8.235 11.066ZM11.967 11.066V12.932H16.631V11.067L11.967 11.066ZM4.504 16.666H14.762V17.596C14.7619 17.9135 14.816 18.2287 14.922 18.528H5.435C5.18798 18.5275 4.95123 18.4291 4.77656 18.2544C4.60189 18.0798 4.50353 17.843 4.503 17.596L4.504 16.666Z" strokeLinecap="square" />
                                                </svg> {lang["my-bets"]}</div>
                                            <div aria-current="page" href="/?account=bonus-summary" className="router-link-active router-link-exact-active block p-2 rounded bg-light-50 dark:bg-dark-800 relative base-text pl-10">
                                                <svg className="absolute w-6 h-6 -translate-y-1/2 fill-dark-800 dark:fill-light-50 left-2 top-1/2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.503 3.604V14.796H2.637V17.596C2.637 18.3386 2.932 19.0508 3.4571 19.5759C3.9822 20.101 4.69439 20.396 5.437 20.396H17.562C18.3036 20.3926 19.0138 20.0965 19.5381 19.5721C20.0625 19.0478 20.3586 18.3376 20.362 17.596V3.604H4.503ZM6.369 5.47H18.496V17.596C18.4979 17.719 18.475 17.8411 18.4288 17.9551C18.3826 18.0691 18.3139 18.1727 18.2269 18.2596C18.1399 18.3465 18.0362 18.4151 17.9222 18.4612C17.8081 18.5073 17.686 18.53 17.563 18.528C17.3158 18.5277 17.0788 18.4295 16.9039 18.2548C16.729 18.0801 16.6305 17.8432 16.63 17.596V14.796H6.369V5.47ZM8.235 7.335V9.201H10.1V7.335H8.235ZM11.967 7.335V9.201H16.631V7.335H11.967ZM8.235 11.066V12.932H10.1V11.067L8.235 11.066ZM11.967 11.066V12.932H16.631V11.067L11.967 11.066ZM4.504 16.666H14.762V17.596C14.7619 17.9135 14.816 18.2287 14.922 18.528H5.435C5.18798 18.5275 4.95123 18.4291 4.77656 18.2544C4.60189 18.0798 4.50353 17.843 4.503 17.596L4.504 16.666Z" strokeLinecap="square" />
                                                </svg> {lang["bonus-summary"]}</div>
                                            <div onClick={()=>setPopup('transactionHistory')} aria-current="page" href="/?account=transaction-history" className="router-link-active router-link-exact-active block p-2 rounded bg-light-50 dark:bg-dark-800 relative base-text pl-10">
                                                <svg className="absolute w-6 h-6 -translate-y-1/2 fill-dark-800 dark:fill-light-50 left-2 top-1/2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.612 2.67798V13.864H1.747V16.664C1.747 17.4066 2.042 18.1188 2.5671 18.6439C3.09221 19.169 3.8044 19.464 4.547 19.464H12.004V17.592H4.543C4.29581 17.5914 4.05891 17.4929 3.88421 17.3181C3.70951 17.1432 3.61127 16.9062 3.611 16.659V15.727H13.864L12 13.863H5.475V4.54198H17.593V8.27098H19.458V2.67798H3.612ZM7.341 6.40598V8.27098H9.205V6.40598H7.341ZM11.07 6.40598V8.27098H15.73V6.40598H11.07ZM7.341 10.134V11.998H9.205V10.135L7.341 10.134ZM13.865 10.134V11.998H14.797V13.782L16.741 15.726L14.797 17.67V19.454H13.865V21.321H22.254V19.456H21.319V17.672L19.375 15.728L21.319 13.783V11.999H22.251V10.135L13.865 10.134ZM16.665 11.998H19.465V13.011L18.065 14.411L16.665 13.011V11.998ZM18.065 17.044L19.465 18.444V19.456H16.665V18.444L18.065 17.044Z" strokeLinecap="square" />
                                                </svg> {lang["transaction-history"]}</div>
                                            <div aria-current="page" href="/?account=booking-codes" className="router-link-active router-link-exact-active block p-2 rounded bg-light-50 dark:bg-dark-800 relative base-text pl-10">
                                                <svg className="absolute w-6 h-6 -translate-y-1/2 fill-dark-800 dark:fill-light-50 left-2 top-1/2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17,18V5H7V18L12,15.82L17,18M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,7H13V9H15V11H13V13H11V11H9V9H11V7Z" strokeLinecap="square" />
                                                </svg> {lang["influencer"]}</div>
                                            <div aria-current="page" href="/?account=promo-voucher" className="router-link-active router-link-exact-active block p-2 rounded bg-light-50 dark:bg-dark-800 relative base-text pl-10">
                                                <svg className="absolute w-6 h-6 -translate-y-1/2 fill-dark-800 dark:fill-light-50 left-2 top-1/2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.612 2.67798V13.864H1.747V16.664C1.747 17.4066 2.042 18.1188 2.5671 18.6439C3.09221 19.169 3.8044 19.464 4.547 19.464H12.004V17.592H4.543C4.29581 17.5914 4.05891 17.4929 3.88421 17.3181C3.70951 17.1432 3.61127 16.9062 3.611 16.659V15.727H13.864L12 13.863H5.475V4.54198H17.593V8.27098H19.458V2.67798H3.612ZM7.341 6.40598V8.27098H9.205V6.40598H7.341ZM11.07 6.40598V8.27098H15.73V6.40598H11.07ZM7.341 10.134V11.998H9.205V10.135L7.341 10.134ZM13.865 10.134V11.998H14.797V13.782L16.741 15.726L14.797 17.67V19.454H13.865V21.321H22.254V19.456H21.319V17.672L19.375 15.728L21.319 13.783V11.999H22.251V10.135L13.865 10.134ZM16.665 11.998H19.465V13.011L18.065 14.411L16.665 13.011V11.998ZM18.065 17.044L19.465 18.444V19.456H16.665V18.444L18.065 17.044Z" strokeLinecap="square" />
                                                </svg> {lang["promo-voucher"]}</div>
                                            <div aria-current="page" href="/?account=update-details" className="router-link-active router-link-exact-active block p-2 rounded bg-light-50 dark:bg-dark-800 relative base-text pl-10">
                                                <svg className="absolute w-6 h-6 -translate-y-1/2 fill-dark-800 dark:fill-light-50 left-2 top-1/2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.81045 2.69092L9.37947 5.11195C8.60742 5.41654 7.89056 5.84571 7.25745 6.38238L4.92585 5.62178L2.75857 9.52574L4.64194 11.1042C4.57975 11.5131 4.55065 11.9264 4.55492 12.34C4.56521 12.7535 4.60834 13.1655 4.68389 13.5722L2.85543 15.2237L5.15512 19.0498L7.45652 18.2104C8.10823 18.7255 8.83991 19.1304 9.62252 19.4089L10.1355 21.8139L14.5985 21.7381L15.0265 19.3171C15.7996 19.0128 16.5175 18.5836 17.1515 18.0466L19.4821 18.8072L21.6494 14.9042L19.768 13.3208C19.8981 12.5023 19.8839 11.6673 19.726 10.8538L21.5526 9.20525L19.2529 5.37922L16.9505 6.2186C16.2972 5.70304 15.5638 5.29818 14.7795 5.02015L14.2694 2.61512L9.81045 2.69092ZM11.419 4.57613L12.73 4.55384L13.1334 6.45854L14.1399 6.81954C14.7271 7.02658 15.2764 7.32883 15.7655 7.71417L16.602 8.37614L18.4293 7.7139L19.1036 8.83576L17.6573 10.1377L17.8431 11.1859C17.9656 11.7976 17.9763 12.4264 17.8747 13.0419L17.7226 14.0958L19.2094 15.3578L18.5756 16.4989L16.7269 15.9002L15.9115 16.5923C15.4365 16.9943 14.8985 17.3154 14.3192 17.5426L13.3256 17.9366L12.9861 19.8549L11.6781 19.8771L11.2736 17.9715L10.2672 17.6115C9.68015 17.404 9.13126 17.1014 8.64246 16.7158L7.80497 16.0539L5.9787 16.7161L5.30644 15.5942L6.7547 14.2902L6.56683 13.2421C6.50908 12.9357 6.4757 12.6252 6.46702 12.3135C6.4648 12.0024 6.48761 11.6916 6.53524 11.3841L6.68738 10.3302L5.19562 9.0752L5.83132 7.92906L7.67908 8.53083L8.49454 7.83777C8.97002 7.43613 9.50831 7.1154 10.0879 6.88842L11.0814 6.49342L11.419 4.57613ZM12.14 8.38898C11.3837 8.40203 10.6483 8.63904 10.0267 9.07004C9.40512 9.50103 8.9253 10.1067 8.6479 10.8103C8.3705 11.514 8.30799 12.2841 8.46826 13.0234C8.62853 13.7626 9.00439 14.4376 9.54832 14.9633C10.0922 15.4889 10.7798 15.8414 11.5241 15.9762C12.2683 16.1111 13.0359 16.0222 13.7296 15.7209C14.4234 15.4196 15.0122 14.9193 15.4217 14.2833C15.8311 13.6473 16.0428 12.9042 16.03 12.148C16.0083 11.1344 15.5867 10.1706 14.8573 9.46667C14.1278 8.76271 13.1496 8.37571 12.136 8.39005L12.14 8.38898ZM12.1725 10.301C12.5506 10.2947 12.9221 10.4008 13.2399 10.6056C13.5578 10.8105 13.8078 11.105 13.9583 11.452C14.1088 11.7989 14.153 12.1827 14.0855 12.5547C14.0179 12.9268 13.8415 13.2705 13.5786 13.5424C13.3157 13.8142 12.9781 14.002 12.6085 14.082C12.2389 14.162 11.8538 14.1306 11.5021 13.9918C11.1503 13.853 10.8476 13.613 10.6322 13.3022C10.4168 12.9913 10.2984 12.6236 10.292 12.2455C10.2862 11.9943 10.3304 11.7445 10.4218 11.5105C10.5133 11.2765 10.6502 11.063 10.8247 10.8822C10.9992 10.7015 11.2078 10.5572 11.4385 10.4576C11.6692 10.358 11.9173 10.3051 12.1685 10.302L12.1725 10.301Z" strokeLinecap="square" />
                                                </svg> {lang["update-details"]}</div>
                                            <div aria-current="page" href="/?account=responsible-gaming" className="router-link-active router-link-exact-active block p-2 rounded bg-light-50 dark:bg-dark-800 relative base-text pl-10">
                                                <svg className="absolute w-6 h-6 -translate-y-1/2 fill-dark-800 dark:fill-light-50 left-2 top-1/2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.5 2.3999L3.64501 5.8909V11.1269C3.6335 13.4902 4.39473 15.7926 5.81278 17.6832C7.23083 19.5739 9.22797 20.9493 11.5 21.5999C13.7719 20.9491 15.7688 19.5737 17.1866 17.683C18.6045 15.7923 19.3656 13.4901 19.354 11.1269V5.8909L11.5 2.3999ZM11.5 4.3109L17.609 7.0259V11.1259C17.6082 13.0249 17.0209 14.8773 15.9275 16.4299C14.834 17.9824 13.2877 19.1594 11.5 19.7999C9.71261 19.1595 8.16656 17.9829 7.07312 16.4307C5.97969 14.8785 5.39222 13.0265 5.39101 11.1279V7.0279L11.5 4.3109ZM15.683 8.3299L10.627 13.3839L8.20801 10.9659L6.97401 12.1999L10.627 15.8529L16.915 9.5629L15.683 8.3299Z" strokeLinecap="square" />
                                                </svg> {lang["responsible-gaming"]}</div>
                                            <div aria-current="page" href="/?account=change-password" className="router-link-active router-link-exact-active block p-2 rounded bg-light-50 dark:bg-dark-800 relative base-text pl-10">
                                                <svg className="absolute w-6 h-6 -translate-y-1/2 fill-dark-800 dark:fill-light-50 left-2 top-1/2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.81045 2.69092L9.37947 5.11195C8.60742 5.41654 7.89056 5.84571 7.25745 6.38238L4.92585 5.62178L2.75857 9.52574L4.64194 11.1042C4.57975 11.5131 4.55065 11.9264 4.55492 12.34C4.56521 12.7535 4.60834 13.1655 4.68389 13.5722L2.85543 15.2237L5.15512 19.0498L7.45652 18.2104C8.10823 18.7255 8.83991 19.1304 9.62252 19.4089L10.1355 21.8139L14.5985 21.7381L15.0265 19.3171C15.7996 19.0128 16.5175 18.5836 17.1515 18.0466L19.4821 18.8072L21.6494 14.9042L19.768 13.3208C19.8981 12.5023 19.8839 11.6673 19.726 10.8538L21.5526 9.20525L19.2529 5.37922L16.9505 6.2186C16.2972 5.70304 15.5638 5.29818 14.7795 5.02015L14.2694 2.61512L9.81045 2.69092ZM11.419 4.57613L12.73 4.55384L13.1334 6.45854L14.1399 6.81954C14.7271 7.02658 15.2764 7.32883 15.7655 7.71417L16.602 8.37614L18.4293 7.7139L19.1036 8.83576L17.6573 10.1377L17.8431 11.1859C17.9656 11.7976 17.9763 12.4264 17.8747 13.0419L17.7226 14.0958L19.2094 15.3578L18.5756 16.4989L16.7269 15.9002L15.9115 16.5923C15.4365 16.9943 14.8985 17.3154 14.3192 17.5426L13.3256 17.9366L12.9861 19.8549L11.6781 19.8771L11.2736 17.9715L10.2672 17.6115C9.68015 17.404 9.13126 17.1014 8.64246 16.7158L7.80497 16.0539L5.9787 16.7161L5.30644 15.5942L6.7547 14.2902L6.56683 13.2421C6.50908 12.9357 6.4757 12.6252 6.46702 12.3135C6.4648 12.0024 6.48761 11.6916 6.53524 11.3841L6.68738 10.3302L5.19562 9.0752L5.83132 7.92906L7.67908 8.53083L8.49454 7.83777C8.97002 7.43613 9.50831 7.1154 10.0879 6.88842L11.0814 6.49342L11.419 4.57613ZM12.14 8.38898C11.3837 8.40203 10.6483 8.63904 10.0267 9.07004C9.40512 9.50103 8.9253 10.1067 8.6479 10.8103C8.3705 11.514 8.30799 12.2841 8.46826 13.0234C8.62853 13.7626 9.00439 14.4376 9.54832 14.9633C10.0922 15.4889 10.7798 15.8414 11.5241 15.9762C12.2683 16.1111 13.0359 16.0222 13.7296 15.7209C14.4234 15.4196 15.0122 14.9193 15.4217 14.2833C15.8311 13.6473 16.0428 12.9042 16.03 12.148C16.0083 11.1344 15.5867 10.1706 14.8573 9.46667C14.1278 8.76271 13.1496 8.37571 12.136 8.39005L12.14 8.38898ZM12.1725 10.301C12.5506 10.2947 12.9221 10.4008 13.2399 10.6056C13.5578 10.8105 13.8078 11.105 13.9583 11.452C14.1088 11.7989 14.153 12.1827 14.0855 12.5547C14.0179 12.9268 13.8415 13.2705 13.5786 13.5424C13.3157 13.8142 12.9781 14.002 12.6085 14.082C12.2389 14.162 11.8538 14.1306 11.5021 13.9918C11.1503 13.853 10.8476 13.613 10.6322 13.3022C10.4168 12.9913 10.2984 12.6236 10.292 12.2455C10.2862 11.9943 10.3304 11.7445 10.4218 11.5105C10.5133 11.2765 10.6502 11.063 10.8247 10.8822C10.9992 10.7015 11.2078 10.5572 11.4385 10.4576C11.6692 10.358 11.9173 10.3051 12.1685 10.302L12.1725 10.301Z" strokeLinecap="square" />
                                                </svg> {lang["change-password"]}</div>
                                            <div onClick={logout} aria-current="page" href="/?account=log-out" className="router-link-active router-link-exact-active block p-2 rounded bg-light-50 dark:bg-dark-800 relative base-text pl-10">
                                                <svg className="absolute w-6 h-6 -translate-y-1/2 fill-dark-800 dark:fill-light-50 left-2 top-1/2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.037 2.36304V12H12.964V2.36304H11.037ZM9.11 2.80504C6.91359 3.49575 5.03706 4.95002 3.8201 6.90458C2.60315 8.85915 2.12621 11.1848 2.47561 13.4606C2.82501 15.7364 3.97767 17.8119 5.72492 19.3114C7.47217 20.8108 9.69854 21.6352 12.001 21.6352C14.3035 21.6352 16.5298 20.8108 18.2771 19.3114C20.0243 17.8119 21.177 15.7364 21.5264 13.4606C21.8758 11.1848 21.3988 8.85915 20.1819 6.90458C18.9649 4.95002 17.0884 3.49575 14.892 2.80504V4.85704C16.5507 5.52795 17.9244 6.7549 18.7778 8.32758C19.6311 9.90027 19.9108 11.7208 19.5691 13.4771C19.2273 15.2334 18.2853 16.8162 16.9046 17.9542C15.5238 19.0922 13.7903 19.7145 12.001 19.7145C10.2117 19.7145 8.47817 19.0922 7.09741 17.9542C5.71666 16.8162 4.77469 15.2334 4.43294 13.4771C4.09119 11.7208 4.37094 9.90027 5.22424 8.32758C6.07755 6.7549 7.45128 5.52795 9.11 4.85704V2.80504Z" strokeLinecap="square" />
                                                </svg> {lang["log-out"]}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div onClick={()=>{toggleExpanded(1)}}>
                                <div role="button" className="cursor-pointer base-text">
                                    <div className="w-full gap-1 rounded-lg bg-dark-800 dark:bg-dark-700 text-light-50 relative">
                                        <div className="relative w-full px-4 py-2 text-base font-bold cursor-pointer select-none bg-light-50 dark:bg-dark-800 text-dark-800 dark:text-light-50">{lang["quick-links"]}</div>
                                        <div className="absolute -translate-y-1/2 right-2 top-1/2">
                                            <svg className={`z-10 transition-all fill-dark-800 dark:fill-light-50 w-6 h-6 ${expanded === 1 ? "" : "rotate-180"}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" strokeLinecap="square" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={expanded === 1 ? menuClasses.expanded.class1 : menuClasses.collapsed.class1}>
                                <div className={expanded === 1 ? menuClasses.expanded.class2 : menuClasses.collapsed.class2}>
                                    <div className="relative burger-menu-accordion-content">
                                        <div className="relative flex flex-col gap-2 px-2 py-3 bg-light-200 dark:bg-dark-900 max-h-[280px] overflow-y-scroll overflow-x-hidden scrollbar-hidden">
                                            <div href="/stats" className="block p-2 rounded bg-light-50 dark:bg-dark-800 relative base-text">Statistics</div>
                                            <div href="https://cms1.gmgamingsystems.com/medialibraries/content.gmgamingsystems.com/Betting-Rules/BettingRules_MW_en.pdf" rel="noopener noreferrer" className="block p-2 rounded bg-light-50 dark:bg-dark-800 relative base-text">{lang["betting-rules"]}</div>
                                            <div href="https://www.betway.co.zm/blog" rel="noopener noreferrer" className="block p-2 rounded bg-light-50 dark:bg-dark-800 relative base-text">{lang["insider-blog"] || "Insider-Blog"}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div onClick={()=>{toggleExpanded(2)}}>
                                <div role="button" className="cursor-pointer base-text">
                                    <div className="w-full gap-1 rounded-lg bg-dark-800 dark:bg-dark-700 text-light-50 relative">
                                        <div className="relative w-full px-4 py-2 text-base font-bold cursor-pointer select-none bg-light-50 dark:bg-dark-800 text-dark-800 dark:text-light-50">{lang["customer-hub"]}</div>
                                        <div className="absolute -translate-y-1/2 right-2 top-1/2">
                                            <svg className={`z-10 transition-all fill-dark-800 dark:fill-light-50 w-6 h-6 ${expanded === 2 ? "" : "rotate-180"}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" strokeLinecap="square" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={expanded === 2 ? menuClasses.expanded.class1 : menuClasses.collapsed.class1}>
                                <div className={expanded === 2 ? menuClasses.expanded.class2 : menuClasses.collapsed.class2}>
                                    <div className="relative burger-menu-accordion-content">
                                        <div className="relative flex flex-col gap-2 px-2 py-3 bg-light-200 dark:bg-dark-900 max-h-[280px] overflow-y-scroll overflow-x-hidden scrollbar-hidden">
                                            <div onClick={()=>setPopup('uploadTickets')} href="/how-to-bet" className="block p-2 rounded bg-light-50 dark:bg-dark-800 relative base-text cursor-pointer">{lang["how-to"]}</div>
                                            <div onClick={()=>setPopup('manageBets')} aria-current="page" href="/?livechat=true" className="router-link-active router-link-exact-active block p-2 rounded bg-light-50 dark:bg-dark-800 relative base-text cursor-pointer">{lang["live-chat"]}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full p-4">
                <div data-v-48b0c13f className="relative mt-1.5 mb-2" onClick={e=>toggleDropDown(e, 'selectCountry')}>
                    <div data-v-48b0c13f className="p-dropdown p-component p-inputwrapper p-inputwrapper-filled h-10 w-full border rounded appearance-none transition-all text-dark-800 dark:text-light-50 bg-[transparent] outline-none pl-4 pr-8 cursor-pointer flex items-center bg-light-50 dark:bg-dark-800 rounded border-light-500 dark:border-dark-600" id="pv_id_5">
                        <span className="p-dropdown-label p-inputtext" tabIndex={0} role="combobox" aria-label="Light" aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_5_list" aria-disabled="false">
                            <div data-v-48b0c13f className="absolute top-0 left-0 flex items-center justify-start w-full h-full gap-2 pl-4 pr-[30px] align-items-center">
                                <span data-v-48b0c13f className="overflow-hidden text-ellipsis whitespace-nowrap">Light</span>
                            </div>
                        </span>
                        <div className="p-dropdown-trigger">
                            <div data-v-48b0c13f className="absolute top-0 flex items-center justify-center w-6 pointer-events-none right-2 h-10">
                                <svg data-v-48b0c13f className="absolute w-6 h-6 fill-dark-800 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7,10L12,15L17,10H7Z" strokeLinecap="square" />
                                </svg>
                            </div>
                        </div>
                        {dropDown == 'selectCountry' && 
                            <div className="p-dropdown-panel p-component p-ripple-disabled !z-20" style={{ zIndex: 1001, transformOrigin: 'center top', top: '40px', left: '0px' }}>
                                <span role="presentation" aria-hidden="true" className="p-hidden-accessible p-hidden-focusable" tabIndex={0} />
                                <div className="p-dropdown-items-wrapper rounded bg-light-50 dark:bg-dark-800 overflow-hidden border-x border-b border-light-500 dark:border-dark-600 mt-[1px]" style={{ maxHeight: '150px' }}>
                                    <ul id="pv_id_5_list" className="p-dropdown-items" role="listbox">
                                        {countries.map((item, index)=>
                                            <li onClick={()=>setCountryCode(index)} id="pv_id_5_0" className={`p-dropdown-item flex items-center border-t border-light-500 dark:border-dark-600" role="option" aria-label="System" aria-selected="false" aria-disabled="false" aria-setsize={3} aria-posinset={1}`}>
                                                <div data-v-48b0c13f className={`custom-dropdown-item flex items-center w-full h-10 gap-2 px-4 transition-all text-xs font-bold hover:bg-light-300 dark:hover:bg-dark-700 ${country.name == item.name ? 'bg-identity-50' : ''}`}>
                                                    {item.name}
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <span role="status" aria-live="polite" className="p-hidden-accessible"> </span>
                                <span role="presentation" aria-hidden="true" className="p-hidden-accessible p-hidden-focusable" tabIndex={0} />
                            </div>
                        }
                    </div>
                    <div data-v-48b0c13f className="absolute top-0 left-2 flex items-center pointer-events-none transition-all top-[-12px] h-auto">
                        <label data-v-48b0c13f className="px-2 text-base transition-all before:bg-light-50 before:dark:bg-dark-800 text-xs">
                            <span data-v-48b0c13f className="relative z-[2]">{lang["theme"]}</span>
                        </label>
                    </div>
                </div>

                {country.lang !== "en-US" &&
                    <div data-v-48b0c13f="" className="relative mt-1.5 mb-2">
                        <div
                        data-v-48b0c13f=""
                        className="p-dropdown p-component p-inputwrapper p-inputwrapper-filled h-10 w-full border rounded appearance-none transition-all text-dark-800 dark:text-light-50 bg-[transparent] outline-none pl-4 pr-8 cursor-pointer flex items-center bg-light-50 dark:bg-dark-800 rounded border-light-500 dark:border-dark-600"
                        id="pv_id_5"
                        >
                        <span
                            className="p-dropdown-label p-inputtext"
                            tabIndex={0}
                            role="combobox"
                            aria-label="Português (MZ)"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            aria-controls="pv_id_5_list"
                            aria-disabled="false"
                        >
                            <div
                            data-v-48b0c13f=""
                            className="absolute top-0 left-0 flex items-center justify-start w-full h-full gap-2 pl-4 pr-[30px] align-items-center"
                            >
                            <img
                                data-v-48b0c13f=""
                                src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/language-flags/pt-MZ-circular.svg"
                                className="w-6 h-6"
                                alt="Português (MZ)"
                            />
                            <span
                                data-v-48b0c13f=""
                                className="overflow-hidden text-ellipsis whitespace-nowrap"
                            >
                                Português (MZ)
                            </span>
                            </div>
                        </span>
                        {/**/}
                        <div className="p-dropdown-trigger">
                            <div
                            data-v-48b0c13f=""
                            className="absolute top-0 flex items-center justify-center w-6 pointer-events-none right-2 h-10"
                            >
                            <svg
                                data-v-48b0c13f=""
                                className="absolute w-6 h-6 fill-dark-800 dark:fill-light-50"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path className="" d="M7,10L12,15L17,10H7Z" strokeLinecap="square" />
                            </svg>
                            </div>
                        </div>
                        {/**/}
                        </div>
                        <div
                        data-v-48b0c13f=""
                        className="absolute top-0 left-2 flex items-center pointer-events-none transition-all top-[-12px] h-auto"
                        >
                        <label
                            data-v-48b0c13f=""
                            className="px-2 text-base transition-all before:bg-light-50 before:dark:bg-dark-800 text-xs"
                        >
                            <span data-v-48b0c13f="" className="relative z-[2]">
                            Idioma do site
                            </span>
                        </label>
                        </div>
                    </div>
                  
                }

                <div data-v-48b0c13f className="relative mt-1.5 w-full">
                    <div data-v-48b0c13f className="p-dropdown p-component p-inputwrapper p-inputwrapper-filled h-10 w-full border rounded appearance-none transition-all text-dark-800 dark:text-light-50 bg-[transparent] outline-none pl-4 pr-8 cursor-pointer flex items-center bg-light-50 dark:bg-dark-800 rounded border-light-500 dark:border-dark-600" id="pv_id_4">
                        <span className="p-dropdown-label p-inputtext" tabIndex={0} role="combobox" aria-label="Decimal" aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_4_list" aria-disabled="false">
                            <div data-v-48b0c13f className="absolute top-0 left-0 flex items-center justify-start w-full h-full gap-2 pl-4 pr-[30px] align-items-center">
                                <span data-v-48b0c13f className="overflow-hidden text-ellipsis whitespace-nowrap">Decimal</span>
                            </div>
                        </span>
                        <div className="p-dropdown-trigger">
                            <div data-v-48b0c13f className="absolute top-0 flex items-center justify-center w-6 pointer-events-none right-2 h-10">
                                <svg data-v-48b0c13f className="absolute w-6 h-6 fill-dark-800 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7,10L12,15L17,10H7Z" strokeLinecap="square" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div data-v-48b0c13f className="absolute top-0 left-2 flex items-center pointer-events-none transition-all top-[-12px] h-auto">
                        <label data-v-48b0c13f className="px-2 text-base transition-all before:bg-light-50 before:dark:bg-dark-800 text-xs">
                            <span data-v-48b0c13f className="relative z-[2]">{lang["odds-format"]}</span>
                        </label>
                    </div>
                </div>
                
                <div className="grid w-full grid-cols-2 gap-2 mt-2">
                    <div className="bg-[#000] border-[#A6A6A6] rounded-lg border-1 p-[10px] cursor-pointer flex items-center gap-2 whitespace-nowrap font-bold" index={0}>
                        <img className="w-[25px] flex-shrink-0" src={appleLogo} alt="Apple store" />
                        <div className="flex flex-col text-light-50 leading-[16px]">
                            <div className="text-[11px]">Download on the</div>
                            <div className="text-base">Apple store</div>
                        </div>
                    </div>
                    <div className="bg-[#000] border-[#A6A6A6] rounded-lg border-1 p-[10px] cursor-pointer flex items-center gap-2 whitespace-nowrap font-bold" index={1}>
                        <img className="w-[25px] flex-shrink-0" src={androidLogo} alt="Android" />
                        <div className="flex flex-col text-light-50 leading-[16px]">
                            <div className="text-[11px]">Download for</div>
                            <div className="text-base">Android</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullMenu;
