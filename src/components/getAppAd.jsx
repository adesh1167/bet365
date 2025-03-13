import { useApp } from "../contexts/appContext";

const GetAppAd = () => {

    const {setPopup} = useApp();

    return(
        <>
        <div className="wcl-ModalManager_DarkWash " />
        <div>
            <div className="aar-0">
                <div className="aar-1">Get our official</div>
                <div className="aar-15">Sports App</div>
                <div className="aar-5">Our most intuitive sports app yet</div>
                <div className="aar-5a">Download for</div>
                <div className="aar-6">OFFICIAL DOWNLOAD</div>
                <div className="aar-3" />
                <div className="aar-154" onClick={() => setPopup(null)} />
            </div>
        </div>
        </>
    )
}

export default GetAppAd;