import { useEffect, useState } from "react";
import { useApp } from "../contexts/appContext";

const Footer = ({loadStage}) => {

    const {popup, setPopup, loadedTickets, lang, user} = useApp();

    const [openTicketsCount, setOpenTicketsCount] = useState(null);

    useEffect(()=>{
        setOpenTicketsCount(loadedTickets.tickets.filter((ticket)=>ticket.status == 'open').length);
    }, [loadedTickets.tickets])

    return (
        (loadStage > 85 && user) ?

        <div className="flex xl:hidden fixed bottom-0 left-0 w-full h-[50px] bg-dark-900 justify-evenly gap-1 z-10">
            <div className="flex flex-col items-center justify-center flex-1 leading-3 capitalize cursor-pointer select-none text-light-50 text-[10px] relative overflow-hidden">
                <div className="relative flex items-center justify-center">
                    <svg className="w-6 h-6 mb-1 fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" strokeLinecap="square" />
                    </svg>{/**/}</div>
                <span className="w-full overflow-hidden text-center text-ellipsis whitespace-nowrap">{lang["more-bets-clean"]}</span>
            </div>
            <div onClick={()=>setPopup('myBets')} className="flex flex-col items-center justify-center flex-1 leading-3 capitalize cursor-pointer select-none text-light-50 text-[10px] relative overflow-hidden">
                <div className="relative flex items-center justify-center">
                    <svg className="w-6 h-6 mb-1 fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.503 3.604V14.796H2.637V17.596C2.637 18.3386 2.932 19.0508 3.4571 19.5759C3.9822 20.101 4.69439 20.396 5.437 20.396H17.562C18.3036 20.3926 19.0138 20.0965 19.5381 19.5721C20.0625 19.0478 20.3586 18.3376 20.362 17.596V3.604H4.503ZM6.369 5.47H18.496V17.596C18.4979 17.719 18.475 17.8411 18.4288 17.9551C18.3826 18.0691 18.3139 18.1727 18.2269 18.2596C18.1399 18.3465 18.0362 18.4151 17.9222 18.4612C17.8081 18.5073 17.686 18.53 17.563 18.528C17.3158 18.5277 17.0788 18.4295 16.9039 18.2548C16.729 18.0801 16.6305 17.8432 16.63 17.596V14.796H6.369V5.47ZM8.235 7.335V9.201H10.1V7.335H8.235ZM11.967 7.335V9.201H16.631V7.335H11.967ZM8.235 11.066V12.932H10.1V11.067L8.235 11.066ZM11.967 11.066V12.932H16.631V11.067L11.967 11.066ZM4.504 16.666H14.762V17.596C14.7619 17.9135 14.816 18.2287 14.922 18.528H5.435C5.18798 18.5275 4.95123 18.4291 4.77656 18.2544C4.60189 18.0798 4.50353 17.843 4.503 17.596L4.504 16.666Z" strokeLinecap="square" />
                    </svg>{/**/}
                </div>
                {(openTicketsCount && loadStage > 92) && <div className="absolute top-[1px] left-1/2 ml-2 text-[10px] text-light-50 bg-primary-600 rounded-full min-w-[16px] min-h-[16px] flex justify-center items-center">{openTicketsCount}</div>}
                <span className="w-full overflow-hidden text-center text-ellipsis whitespace-nowrap">{lang["my-bets"]}</span>
            </div>
            <div onClick={()=>setPopup('betslip')} className="flex flex-col items-center justify-center flex-1 leading-3 capitalize cursor-pointer select-none text-light-50 text-[10px] relative overflow-hidden bg-identity">
                <div className="relative flex items-center justify-center">
                    <svg className="w-6 h-6 mb-1 fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.9 22.8c-.8.3-1.6.6-2.5 1V0h19.2v23.7c-.9-.3-1.7-.6-2.5-.8-.7.4-1.4.7-2.2 1.1l-2.4-1.2c-.8.4-1.6.7-2.5 1.1-.8-.4-1.5-.7-2.4-1.1L7.2 24c-.7-.4-1.5-.7-2.3-1.2zM4.5 7.4h15V1.9h-15v5.5z" strokeLinecap="square" />
                    </svg>{/**/}</div>
                <span className="w-full overflow-hidden text-center text-ellipsis whitespace-nowrap">{lang["betslip"]}</span>
                {/* <div className="absolute top-[1px] left-1/2 ml-2 text-[10px] text-light-50 bg-dark-900 rounded-full min-w-[16px] min-h-[16px] flex justify-center items-center">1</div> */}
            </div>
            <div className="flex flex-col items-center justify-center flex-1 leading-3 capitalize cursor-pointer select-none text-light-50 text-[10px] relative overflow-hidden">
                <div className="relative flex items-center justify-center">
                    <svg className="w-6 h-6 mb-1 fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 5L20 19L4 19L4 5H20M20 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V5C22 3.89 21.11 3 20 3M18 15H6V17H18V15M10 7H6V13H10V7M12 9H18V7H12V9M18 11H12V13H18V11Z" strokeLinecap="square" />
                    </svg>{/**/}</div>
                <span className="w-full overflow-hidden text-center text-ellipsis whitespace-nowrap">Betway Feed</span>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 leading-3 capitalize cursor-pointer select-none text-light-50 text-[10px] relative overflow-hidden">
                <div className="relative flex items-center justify-center">
                    <svg className="w-6 h-6 mb-1 fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.995 2.88208C10.722 2.88208 9.50106 3.38779 8.60088 4.28797C7.70071 5.18814 7.195 6.40904 7.195 7.68208C7.195 8.95512 7.70071 10.176 8.60088 11.0762C9.50106 11.9764 10.722 12.4821 11.995 12.4821C12.6253 12.4821 13.2495 12.3579 13.8319 12.1167C14.4142 11.8755 14.9434 11.5219 15.3891 11.0762C15.8348 10.6305 16.1884 10.1013 16.4296 9.51896C16.6708 8.9366 16.795 8.31243 16.795 7.68208C16.795 7.05174 16.6708 6.42756 16.4296 5.8452C16.1884 5.26284 15.8348 4.73369 15.3891 4.28797C14.9434 3.84225 14.4142 3.48868 13.8319 3.24746C13.2495 3.00624 12.6253 2.88208 11.995 2.88208ZM11.995 4.80208C12.3732 4.80195 12.7478 4.87635 13.0973 5.02104C13.4468 5.16573 13.7643 5.37786 14.0318 5.64532C14.2992 5.91278 14.5114 6.23032 14.656 6.5798C14.8007 6.92928 14.8751 7.30384 14.875 7.68208C14.8737 8.44504 14.5697 9.17629 14.0297 9.71532C13.4897 10.2543 12.758 10.5571 11.995 10.5571C11.2312 10.5571 10.4986 10.2537 9.95853 9.71355C9.41842 9.17345 9.115 8.44091 9.115 7.67708C9.11632 6.91413 9.42033 6.18287 9.96029 5.64384C10.5003 5.10482 11.232 4.80208 11.995 4.80208ZM12.387 5.76208L10.564 6.50808V7.50808L11.326 7.21408V9.60608H12.631V5.75708L12.387 5.76208ZM2.395 8.64208V19.2021C2.39553 19.7111 2.59798 20.1992 2.95794 20.5591C3.31789 20.9191 3.80594 21.1216 4.315 21.1221H19.675C20.184 21.1216 20.6721 20.9191 21.0321 20.5591C21.392 20.1992 21.5945 19.7111 21.595 19.2021V8.64208H19.675V19.2021H4.32V8.64208H2.395ZM8.155 14.4021L11.995 18.2421L15.835 14.4021H8.155Z" strokeLinecap="square" />
                    </svg>{/**/}</div>
                <span className="w-full overflow-hidden text-center text-ellipsis whitespace-nowrap">{lang["deposit"]}</span>
            </div>
        </div>
        :
        <div className="flex xl:hidden fixed bottom-0 left-0 w-full h-[50px] bg-dark-900 justify-evenly gap-1 z-10">
            <div className="flex flex-col items-center justify-center flex-1 leading-3 capitalize cursor-pointer select-none text-light-50 text-[10px] relative overflow-hidden">
                <div className="relative flex items-center justify-center">
                <svg
                    className="w-6 h-6 mb-1 fill-light-50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    className=""
                    d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                    strokeLinecap="square"
                    />
                </svg>
                {/**/}
                </div>
                <span className="w-full overflow-hidden text-center text-ellipsis whitespace-nowrap">
                More
                </span>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 leading-3 capitalize cursor-pointer select-none text-light-50 text-[10px] relative overflow-hidden">
                <div className="relative flex items-center justify-center">
                <svg
                    className="w-6 h-6 mb-1 fill-light-50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    className=""
                    d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z"
                    strokeLinecap="square"
                    />
                </svg>
                {/**/}
                </div>
                <span className="w-full overflow-hidden text-center text-ellipsis whitespace-nowrap">
                Top Events
                </span>
            </div>
            <div onClick={()=>setPopup('betslip')} className="flex flex-col items-center justify-center flex-1 leading-3 capitalize cursor-pointer select-none text-light-50 text-[10px] relative overflow-hidden bg-identity">
                <div className="relative flex items-center justify-center">
                <svg
                    className="w-6 h-6 mb-1 fill-light-50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    className=""
                    d="M4.9 22.8c-.8.3-1.6.6-2.5 1V0h19.2v23.7c-.9-.3-1.7-.6-2.5-.8-.7.4-1.4.7-2.2 1.1l-2.4-1.2c-.8.4-1.6.7-2.5 1.1-.8-.4-1.5-.7-2.4-1.1L7.2 24c-.7-.4-1.5-.7-2.3-1.2zM4.5 7.4h15V1.9h-15v5.5z"
                    strokeLinecap="square"
                    />
                </svg>
                {/**/}
                </div>
                <span className="w-full overflow-hidden text-center text-ellipsis whitespace-nowrap">
                Betslip
                </span>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 leading-3 capitalize cursor-pointer select-none text-light-50 text-[10px] relative overflow-hidden">
                <div className="relative flex items-center justify-center">
                <svg
                    className="w-6 h-6 mb-1 fill-light-50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    className=""
                    d="M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M15,15.6L13,14H4V10H13L15,8.4V15.6M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z"
                    strokeLinecap="square"
                    />
                </svg>
                {/**/}
                </div>
                <span className="w-full overflow-hidden text-center text-ellipsis whitespace-nowrap">
                Promos
                </span>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 leading-3 capitalize cursor-pointer select-none text-light-50 text-[10px] relative overflow-hidden">
                <div className="relative flex items-center justify-center">
                <svg
                    className="w-6 h-6 mb-1 fill-light-50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    className=""
                    d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"
                    strokeLinecap="square"
                    />
                </svg>
                {/**/}
                </div>
                <span className="w-full overflow-hidden text-center text-ellipsis whitespace-nowrap">
                Sign Up
                </span>
            </div>
        </div>

    );
}

export default Footer;