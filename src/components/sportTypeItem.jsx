import { useApp } from "../contexts/appContext";

const SportTypeItem = ({item}) => {
    
    const {lang} = useApp();

    const image = item.sportType == "Sport" ? `https://cms1.betwayafrica.com/medialibraries/content.gmgamingsystems.com/Synapse/icons/${item.sportId}.png` : item.imageURL;
    return (
        <div className="flex items-center h-12">
            <button className={`flex flex-col items-center base-text min-w-[65px] h-full relative justify-end pb-[2px] leading-4 px-3 text-xs font-bold whitespace-nowrap transition-all hover:bg-light-500 dark:hover:bg-dark-700 sports-list-active-item ${item.name == "Soccer" && "bg-identity-50"} hover:bg-identity-50 dark:bg-dark-700 dark:hover:bg-dark-700 dark:text-light-50`}>
                {item.hasLiveInPlayEvents && 
                    <div className="absolute top-[1px] text-[10px] leading-[10px] bg-identity-50 p-[2px] rounded flex items-center gap-[2px] text-dark-700 dark:text-light-50 dark:bg-identity-900">
                        <span className="block w-2 h-2 rounded-full bg-identity-600" />
                        <span>{lang["live"]} {item.liveInPlayCount}</span>
                    </div>
                }
                <div className="relative" style={{ width: '22px', height: '22px' }}>
                    <img src={image} width={22} height={22} alt={item.name} data-nuxt-img className="opacity-100" />
                </div> {item.sportType == "Sport" ? (lang[`lobbies.virtuals.${item.sportId}`] || lang[`sports.${item.sportId}`]) : item.name}</button>
            <div className="w-[1px] h-6 bg-light-300 dark:bg-dark-500" />
        </div>
    );
}

export default SportTypeItem;