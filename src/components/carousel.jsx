import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/pagination";
import { useApp } from "../contexts/appContext";
import { useEffect, useRef, useState } from "react";

const Carousel = ({loadStage}) => {

    const {country, user} = useApp();
    const [show, setShow] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setShow(true);
        }, 1000)
    })

    if(!show) return(
        <div className="aspect-[4.4/1] md:aspect-[4.35/1] relative -mx-2 -mt-2 md:mx-0 md:mt-0">
            <div
                className="swiper swiper-product-images swiper-initialized swiper-horizontal swiper-ios swiper-backface-hidden"
                style={{ marginTop: 120 }}
            >
                <div
                className="swiper-wrapper"
                style={{
                    transform: "translate3d(-400px, 0px, 0px)",
                    transitionDuration: "0ms",
                    transitionDelay: "0ms"
                }}
                >
                    <div
                        className="swiper-slide swiper-product-slide"
                        style={{ width: 390, marginRight: 10 }}
                    >
                    </div>
                </div>
            </div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                
            </div>
        </div>
    )

    return(
        <div className="aspect-[4.4/1] md:aspect-[4.35/1] relative -mx-2 -mt-2 md:mx-0 md:mt-0">
            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true,
                    
                }}
                key={'b'}
                spaceBetween={10}
                slidesPerView={1}
                className="swiper-product-images"
                loop
                style={{ marginTop: '120px'}}
            >
                {loadStage > 100 && country.banners?.map((banner, index) => (
                    <SwiperSlide
                        className="swiper-product-slide"
                        key={index}
                        // style={{
                        //     backgroundImage: "url(https://cms1.betwayafrica.com/medialibraries/banners.betwayafrica.com/HTML5Banners/Africa/mobile_placeholder.png)",
                        //     backgroundSize: "cover",
                        //     backgroundRepeat: "no-repeat",
                        //     backgroundPositionY: "-1px"
                        // }}
                    >
                        {/* <img src={banner} className="swiper-product-slide-image" /> */}
                        <CarouselImage banner={banner}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination">

            </div>
        </div>
    )
}

const CarouselImage = ({banner}) => {

    const imageRef = useRef(null);
    
    const image = new Image();
    image.src = banner;
    
    image.onload = () => {
        if(imageRef.current) imageRef.current.src = banner;
    }
    return(
        <img ref={imageRef} src="https://cms1.betwayafrica.com/medialibraries/banners.betwayafrica.com/HTML5Banners/Africa/mobile_placeholder.png" className="swiper-product-slide-image" />
    )
}

export default Carousel;