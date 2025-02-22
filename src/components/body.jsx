import Highlights, { HighlightsTemplate } from "./highlights";

import appleLogo from './app-store-logos/icons8-apple-logo.svg';
import androidLogo from './app-store-logos/android-playstore.svg';
import huaweiLogo from './app-store-logos/Huawei_AppGallery.svg';
import { useApp } from "../contexts/appContext";
import SportTypeItem from "./sportTypeItem";
import { useCallback, useEffect, useState } from "react";
import VirtualGames from "./virtualGames";
import { DateTime } from "luxon";
import Carousel from "./carousel";

const Body = ({loadStage}) => {

    const {country, sportTypes, lang, user} = useApp();
    const [virtualGame, setVirtualGame] = useState(null);

    // console.log("Lang: ", lang);

    const LeagueLikeIcon = useCallback((league)=>(
        (loadStage > 85 && user) && 
        <div className="flex items-center justify-center w-8 h-8 rounded-sm cursor-pointer bg-light-200 dark:bg-dark-800">
            <svg className="w-6 h-6 fill-dark-800 dark:fill-light-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" strokeLinecap="square" />
            </svg>
        </div>
    ),[loadStage, user])

    return (
        <>
            <div data-v-f322f5d6 className="padding-top-56 relative container betbook-grid">
                <div data-v-f322f5d6 className="betbook-grid-item">
                    <div data-v-f322f5d6 className="z-30 hidden gap-2 py-2 flex-nowrap md:flex sticky -mt-2 md:top-[110px] lg:top-[152px] left-0 bg-light-200 dark:bg-dark-900">
                        <div data-v-f322f5d6 className="align-items-center cursor-pointer px-3 py-2 overflow-hidden relative bg-dark-800 text-light-50 rounded leading hidden md:inline-flex font-bold">
                            <svg data-v-f322f5d6 className="w-5 h-5 fill-identity" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.25,5L12.5,1.75L15.75,5H9.25M15.75,19L12.5,22.25L9.25,19H15.75M8.89,14.3H6L5.28,17H2.91L6,7H9L12.13,17H9.67L8.89,14.3M6.33,12.68H8.56L7.93,10.56L7.67,9.59L7.42,8.63H7.39L7.17,9.6L6.93,10.58L6.33,12.68M13.05,17V15.74L17.8,8.97V8.91H13.5V7H20.73V8.34L16.09,15V15.08H20.8V17H13.05Z" strokeLinecap="square" />
                            </svg>
                            <span data-v-f322f5d6 className="mx-2">A-Z {lang["transaction-types.sports"]}</span>
                            <svg data-v-f322f5d6 className="w-5 h-5 fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" strokeLinecap="square" />
                            </svg>
                        </div>

                        <div data-v-4dfc63d0 data-v-f322f5d6 className="flex-grow relative">
                            <div data-v-4dfc63d0>
                                <div data-v-e232e1c2 className="input-wrapper icon icon-right clearable hidden text-xs md:block">
                                    <div data-v-e232e1c2 className="relative text-dark-600">
                                        <svg data-v-e232e1c2 className="w-5 h-5 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" name="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z">
                                            <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" strokeLinecap="square" />
                                        </svg>

                                        <input data-v-e232e1c2 id="find-events-or-teams" autoComplete="off" type="text" placeholder={lang["find-events-teams"]}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Carousel loadStage={loadStage} key={user}/>
                    <div className="block md:hidden">
                        <div className="relative flex flex-col mb-2 overflow-hidden">
                            <div className="flex items-center justify-between w-full h-8 px-2 py-2 text-xs font-bold rounded-t-lg cursor-pointer md:text-base bg-dark-800 text-light-50 dark:bg-dark-700">{lang[country.virtualGameTitle]}<div className="hidden md:block">
                                <svg className="w-6 h-6 fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" strokeLinecap="square" />
                                </svg>
                            </div>
                            </div>
                            <div className="gap-2 p-1 overflow-y-hidden rounded-b-lg bg-light-300 dark:bg-dark-800 dark:border dark:border-dark-800 scrollbar-hidden">
                                <div className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 cursor-pointer md:hidden text-light-50">
                                    <svg className="h-6 w-6 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" strokeLinecap="square" />
                                    </svg>
                                </div>
                                <div>
                                    <VirtualGames loadStage={loadStage}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block md:hidden">
                        <div className="relative flex items-center w-full h-8 px-2 py-2 text-xs font-bold rounded-t-lg cursor-pointer md:text-base bg-dark-800 text-light-50 dark:bg-dark-700 hover:text-light-50">{lang["booking-code"]} <svg className="absolute w-6 h-6 -translate-y-1/2 fill-light-50 right-2 top-1/2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" strokeLinecap="square" />
                        </svg>
                        </div>
                        <div className="flex flex-row w-full mb-1 overflow-x-scroll overflow-y-scroll scrollbar-hidden">
                            <form className="w-full m-1 text-xs">
                                <div data-v-e232e1c2 className="input-wrapper w-full text-xs">
                                    <div data-v-e232e1c2 className="relative text-dark-600">


                                        <input data-v-e232e1c2 id="book-a-bet-search" autoComplete="off" type="text" placeholder={lang["enter-booking-code"]} className="rounded-[4px]" />
                                    </div>
                                </div>
                            </form>
                            <div className="flex m-1 items-center justify-center flex-shrink-0 w-10 h-10 rounded-[4px] cursor-pointer bg-primary-600">
                                <svg className="w-6 h-6 fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" strokeLinecap="square" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex overflow-hidden sticky left-0 pt-2 md:pt-0 md:mt-0 -mt-2 z-10 bg-light-200 dark:bg-dark-900 lg:pt-0 lg:top-[208px] top-[112px] md:top-[165px]  lg:top-[208px]" isloading="false">
                        <div className="mr-2 md:hidden">
                            <div className="flex items-center justify-center cursor-pointer overflow-hidden bg-dark-800 text-light-50 rounded h-[48px] w-[48px]">
                                <svg className="w-6 h-6 fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.25,5L12.5,1.75L15.75,5H9.25M15.75,19L12.5,22.25L9.25,19H15.75M8.89,14.3H6L5.28,17H2.91L6,7H9L12.13,17H9.67L8.89,14.3M6.33,12.68H8.56L7.93,10.56L7.67,9.59L7.42,8.63H7.39L7.17,9.6L6.93,10.58L6.33,12.68M13.05,17V15.74L17.8,8.97V8.91H13.5V7H20.73V8.34L16.09,15V15.08H20.8V17H13.05Z" strokeLinecap="square" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative w-full overflow-hidden">
                            <div className="w-6 h-12 top-0 absolute transition-all bg-light-50 dark:bg-dark-800 hidden md:flex shadow z-10  items-center justify-center cursor-pointer left-0 rounded-l-lg" style={{ display: 'none' }}>
                                <svg className="w-5 h-5 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" strokeLinecap="square" />
                                </svg>
                            </div>
                            <div className="w-6 h-12 top-0 absolute transition-all bg-light-50 dark:bg-dark-800 hidden md:flex shadow z-10  items-center justify-center cursor-pointer right-0 rounded-r-lg" style={{}}>
                                <svg className="w-5 h-5 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" strokeLinecap="square" />
                                </svg>
                            </div>
                            <div id="sport-games-list-scroller" className="flex items-center w-full h-12 mb-2 overflow-x-scroll overflow-y-hidden rounded-lg bg-light-50 dark:bg-dark-800 scrollbar-hidden">
                                
                                {loadStage > 70 && sportTypes.map((sportType, index) => 
                                    <SportTypeItem item={sportType} key={index}/>    
                                )}

                            </div>
                        </div>
                    </div>
                    <div id="sports-container" className="flex flex-col gap-2">
                        {loadStage > 70 && <div>
                            <div className="flex items-center w-full h-8 px-2 text-xs font-bold rounded-t-lg md:text-base bg-dark-800 text-light-50 dark:bg-dark-700">Top Leagues</div>
                            <div className="relative">
                                <div className="w-6 h-full top-0 absolute transition-all bg-light-50 dark:bg-dark-800 hidden md:flex shadow z-10  items-center justify-center cursor-pointer left-0 rounded-l-lg" style={{ display: 'none' }}>
                                    <svg className="w-5 h-5 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" strokeLinecap="square" />
                                    </svg>
                                </div>
                                <div className="w-6 h-full top-0 absolute transition-all bg-light-50 dark:bg-dark-800 hidden md:flex shadow z-10  items-center justify-center cursor-pointer right-0 rounded-r-lg" style={{}}>
                                    <svg className="w-5 h-5 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" strokeLinecap="square" />
                                    </svg>
                                </div>
                                <div id="top-events-scroller" className="relative flex gap-2 p-1 overflow-x-scroll overflow-y-hidden rounded-b-lg bg-light-200 dark:bg-dark-800 scrollbar-hidden">
                                    <div className="flex items-center gap-2 p-1 rounded cursor-pointer bg-light-50 dark:bg-dark-700 shrink-0">
                                        <LeagueLikeIcon/>
                                        <div className="flex flex-col text-xs leading-4 whitespace-nowrap">
                                            <strong>Premier League</strong>
                                            <div className="flex items-center gap-1 capitalize text-dark-500 dark:text-light-600 shrink-0">
                                                <div className="relative flex shrink-0" style={{ width: '16px', height: '16px' }}>
                                                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/regions-leagues-flags/england-circular.svg" width={16} height={16} alt="Premier League" data-nuxt-img className="opacity-100" />
                                                </div> england</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-1 rounded cursor-pointer bg-light-50 dark:bg-dark-700 shrink-0">
                                        <LeagueLikeIcon/>
                                        <div className="flex flex-col text-xs leading-4 whitespace-nowrap">
                                            <strong>Champions League</strong>
                                            <div className="flex items-center gap-1 capitalize text-dark-500 dark:text-light-600 shrink-0">
                                                <div className="relative flex shrink-0" style={{ width: '16px', height: '16px' }}>
                                                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/regions-leagues-flags/uefa-club-competitions-circular.svg" width={16} height={16} alt="Champions League" data-nuxt-img className="opacity-100" />
                                                </div> uefa club competitions</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-1 rounded cursor-pointer bg-light-50 dark:bg-dark-700 shrink-0">
                                        <LeagueLikeIcon/>
                                        <div className="flex flex-col text-xs leading-4 whitespace-nowrap">
                                            <strong>Bundesliga</strong>
                                            <div className="flex items-center gap-1 capitalize text-dark-500 dark:text-light-600 shrink-0">
                                                <div className="relative flex shrink-0" style={{ width: '16px', height: '16px' }}>
                                                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/regions-leagues-flags/germany-circular.svg" width={16} height={16} alt="Bundesliga" data-nuxt-img className="opacity-100" />
                                                </div> germany</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-1 rounded cursor-pointer bg-light-50 dark:bg-dark-700 shrink-0">
                                        <LeagueLikeIcon/>
                                        <div className="flex flex-col text-xs leading-4 whitespace-nowrap">
                                            <strong>UEFA Nations League</strong>
                                            <div className="flex items-center gap-1 capitalize text-dark-500 dark:text-light-600 shrink-0">
                                                <div className="relative flex shrink-0" style={{ width: '16px', height: '16px' }}>
                                                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/regions-leagues-flags/uefa-international-competitions-circular.svg" width={16} height={16} alt="UEFA Nations League" data-nuxt-img className="opacity-100" />
                                                </div> uefa international competitions</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-1 rounded cursor-pointer bg-light-50 dark:bg-dark-700 shrink-0">
                                        <LeagueLikeIcon/>
                                        <div className="flex flex-col text-xs leading-4 whitespace-nowrap">
                                            <strong>La Liga</strong>
                                            <div className="flex items-center gap-1 capitalize text-dark-500 dark:text-light-600 shrink-0">
                                                <div className="relative flex shrink-0" style={{ width: '16px', height: '16px' }}>
                                                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/regions-leagues-flags/spain-circular.svg" width={16} height={16} alt="La Liga" data-nuxt-img className="opacity-100" />
                                                </div> spain</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-1 rounded cursor-pointer bg-light-50 dark:bg-dark-700 shrink-0">
                                        <LeagueLikeIcon/>
                                        <div className="flex flex-col text-xs leading-4 whitespace-nowrap">
                                            <strong>UEFA Europa League</strong>
                                            <div className="flex items-center gap-1 capitalize text-dark-500 dark:text-light-600 shrink-0">
                                                <div className="relative flex shrink-0" style={{ width: '16px', height: '16px' }}>
                                                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/regions-leagues-flags/uefa-club-competitions-circular.svg" width={16} height={16} alt="UEFA Europa League" data-nuxt-img className="opacity-100" />
                                                </div> uefa club competitions</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-1 rounded cursor-pointer bg-light-50 dark:bg-dark-700 shrink-0">
                                        <LeagueLikeIcon/>
                                        <div className="flex flex-col text-xs leading-4 whitespace-nowrap">
                                            <strong>Serie A</strong>
                                            <div className="flex items-center gap-1 capitalize text-dark-500 dark:text-light-600 shrink-0">
                                                <div className="relative flex shrink-0" style={{ width: '16px', height: '16px' }}>
                                                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/regions-leagues-flags/italy-circular.svg" width={16} height={16} alt="Serie A" data-nuxt-img className="opacity-100" />
                                                </div> italy</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-1 rounded cursor-pointer bg-light-50 dark:bg-dark-700 shrink-0">
                                        <LeagueLikeIcon/>
                                        <div className="flex flex-col text-xs leading-4 whitespace-nowrap">
                                            <strong>UEFA Conference League</strong>
                                            <div className="flex items-center gap-1 capitalize text-dark-500 dark:text-light-600 shrink-0">
                                                <div className="relative flex shrink-0" style={{ width: '16px', height: '16px' }}>
                                                    <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/regions-leagues-flags/uefa-club-competitions-circular.svg" width={16} height={16} alt="UEFA Conference League" data-nuxt-img className="opacity-100" />
                                                </div> uefa club competitions</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        <div className={`${loadStage <= 75 && "opacity-20"} p-[2px] rounded-lg flex bg-light-600 dark:bg-dark-900 max-w-full dark:border-dark-500 dark:border h-10 gap-1 text-sm`}>
                            <div className="flex gap-2 p-2 rounded-md cursor-pointer h-full transition-all font-bold items-center overflow-hidden select-none bg-[transparent] hover:bg-light-300 dark:hover:bg-dark-700 text-dark-800 dark:text-light-50 justify-center flex-1">
                                <div className="flex items-center justify-center w-4 h-4 rounded-full bg-identity-50 dark:bg-identity-900">
                                    <span className="w-[10px] h-[10px] bg-identity-600 rounded-full relative">
                                        <span className="absolute w-full h-full duration-1000 rounded-full bg-identity-600 animate-ping" />
                                    </span>
                                </div>
                                <span className="flex items-center gap-1 overflow-hidden capitalize whitespace-nowrap text-ellipsis">{lang["live"]}
                                </span>
                            </div>
                            <div className="flex gap-2 p-2 rounded-md cursor-pointer h-full transition-all font-bold items-center overflow-hidden select-none bg-light-50  dark:bg-dark-700 text-dark-800 dark:text-light-50 justify-center flex-1">
                                <span className="flex items-center gap-1 overflow-hidden capitalize whitespace-nowrap text-ellipsis">{lang["highlights"]}
                                </span>
                            </div>
                            <div className="flex gap-2 p-2 rounded-md cursor-pointer h-full transition-all font-bold items-center overflow-hidden select-none bg-[transparent] hover:bg-light-300 dark:hover:bg-dark-700 text-dark-800 dark:text-light-50 justify-center flex-1">
                                <span className="flex items-center gap-1 overflow-hidden capitalize whitespace-nowrap text-ellipsis">{lang["upcoming"]}
                                </span>
                            </div>
                            <div className="flex gap-2 p-2 rounded-md cursor-pointer h-full transition-all font-bold items-center overflow-hidden select-none bg-[transparent] hover:bg-light-300 dark:hover:bg-dark-700 text-dark-800 dark:text-light-50 justify-center flex-1">
                                <span className="flex items-center gap-1 overflow-hidden capitalize whitespace-nowrap text-ellipsis">{lang["outrights"]}
                                </span>
                            </div>
                        </div>
                        <div data-v-9ed189ba className="flex flex-col gap-1 overflow-hidden sticky left-0 z-10 bg-light-200 dark:bg-dark-900 lg:hidden pb-1 -mb-1 top-[176px] md:top-[220px] lg:top-[264px]">
                            {loadStage > 70 ?
                                <div data-v-9ed189ba className="flex gap-3 overflow-x-auto overflow-y-hidden scrollbar-hidden" id="sport-market-list-scroller">
                                    {sportTypes && sportTypes[0].filterMarkets.map(market =>
                                        market.filterIndex == 1 ?                                       
                                        <div data-v-9ed189ba className="text-xs font-semibold text-center transition-all border-b-2 cursor-pointer whitespace-nowrap text-identity  border-b-identity sport-market-list-active">
                                            <span data-v-9ed189ba className="min-w-[60px] block">{market.displayName}</span>
                                        </div>
                                        :
                                        <div data-v-9ed189ba className="text-xs font-semibold text-center transition-all border-b-2 cursor-pointer whitespace-nowrap border-b-[transparent]">
                                            <span data-v-9ed189ba className="min-w-[60px] block">{market.displayName}</span>
                                        </div>
                                    )}
                                </div>
                                :
                                <div
                                    data-v-2278aa6e=""
                                    className="flex items-center gap-1 overflow-x-scroll overflow-y-hidden scrollbar-hidden"
                                    >
                                    <div
                                        data-v-2278aa6e=""
                                        className="h-[26px] w-[65px] shrink-0 items-center flex border-b-2 justify-center border-b-identity"
                                    >
                                        <div
                                        data-v-2278aa6e=""
                                        className="rounded animate-pulse bg-dark-300 w-[60px] h-[13px] bg-light-500 dark:bg-dark-300"
                                        >
                                        <span className="opacity-0" />
                                        </div>
                                    </div>
                                    <div
                                        data-v-2278aa6e=""
                                        className="h-[26px] w-[65px] shrink-0 items-center flex border-b-2 justify-center border-b-[transparent]"
                                    >
                                        <div
                                        data-v-2278aa6e=""
                                        className="rounded animate-pulse bg-dark-300 w-[60px] h-[13px] bg-light-500 dark:bg-dark-300"
                                        >
                                        <span className="opacity-0" />
                                        </div>
                                    </div>
                                    <div
                                        data-v-2278aa6e=""
                                        className="h-[26px] w-[65px] shrink-0 items-center flex border-b-2 justify-center border-b-[transparent]"
                                    >
                                        <div
                                        data-v-2278aa6e=""
                                        className="rounded animate-pulse bg-dark-300 w-[60px] h-[13px] bg-light-500 dark:bg-dark-300"
                                        >
                                        <span className="opacity-0" />
                                        </div>
                                    </div>
                                    <div
                                        data-v-2278aa6e=""
                                        className="h-[26px] w-[65px] shrink-0 items-center flex border-b-2 justify-center border-b-[transparent]"
                                    >
                                        <div
                                        data-v-2278aa6e=""
                                        className="rounded animate-pulse bg-dark-300 w-[60px] h-[13px] bg-light-500 dark:bg-dark-300"
                                        >
                                        <span className="opacity-0" />
                                        </div>
                                    </div>
                                    <div
                                        data-v-2278aa6e=""
                                        className="h-[26px] w-[65px] shrink-0 items-center flex border-b-2 justify-center border-b-[transparent]"
                                    >
                                        <div
                                        data-v-2278aa6e=""
                                        className="rounded animate-pulse bg-dark-300 w-[60px] h-[13px] bg-light-500 dark:bg-dark-300"
                                        >
                                        <span className="opacity-0" />
                                        </div>
                                    </div>
                                    <div
                                        data-v-2278aa6e=""
                                        className="h-[26px] w-[65px] shrink-0 items-center flex border-b-2 justify-center border-b-[transparent]"
                                    >
                                        <div
                                        data-v-2278aa6e=""
                                        className="rounded animate-pulse bg-dark-300 w-[60px] h-[13px] bg-light-500 dark:bg-dark-300"
                                        >
                                        <span className="opacity-0" />
                                        </div>
                                    </div>
                                </div>
                            }
                            <div data-v-9ed189ba className={`${loadStage < 70 && "opacity-50"} grid grid-cols-11 pr-1 mt-2`}>
                                <div data-v-9ed189ba className="flex col-span-5 gap-1">
                                    <div data-v-9ed189ba className="px-1 shrink-0 rounded border border-light-500 gap-1 font-bold hover:bg-light-500 flex items-center transition-all dark:border-dark-500 dark:hover:bg-dark-500 justify-center min-w-[32px] h-full cursor-pointer text-xs px-2">
                                        <span data-v-9ed189ba>Leagues</span>
                                        <svg data-v-9ed189ba className="w-4 h-4 shrink-0 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M16 11.5C16 13.43 15.42 15 12 15C8.59 15 8 13.43 8 11.5V6H16V11.5M20 11H18V4H20V11Z" strokeLinecap="square" />
                                        </svg>
                                    </div>
                                    <div data-v-9ed189ba className="z-10 rounded border border-light-500 gap-1 font-bold hover:bg-light-500 flex items-center transition-all dark:border-dark-500 dark:hover:bg-dark-500 justify-center min-w-[28px] h-7 cursor-pointer text-xs">
                                        <svg data-v-9ed189ba className="w-5 h-5 dark:fill-light-50 fill-dark-700 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 9.47V11H14.76L13 14.53V13H9.24L11 9.47M13 1L6 15H11V23L18 9H13V1Z" strokeLinecap="square" />
                                        </svg>
                                    </div>
                                    <div data-v-9ed189ba className="z-10 rounded border border-light-500 gap-1 font-bold hover:bg-light-500 flex items-center transition-all dark:border-dark-500 dark:hover:bg-dark-500 justify-center min-w-[28px] h-7 cursor-pointer text-xs">
                                        <svg data-v-9ed189ba className="w-5 h-5 dark:fill-light-50 fill-dark-700 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" strokeLinecap="square" />
                                        </svg>
                                    </div>
                                </div>
                                {loadStage > 90 && <div data-v-9ed189ba className="flex items-end col-span-6 gap-1 text-xs font-bold leading-5 text-dark-700 dark:text-light-600">
                                    <div data-v-9ed189ba className="flex justify-center flex-1">1</div>
                                    <div data-v-9ed189ba className="flex justify-center flex-1">X</div>
                                    <div data-v-9ed189ba className="flex justify-center flex-1">2</div>
                                </div>}
                            </div>
                        </div>
                        <div data-v-9ed189ba className="lg:flex flex-col gap-1 sticky top-[176px] lg:top-[264px] left-0 z-10 bg-light-200 dark:bg-dark-900 hidden">
                            <div data-v-9ed189ba className="flex w-full gap-1 p-1 rounded-lg md:grid md:grid-cols-11 bg-light-50 dark:bg-dark-800">
                                <div data-v-9ed189ba className="flex gap-1 md:col-span-5 md:gap-2">
                                    <div data-v-9ed189ba className="rounded border border-light-500 gap-1 font-bold hover:bg-light-500 flex items-center transition-all dark:border-dark-500 dark:hover:bg-dark-500 justify-center min-w-[32px] h-full cursor-pointer text-xs px-2">
                                        <span data-v-9ed189ba>Leagues</span>
                                        <svg data-v-9ed189ba className="w-5 h-5 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M16 11.5C16 13.43 15.42 15 12 15C8.59 15 8 13.43 8 11.5V6H16V11.5M20 11H18V4H20V11Z" strokeLinecap="square" />
                                        </svg>
                                    </div>
                                    <div data-v-9ed189ba className="rounded border border-light-500 gap-1 font-bold hover:bg-light-500 flex items-center transition-all dark:border-dark-500 dark:hover:bg-dark-500 justify-center min-w-[32px] h-full cursor-pointer text-xs px-2 hidden md:flex">
                                        <span data-v-9ed189ba className="hidden md:inline-block">Filters</span>
                                        <svg data-v-9ed189ba className="w-5 h-5 fill-[currentColor]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15,19.88C15.04,20.18 14.94,20.5 14.71,20.71C14.32,21.1 13.69,21.1 13.3,20.71L9.29,16.7C9.06,16.47 8.96,16.16 9,15.87V10.75L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L15,10.75V19.88M7.04,5L11,10.06V15.58L13,17.58V10.05L16.96,5H7.04Z" strokeLinecap="square" />
                                        </svg>
                                    </div>
                                    <div data-v-9ed189ba className="rounded border border-light-500 gap-1 font-bold hover:bg-light-500 flex items-center transition-all dark:border-dark-500 dark:hover:bg-dark-500 justify-center min-w-[32px] h-full cursor-pointer text-xs px-2">
                                        <svg data-v-9ed189ba className="w-5 h-5 dark:fill-light-50 fill-dark-700 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 9.47V11H14.76L13 14.53V13H9.24L11 9.47M13 1L6 15H11V23L18 9H13V1Z" strokeLinecap="square" />
                                        </svg>
                                    </div>
                                    <div data-v-9ed189ba className="rounded border border-light-500 gap-1 font-bold hover:bg-light-500 flex items-center transition-all dark:border-dark-500 dark:hover:bg-dark-500 justify-center min-w-[32px] h-full cursor-pointer text-xs px-2">
                                        <svg data-v-9ed189ba className="w-5 h-5 dark:fill-light-50 fill-dark-700 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" strokeLinecap="square" />
                                        </svg>
                                    </div>
                                </div>
                                <div data-v-9ed189ba className="flex flex-1 gap-3 md:col-span-6">
                                    <div data-v-48b0c13f className="relative flex flex-1 text-xs font-bold event-market-select-0">
                                        <div data-v-48b0c13f className="p-dropdown p-component p-inputwrapper p-inputwrapper-filled h-9 w-full border rounded appearance-none transition-all text-dark-800 dark:text-light-50 bg-[transparent] outline-none pl-4 pr-8 cursor-pointer flex items-center bg-light-50 dark:bg-dark-800 rounded border-light-500 dark:border-dark-600" id="pv_id_3">
                                            <span className="p-dropdown-label p-inputtext" tabIndex={0} role="combobox" aria-label="1X2" aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_3_list" aria-disabled="false">
                                                <div data-v-48b0c13f className="absolute top-0 left-0 flex items-center justify-start w-full h-full gap-2 pl-4 pr-[30px] align-items-center">
                                                    <span data-v-48b0c13f className="overflow-hidden text-ellipsis whitespace-nowrap">1X2</span>
                                                </div>
                                            </span>
                                            <div className="p-dropdown-trigger">
                                                <div data-v-48b0c13f className="absolute top-0 flex items-center justify-center w-6 pointer-events-none right-2 h-8">
                                                    <svg data-v-48b0c13f className="absolute w-6 h-6 fill-dark-800 dark:fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7,10L12,15L17,10H7Z" strokeLinecap="square" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-v-9ed189ba className="grid w-full grid-cols-11 py-1">
                                <div data-v-9ed189ba className="flex col-span-5">
                                </div>
                                <div data-v-9ed189ba className="flex col-span-6 gap-3 text-xs font-bold leading-3 text-dark-700 dark:text-light-600 h-[14px]">
                                    <div data-v-9ed189ba className="flex items-center flex-1 justify-evenly event-market-heading-0">
                                        <div data-v-9ed189ba className="flex justify-center flex-1">1</div>
                                        <div data-v-9ed189ba className="flex justify-center flex-1">X</div>
                                        <div data-v-9ed189ba className="flex justify-center flex-1">2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {loadStage > 90 ?
                            <Highlights />
                            :
                            <HighlightsTemplate/>
                        
                        }
                        <div className="mt-8">
                            <div id="content" className="relative w-100" node="[object Object]" >
                                <div className="overflow-hidden">
                                    <div className="absolute inset-0 mt-[35px] w-full h-[20px] dark:bg-dark-900 bg-light-200 opacity-40" />
                                    <div className="absolute inset-0 mt-[55px] w-full h-[20px] dark:bg-dark-900 bg-light-200 opacity-60" />
                                    <div className="absolute inset-0 mt-[75px] w-full h-[20px] dark:bg-dark-900 bg-light-200 opacity-80" />
                                </div>
                                <div className="w-100 overflow-hidden transition-all bg-gradient-to-b  duration-500 text-sm leading-5 max-h-[90px] dark:bg-dark-900">
                                    <div className="page-text">
                                        <h1 className="text-3xl font-bold mb-2">Welcome to Betway Zambia</h1>
                                        <p className="mb-2">Welcome to <strong className="font-bold">Betway</strong>, Zambia’s premier online sports betting platform. We offer the best odds on both local and international sporting events. Whether you’re placing your first online sports bet, or you’re a seasoned pro, our easy to navigate site will have you placing your first bet in no time. You can access Betway from your PC, laptop or even your favourite mobile device.</p>
                                        Place your <a href="/sport/soccer" className="text-primary-500">soccer bets</a> now.
                                        <p className="mb-2">&nbsp;</p>
                                        <p className="mb-2">
                                            <a href="/sport" className="text-primary-500">Sports betting</a> is both fun and exciting, and a small bet can add to the thrill of any match. At Betway, we give you the freedom to bet on thousands of different outcomes across a wide variety of sports. You can bet on the winner of a match, the correct score of a match, or even how many yellow cards will be handed out in a single game. All of which can be done through any one of our easy to use platforms.</p>
                                        <h2 className="font-bold mb-2 text-xl">Experience the excitement of Live Betting</h2>
                                        <p className="mb-2">In addition to pre-game betting, we also offer in-game betting with our Live feature. <a href="/live" className="text-primary-500">Live betting</a> allows you to bet on the action as it happens. This adds a whole new level of excitement and allows you to adjust your betting strategy as the match unfolds. To place an in-game bet, simply visit the Live tab, select a fixture and place a bet. Fixtures will only be available in the Live tab once the game has started.</p>
                                        <p className="mb-2">To get started, simply make your first deposit,choose your favourite sport, and place your bet. Don’t have an account? <a href="/?register=1" className="text-primary-500">Sign up today</a> and you’ll get a 125% First Deposit match up to K1,000 to use as a Free Bet.</p>
                                        <h2 className="font-bold mb-2 text-xl">What sports can I bet on?</h2>
                                        <p className="mb-2">We offer exciting odds and betting options on sports from around the world. Each sport offers leagues, friendlies and tournaments from around the world. Some of the sports available for you to bet on include:</p>
                                        <ul className="list-disc pl-4 mb-4">
                                            <li >Soccer</li>
                                            <li >
                                                <a href="/sport/rugby" className="text-primary-500">Rugby</a>
                                            </li>
                                            <li >
                                                <a href="/sport/cricket" className="text-primary-500">Cricket</a>
                                            </li>
                                            <li >
                                                <a href="/sport/motor-sport/outrights" className="text-primary-500">Motorsport</a>
                                            </li>
                                            <li >
                                                <a href="/sport/boxing" className="text-primary-500">Boxing</a>
                                            </li>
                                            <li >Athletics</li>
                                        </ul>
                                        <h2 className="font-bold mb-2 text-xl">What outcomes can I bet on?</h2>
                                        <p className="mb-2">Once you’ve decided what sport or fixture you want to bet on, you’ll be able to choose the type of bet you’d like to place. To see a full list of the available outcomes, just click on “more bets” next to your chosen match. Here’s just a few of the type of bets you can place:</p>
                                        <ul className="list-disc pl-4 mb-4">
                                            <li >Correct Score</li>
                                            <li >Double Chance</li>
                                            <li >Overs/Unders</li>
                                            <li >Fulltime result</li>
                                            <li >First Team to Score</li>
                                        </ul>
                                        <p className="mb-2">In addition to the huge selection of sports to choose from, we also offer two types of betslips, Single Bets and Multi Bets, to further enhance your betting experience. Single Bets are the simplest form of betting. It is a bet placed that predicts the outcome of just one event. If your prediction is correct, your winnings will be calculated by multiplying your stake by the odds of your bet. A Multi-Bet allows you to combine a series of single bets into one bet with the odds multiplying with each additional bet. In order for a Multi-Bet to be successful, all predictions must be correct.</p>
                                        <h2 className="font-bold mb-2 text-xl">Online casino games</h2>
                                        <p className="mb-2">Do you love online <a href="/lobby/casino" className="text-primary-500">casino games</a>? If you do, then you are in luck becuase Betway casino provides some of the very best online casino games that the world wide web has to offer. Play online slots, table games and video poker. All the Betway casino games have high quality graphics that will keep you entertained for hours on end. <a href="?register=1" className="text-primary-500">Register an account</a> now and start playing today.</p>
                                        <h2 className="font-bold mb-2 text-xl">Live Casino</h2>
                                        <p className="mb-2">Play the very best <a href="/lobby/livecasino" className="text-primary-500">Live Casino</a> games in Zambia from anywhere with Betway, in an entertainment experience unlike any other. Experience the excitement of playing live roulette, live Blackjack, live Baccarat and live Poker. Betway Live Casino also offers Game Shows and Top Games for players to choose from. Be dealt hands from a live dealer in real time and play your favorite casino games without having to set foot in a physical casino. You can play from the comfort of your own home or play while you are on the move by using the <a href="/betway-app" className="text-primary-500">Betway Mobile App.</a>
                                        </p>
                                        <h2 className="font-bold mb-2 text-xl">Safety and security</h2>
                                        <p className="mb-2">Emerald Bay Limited is licensed by the Betting Control and Licensing Board of Zambia to conduct sports betting (License number 0000967).</p>
                                        <p className="mb-2">Your privacy is our number one concern. Once you have registered an account, your information is protected by our strict <a href="/privacy-policy" className="text-primary-500">Privacy Policy</a> which ensures that your information will not be shared with, or sold to, any third parties. All online transactions with Betway are protected by our advanced digital encryption technology.</p>
                                        <h2 className="font-bold mb-2 text-xl">Customer support</h2>
                                        <p className="mb-2">If you require any assistance, please contact our <a href="/contact-us" className="text-primary-500">support centre.</a>Our support centre operators are available 24/7 to answer any questions you may have or to help resolve any problems that you may run into.</p>
                                        <p className="mb-2">Are you ready to place your first bet? <a href="/?register=1" className="text-primary-500">Click here</a> to get started.</p>
                                    </div>
                                </div>
                                <div className="flex justify-center -mt-4">
                                    <button className="p-button p-component p-button-outlined rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 px-4 h-9 relative mx-auto rounded-full border-[1px] dark:bg-dark-900 bg-light-200 border-light-400" type="button" aria-label="Show More">
                                        <div className="flex justify-center items-center text-center w-full">
                                            <span >Show More</span>
                                            <svg className="ml-1 fill-[currentColor] w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" name="icon">
                                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" strokeLinecap="square" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-f322f5d6 className="relative flex-col content-start hidden betbook-grid-item xl:flex">
                    <div data-v-f322f5d6 className="sticky left-0 flex top-40 h-[calc(100vh-170px)] overflow-x-hidden flex-col gap-2">
                        <div data-v-f322f5d6 className="absolute top-0 left-0 w-full h-[auto] transition-all opacity-0 -z-10">
                        </div>
                        <div className="flex flex-col gap-1 overflow-hidden rounded">
                            <div className="cursor-pointer">
                                <img id="p_lt_ctl02_pageplaceholder1_p_lt_ctl00_WebPartZone_WebPartZone_zone_BannerImage1_ucEditableImage_imgImage" src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/betslip%20banners/25984_ZM_QuickGames_SmallBetslip.jpg" alt="" />
                            </div>
                            <div className="cursor-pointer">
                                <img id="p_lt_ctl02_pageplaceholder1_p_lt_ctl00_WebPartZone1_WebPartZone1_zone_BannerImage2_ucEditableImage_imgImage" src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/betslip%20banners/25974_ZM_casinogeneric_Betslip_345x600_1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer style={{ marginTop: '25px' }} data-v-d42dc4c6 className="mb-10 overflow-hidden text-light-50 md:mb-0">
                <div className="px-2 pt-4 bg-dark-800">
                    <div className="container">
                        <div className="footer-logo-container">
                            <a href="/" className="text-primary-500">
                                <img alt="Betway Logo" src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/sponsorships/Betway_White.svg" width="143px" />
                            </a>
                            <div className="footer-sponsor-logos flex items-center">
                                <a className="text-primary-500 text-primary-500" href="/sponsorship">
                                    <img alt="West Ham Logo" height="60px" src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/sponsorships/WestHam.png" width="60px" /> </a> <a className="text-primary-500 text-primary-500" href="/sponsorship">
                                    <img alt="Arsenal Logo" height="40px" id="footer-logo-arsenal" src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/sponsorships/Arsenal_FC.png" style={{ margin: '0px 7px 0px 7px' }} width="45px" /> </a> <a className="text-primary-500 text-primary-500" href="/sponsorship"> <img alt="Brighton & Hove Albion Logo" height="60px" src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/sponsorships/Brighton-Hove-Albion.png" width="60px" /> </a> <a className="text-primary-500 text-primary-500" href="/sponsorship"> <img alt="Atletico de Madrid logo" height="60px" src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/sponsorships/Atletico-Madrid.png" width="60px" /> </a> <a className="text-primary-500 text-primary-500" href="/sponsorship"> <img alt="Man City Logo" height="60px" src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/sponsorships/ManCity_Logo.png" width="60px" />&nbsp;</a>
                            </div>
                        </div>
                    </div>
                    <div className="container py-4">
                        <div className="grid grid-cols-2 mb-2 text-base font-bold md:grid-cols-4">
                            <a href="/contact-us" className="mb-2 text-light-50 hover:text-light-50">{lang["contact-us"]}</a>
                            <a href="/frequently-asked-questions" className="mb-2 text-light-50 hover:text-light-50">{lang["frequently-asked-questions"]}</a>
                            <a href="/terms-and-conditions" className="mb-2 text-light-50 hover:text-light-50">Terms &amp; Conditions</a>
                            <a href="https://cms1.gmgamingsystems.com/medialibraries/content.gmgamingsystems.com/Synapse/Betting%20rules/BettingRules_ZM_en.pdf" rel="noopener noreferrer" target="_blank" className="mb-2 text-light-50 hover:text-light-50">{lang["betting-rules"]}</a>
                            <a href="/betway-app" className="mb-2 text-light-50 hover:text-light-50">{lang["betway-app"]}</a>
                            <a href="/how-to-bet" className="mb-2 text-light-50 hover:text-light-50">{lang["how-to-bet"]}</a>
                            <a href="/sponsorship" className="mb-2 text-light-50 hover:text-light-50">{lang["sponsorships"]}</a>
                            <a href="https://www.betwaypartnersafrica.com/" rel="noopener noreferrer" target="_blank" className="mb-2 text-light-50 hover:text-light-50">{lang["affiliate-program"]}</a>
                            <a href="/responsible-gaming" className="mb-2 text-light-50 hover:text-light-50">{lang["responsible-gaming"]}</a>
                            <a href="/privacy-policy" className="mb-2 text-light-50 hover:text-light-50">{lang["privacy-policy"]}</a>
                            <a href="/terms-and-conditions" className="mb-2 text-light-50 hover:text-light-50">{lang["terms-conditions"]}</a>
                        </div>
                        <div className="mb-4 text-xs">{lang[`license-info.${country.code}`]}</div>
                        <div className="flex justify-between text-xs">
                            <div> Version: 1.0.0 | <span>{lang["current-time"]}: {DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS)}</span>
                            </div>
                            <div>© {new Date().getFullYear()} Betway</div>
                        </div>
                    </div>
                </div>
                <div className="px-2 bg-dark-900">
                    <div className="container pt-2 pb-4 mx-auto md:flex md:items-center">
                        <div className="hidden mr-4 md:block">
                            <canvas width={122} height={122} style={{ height: '122px', width: '122px' }} />
                        </div>
                        <div className="mb-2 text-base">
                            <div>{lang["download-the-betway-app"]}</div>
                            <div className="hidden md:block">Scan the QR code to initiate the app download</div>
                            <div>{lang["click-icon-to-download"]}</div>
                            <div className="flex mt-3 items-center">
                                <a href="http://info.betwayafrica.com/api/v1/AppDownload" rel="noopener noreferrer">
                                    <img src={appleLogo} width={30} height={30} className="mr-1" alt="apple-logo" />
                                </a>
                                <a href="http://info.betwayafrica.com/api/v1/AppDownload" rel="noopener noreferrer">
                                    <img src={androidLogo} width={25} height={25} className="mr-1" alt="android-logo" />
                                </a>
                                <a href="http://info.betwayafrica.com/api/v1/AppDownload" rel="noopener noreferrer">
                                    <img src={huaweiLogo} width={30} height={30} className="mr-1" alt="huawei-logo" />
                                </a>
                            </div>
                        </div>
                        <div className="flex pt-2 border-t border-dark-600 md:border-0 md:ml-auto">
                            <div className="relative mr-2">
                                <a className="mr-2 text-primary-500 text-primary-500" href="https://www.instagram.com/betway_zm/" rel="noopener noreferrer" target="_blank">
                                    <svg fill="none" height={32} viewBox="0 0 32 32" width={32} xmlns="http://www.w3.org/2000/svg"> <path d="M10.2399 1.91992C5.65112 1.91992 1.91992 5.65112 1.91992 10.2399V21.7599C1.91992 26.3487 5.65112 30.0799 10.2399 30.0799H21.7599C26.3487 30.0799 30.0799 26.3487 30.0799 21.7599V10.2399C30.0799 5.65112 26.3487 1.91992 21.7599 1.91992H10.2399ZM23.6799 7.03992C24.3839 7.03992 24.9599 7.61592 24.9599 8.31992C24.9599 9.02392 24.3839 9.59992 23.6799 9.59992C22.9759 9.59992 22.3999 9.02392 22.3999 8.31992C22.3999 7.61592 22.9759 7.03992 23.6799 7.03992ZM15.9999 8.95992C19.8847 8.95992 23.0399 12.1151 23.0399 15.9999C23.0399 19.8847 19.8847 23.0399 15.9999 23.0399C12.1151 23.0399 8.95992 19.8847 8.95992 15.9999C8.95992 12.1151 12.1151 8.95992 15.9999 8.95992ZM15.9999 10.2399C12.8255 10.2399 10.2399 12.8255 10.2399 15.9999C10.2399 19.1743 12.8255 21.7599 15.9999 21.7599C19.1743 21.7599 21.7599 19.1743 21.7599 15.9999C21.7599 12.8255 19.1743 10.2399 15.9999 10.2399Z" fill="#636363" />
                                    </svg>
                                </a>
                            </div>
                            <div className="relative mr-2">
                                <a className="mr-2 text-primary-500 text-primary-500" href="https://www.youtube.com/channel/UCANVmyYzvU_7ybmPlvDQYqQ" rel="noopener noreferrer" target="_blank">
                                    <svg fill="none" height={32} viewBox="0 0 32 32" width={32} xmlns="http://www.w3.org/2000/svg"> <path d="M28.7349 9.28001C28.4799 7.87251 27.2649 6.84751 25.8549 6.52751C23.7449 6.08001 19.8399 5.76001 15.6149 5.76001C11.3924 5.76001 7.42492 6.08001 5.31242 6.52751C3.90492 6.84751 2.68742 7.80751 2.43242 9.28001C2.17492 10.88 1.91992 13.12 1.91992 16C1.91992 18.88 2.17492 21.12 2.49492 22.72C2.75242 24.1275 3.96742 25.1525 5.37492 25.4725C7.61492 25.92 11.4549 26.24 15.6799 26.24C19.9049 26.24 23.7449 25.92 25.9849 25.4725C27.3924 25.1525 28.6074 24.1925 28.8649 22.72C29.1199 21.12 29.4399 18.815 29.5049 16C29.3749 13.12 29.0549 10.88 28.7349 9.28001ZM12.1599 20.48V11.52L19.9674 16L12.1599 20.48Z" fill="#636363" /> </svg>
                                </a>
                            </div>
                            <div className="relative">
                                <a className="mr-2 text-primary-500" href="https://x.com/betway_zambia?lang=en" rel="noopener noreferrer" target="_blank">
                                    <svg aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-18jsvk2 r-16y2uox r-8kz0gk" fill="none" height={40} viewBox="0 0 32 32" width={40}> <g> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#636363" /> </g> </svg> </a>
                            </div>
                            <div className="relative">
                                <a className="mr-2 text-primary-500" href="/terms-and-conditions" rel="noopener noreferrer" target="_blank">
                                    <svg fill="none" height={32} viewBox="0 0 32 32" width={32} xmlns="http://www.w3.org/2000/svg"> <path d="M15.9998 1.28003C7.88267 1.28003 1.27979 7.88291 1.27979 16C1.27979 24.1171 7.88267 30.72 15.9998 30.72C24.1169 30.72 30.7198 25.8234 30.7198 16C30.7198 7.88291 24.1169 1.28003 15.9998 1.28003ZM15.8898 10.88C18.7922 10.88 18.956 12.961 18.956 13.4538C18.956 14.7133 17.9706 15.3699 17.5873 15.5338C18.1895 15.6983 19.3948 16.3002 19.3948 18.0525C19.3948 20.626 17.0404 21.1188 16.0548 21.1188C13.4813 21.1188 12.6048 19.4759 12.6048 18.0525C12.6048 16.3552 13.8094 15.7527 14.3573 15.5338C13.9195 15.3693 12.9335 14.7133 12.9335 13.4538C12.9335 12.5232 13.5896 10.88 15.8898 10.88ZM9.91978 11.04H10.8798V20.96H9.59978V13.92L7.03978 13.9138V12.9275C8.57514 12.8725 9.64587 12.5747 9.91978 11.04ZM15.9448 11.975C14.3019 11.975 14.1935 13.2893 14.1935 13.5088C14.1929 13.7827 14.3025 15.1513 15.9998 15.1513C17.3687 15.1513 17.6423 14.0566 17.6423 13.5088C17.6423 13.016 17.4232 11.975 15.9448 11.975ZM23.0398 13.44H24.3198V15.36H26.2398V16.64H24.3198V18.56H23.0398V16.64H21.1198V15.36H23.0398V13.44ZM15.9998 16.1913C14.4119 16.1913 13.8635 17.287 13.8635 18.1088C13.8635 19.5328 14.9591 20.0788 15.9998 20.0788C17.3687 20.0788 18.081 19.0393 18.081 18.1088C18.081 17.671 17.6427 16.1913 15.9998 16.1913Z" fill="#636363" /> </svg> </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </footer>

        </>
    );
}

export default Body;
