import { useState } from "react";
import { useApp } from "../contexts/appContext";
import formatDate from "../functions/formatDate";

const Highlights = () => {

    const {highlights} = useApp();

    return (
        <div className="flex flex-col gap-2">
            {highlights.map((league, index) => (
                <HighlightLeague key={index} league={league}/>
            ))}
        </div>
    )
}

const HighlightLeague = ({league}) => {

    const {user} = useApp();
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="rounded-lg">
            <div>
                <div>
                    <a role="button" className="cursor-pointer base-text">
                        <div className="w-full gap-1 rounded-lg bg-dark-800 dark:bg-dark-700 text-light-50 relative">
                            <div className="flex items-center w-full h-8 p-1 text-xs gap-1 font-bold rounded-t-lg bg-dark-800 dark:bg-dark-700 text-light-50 transition-all whitespace-nowrap flex-shrink-0">
                                {user && <div className="flex items-center justify-center flex-shrink-0 rounded-md w-7 h-7 bg-dark-600">
                                    <svg className="w-6 h-6 fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" strokeLinecap="square" />
                                    </svg>
                                </div>}
                                <div className="relative flex-shrink-0" style={{ width: '24px', height: '24px' }}>
                                    {imageLoaded || <img src="https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/regions-leagues-flags/default-circular.svg" width="24" height="24" alt="" data-nuxt-img="" className="absolute opacity-100"/>}
                                    <img onLoad={()=>setImageLoaded(true)} src={`https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/regions-leagues-flags/${league.regionId}-circular.svg`} width={24} height={24} alt="England" data-nuxt-img className={imageLoaded ? "opacity-100" : "opacity-0"} />
                                </div>
                                <span className="overflow-hidden text-ellipsis">{league.league}, {league.region}</span>
                                <div className="pr-7">
                                    <div className="flex items-center justify-center flex-shrink-0 rounded-md w-7 h-7 bg-dark-600">
                                        <svg className="w-6 h-6 fill-light-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z" strokeLinecap="square" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -translate-y-1/2 right-2 top-1/2">
                                <svg className="z-10 w-6 h-6 fill-light-50 transition-all" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" strokeLinecap="square" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[300ms] grid-rows-[1fr]">
                    <div className="min-h-[0] transition-[visibility] duration-[300ms] visible">
                        {league.fixtures.map((match, index) => (
                            <HighlightMatch key={match.eventId} match={match}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const HighlightMatch = ({match}) => {
    return (
        <div id={match.eventId}>
            <div data-v-642ff186 className="relative grid grid-cols-11 p-1 text-xs leading-4 bg-light-50 dark:bg-dark-800 base-text border border-[transparent] border-t-light-300 dark:border-t-dark-700 px-1">
                <a data-v-642ff186 href="/event/soccer/england/premier-league/ipswich-town-leicester-city?eventId=14698018&fixtureType=highlights" className="flex flex-col items-center col-span-5 gap-1 md:items-center md:flex-row base-text" rel="ugc noindex nofollow">
                    <div className="flex flex-row w-full gap-1 pr-2 md:w-40 md:pr-0">
                        <div className="flex flex-col justify-between overflow-hidden whitespace-nowrap leading-[18px] md:leading-[16px]">
                            <strong className="overflow-hidden text-ellipsis">{match.homeTeam}</strong>
                            <strong className="overflow-hidden text-ellipsis">{match.awayTeam}</strong>
                        </div>
                        {(match.gameStateTimeScore && match.gameStateTimeScore?.state != '[{lang["awaiting-start"]}]') && <div className="flex justify-end flex-1 gap-[2px] items-center text-dark-300 dark:text-light-600">
                            <strong className="text-identity text-right">{match.gameStateTimeScore.score[0]}<br /> {match.gameStateTimeScore.score[1]}</strong>
                        </div>}
                    </div>
                    <div className="w-[1px] bg-light-300 dark:bg-dark-500 h-6 hidden md:flex" />
                </a>
                <div className="relative flex flex-row flex-1 col-span-11 mt-1 overflow-hidden md:pr-2 md:col-span-5 md:flex-col text-dark-300 dark:text-light-600 whitespace-nowrap leading-6 md:leading-[16px] hidden md:flex">
                    <a data-v-642ff186 href="/event/soccer/england/premier-league/ipswich-town-leicester-city?eventId=14698018&fixtureType=highlights" className="flex flex-col items-center col-span-5 gap-1 md:items-center md:flex-row base-text" rel="ugc noindex nofollow" />
                    <a href="/event/soccer/england/premier-league/ipswich-town-leicester-city?eventId=14698018&fixtureType=highlights" className="text-[currentColor] hover:text-[currentColor]" rel="ugc noindex nofollow">
                        <div className="flex items-center">
                            <div className="flex items-center flex-grow-0 h-4 px-1 mr-1 text-xs font-bold rounded-md bg-identity-50 dark:bg-identity-900 text-dark-800 dark:text-light-50">
                                <span className="mr-1 w-[10px] h-[10px] bg-identity-600 rounded-full relative">
                                    <span className="absolute w-full h-full duration-1000 rounded-full bg-identity-600 animate-ping" />
                                </span> Live </div> <span>Match Underway</span>
                        </div>
                        <div className="hidden overflow-hidden text-ellipsis md:block">
                            <span className="inline-block md:hidden">&nbsp;|&nbsp;</span>Premier League, England</div>
                    </a>
                    <div className="top-0 flex items-center justify-end flex-1 gap-1 pl-2 md:pl-0 md:absolute right-1">
                        <svg className="w-4 h-4 fill-primary-300" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5441 8.00122C8.54434 8.42289 8.69061 8.83143 8.95801 9.15724C9.2254 9.48305 9.59737 9.70597 10.0105 9.78802C10.4237 9.87007 10.8525 9.80617 11.2239 9.60721C11.5952 9.40825 11.8862 9.08654 12.0472 8.69689C12.2082 8.30724 12.2293 7.87376 12.1068 7.4703C11.9844 7.06684 11.726 6.71837 11.3757 6.48426C11.0253 6.25014 10.6047 6.14487 10.1856 6.18638C9.76641 6.22788 9.37458 6.4136 9.07686 6.71189C8.73572 7.05408 8.54412 7.51777 8.5441 8.00122ZM9.95591 0.934552C9.70209 0.6405 9.388 0.404613 9.03499 0.24293C8.68198 0.0812467 8.29833 -0.00244141 7.91012 -0.00244141C7.52192 -0.00244141 7.13827 0.0812467 6.78526 0.24293C6.43224 0.404613 6.11815 0.6405 5.86434 0.934552L1.10017 5.73455C0.757649 6.00323 0.48067 6.34638 0.290193 6.73804C0.0997165 7.1297 0.000732422 7.55961 0.000732422 7.99522C0.000732422 8.43083 0.0997165 8.86074 0.290193 9.2524C0.48067 9.64406 0.757649 9.98721 1.10017 10.2559L5.86833 15.0559C6.12215 15.3499 6.43624 15.5858 6.78925 15.7475C7.14226 15.9092 7.52591 15.9929 7.91412 15.9929C8.30232 15.9929 8.68597 15.9092 9.03898 15.7475C9.392 15.5858 9.70609 15.3499 9.9599 15.0559L10.4927 14.6066L7.5878 13.9186H14.0049L11.6554 13.4692L14.9065 10.2519C15.2491 9.98321 15.526 9.64006 15.7165 9.2484C15.907 8.85674 16.006 8.42683 16.006 7.99122C16.006 7.55561 15.907 7.1257 15.7165 6.73404C15.526 6.34238 15.2491 5.99923 14.9065 5.73055L12.2574 3.09855L8.52812 2.20655H14.3365L10.5926 1.45722L9.95591 0.934552ZM6.90588 8.00122C6.90429 7.31524 7.10605 6.64421 7.4856 6.07307C7.86514 5.50192 8.40542 5.05635 9.03804 4.79274C9.67067 4.52913 10.3672 4.45933 11.0395 4.59219C11.7117 4.72505 12.3295 5.05458 12.8146 5.53908C13.2997 6.02359 13.6303 6.64127 13.7646 7.31396C13.8988 7.98664 13.8307 8.68408 13.5689 9.318C13.307 9.95192 12.8632 10.4938 12.2935 10.8751C11.7239 11.2564 11.054 11.4599 10.3688 11.4599C9.45152 11.4602 8.57158 11.0963 7.9221 10.4478C7.27262 9.79939 6.90799 8.91948 6.90588 8.00122ZM2.16435 8.00122C2.16554 7.38868 2.32885 6.78739 2.63763 6.25857C2.94641 5.72974 3.38965 5.29227 3.92222 4.99067C4.45479 4.68907 5.05768 4.53412 5.66951 4.5416C6.28134 4.54907 6.88027 4.7187 7.40533 5.03322C7.01302 5.42164 6.70196 5.88443 6.49033 6.39455C6.21312 6.24638 5.9023 6.17262 5.58815 6.18045C5.274 6.18828 4.96723 6.27743 4.69772 6.43922C4.42822 6.60102 4.20518 6.82993 4.05032 7.10367C3.89546 7.3774 3.81406 7.68663 3.81406 8.00122C3.81406 8.31581 3.89546 8.62503 4.05032 8.89877C4.20518 9.17251 4.42822 9.40142 4.69772 9.56321C4.96723 9.72501 5.274 9.81416 5.58815 9.82199C5.9023 9.82982 6.21312 9.75605 6.49033 9.60789C6.70139 10.1183 7.01252 10.5812 7.40533 10.9692C6.88027 11.2837 6.28134 11.4534 5.66951 11.4608C5.05768 11.4683 4.45479 11.3134 3.92222 11.0118C3.38965 10.7102 2.94641 10.2727 2.63763 9.74387C2.32885 9.21505 2.16554 8.61376 2.16435 8.00122Z" strokeLinecap="square" />
                        </svg>
                        <svg className="w-4 h-4 fill-primary-300" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00044 3.81889e-08C6.41808 -0.000154535 4.87121 0.468929 3.55545 1.34793C2.23969 2.22693 1.21414 3.47637 0.608489 4.93823C0.00283851 6.4001 -0.155707 8.00874 0.152901 9.56071C0.46151 11.1127 1.22341 12.5383 2.34226 13.6572C3.4611 14.7762 4.88663 15.5382 6.43858 15.847C7.99052 16.1558 9.59917 15.9974 11.0611 15.3919C12.523 14.7864 13.7726 13.7609 14.6517 12.4453C15.5308 11.1296 16.0001 9.58275 16.0001 8.00039C16.0001 5.87869 15.1573 3.84388 13.6571 2.34354C12.1569 0.843195 10.1221 0.000207296 8.00044 3.81889e-08ZM5.72388 10.1597C5.72388 10.3882 5.63311 10.6074 5.47152 10.769C5.30994 10.9306 5.09078 11.0213 4.86226 11.0213C4.63375 11.0213 4.41459 10.9306 4.253 10.769C4.09142 10.6074 4.00064 10.3882 4.00064 10.1597V8.21843C4.00064 7.98992 4.09142 7.77076 4.253 7.60918C4.41459 7.44759 4.63375 7.35681 4.86226 7.35681C5.09078 7.35681 5.30994 7.44759 5.47152 7.60918C5.63311 7.77076 5.72388 7.98992 5.72388 8.21843V10.1597ZM8.73976 10.1597C8.73976 10.3882 8.64898 10.6074 8.4874 10.769C8.32581 10.9306 8.10665 11.0213 7.87814 11.0213C7.64962 11.0213 7.43046 10.9306 7.26888 10.769C7.10729 10.6074 7.01651 10.3882 7.01651 10.1597V4.98686C7.01651 4.75834 7.10729 4.53919 7.26888 4.3776C7.43046 4.21602 7.64962 4.12524 7.87814 4.12524C8.10665 4.12524 8.32581 4.21602 8.4874 4.3776C8.64898 4.53919 8.73976 4.75834 8.73976 4.98686V10.1597ZM11.7556 10.1597C11.7556 10.3882 11.6649 10.6074 11.5033 10.769C11.3417 10.9306 11.1225 11.0213 10.894 11.0213C10.6655 11.0213 10.4463 10.9306 10.2848 10.769C10.1232 10.6074 10.0324 10.3882 10.0324 10.1597V6.92581C10.0324 6.69729 10.1232 6.47813 10.2848 6.31655C10.4463 6.15496 10.6655 6.06418 10.894 6.06418C11.1225 6.06418 11.3417 6.15496 11.5033 6.31655C11.6649 6.47813 11.7556 6.69729 11.7556 6.92581V10.1597Z" strokeLinecap="square" />
                        </svg>
                    </div>
                </div>
                <div data-v-642ff186 className="col-span-6 grid grid-cols-1 gap-3 items-center">
                    <div data-v-642ff186>
                        {match.outcomes?.length ?
                            <div data-v-642ff186 className="relative flex w-full gap-1 md:items-center event-market-0">
                                {match.outcomes.map((outcome, index)=>
                                    <Outcome key={index} outcome={outcome}/>    
                                )}
                            </div>
                            :
                            <div data-v-642ff186 className="relative grid grid-cols-3 gap-1 event-market-0">{/**/}<div className="flex flex-1 h-10 md:h-8  items-center justify-center rounded-md border border-light-500 dark:border-dark-400 cursor-pointer w-full col-span-3">
                                <a href="/event/soccer/concacaf-international-competitions/concacaf-nations-league/cayman-islands-guadeloupe?eventId=14782197&fixtureType=highlights" className="flex items-center justify-center w-full h-full base-text" rel="ugc noindex nofollow">More Bets...</a>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div data-v-642ff186 className="flex col-span-11 leading-4 md:hidden md:leading-normal">
                    <div data-v-642ff186 className="relative flex flex-row flex-1 col-span-11 mt-1 overflow-hidden md:pr-2 md:col-span-5 md:flex-col text-dark-300 dark:text-light-600 whitespace-nowrap leading-6 md:leading-[16px]">
                        {(match.gameStateTimeScore && match.gameStateTimeScore?.state != '[Awaiting Start]') ? 
                            <a href="/event/soccer/england/premier-league/ipswich-town-leicester-city?eventId=14698018&fixtureType=highlights" className="text-[currentColor] hover:text-[currentColor]" rel="ugc noindex nofollow">
                                <div className="flex items-center">
                                    <div className="flex items-center flex-grow-0 h-4 px-1 mr-1 text-xs font-bold rounded-md bg-identity-50 dark:bg-identity-900 text-dark-800 dark:text-light-50">
                                        <span className="mr-1 w-[10px] h-[10px] bg-identity-600 rounded-full relative">
                                            <span className="absolute w-full h-full duration-1000 rounded-full bg-identity-600 animate-ping" />
                                        </span> Live </div> <span>{match.gameStateTimeScore.gameEventPeriod == 'first-half' ? '1st Half' : '2nd Half'} | {match.gameStateTimeScore.time}:00</span>
                                </div>
                                <div className="hidden overflow-hidden text-ellipsis md:block">
                                    <span className="inline-block md:hidden">&nbsp;|&nbsp;</span>Premier League, England</div>
                            </a>
                            :
                            <a href="/event/soccer/germany/bundesliga/union-berlin-sc-freiburg?eventId=14723832&fixtureType=highlights" className="text-[currentColor] hover:text-[currentColor]" rel="ugc noindex nofollow">
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4 fill-dark-300 dark:fill-light-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" strokeLinecap="square" />
                                    </svg>
                                    <span>
                                        <span>{formatDate(match.expectedStartEpoch, true)}</span>
                                    </span>
                                </div>
                                <div className="hidden overflow-hidden text-ellipsis md:block">
                                    <span className="inline-block md:hidden">&nbsp;|&nbsp;</span>Bundesliga, Germany</div>
                            </a>
                        }
                        <div className="top-0 flex items-center justify-end flex-1 gap-1 pl-2 md:pl-0 md:absolute right-1">
                            <svg className="w-4 h-4 fill-primary-300" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5441 8.00122C8.54434 8.42289 8.69061 8.83143 8.95801 9.15724C9.2254 9.48305 9.59737 9.70597 10.0105 9.78802C10.4237 9.87007 10.8525 9.80617 11.2239 9.60721C11.5952 9.40825 11.8862 9.08654 12.0472 8.69689C12.2082 8.30724 12.2293 7.87376 12.1068 7.4703C11.9844 7.06684 11.726 6.71837 11.3757 6.48426C11.0253 6.25014 10.6047 6.14487 10.1856 6.18638C9.76641 6.22788 9.37458 6.4136 9.07686 6.71189C8.73572 7.05408 8.54412 7.51777 8.5441 8.00122ZM9.95591 0.934552C9.70209 0.6405 9.388 0.404613 9.03499 0.24293C8.68198 0.0812467 8.29833 -0.00244141 7.91012 -0.00244141C7.52192 -0.00244141 7.13827 0.0812467 6.78526 0.24293C6.43224 0.404613 6.11815 0.6405 5.86434 0.934552L1.10017 5.73455C0.757649 6.00323 0.48067 6.34638 0.290193 6.73804C0.0997165 7.1297 0.000732422 7.55961 0.000732422 7.99522C0.000732422 8.43083 0.0997165 8.86074 0.290193 9.2524C0.48067 9.64406 0.757649 9.98721 1.10017 10.2559L5.86833 15.0559C6.12215 15.3499 6.43624 15.5858 6.78925 15.7475C7.14226 15.9092 7.52591 15.9929 7.91412 15.9929C8.30232 15.9929 8.68597 15.9092 9.03898 15.7475C9.392 15.5858 9.70609 15.3499 9.9599 15.0559L10.4927 14.6066L7.5878 13.9186H14.0049L11.6554 13.4692L14.9065 10.2519C15.2491 9.98321 15.526 9.64006 15.7165 9.2484C15.907 8.85674 16.006 8.42683 16.006 7.99122C16.006 7.55561 15.907 7.1257 15.7165 6.73404C15.526 6.34238 15.2491 5.99923 14.9065 5.73055L12.2574 3.09855L8.52812 2.20655H14.3365L10.5926 1.45722L9.95591 0.934552ZM6.90588 8.00122C6.90429 7.31524 7.10605 6.64421 7.4856 6.07307C7.86514 5.50192 8.40542 5.05635 9.03804 4.79274C9.67067 4.52913 10.3672 4.45933 11.0395 4.59219C11.7117 4.72505 12.3295 5.05458 12.8146 5.53908C13.2997 6.02359 13.6303 6.64127 13.7646 7.31396C13.8988 7.98664 13.8307 8.68408 13.5689 9.318C13.307 9.95192 12.8632 10.4938 12.2935 10.8751C11.7239 11.2564 11.054 11.4599 10.3688 11.4599C9.45152 11.4602 8.57158 11.0963 7.9221 10.4478C7.27262 9.79939 6.90799 8.91948 6.90588 8.00122ZM2.16435 8.00122C2.16554 7.38868 2.32885 6.78739 2.63763 6.25857C2.94641 5.72974 3.38965 5.29227 3.92222 4.99067C4.45479 4.68907 5.05768 4.53412 5.66951 4.5416C6.28134 4.54907 6.88027 4.7187 7.40533 5.03322C7.01302 5.42164 6.70196 5.88443 6.49033 6.39455C6.21312 6.24638 5.9023 6.17262 5.58815 6.18045C5.274 6.18828 4.96723 6.27743 4.69772 6.43922C4.42822 6.60102 4.20518 6.82993 4.05032 7.10367C3.89546 7.3774 3.81406 7.68663 3.81406 8.00122C3.81406 8.31581 3.89546 8.62503 4.05032 8.89877C4.20518 9.17251 4.42822 9.40142 4.69772 9.56321C4.96723 9.72501 5.274 9.81416 5.58815 9.82199C5.9023 9.82982 6.21312 9.75605 6.49033 9.60789C6.70139 10.1183 7.01252 10.5812 7.40533 10.9692C6.88027 11.2837 6.28134 11.4534 5.66951 11.4608C5.05768 11.4683 4.45479 11.3134 3.92222 11.0118C3.38965 10.7102 2.94641 10.2727 2.63763 9.74387C2.32885 9.21505 2.16554 8.61376 2.16435 8.00122Z" strokeLinecap="square" />
                            </svg>
                            <svg className="w-4 h-4 fill-primary-300" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00044 3.81889e-08C6.41808 -0.000154535 4.87121 0.468929 3.55545 1.34793C2.23969 2.22693 1.21414 3.47637 0.608489 4.93823C0.00283851 6.4001 -0.155707 8.00874 0.152901 9.56071C0.46151 11.1127 1.22341 12.5383 2.34226 13.6572C3.4611 14.7762 4.88663 15.5382 6.43858 15.847C7.99052 16.1558 9.59917 15.9974 11.0611 15.3919C12.523 14.7864 13.7726 13.7609 14.6517 12.4453C15.5308 11.1296 16.0001 9.58275 16.0001 8.00039C16.0001 5.87869 15.1573 3.84388 13.6571 2.34354C12.1569 0.843195 10.1221 0.000207296 8.00044 3.81889e-08ZM5.72388 10.1597C5.72388 10.3882 5.63311 10.6074 5.47152 10.769C5.30994 10.9306 5.09078 11.0213 4.86226 11.0213C4.63375 11.0213 4.41459 10.9306 4.253 10.769C4.09142 10.6074 4.00064 10.3882 4.00064 10.1597V8.21843C4.00064 7.98992 4.09142 7.77076 4.253 7.60918C4.41459 7.44759 4.63375 7.35681 4.86226 7.35681C5.09078 7.35681 5.30994 7.44759 5.47152 7.60918C5.63311 7.77076 5.72388 7.98992 5.72388 8.21843V10.1597ZM8.73976 10.1597C8.73976 10.3882 8.64898 10.6074 8.4874 10.769C8.32581 10.9306 8.10665 11.0213 7.87814 11.0213C7.64962 11.0213 7.43046 10.9306 7.26888 10.769C7.10729 10.6074 7.01651 10.3882 7.01651 10.1597V4.98686C7.01651 4.75834 7.10729 4.53919 7.26888 4.3776C7.43046 4.21602 7.64962 4.12524 7.87814 4.12524C8.10665 4.12524 8.32581 4.21602 8.4874 4.3776C8.64898 4.53919 8.73976 4.75834 8.73976 4.98686V10.1597ZM11.7556 10.1597C11.7556 10.3882 11.6649 10.6074 11.5033 10.769C11.3417 10.9306 11.1225 11.0213 10.894 11.0213C10.6655 11.0213 10.4463 10.9306 10.2848 10.769C10.1232 10.6074 10.0324 10.3882 10.0324 10.1597V6.92581C10.0324 6.69729 10.1232 6.47813 10.2848 6.31655C10.4463 6.15496 10.6655 6.06418 10.894 6.06418C11.1225 6.06418 11.3417 6.15496 11.5033 6.31655C11.6649 6.47813 11.7556 6.69729 11.7556 6.92581V10.1597Z" strokeLinecap="square" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Outcome = ({outcome}) => {
    return (
        <div className="md:h-8 h-10 flex flex-1 relative items-center justify-center rounded-md border border-light-500 dark:border-dark-400 font-bold cursor-pointer overflow-hidden text-ellipsis  select-none bg-light-50 dark:bg-dark-800" price="[object Object]">
            {outcome.isBoosted && <svg className="w-4 h-4 fill-warning-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 15H6L13 1V9H18L11 23V15Z" strokeLinecap="square" />
            </svg>}
            <span >{outcome.odds.toFixed(2)}</span>
        </div>
    );
}

export const HighlightsTemplate = () => {

    return (
        <div className="overflow-hidden rounded-lg">
        <div className="items-center  w-full h-8 gap-1 p-1 text-xs font-bold transition-all rounded-t-lg bg-dark-800 dark:bg-dark-700 text-light-50 flex">
            <div className="rounded animate-pulse bg-dark-300 rounded-md w-7 h-7 bg-dark-200">
            <span className="opacity-0" />
            </div>
            <div className="rounded animate-pulse bg-dark-300 w-6 h-6 rounded-full bg-dark-200">
            <span className="opacity-0" />
            </div>
            <div className="rounded animate-pulse bg-dark-300 w-[100px] h-4 bg-dark-200">
            <span className="opacity-0" />
            </div>
        </div>
        <div className="grid grid-cols-11 p-1 min-h-[44px] text-xs leading-4 bg-light-50 dark:bg-dark-800 min-h-[46px]">
            <div className="flex flex-col items-start col-span-5 gap-1 md:items-center md:flex-row">
            <div className="flex flex-col w-full gap-1 pr-2 md:w-40 md:pr-0 whitespace-nowrap">
                <div className="rounded animate-pulse bg-dark-300 w-[130px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 w-[70px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            <div className="flex-col hidden w-full gap-1 md:flex">
                <div className="rounded animate-pulse bg-dark-300 w-[70px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 w-[130px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            </div>
            <div className="grid items-center grid-cols-1 col-span-6 gap-3 md:grid-cols-2">
            <div className="relative flex gap-1">
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            <div className="relative hidden gap-1 md:flex">
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            </div>
            <div className="flex items-center col-span-11 h-6 md:h-[14px] gap-1 mt-[6px] md:hidden">
            <div className="rounded animate-pulse bg-dark-300 w-[250px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
            </div>
            </div>
        </div>
        <div className="grid grid-cols-11 p-1 min-h-[44px] text-xs leading-4 bg-light-50 dark:bg-dark-800 border-t border-t-light-300 dark:border-t-dark-700 min-h-[46px]">
            <div className="flex flex-col items-start col-span-5 gap-1 md:items-center md:flex-row">
            <div className="flex flex-col w-full gap-1 pr-2 md:w-40 md:pr-0 whitespace-nowrap">
                <div className="rounded animate-pulse bg-dark-300 w-[130px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 w-[70px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            <div className="flex-col hidden w-full gap-1 md:flex">
                <div className="rounded animate-pulse bg-dark-300 w-[70px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 w-[130px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            </div>
            <div className="grid items-center grid-cols-1 col-span-6 gap-3 md:grid-cols-2">
            <div className="relative flex gap-1">
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            <div className="relative hidden gap-1 md:flex">
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            </div>
            <div className="flex items-center col-span-11 h-6 md:h-[14px] gap-1 mt-[6px] md:hidden">
            <div className="rounded animate-pulse bg-dark-300 w-[250px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
            </div>
            </div>
        </div>
        <div className="grid grid-cols-11 p-1 min-h-[44px] text-xs leading-4 bg-light-50 dark:bg-dark-800 border-t border-t-light-300 dark:border-t-dark-700 min-h-[46px]">
            <div className="flex flex-col items-start col-span-5 gap-1 md:items-center md:flex-row">
            <div className="flex flex-col w-full gap-1 pr-2 md:w-40 md:pr-0 whitespace-nowrap">
                <div className="rounded animate-pulse bg-dark-300 w-[130px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 w-[70px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            <div className="flex-col hidden w-full gap-1 md:flex">
                <div className="rounded animate-pulse bg-dark-300 w-[70px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 w-[130px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            </div>
            <div className="grid items-center grid-cols-1 col-span-6 gap-3 md:grid-cols-2">
            <div className="relative flex gap-1">
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            <div className="relative hidden gap-1 md:flex">
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            </div>
            <div className="flex items-center col-span-11 h-6 md:h-[14px] gap-1 mt-[6px] md:hidden">
            <div className="rounded animate-pulse bg-dark-300 w-[250px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
            </div>
            </div>
        </div>
        <div className="grid grid-cols-11 p-1 min-h-[44px] text-xs leading-4 bg-light-50 dark:bg-dark-800 border-t border-t-light-300 dark:border-t-dark-700 min-h-[46px]">
            <div className="flex flex-col items-start col-span-5 gap-1 md:items-center md:flex-row">
            <div className="flex flex-col w-full gap-1 pr-2 md:w-40 md:pr-0 whitespace-nowrap">
                <div className="rounded animate-pulse bg-dark-300 w-[130px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 w-[70px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            <div className="flex-col hidden w-full gap-1 md:flex">
                <div className="rounded animate-pulse bg-dark-300 w-[70px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 w-[130px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            </div>
            <div className="grid items-center grid-cols-1 col-span-6 gap-3 md:grid-cols-2">
            <div className="relative flex gap-1">
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            <div className="relative hidden gap-1 md:flex">
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            </div>
            <div className="flex items-center col-span-11 h-6 md:h-[14px] gap-1 mt-[6px] md:hidden">
            <div className="rounded animate-pulse bg-dark-300 w-[250px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
            </div>
            </div>
        </div>
        <div className="grid grid-cols-11 p-1 min-h-[44px] text-xs leading-4 bg-light-50 dark:bg-dark-800 border-t border-t-light-300 dark:border-t-dark-700 min-h-[46px]">
            <div className="flex flex-col items-start col-span-5 gap-1 md:items-center md:flex-row">
            <div className="flex flex-col w-full gap-1 pr-2 md:w-40 md:pr-0 whitespace-nowrap">
                <div className="rounded animate-pulse bg-dark-300 w-[130px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 w-[70px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            <div className="flex-col hidden w-full gap-1 md:flex">
                <div className="rounded animate-pulse bg-dark-300 w-[70px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 w-[130px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            </div>
            <div className="grid items-center grid-cols-1 col-span-6 gap-3 md:grid-cols-2">
            <div className="relative flex gap-1">
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            <div className="relative hidden gap-1 md:flex">
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
                <div className="rounded animate-pulse bg-dark-300 flex flex-1 h-10 rounded-md md:h-8 bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
                </div>
            </div>
            </div>
            <div className="flex items-center col-span-11 h-6 md:h-[14px] gap-1 mt-[6px] md:hidden">
            <div className="rounded animate-pulse bg-dark-300 w-[250px] h-[14px] rounded-full bg-light-400 dark:bg-dark-400">
                <span className="opacity-0" />
            </div>
            </div>
        </div>
        </div>

    );
}

export default Highlights;