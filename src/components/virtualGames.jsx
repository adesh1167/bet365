import { useEffect, useState } from "react";
import { useApp } from "../contexts/appContext";

const VirtualGames = ({loadStage}) => {

    const {country, sportTypes, lang} = useApp();
    const [virtualGames, setVirtualGames] = useState(null);

    useEffect   (()=>{
        setVirtualGames(null);
        fetch(country.virtualGameLink, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setVirtualGames(data);
        })
        .catch(err => {
            console.log(err);
        })
    },[country])

    return(
        loadStage > 120 && virtualGames ?
            <div className="scroller-casino flex flex-shrink-0 w-full gap-1 overflow-x-scroll overflow-y-hidden lg:overflow-y-scroll lg:overflow-x-hidden scrollbar-hidden cursor-grab">
                {virtualGames?.data?.map((game, index) => {
                    return(
                        <VirtualGame key={index} data={game}/>
                    )
                })}
            </div>
            :
            <div className="scroller-casino flex flex-shrink-0 w-full gap-1 overflow-x-scroll overflow-y-hidden lg:overflow-y-scroll lg:overflow-x-hidden scrollbar-hidden cursor-grab">
                <DummyVirtualGame/>
                <DummyVirtualGame/>
                <DummyVirtualGame/>
                <DummyVirtualGame/>
                <DummyVirtualGame/>
                <DummyVirtualGame/>
                <DummyVirtualGame/>
                <DummyVirtualGame/>
                <DummyVirtualGame/>
            </div>

    )
}

export default VirtualGames;

const VirtualGame = ({data}) => {

    return(
        <div className="overflow-hidden text rounded text-light-50 select-none flex flex-col flex-shrink-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] aspect-[1/1]">
            <div className="relative rounded-tl rounded-tr select-none">


                <div className="absolute top-0 left-0 z-10 items-center justify-center w-full h-full bg-dark-800/90 transition-all duration-300 opacity-0 hidden  md:flex">
                    <a href="/lobby/casino/game/aviator" className="w-4/6">
                        <button className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 bg-identity hover:bg-identity-hover text-light-50 py-1 relative w-full" type="button" aria-label="Play">
                            <div className="flex justify-center items-center text-center w-full">
                                <span >Play</span>
                            </div>
                        </button>
                    </a>
                </div>
                <div className="relative w-full aspect-square">
                    <div className="relative bg-dark-800 w-full pb-[100%] select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" version="1.2" viewBox="0 0 799.2 224.2" className="max-w-[60%] max-h-[30%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
                            <defs />
                            <path className="fill-light-50" d="M0 0h45.4v46.6a77 77 0 0125.7-3.3c17-.2 34.1 7.8 44.1 21.6a71.8 71.8 0 0112.4 44.1 69.5 69.5 0 01-12.8 41.4A57.5 57.5 0 0193 167.7a81.5 81.5 0 01-21 6.1c-4.5 1-9.2.4-13.8 1.3H53c-5.6-1-11.3-.1-16.8-1.3-8.9-.9-17.6-3.3-26.1-5.8l-3.1-.9c-2.3-.9-4.9-1.2-6.9-2.8C-.1 109.7 0 54.8 0 0m45.5 79.3c0 20.4-.2 40.8.1 61.1l4.5.7c4 .9 8.1.6 12.2.4a25 25 0 0012.5-6.7A30.6 30.6 0 0083 114a32 32 0 000-10.7c-.2-3.2-.8-6.3-1.6-9.3a24.2 24.2 0 00-14.8-15.6 31.8 31.8 0 00-21.1.9zM275.7 14.5h45.6v31.8c6.4-.1 12.7-.2 19.1 0l4.9 13.7c1.8 6 4.5 11.7 6 17.8h-30v53.4c.2 3.8.6 8.7 4.6 10.4 7.2 1.5 13.9-2.2 19.4-6.4l1 1.9 5.6 13.1c1.6 4.3 4 8.4 5.1 12.9-3.6 2.1-7.1 4.3-10.9 5.9a79.6 79.6 0 01-40.1 5.4c-8-1.3-16.1-4.4-21.6-10.7-6.5-7.1-8-17.2-8.6-26.5l-.1-59.4h-18V46.4c6-.6 12 .1 18-.3V14.5zM338.2 14.5h43.9l2.9 8.8c2.3 7.6 5 15.1 7.4 22.7l6.9 21c4.8 15.2 10 30.2 14.8 45.4 4.5-13.6 8-27.4 12.2-41.1 2-8.3 5.3-16.3 6.8-24.8 4.9-.9 10-.1 15-.4 5.1-.2 10.2.1 15.2.1a170 170 0 002 6.7 3311.9 3311.9 0 0114.7 51.2l1 3.1 1.4 5.5A199.8 199.8 0 00487 97l6.4-22.7 7-25 .5-2.8c9.5-.5 18.9 0 28.4-.3 6.2.5 12.5-.7 18.7.5-2.8 6-4.6 12.3-6.9 18.4-6.9 19.7-14 39.4-21 59-2.3 6.6-4.8 13.2-7 19.9-3.5 9.5-6.6 19.1-10.2 28.5l-34.7-.1c-6.5-22-13.3-44-19.9-66-2.4 9.3-5.4 18.4-8.1 27.6-3.8 12.8-7.5 25.7-11.5 38.4h-34.5l-17-48-3.6-10.3-1.4-3.8-1-2.9-5-14-1-2.9c-1.9-5.7-4.1-11.3-6.1-17.1-2-6.2-4.5-12.2-6.4-18.4l-1.4-3.7-11.8-33.2c-.6-1.2-1-2.4-1.3-3.6zM570.1 49a83.2 83.2 0 0132-5.7c9.3-.1 18.5 1.3 27.2 4.6A40 40 0 01655 77.3c2.2 9.5 1.5 19.2 1.6 28.9v66.3h-38a82 82 0 01-3.5-9.4c-3.2 1.8-6.1 4.2-9.5 5.8a55.2 55.2 0 01-30.5 5.3c-12-.8-24-7-30.4-17.4a42 42 0 01-3.9-32.7c3.3-9.6 11-17.2 20-21.7 7.8-4 16.5-6.1 25.1-7.3 8.6-.9 17.2-2 25.8-2.3-.1-3.6.3-7.4-1.6-10.6-2.1-4.2-6.8-5.9-11-7.2-2.8-.1-5.6-.2-8.3 0l-5 1a56 56 0 00-16.4 8.6c-1.4 1.3-2.4-.7-3.3-1.6-5.8-7-12.5-13.3-17.9-20.6 6.9-5.4 14-10.1 21.9-13.4m19.9 69.9c-6.3 2.6-9.4 9.9-8.3 16.4 1.5 3.4 3.9 6.6 7.5 7.9 5.9 2.1 12.5 1 18.1-1.6l2-1.1c.7-.8 2.5-1.1 2.5-2.4.2-7.6 0-15.1.1-22.7-7.4.3-15 .8-21.9 3.5zM170.9 47.9a74.3 74.3 0 0154.3 1A53.3 53.3 0 01252 77.2a92.3 92.3 0 015.1 17c.4 2 .6 4.1.8 6.1 1 5.8.8 11.7 1 17.5h-81.7l.6 6.3 1 3a23 23 0 0020.2 14.3c3.3.2 6.7.2 10-.5l3.3-.7a36.2 36.2 0 0014.5-10.2l.7-1.7 1.6 1.6c8.9 6.9 17.8 13.8 26.5 20.9a65 65 0 01-21.6 17 91.8 91.8 0 01-46.1 6.5c-7.2-1-14.3-2.9-21-5.9a57.6 57.6 0 01-29.7-32.4 82.2 82.2 0 01-.4-52.1c5.4-16.2 18-30 34.1-36m19 25.9a24.2 24.2 0 00-12.5 19.9h39.3c-.9-6.8-3.2-13.9-8.9-18.1-5-4.2-12.2-4.1-17.9-1.8z" />
                            <path className="fill-light-50" d="M652.3 46c11.9.3 23.9-.2 35.8.2 4.7.2 9.4-.7 14 .4a36 36 0 001.2 4.4l4.7 13.3 8 23c3.9 10.7 7.4 21.6 11.3 32.3l.7-2.5c4.9-13.9 9.6-27.8 14.4-41.8l6.9-20 3-9c15.6-.4 31.3 0 46.9-.3l-3.8 9.2c-4.6 10.5-8.9 21.2-13.5 31.7L776 101l-7.7 18.1-11.4 26.9-2.5 6.1-5.5 12.8L743 179l-8.6 20.1a41.8 41.8 0 01-18.8 19.7 68.5 68.5 0 01-46.6 2.4c-4.2-1.4-8.5-2.8-12.5-4.8 1.5-3.8 3-7.7 4.3-11.5l6-16 1-2.8c7.4 3.2 15.6 6.7 23.7 4.1 4.3-1.5 6.3-5.8 8-9.6 1.9-4.6 4.1-9 6-13.6-.6-3.2-2.5-5.9-3.7-8.9l-7.1-15.9c-1.8-4.4-3.9-8.7-5.8-13.1l-6.7-15.2c-2.5-5.6-4.9-11.2-7.5-16.7-2.4-5.8-5.2-11.4-7.6-17.2l-5.3-11.9-7.6-17.1-1.9-5z" />
                        </svg>
                        <img src={`https://cms1.betwayafrica.com${data.image?.squareTile}`} alt="Aviator" data-nuxt-img className="absolute top-0 left-0 w-full h-full" draggable="false" />
                    </div>
                </div>
            </div>
        </div>
    )

}

const DummyVirtualGame = () => {
     return(
        <div className="overflow-hidden text rounded text-light-50 select-none flex flex-col flex-shrink-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] aspect-[1/1]">
            <div className="relative rounded-tl rounded-tr select-none">
            
            
            
            <div className="absolute top-0 left-0 z-10 items-center justify-center w-full h-full bg-dark-800/90 transition-all duration-300 opacity-0 hidden  md:flex">
                <a href="/lobby/casino/game/aviator" className="w-4/6">
                <button
                    className="p-button p-component rounded transition-all disabled:bg-light-400 disabled:text-dark-100 dark:disabled:text-dark-100 font-bold text-sm outline-none whitespace-nowrap dark:disabled:bg-dark-700 bg-identity hover:bg-identity-hover text-light-50 py-1 relative w-full"
                    type="button"
                    aria-label="Play"
                    id=""
                >
                    
                    <div className="flex justify-center items-center text-center w-full">
                    
                    <span className="">Play</span>
                    
                    </div>
                </button>
                </a>
            </div>
            
            <div className="relative w-full aspect-square">
                <div className="relative bg-dark-800 w-full pb-[100%] select-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    baseProfile="tiny"
                    version="1.2"
                    viewBox="0 0 799.2 224.2"
                    className="max-w-[60%] max-h-[30%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
                >
                    <defs />
                    <path
                    className="fill-light-50"
                    d="M0 0h45.4v46.6a77 77 0 0125.7-3.3c17-.2 34.1 7.8 44.1 21.6a71.8 71.8 0 0112.4 44.1 69.5 69.5 0 01-12.8 41.4A57.5 57.5 0 0193 167.7a81.5 81.5 0 01-21 6.1c-4.5 1-9.2.4-13.8 1.3H53c-5.6-1-11.3-.1-16.8-1.3-8.9-.9-17.6-3.3-26.1-5.8l-3.1-.9c-2.3-.9-4.9-1.2-6.9-2.8C-.1 109.7 0 54.8 0 0m45.5 79.3c0 20.4-.2 40.8.1 61.1l4.5.7c4 .9 8.1.6 12.2.4a25 25 0 0012.5-6.7A30.6 30.6 0 0083 114a32 32 0 000-10.7c-.2-3.2-.8-6.3-1.6-9.3a24.2 24.2 0 00-14.8-15.6 31.8 31.8 0 00-21.1.9zM275.7 14.5h45.6v31.8c6.4-.1 12.7-.2 19.1 0l4.9 13.7c1.8 6 4.5 11.7 6 17.8h-30v53.4c.2 3.8.6 8.7 4.6 10.4 7.2 1.5 13.9-2.2 19.4-6.4l1 1.9 5.6 13.1c1.6 4.3 4 8.4 5.1 12.9-3.6 2.1-7.1 4.3-10.9 5.9a79.6 79.6 0 01-40.1 5.4c-8-1.3-16.1-4.4-21.6-10.7-6.5-7.1-8-17.2-8.6-26.5l-.1-59.4h-18V46.4c6-.6 12 .1 18-.3V14.5zM338.2 14.5h43.9l2.9 8.8c2.3 7.6 5 15.1 7.4 22.7l6.9 21c4.8 15.2 10 30.2 14.8 45.4 4.5-13.6 8-27.4 12.2-41.1 2-8.3 5.3-16.3 6.8-24.8 4.9-.9 10-.1 15-.4 5.1-.2 10.2.1 15.2.1a170 170 0 002 6.7 3311.9 3311.9 0 0114.7 51.2l1 3.1 1.4 5.5A199.8 199.8 0 00487 97l6.4-22.7 7-25 .5-2.8c9.5-.5 18.9 0 28.4-.3 6.2.5 12.5-.7 18.7.5-2.8 6-4.6 12.3-6.9 18.4-6.9 19.7-14 39.4-21 59-2.3 6.6-4.8 13.2-7 19.9-3.5 9.5-6.6 19.1-10.2 28.5l-34.7-.1c-6.5-22-13.3-44-19.9-66-2.4 9.3-5.4 18.4-8.1 27.6-3.8 12.8-7.5 25.7-11.5 38.4h-34.5l-17-48-3.6-10.3-1.4-3.8-1-2.9-5-14-1-2.9c-1.9-5.7-4.1-11.3-6.1-17.1-2-6.2-4.5-12.2-6.4-18.4l-1.4-3.7-11.8-33.2c-.6-1.2-1-2.4-1.3-3.6zM570.1 49a83.2 83.2 0 0132-5.7c9.3-.1 18.5 1.3 27.2 4.6A40 40 0 01655 77.3c2.2 9.5 1.5 19.2 1.6 28.9v66.3h-38a82 82 0 01-3.5-9.4c-3.2 1.8-6.1 4.2-9.5 5.8a55.2 55.2 0 01-30.5 5.3c-12-.8-24-7-30.4-17.4a42 42 0 01-3.9-32.7c3.3-9.6 11-17.2 20-21.7 7.8-4 16.5-6.1 25.1-7.3 8.6-.9 17.2-2 25.8-2.3-.1-3.6.3-7.4-1.6-10.6-2.1-4.2-6.8-5.9-11-7.2-2.8-.1-5.6-.2-8.3 0l-5 1a56 56 0 00-16.4 8.6c-1.4 1.3-2.4-.7-3.3-1.6-5.8-7-12.5-13.3-17.9-20.6 6.9-5.4 14-10.1 21.9-13.4m19.9 69.9c-6.3 2.6-9.4 9.9-8.3 16.4 1.5 3.4 3.9 6.6 7.5 7.9 5.9 2.1 12.5 1 18.1-1.6l2-1.1c.7-.8 2.5-1.1 2.5-2.4.2-7.6 0-15.1.1-22.7-7.4.3-15 .8-21.9 3.5zM170.9 47.9a74.3 74.3 0 0154.3 1A53.3 53.3 0 01252 77.2a92.3 92.3 0 015.1 17c.4 2 .6 4.1.8 6.1 1 5.8.8 11.7 1 17.5h-81.7l.6 6.3 1 3a23 23 0 0020.2 14.3c3.3.2 6.7.2 10-.5l3.3-.7a36.2 36.2 0 0014.5-10.2l.7-1.7 1.6 1.6c8.9 6.9 17.8 13.8 26.5 20.9a65 65 0 01-21.6 17 91.8 91.8 0 01-46.1 6.5c-7.2-1-14.3-2.9-21-5.9a57.6 57.6 0 01-29.7-32.4 82.2 82.2 0 01-.4-52.1c5.4-16.2 18-30 34.1-36m19 25.9a24.2 24.2 0 00-12.5 19.9h39.3c-.9-6.8-3.2-13.9-8.9-18.1-5-4.2-12.2-4.1-17.9-1.8z"
                    />
                    <path
                    className="fill-light-50"
                    d="M652.3 46c11.9.3 23.9-.2 35.8.2 4.7.2 9.4-.7 14 .4a36 36 0 001.2 4.4l4.7 13.3 8 23c3.9 10.7 7.4 21.6 11.3 32.3l.7-2.5c4.9-13.9 9.6-27.8 14.4-41.8l6.9-20 3-9c15.6-.4 31.3 0 46.9-.3l-3.8 9.2c-4.6 10.5-8.9 21.2-13.5 31.7L776 101l-7.7 18.1-11.4 26.9-2.5 6.1-5.5 12.8L743 179l-8.6 20.1a41.8 41.8 0 01-18.8 19.7 68.5 68.5 0 01-46.6 2.4c-4.2-1.4-8.5-2.8-12.5-4.8 1.5-3.8 3-7.7 4.3-11.5l6-16 1-2.8c7.4 3.2 15.6 6.7 23.7 4.1 4.3-1.5 6.3-5.8 8-9.6 1.9-4.6 4.1-9 6-13.6-.6-3.2-2.5-5.9-3.7-8.9l-7.1-15.9c-1.8-4.4-3.9-8.7-5.8-13.1l-6.7-15.2c-2.5-5.6-4.9-11.2-7.5-16.7-2.4-5.8-5.2-11.4-7.6-17.2l-5.3-11.9-7.6-17.1-1.9-5z"
                    />
                </svg>
                
                </div>
                
            </div>
            
            </div>
            
        </div>
     )
}