import { useApp } from "../contexts/appContext"

const Carousel = () => {

    const {carousel, lang} = useApp();

    if(!carousel) return null;

    return(
        <div className="pl-PodLoaderModule_Pod-49 ">
            <div className="hpc-HomepageCarouselModule hpc-HomepageCarouselModule-width0 ">
                <div className="hpc-CarouselScroller ">
                {/**/}
                <div className="hpc-CarouselScroller_HScroll ">
                    <div className="hpc-CarouselScroller_ScrollContent ">
                        {carousel.map(card =>
                            <Card data={card}/>    
                        )}

                    </div>
                </div>
                <div className="hpc-CarouselScroller_RightArrow " />
                </div>
            </div>
        </div>
    )
}

const Card = ({data}) => {

    const {lang} = useApp();

    return(
        <div className="hpc-HomepageCarouselModule_Pod">
            <div>
                <div className=" oom-OpenOfferModule ">
                    <div className="oom-OpenOfferBanner ">
                    <div
                        className="oom-OpenOfferBanner_BackgroundImage"
                        style={{
                            backgroundImage: data.IM ? `url(https://bet365.com/home/images${data.IM})` : `url(https://bet365.com/home/images/Home/Info/${data.IN})`
                        }}
                    >
                        <div className="oom-OpenOfferBanner_HeaderWrapper">
                        <div className="oom-OpenOfferBanner_MainHeading ">
                            {data.NA}
                        </div>
                        <div className="oom-OpenOfferBanner_WhiteHeading ">
                            {data.HT}
                        </div>
                        {((data.BT && data.LA) || data.LB) && <div className="oom-ActionCTA ">
                            {data.BT || data.LB}
                        </div>}
                        </div>
                        <div className="oom-Terms ">
                        {data.ST || data.HU}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;