import { useEffect, useRef } from "react";
import { useApp } from "../contexts/appContext";
import FeaturedMatches from "./featuredMatches";
import Carousel from "./carousel";
import Fixtures from "./fixtures";

const Body = () => {

    const {lang} = useApp();
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(()=>{
        if(!containerRef.current || !contentRef.current) return;
        const element = containerRef.current;
        const child = contentRef.current;
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) {
            //   child.style.position = "fixed";
            //   child.style.top = "146px";
              child.className = "hsn-HomepageStickyNavModule_ScrollerContainer hsn-HomepageStickyNavModule_ScrollerContainer-sticky "
            } else {
            //   child.style.position = "relative";
              child.className = "hsn-HomepageStickyNavModule_ScrollerContainer ";
            }
          },
          { rootMargin: "-196px 0px 0px 0px", threshold: 0 }
        );
        
        observer.observe(element);
        
        return () => {
          observer.unobserve(element);
        };
    },[])

    return(
        <div
            className="wcl-PageContainer_Colcontainer "
            style={{ minHeight: "calc(-80px + 100vh)" }}
        >
            <div className="wcl-PageContainer_Col1 ">
                <div>
                <div className="pl-PodLoaderModule ">
                    <Carousel/>
                    <div className="pl-PodLoaderModule_Pod-996 ">
                    <div className="scr-NavBarScroller_RightArrowVisible ">
                        <div className="crm-ClassificationRibbonModule_CompetitionScrollerContainer ">
                        <div className="crm-ClassificationRibbonScroller ">
                            <div className="crm-ClassificationRibbonScroller_Dis crm-ClassificationRibbonScroller_LeftArrow scr-NavBarScroller_Hidden crm-ClassificationRibbonScroller_Hidden " />
                            <div className="crm-ClassificationRibbonScroller_HScroll ">
                            <div
                                className="crm-ClassificationRibbonScroller_ScrollContent crm-CompetitionRibbon "
                                style={{ left: 0 }}
                            >
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_Soccer.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">Soccer</div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_Tennis.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">
                                    Indian Wells
                                </div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_Basketball.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">
                                    Basketball
                                </div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_FantasySports.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">
                                    {lang["fantasy"]}
                                </div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_Casino.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">
                                    {lang["Casino"]}
                                </div>
                                </div>
                                <div />
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_ESports.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">
                                    Esports
                                </div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_TableTennis.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">
                                    Table Tennis
                                </div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_VirtualSports.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">
                                    Virtual
                                </div>
                                </div>
                                <div />
                                <div className="crm-QuickLinkIconItem crm-QuickLinkIconItem-champions ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/UCL_Official.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                </div>
                                <div />
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/ufcofficialwhite.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">313</div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_Golf.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">Golf</div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_Skiing.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">Alpine</div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_Boxing.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">Boxing</div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_Darts.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">Darts</div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_IceHockey.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">
                                    Ice Hockey
                                </div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_Volleyball.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">
                                    Volleyball
                                </div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_RugbyUnion.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">
                                    Rugby Union
                                </div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_Cricket.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">
                                    Cricket
                                </div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_Formula1.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">
                                    Formula 1
                                </div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_Futsal.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">Futsal</div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_Badminton.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">
                                    Badminton
                                </div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_RugbyLeague.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">
                                    Rugby League
                                </div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zlogo_mlb_official.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">MLB</div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_HorseRacing2.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">Horses</div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_Snooker.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">
                                    Snooker
                                </div>
                                </div>
                                <div className="crm-QuickLinkIconItem ">
                                <div className="crm-QuickLinkIconItem_Wrapper ">
                                    <img
                                    src="https://bet365.com/home//images/Home/imgs/LeagueLogo/zClass_Greyhounds2.svg"
                                    className="crm-QuickLinkIconItem_Icon "
                                    />
                                </div>
                                <div className="crm-QuickLinkIconItem_Title ">Dogs</div>
                                </div>
                            </div>
                            </div>
                            <div className="crm-ClassificationRibbonScroller_RightArrow crm-ClassificationRibbonScroller_Hidden " />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div ref={containerRef} className="pl-PodLoaderModule_Pod-993 ">
                    <div className="hsn-HomepageStickyNavModule ">
                        <div
                        ref={contentRef}
                        className="hsn-HomepageStickyNavModule_ScrollerContainer"
                        style={{ width: 390, top: 146 }}
                        >
                        <div className="hsn-Scroller ">
                            {/**/}
                            <div className="hsn-Scroller_HScroll ">
                            <div className="hsn-Scroller_ScrollContent ">
                                <div className="hsn-NavTab hsn-NavTab-selected">
                                <div className="hsn-NavTab_Label ">Soccer</div>
                                </div>
                                <div className="hsn-NavTab ">
                                <div className="hsn-NavTab_Label ">Euroleague</div>
                                </div>
                                <div className="hsn-NavTab ">
                                <div className="hsn-NavTab_Label ">ATP/WTA</div>
                                </div>
                                <div className="hsn-NavTab ">
                                <div className="hsn-NavTab_Label ">NBA</div>
                                </div>
                                {/**/}
                                {/**/}
                            </div>
                            </div>
                            {/**/}
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="pl-PodLoaderModule_Pod-61 ">
                    <div>
                        <div className="ss-HomepageSpotlight ss-HomepageSpotlight_Width-0 ss-HomepageSpotlight-haslink ">
                        <div className="ss-HomeSpotlightHeader ">
                            <div
                            style={{
                                backgroundImage:
                                "url(https://bet365.com/home/images/Home/imgs/LeagueLogo/zClass_Soccer.svg)"
                            }}
                            className="ss-HomeSpotlightHeader_HeaderImage"
                            />
                            <div className="ss-HomeSpotlightHeader_Title ">
                            Featured Matches
                            </div>
                            <div className="ss-HomeSpotlightHeader_Link ">
                            {lang["SeeAll"]}
                            </div>
                        </div>
                        <div className="ss-HomepageSpotlight_Modules">
                            <FeaturedMatches/>
                            <div className="ss-HomepageSpotlight_Pod ss-HomepageSpotlight_CouponPodModuleContainer ">
                            <div className="cpm-CouponPodModule cpm-CouponPodModule-0 cpm-CouponPodModule-spotlight ">
                                <div className="cpm-Header ">
                                <div
                                    style={{
                                    backgroundImage:
                                        "url(/home/images/Home/imgs/LeagueLogo/zClass_Soccer.svg)"
                                    }}
                                    className="cpm-Header_HeaderImage"
                                />
                                <div className="cpm-Header_Title ">Featured Matches</div>
                                <div className="cpm-Header_LinkContainer">
                                    <div className="cpm-Header_Link ">View All</div>
                                </div>
                                </div>
                                <div className="cpm-OffersBar ">{/**/}</div>
                                <Fixtures/>
                            </div>
                            </div>

                            <div className="ss-HomepageSpotlight_Pod ss-HomepageSpotlight_BetBuilerPlusBannerModuleContainer ">
                            <div className="plb-BetBuilderPlusBannerModule plb-BetBuilderPlusBannerModule-width-0 plb-BetBuilderPlusBannerModule-homepage plb-BetBuilderPlusBannerModule-spotlight ">
                                <div className="plb-BetBuilderBanner plb-BetBuilderBanner-small ">
                                <div
                                    className="plb-BetBuilderBanner_OuterWrapper"
                                    style={{
                                    backgroundImage:
                                        "url(https://bet365.com/home/images/Home/imgs/BBPlusPod/BBPlus-PromoBanner-Soccer-680x340.webp)"
                                    }}
                                >
                                    <div className="plb-BetBuilderBanner_Wrapper">
                                    <div className="plb-BetBuilderBanner_Content">
                                        <div className="plb-BetBuilderBanner_BetBuilderPlus">
                                        <div className="plb-BetBuilderLogo ">
                                            <div
                                            className="plb-BetBuilderLogo_Component "
                                            id="plb-BetBuilderLogo"
                                            >
                                            {/*?xml version="1.0" encoding="UTF-8"?*/}
                                            <svg
                                                height="100%"
                                                viewBox="0 0 88 10"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>Bet-Builder-Plus-en</title>
                                                <g
                                                id="Bet-Builder-Plus-en"
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                                >
                                                <g
                                                    id="{word-1}"
                                                    transform="translate(0.546000, 0.329000)"
                                                    fill="#FFFFFF"
                                                    fillRule="nonzero"
                                                >
                                                    <path
                                                    d="M0,8.671 L3.445,8.671 C4.264,8.671 4.693,8.619 5.122,8.45 C6.123,8.06 6.773,7.111 6.773,6.058 C6.773,5.447 6.565,4.94 6.188,4.615 C5.915,4.381 5.707,4.29 5.161,4.16 C5.72,3.913 5.928,3.744 6.188,3.367 C6.435,3.003 6.578,2.509 6.578,2.015 C6.578,1.365 6.331,0.78 5.889,0.442 C5.473,0.117 4.953,0 3.835,0 L1.066,0 L0,8.671 Z M3.445,1.729 C4.264,1.729 4.498,1.898 4.498,2.483 C4.498,3.159 4.108,3.445 3.146,3.445 L2.834,3.445 L3.042,1.729 L3.445,1.729 Z M3.289,5.07 C4.238,5.07 4.498,5.252 4.498,5.889 C4.498,6.63 4.082,6.942 3.003,6.942 L2.405,6.942 L2.626,5.07 L3.289,5.07 Z"
                                                    id="Shape"
                                                    />
                                                    <polygon
                                                    id="Path"
                                                    points="8.905 0 7.839 8.671 12.688 8.671 12.922 6.76 10.27 6.76 10.452 5.252 12.922 5.252 13.156 3.354 10.686 3.354 10.868 1.911 13.416 1.911 13.65 0"
                                                    />
                                                    <polygon
                                                    id="Path"
                                                    points="20.345 1.911 20.579 0 14.69 0 14.456 1.911 16.302 1.911 15.47 8.671 17.654 8.671 18.499 1.911"
                                                    />
                                                </g>
                                                <g
                                                    id="{word-2}"
                                                    transform="translate(24.546000, 0.329000)"
                                                    fill="#28FFBB"
                                                    fillRule="nonzero"
                                                >
                                                    <path
                                                    d="M0,8.671 L3.445,8.671 C4.264,8.671 4.693,8.619 5.122,8.45 C6.123,8.06 6.773,7.111 6.773,6.058 C6.773,5.447 6.565,4.94 6.188,4.615 C5.915,4.381 5.707,4.29 5.161,4.16 C5.72,3.913 5.928,3.744 6.188,3.367 C6.435,3.003 6.578,2.509 6.578,2.015 C6.578,1.365 6.331,0.78 5.889,0.442 C5.473,0.117 4.953,0 3.835,0 L1.066,0 L0,8.671 Z M3.445,1.729 C4.264,1.729 4.498,1.898 4.498,2.483 C4.498,3.159 4.108,3.445 3.146,3.445 L2.834,3.445 L3.042,1.729 L3.445,1.729 Z M3.289,5.07 C4.238,5.07 4.498,5.252 4.498,5.889 C4.498,6.63 4.082,6.942 3.003,6.942 L2.405,6.942 L2.626,5.07 L3.289,5.07 Z"
                                                    id="Shape"
                                                    />
                                                    <path
                                                    d="M14.209,0 L13.611,4.94 C13.507,5.72 13.416,6.019 13.143,6.331 C12.883,6.617 12.454,6.76 11.908,6.76 C10.946,6.76 10.478,6.318 10.478,5.408 C10.478,5.187 10.491,4.94 10.517,4.68 L11.089,0 L8.905,0 L8.333,4.68 C8.268,5.213 8.229,5.616 8.229,5.876 C8.229,7.735 9.594,8.84 11.843,8.84 C13.117,8.84 14.157,8.502 14.807,7.878 C15.366,7.345 15.587,6.682 15.795,5.018 L16.406,0 L14.209,0 Z"
                                                    id="Path"
                                                    />
                                                    <polygon
                                                    id="Path"
                                                    points="18.226 0 17.16 8.671 19.357 8.671 20.423 0"
                                                    />
                                                    <polygon
                                                    id="Path"
                                                    points="22.243 0 21.177 8.671 26.13 8.671 26.377 6.76 23.608 6.76 24.44 0"
                                                    />
                                                    <path
                                                    d="M27.313,8.671 L30.173,8.671 C31.057,8.671 32.63,8.632 33.943,7.553 C34.71,6.916 35.399,5.889 35.399,4.004 C35.399,2.743 35.048,1.768 34.307,1.079 C33.371,0.208 32.058,0 30.836,0 L28.379,0 L27.313,8.671 Z M30.94,1.911 C31.421,1.911 32.045,1.976 32.513,2.405 C32.89,2.756 33.137,3.341 33.137,4.108 C33.137,4.927 32.838,5.655 32.357,6.097 C32.136,6.305 31.538,6.76 30.407,6.76 L29.744,6.76 L30.342,1.911 L30.94,1.911 Z"
                                                    id="Shape"
                                                    />
                                                    <polygon
                                                    id="Path"
                                                    points="37.401 0 36.335 8.671 41.184 8.671 41.418 6.76 38.766 6.76 38.948 5.252 41.418 5.252 41.652 3.354 39.182 3.354 39.364 1.911 41.912 1.911 42.146 0"
                                                    />
                                                    <path
                                                    d="M48.867,4.615 C49.335,4.121 49.569,3.471 49.569,2.691 C49.569,1.911 49.322,1.196 48.906,0.754 C48.412,0.234 47.684,0 46.501,0 L43.68,0 L42.614,8.671 L44.811,8.671 L45.227,5.226 L47.203,8.671 L49.751,8.671 L47.723,5.304 C48.321,5.096 48.555,4.953 48.867,4.615 Z M46.072,1.742 C46.995,1.742 47.307,2.002 47.307,2.756 C47.307,3.575 46.826,3.965 45.773,3.965 L45.383,3.965 L45.656,1.742 L46.072,1.742 Z"
                                                    id="Shape"
                                                    />
                                                </g>
                                                <path
                                                    d="M84.2079958,0.345426558 L84.1015639,0.950534846 L83.754,3.68842656 L87.1677249,3.68909073 L86.9135256,5.61364557 L83.511,5.61342656 L83.0828572,8.99918015 L80.9371411,9 L81.365,5.61342656 L78,5.61364557 L78.2541994,3.68909073 L81.609,3.68842656 L81.9558478,0.951354693 L82.0491706,0.345426558 L84.2079958,0.345426558 Z"
                                                    id="Combined-Shape"
                                                    fill="#28FFBB"
                                                    fillRule="nonzero"
                                                />
                                                </g>
                                            </svg>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="plb-BetBuilderBanner_Description ">
                                        The biggest fixtures and markets, all in one place
                                        </div>
                                        <div className="plb-BetBuilderBanner_SubHeader ">
                                        Start Building
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="pl-PodLoaderModule_Pod-61 ">
                    <div>
                        <div className="ss-HomepageSpotlight ss-HomepageSpotlight_Width-0 ss-HomepageSpotlight-haslink ">
                        <div className="ss-HomeSpotlightHeader ">
                            <div
                            style={{
                                backgroundImage:
                                "url(https://bet365.com/home/images/Home/imgs/LeagueLogo/zClass_Basketball.svg)"
                            }}
                            className="ss-HomeSpotlightHeader_HeaderImage"
                            />
                            <div className="ss-HomeSpotlightHeader_Title ">Euroleague</div>
                            <div className="ss-HomeSpotlightHeader_Link ">
                            {lang["SeeAll"]}
                            </div>
                        </div>
                        <div className="ss-HomepageSpotlight_Modules">
                            <div className="ss-HomepageSpotlight_Pod ss-HomepageSpotlight_PopularModuleContainer ">
                            <div className="pbb-PopularModule pbb-PopularModule_betBoost pbb-PopularModule-homepagespotlight ">
                                <div className="pbb-PopularModule_HeaderWrapper ">
                                <img
                                    src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                    className="pbb-BetBoost "
                                />
                                <div className="pbb-AllBoostsLabel ">
                                    {lang["allBoosts"]}
                                </div>
                                </div>
                                <div className="pbb-PopularModuleHorizontalScrollBar ">
                                <div className="pbb-PopularModuleHorizontalScrollBar_Wrapper ">
                                    <div className="pbb-PopularModuleHorizontalScrollBar_ScrollContent gl-MarketGrid ">
                                    <div className="pbb-PopularBetBuilder gl-Participant_General ">
                                        <div className="pbb-PopularBetBuilder_Content">
                                        <div className="pbb-PopularBetBuilder_HeaderContainer">
                                            <div className="pbb-PopularBetBuilder_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularBetBuilder_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_EventContainer">
                                            <div className="pbb-PopularBetBuilder_FixtureDescription ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/18.svg"
                                                className="pbb-PopularBetBuilder_FixtureIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularBetBuilder_FixtureText ">
                                                Asvel Lyon-Villeurbanne vs Maccabi Tel Aviv
                                            </div>
                                            <div className="pbb-PopularBetBuilder_FixImageContainer ">
                                                <div className="pbb-PopularBetBuilder_FixImage pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitfixed tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                >
                                                    <defs>
                                                    <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                    />
                                                    <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                    />
                                                    <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                    <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#C40010"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                    />
                                                    <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                    />
                                                    </g>
                                                </svg>
                                                </div>
                                                <div className="pbb-PopularBetBuilder_FixImage pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitfixed tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                >
                                                    <defs>
                                                    <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                    />
                                                    <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                    />
                                                    <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                    <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#0046A8"
                                                    />
                                                    <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#FBED32"
                                                    />
                                                    <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#0046A8"
                                                    />
                                                    <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#0046A8"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                    />
                                                    <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                    />
                                                    </g>
                                                </svg>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLines ">
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Theo Maledon: 15+ Points
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Nando De Colo: 5+ Assists
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Andre Roberson: 5+ Rebounds
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Nando De Colo: 3+ Three-Pointers
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_OddsButton ">
                                            <div className="pbb-PopularBetBuilder_PreviousOdds ">
                                            6.75
                                            </div>
                                            <div className="pbb-PopularBetBuilder_Chevron " />
                                            <div className="pbb-PopularBetBuilder_BoostedOdds ">
                                            8.00
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="pbb-PopularBetBuilder gl-Participant_General ">
                                        <div className="pbb-PopularBetBuilder_Content">
                                        <div className="pbb-PopularBetBuilder_HeaderContainer">
                                            <div className="pbb-PopularBetBuilder_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularBetBuilder_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_EventContainer">
                                            <div className="pbb-PopularBetBuilder_FixtureDescription ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/18.svg"
                                                className="pbb-PopularBetBuilder_FixtureIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularBetBuilder_FixtureText ">
                                                Asvel Lyon-Villeurbanne vs Maccabi Tel Aviv
                                            </div>
                                            <div className="pbb-PopularBetBuilder_FixImageContainer ">
                                                <div className="pbb-PopularBetBuilder_FixImage pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitfixed tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                >
                                                    <defs>
                                                    <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                    />
                                                    <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                    />
                                                    <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                    <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#C40010"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                    />
                                                    <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                    />
                                                    </g>
                                                </svg>
                                                </div>
                                                <div className="pbb-PopularBetBuilder_FixImage pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitfixed tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                >
                                                    <defs>
                                                    <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                    />
                                                    <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                    />
                                                    <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                    <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#0046A8"
                                                    />
                                                    <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#FBED32"
                                                    />
                                                    <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#0046A8"
                                                    />
                                                    <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#0046A8"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                    />
                                                    <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                    />
                                                    </g>
                                                </svg>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLines ">
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Roman Sorkin: 15+ Points
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Tamir Blatt: 5+ Assists
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Jasiel Rivero: 5+ Rebounds
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Tamir Blatt: 2+ Three-Pointers
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_OddsButton ">
                                            <div className="pbb-PopularBetBuilder_PreviousOdds ">
                                            6.75
                                            </div>
                                            <div className="pbb-PopularBetBuilder_Chevron " />
                                            <div className="pbb-PopularBetBuilder_BoostedOdds ">
                                            8.00
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="pbb-PopularBetBuilder gl-Participant_General ">
                                        <div className="pbb-PopularBetBuilder_Content">
                                        <div className="pbb-PopularBetBuilder_HeaderContainer">
                                            <div className="pbb-PopularBetBuilder_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularBetBuilder_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_EventContainer">
                                            <div className="pbb-PopularBetBuilder_FixtureDescription ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/18.svg"
                                                className="pbb-PopularBetBuilder_FixtureIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularBetBuilder_FixtureText ">
                                                Asvel Lyon-Villeurbanne vs Maccabi Tel Aviv
                                            </div>
                                            <div className="pbb-PopularBetBuilder_FixImageContainer ">
                                                <div className="pbb-PopularBetBuilder_FixImage pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitfixed tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                >
                                                    <defs>
                                                    <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                    />
                                                    <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                    />
                                                    <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                    <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#C40010"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                    />
                                                    <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                    />
                                                    </g>
                                                </svg>
                                                </div>
                                                <div className="pbb-PopularBetBuilder_FixImage pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitfixed tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                >
                                                    <defs>
                                                    <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                    />
                                                    <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                    />
                                                    <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                    <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#0046A8"
                                                    />
                                                    <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#FBED32"
                                                    />
                                                    <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#0046A8"
                                                    />
                                                    <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#0046A8"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                    />
                                                    <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                    />
                                                    </g>
                                                </svg>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLines ">
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Match Result will be&nbsp;Asvel
                                                Lyon-Villeurbanne
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Theo Maledon: 15+ Points
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Joffrey Lauvergne: 15+ Points
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_OddsButton ">
                                            <div className="pbb-PopularBetBuilder_PreviousOdds ">
                                            5.50
                                            </div>
                                            <div className="pbb-PopularBetBuilder_Chevron " />
                                            <div className="pbb-PopularBetBuilder_BoostedOdds ">
                                            6.00
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="pbb-PopularBetBuilder gl-Participant_General ">
                                        <div className="pbb-PopularBetBuilder_Content">
                                        <div className="pbb-PopularBetBuilder_HeaderContainer">
                                            <div className="pbb-PopularBetBuilder_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularBetBuilder_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_EventContainer">
                                            <div className="pbb-PopularBetBuilder_FixtureDescription ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/18.svg"
                                                className="pbb-PopularBetBuilder_FixtureIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularBetBuilder_FixtureText ">
                                                Asvel Lyon-Villeurbanne vs Maccabi Tel Aviv
                                            </div>
                                            <div className="pbb-PopularBetBuilder_FixImageContainer ">
                                                <div className="pbb-PopularBetBuilder_FixImage pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitfixed tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                >
                                                    <defs>
                                                    <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                    />
                                                    <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                    />
                                                    <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                    <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#C40010"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                    />
                                                    <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                    />
                                                    </g>
                                                </svg>
                                                </div>
                                                <div className="pbb-PopularBetBuilder_FixImage pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitfixed tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                >
                                                    <defs>
                                                    <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                    />
                                                    <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                    />
                                                    <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                    <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#0046A8"
                                                    />
                                                    <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#FBED32"
                                                    />
                                                    <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#0046A8"
                                                    />
                                                    <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#0046A8"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                    />
                                                    <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                    />
                                                    </g>
                                                </svg>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLines ">
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Match Result will be&nbsp;Maccabi Tel Aviv
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Roman Sorkin: 10+ Points
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Tamir Blatt: 10+ Points
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_OddsButton ">
                                            <div className="pbb-PopularBetBuilder_PreviousOdds ">
                                            4.50
                                            </div>
                                            <div className="pbb-PopularBetBuilder_Chevron " />
                                            <div className="pbb-PopularBetBuilder_BoostedOdds ">
                                            5.00
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="pbb-PopularBetBuilder gl-Participant_General ">
                                        <div className="pbb-PopularBetBuilder_Content">
                                        <div className="pbb-PopularBetBuilder_HeaderContainer">
                                            <div className="pbb-PopularBetBuilder_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularBetBuilder_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_EventContainer">
                                            <div className="pbb-PopularBetBuilder_FixtureDescription ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/18.svg"
                                                className="pbb-PopularBetBuilder_FixtureIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularBetBuilder_FixtureText ">
                                                Olympiacos vs Partizan
                                            </div>
                                            <div className="pbb-PopularBetBuilder_FixImageContainer ">
                                                <div className="pbb-PopularBetBuilder_FixImage pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitfixed tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                >
                                                    <defs>
                                                    <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                    />
                                                    <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                    />
                                                    <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                    <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#C40010"
                                                    />
                                                    <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#F0F0F0"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                    />
                                                    <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                    />
                                                    </g>
                                                </svg>
                                                </div>
                                                <div className="pbb-PopularBetBuilder_FixImage pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitfixed tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                >
                                                    <defs>
                                                    <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                    />
                                                    <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                    />
                                                    <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                    <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#0A0A0A"
                                                    />
                                                    <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#F0F0F0"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                    />
                                                    <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                    />
                                                    </g>
                                                </svg>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLines ">
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Aleksandar Vezenkov: 20+ Points
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Nigel Williams-Goss: 5+ Assists
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Aleksandar Vezenkov: 5+ Rebounds
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Evan Fournier: 3+ Three-Pointers
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_OddsButton ">
                                            <div className="pbb-PopularBetBuilder_PreviousOdds ">
                                            5.25
                                            </div>
                                            <div className="pbb-PopularBetBuilder_Chevron " />
                                            <div className="pbb-PopularBetBuilder_BoostedOdds ">
                                            6.00
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="pbb-PopularBetBuilder gl-Participant_General ">
                                        <div className="pbb-PopularBetBuilder_Content">
                                        <div className="pbb-PopularBetBuilder_HeaderContainer">
                                            <div className="pbb-PopularBetBuilder_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularBetBuilder_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_EventContainer">
                                            <div className="pbb-PopularBetBuilder_FixtureDescription ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/18.svg"
                                                className="pbb-PopularBetBuilder_FixtureIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularBetBuilder_FixtureText ">
                                                Olympiacos vs Partizan
                                            </div>
                                            <div className="pbb-PopularBetBuilder_FixImageContainer ">
                                                <div className="pbb-PopularBetBuilder_FixImage pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitfixed tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                >
                                                    <defs>
                                                    <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                    />
                                                    <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                    />
                                                    <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                    <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#C40010"
                                                    />
                                                    <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#F0F0F0"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                    />
                                                    <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                    />
                                                    </g>
                                                </svg>
                                                </div>
                                                <div className="pbb-PopularBetBuilder_FixImage pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitfixed tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                >
                                                    <defs>
                                                    <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                    />
                                                    <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                    />
                                                    <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                    <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#0A0A0A"
                                                    />
                                                    <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#F0F0F0"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                    />
                                                    <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                    />
                                                    </g>
                                                </svg>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLines ">
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Evan Fournier: 15+ Points
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Aleksandar Vezenkov: 10+ Rebounds
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Match Result will be&nbsp;Olympiacos
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_OddsButton ">
                                            <div className="pbb-PopularBetBuilder_PreviousOdds ">
                                            8.50
                                            </div>
                                            <div className="pbb-PopularBetBuilder_Chevron " />
                                            <div className="pbb-PopularBetBuilder_BoostedOdds ">
                                            9.50
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="ss-HomepageSpotlight_Pod ss-HomepageSpotlight_CouponPodModuleContainer ">
                            <div className="cpm-CouponPodModule cpm-CouponPodModule-0 cpm-CouponPodModule-spotlight ">
                                <div className="cpm-Header ">
                                <div
                                    style={{
                                    backgroundImage:
                                        "url(https://bet365.com/home/images/Home/imgs/LeagueLogo/zClass_Basketball.svg)"
                                    }}
                                    className="cpm-Header_HeaderImage"
                                />
                                <div className="cpm-Header_Title ">Euroleague</div>
                                <div className="cpm-Header_LinkContainer">
                                    <div className="cpm-Header_Link ">
                                    {lang["SeeAll"]}
                                    </div>
                                </div>
                                </div>
                                <div className="cpm-OffersBar ">{/**/}</div>
                                <div className="cpm-CouponPodMarketGrid gl-MarketGrid ">
                                <div className="gl-MarketGroup cpm-CouponPodMarketGroup ">
                                    <div className="gl-MarketGroup_Wrapper ">
                                    <div className="gl-MarketGroupContainer cpm-CouponPodMarketGroup_MarketGroupContainer ">
                                        <div className="cpm-MarketFixture rcl-MarketFixtureDetailsLabelBase gl-Market_General gl-Market_General-columnheader gl-Market_General-haslabels ">
                                        <div className="cpm-MarketFixtureDateHeader cpm-MarketFixtureDateHeader-isdate ">
                                            Fri 07 Mar
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetailsBasketball cpm-ParticipantFixtureDetailsBasketball_HasStatIcon rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#0046A8"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#F0F0F0"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        Anadolu Efes
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#0A0A0A"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#0A0A0A"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#0A0A0A"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        Virtus Bologna
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_Details ">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_BookCloses ">
                                                18:30
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetailsBasketball Hidden gl-Market_General-cn1 " />
                                        <div className="cpm-ParticipantFixtureDetailsBasketball cpm-ParticipantFixtureDetailsBasketball_HasStatIcon rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#C40010"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        Asvel Lyon-Villeurbanne
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#0046A8"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#FBED32"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#0046A8"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#0046A8"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        Maccabi Tel Aviv
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_Details ">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_BookCloses ">
                                                20:00
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_Boosts bbb-BetBoostCount ">
                                                5
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetailsBasketball Hidden gl-Market_General-cn1 " />
                                        <div className="cpm-ParticipantFixtureDetailsBasketball cpm-ParticipantFixtureDetailsBasketball_HasStatIcon rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#C40010"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#F0F0F0"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        Olympiacos
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#0A0A0A"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#F0F0F0"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        Partizan
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_Details ">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_BookCloses ">
                                                20:15
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_Boosts bbb-BetBoostCount ">
                                                5
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetailsBasketball Hidden gl-Market_General-cn1 " />
                                        <div className="cpm-ParticipantFixtureDetailsBasketball cpm-ParticipantFixtureDetailsBasketball_HasStatIcon gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#FBED32"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#0A0A0A"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#0A0A0A"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#0A0A0A"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        Alba Berlin
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#002B87"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#C40010"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#C40010"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#C40010"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        Barcelona
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_Details ">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_BookCloses ">
                                                20:30
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_Boosts bbb-BetBoostCount ">
                                                7
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetailsBasketball Hidden gl-Market_General-cn1 " />
                                        </div>
                                        <div className="cpm-MarketOdds gl-Market_General gl-Market_General-columnheader ">
                                        <div className="cpm-MarketOddsHeader ">
                                            Spread
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 cpm-ParticipantOdds_Suspended ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            -8.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 cpm-ParticipantOdds_Suspended ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            +8.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            -4.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.86
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            +4.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.95
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            -7.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            +7.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            +7.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            -7.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        </div>
                                        <div className="cpm-MarketOdds gl-Market_General gl-Market_General-columnheader ">
                                        <div className="cpm-MarketOddsHeader ">
                                            {lang["total"]}
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 cpm-ParticipantOdds_Suspended ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            O 168.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.95
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 cpm-ParticipantOdds_Suspended ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            U 168.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.86
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            O 172.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            U 172.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            O 165.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            U 165.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            O 170.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            U 170.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        </div>
                                        <div className="cpm-MarketOdds gl-Market_General gl-Market_General-columnheader ">
                                        <div className="cpm-MarketOddsHeader ">
                                            Money Line
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 gl-Market_General-cn1 cpm-ParticipantOdds_Suspended ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.25
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 cpm-ParticipantOdds_Suspended ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            4.20
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.47
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            2.75
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.30
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            3.65
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            3.60
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.31
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="ss-HomepageSpotlight_Pod ss-HomepageSpotlight_PlayerParlayRibbonModuleContainer ">
                            <div className="ppr-PlayerParlayRibbonModule-spotlight ppr-PlayerParlayRibbonModule ">
                                <div className="ppr-PlayerParlayHeader ">
                                <div className="ppr-PlayerParlayHeader_Text ">
                                    <span>Player </span>
                                    <span className="ppr-PlayerParlayHeader_Text-green ">
                                    {lang["parlay"]}
                                    </span>
                                </div>
                                <div className="ppr-PlayerParlayHeader_Link ">
                                    {lang["SeeAll"]}
                                </div>
                                </div>
                                <div className="ppr-PlayerParlayRibbonModule_Container ">
                                <div className="ppr-PlayerNavBarScroller ">
                                    <div className="ppr-PlayerNavBarScroller_Wrapper ">
                                    <div className="ppr-PlayerNavBarScroller_Contents ">
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 ">
                                            <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                            >
                                                <g
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                                >
                                                <path
                                                    fill="#EA1515"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                />
                                                </g>
                                                <text
                                                fill="#FFFFFF"
                                                fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                fontSize={24}
                                                fontWeight={700}
                                                letterSpacing="-0.5"
                                                >
                                                <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                >
                                                    14
                                                </tspan>
                                                </text>
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            A.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Vezenkov
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 ">
                                            <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                            >
                                                <g
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                                >
                                                <path
                                                    fill="#EA1515"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                />
                                                </g>
                                                <text
                                                fill="#FFFFFF"
                                                fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                fontSize={24}
                                                fontWeight={700}
                                                letterSpacing="-0.5"
                                                >
                                                <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                >
                                                    94
                                                </tspan>
                                                </text>
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            E.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Fournier
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 ">
                                            <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                            >
                                                <g
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                                >
                                                <path
                                                    fill="#FBED32"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                />
                                                </g>
                                                <text
                                                fill="#282828"
                                                fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                fontSize={24}
                                                fontWeight={700}
                                                letterSpacing="-0.5"
                                                >
                                                <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                >
                                                    15
                                                </tspan>
                                                </text>
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            M.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Hermannsson
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 ">
                                            <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                            >
                                                <g
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                                >
                                                <path
                                                    fill="#FBED32"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                />
                                                </g>
                                                <text
                                                fill="#282828"
                                                fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                fontSize={24}
                                                fontWeight={700}
                                                letterSpacing="-0.5"
                                                >
                                                <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                >
                                                    1
                                                </tspan>
                                                </text>
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            G.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Procida
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 ">
                                            <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                            >
                                                <g
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                                >
                                                <path
                                                    fill="#002B87"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                />
                                                </g>
                                                <text
                                                fill="#FFFFFF"
                                                fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                fontSize={24}
                                                fontWeight={700}
                                                letterSpacing="-0.5"
                                                >
                                                <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                >
                                                    22
                                                </tspan>
                                                </text>
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            J.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Parker
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 ">
                                            <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                            >
                                                <g
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                                >
                                                <path
                                                    fill="#F0F0F0"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                />
                                                </g>
                                                <text
                                                fill="#282828"
                                                fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                fontSize={24}
                                                fontWeight={700}
                                                letterSpacing="-0.5"
                                                >
                                                <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                >
                                                    6
                                                </tspan>
                                                </text>
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            T.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Maledon
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 ">
                                            <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                            >
                                                <g
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                                >
                                                <path
                                                    fill="#F0F0F0"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                />
                                                </g>
                                                <text
                                                fill="#282828"
                                                fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                fontSize={24}
                                                fontWeight={700}
                                                letterSpacing="-0.5"
                                                >
                                                <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                >
                                                    12
                                                </tspan>
                                                </text>
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            N.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            De Colo
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 ">
                                            <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                            >
                                                <g
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                                >
                                                <path
                                                    fill="#F0F0F0"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                />
                                                </g>
                                                <text
                                                fill="#282828"
                                                fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                fontSize={24}
                                                fontWeight={700}
                                                letterSpacing="-0.5"
                                                >
                                                <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                >
                                                    7
                                                </tspan>
                                                </text>
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            J.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Lauvergne
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 ">
                                            <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                            >
                                                <g
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                                >
                                                <path
                                                    fill="#0046A8"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                />
                                                </g>
                                                <text
                                                fill="#FFFFFF"
                                                fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                fontSize={24}
                                                fontWeight={700}
                                                letterSpacing="-0.5"
                                                >
                                                <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                >
                                                    45
                                                </tspan>
                                                </text>
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            T.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Blatt
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 ">
                                            <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                            >
                                                <g
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                                >
                                                <path
                                                    fill="#0046A8"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                />
                                                </g>
                                                <text
                                                fill="#FFFFFF"
                                                fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                fontSize={24}
                                                fontWeight={700}
                                                letterSpacing="-0.5"
                                                >
                                                <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                >
                                                    14
                                                </tspan>
                                                </text>
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            J.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Rivero
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 ">
                                            <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                            >
                                                <g
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                                >
                                                <path
                                                    fill="#EA1515"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                />
                                                </g>
                                                <text
                                                fill="#FFFFFF"
                                                fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                fontSize={24}
                                                fontWeight={700}
                                                letterSpacing="-0.5"
                                                >
                                                <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                >
                                                    25
                                                </tspan>
                                                </text>
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            A.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Peters
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="ss-HomepageSpotlight_Pod ss-HomepageSpotlight_BetBuilerPlusBannerModuleContainer ">
                            <div className="plb-BetBuilderPlusBannerModule plb-BetBuilderPlusBannerModule-width-0 plb-BetBuilderPlusBannerModule-homepage plb-BetBuilderPlusBannerModule-spotlight ">
                                <div className="plb-BetBuilderBanner plb-BetBuilderBanner-small ">
                                <div
                                    className="plb-BetBuilderBanner_OuterWrapper"
                                    style={{
                                    backgroundImage:
                                        "url(https://bet365.com/home/images/Home/imgs/BBPlusPod/BBPlus-PromoBanner-Basketball-680x340.webp)"
                                    }}
                                >
                                    <div className="plb-BetBuilderBanner_Wrapper">
                                    <div className="plb-BetBuilderBanner_Content">
                                        <div className="plb-BetBuilderBanner_BetBuilderPlus">
                                        <div className="plb-BetBuilderLogo ">
                                            <div
                                            className="plb-BetBuilderLogo_Component "
                                            id="plb-BetBuilderLogo"
                                            >
                                            {/*?xml version="1.0" encoding="UTF-8"?*/}
                                            <svg
                                                height="100%"
                                                viewBox="0 0 88 10"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>Bet-Builder-Plus-en</title>
                                                <g
                                                id="Bet-Builder-Plus-en"
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                                >
                                                <g
                                                    id="{word-1}"
                                                    transform="translate(0.546000, 0.329000)"
                                                    fill="#FFFFFF"
                                                    fillRule="nonzero"
                                                >
                                                    <path
                                                    d="M0,8.671 L3.445,8.671 C4.264,8.671 4.693,8.619 5.122,8.45 C6.123,8.06 6.773,7.111 6.773,6.058 C6.773,5.447 6.565,4.94 6.188,4.615 C5.915,4.381 5.707,4.29 5.161,4.16 C5.72,3.913 5.928,3.744 6.188,3.367 C6.435,3.003 6.578,2.509 6.578,2.015 C6.578,1.365 6.331,0.78 5.889,0.442 C5.473,0.117 4.953,0 3.835,0 L1.066,0 L0,8.671 Z M3.445,1.729 C4.264,1.729 4.498,1.898 4.498,2.483 C4.498,3.159 4.108,3.445 3.146,3.445 L2.834,3.445 L3.042,1.729 L3.445,1.729 Z M3.289,5.07 C4.238,5.07 4.498,5.252 4.498,5.889 C4.498,6.63 4.082,6.942 3.003,6.942 L2.405,6.942 L2.626,5.07 L3.289,5.07 Z"
                                                    id="Shape"
                                                    />
                                                    <polygon
                                                    id="Path"
                                                    points="8.905 0 7.839 8.671 12.688 8.671 12.922 6.76 10.27 6.76 10.452 5.252 12.922 5.252 13.156 3.354 10.686 3.354 10.868 1.911 13.416 1.911 13.65 0"
                                                    />
                                                    <polygon
                                                    id="Path"
                                                    points="20.345 1.911 20.579 0 14.69 0 14.456 1.911 16.302 1.911 15.47 8.671 17.654 8.671 18.499 1.911"
                                                    />
                                                </g>
                                                <g
                                                    id="{word-2}"
                                                    transform="translate(24.546000, 0.329000)"
                                                    fill="#28FFBB"
                                                    fillRule="nonzero"
                                                >
                                                    <path
                                                    d="M0,8.671 L3.445,8.671 C4.264,8.671 4.693,8.619 5.122,8.45 C6.123,8.06 6.773,7.111 6.773,6.058 C6.773,5.447 6.565,4.94 6.188,4.615 C5.915,4.381 5.707,4.29 5.161,4.16 C5.72,3.913 5.928,3.744 6.188,3.367 C6.435,3.003 6.578,2.509 6.578,2.015 C6.578,1.365 6.331,0.78 5.889,0.442 C5.473,0.117 4.953,0 3.835,0 L1.066,0 L0,8.671 Z M3.445,1.729 C4.264,1.729 4.498,1.898 4.498,2.483 C4.498,3.159 4.108,3.445 3.146,3.445 L2.834,3.445 L3.042,1.729 L3.445,1.729 Z M3.289,5.07 C4.238,5.07 4.498,5.252 4.498,5.889 C4.498,6.63 4.082,6.942 3.003,6.942 L2.405,6.942 L2.626,5.07 L3.289,5.07 Z"
                                                    id="Shape"
                                                    />
                                                    <path
                                                    d="M14.209,0 L13.611,4.94 C13.507,5.72 13.416,6.019 13.143,6.331 C12.883,6.617 12.454,6.76 11.908,6.76 C10.946,6.76 10.478,6.318 10.478,5.408 C10.478,5.187 10.491,4.94 10.517,4.68 L11.089,0 L8.905,0 L8.333,4.68 C8.268,5.213 8.229,5.616 8.229,5.876 C8.229,7.735 9.594,8.84 11.843,8.84 C13.117,8.84 14.157,8.502 14.807,7.878 C15.366,7.345 15.587,6.682 15.795,5.018 L16.406,0 L14.209,0 Z"
                                                    id="Path"
                                                    />
                                                    <polygon
                                                    id="Path"
                                                    points="18.226 0 17.16 8.671 19.357 8.671 20.423 0"
                                                    />
                                                    <polygon
                                                    id="Path"
                                                    points="22.243 0 21.177 8.671 26.13 8.671 26.377 6.76 23.608 6.76 24.44 0"
                                                    />
                                                    <path
                                                    d="M27.313,8.671 L30.173,8.671 C31.057,8.671 32.63,8.632 33.943,7.553 C34.71,6.916 35.399,5.889 35.399,4.004 C35.399,2.743 35.048,1.768 34.307,1.079 C33.371,0.208 32.058,0 30.836,0 L28.379,0 L27.313,8.671 Z M30.94,1.911 C31.421,1.911 32.045,1.976 32.513,2.405 C32.89,2.756 33.137,3.341 33.137,4.108 C33.137,4.927 32.838,5.655 32.357,6.097 C32.136,6.305 31.538,6.76 30.407,6.76 L29.744,6.76 L30.342,1.911 L30.94,1.911 Z"
                                                    id="Shape"
                                                    />
                                                    <polygon
                                                    id="Path"
                                                    points="37.401 0 36.335 8.671 41.184 8.671 41.418 6.76 38.766 6.76 38.948 5.252 41.418 5.252 41.652 3.354 39.182 3.354 39.364 1.911 41.912 1.911 42.146 0"
                                                    />
                                                    <path
                                                    d="M48.867,4.615 C49.335,4.121 49.569,3.471 49.569,2.691 C49.569,1.911 49.322,1.196 48.906,0.754 C48.412,0.234 47.684,0 46.501,0 L43.68,0 L42.614,8.671 L44.811,8.671 L45.227,5.226 L47.203,8.671 L49.751,8.671 L47.723,5.304 C48.321,5.096 48.555,4.953 48.867,4.615 Z M46.072,1.742 C46.995,1.742 47.307,2.002 47.307,2.756 C47.307,3.575 46.826,3.965 45.773,3.965 L45.383,3.965 L45.656,1.742 L46.072,1.742 Z"
                                                    id="Shape"
                                                    />
                                                </g>
                                                <path
                                                    d="M84.2079958,0.345426558 L84.1015639,0.950534846 L83.754,3.68842656 L87.1677249,3.68909073 L86.9135256,5.61364557 L83.511,5.61342656 L83.0828572,8.99918015 L80.9371411,9 L81.365,5.61342656 L78,5.61364557 L78.2541994,3.68909073 L81.609,3.68842656 L81.9558478,0.951354693 L82.0491706,0.345426558 L84.2079958,0.345426558 Z"
                                                    id="Combined-Shape"
                                                    fill="#28FFBB"
                                                    fillRule="nonzero"
                                                />
                                                </g>
                                            </svg>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="plb-BetBuilderBanner_Description ">
                                        The biggest fixtures and markets, all in one place
                                        </div>
                                        <div className="plb-BetBuilderBanner_SubHeader ">
                                        Start Building
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="pl-PodLoaderModule_Pod-61 ">
                    <div>
                        <div className="ss-HomepageSpotlight ss-HomepageSpotlight_Width-0 ss-HomepageSpotlight-haslink ">
                        <div className="ss-HomeSpotlightHeader ">
                            <div
                            style={{
                                backgroundImage:
                                "url(https://bet365.com/home/images/Home/imgs/LeagueLogo/zClass_Tennis.svg)"
                            }}
                            className="ss-HomeSpotlightHeader_HeaderImage"
                            />
                            <div className="ss-HomeSpotlightHeader_Title ">
                            ATP/WTA Indian Wells
                            </div>
                            <div className="ss-HomeSpotlightHeader_Link ">
                            {lang["SeeAll"]}
                            </div>
                        </div>
                        <div className="ss-HomepageSpotlight_Modules">
                            <div className="ss-HomepageSpotlight_Pod ss-HomepageSpotlight_PopularModuleContainer ">
                            <div className="pbb-PopularModule pbb-PopularModule_betBoost pbb-PopularModule-homepagespotlight ">
                                <div className="pbb-PopularModule_HeaderWrapper ">
                                <img
                                    src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                    className="pbb-BetBoost "
                                />
                                </div>
                                <div className="pbb-PopularModuleHorizontalScrollBar ">
                                <div className="pbb-PopularModuleHorizontalScrollBar_Wrapper ">
                                    <div className="pbb-PopularModuleHorizontalScrollBar_ScrollContent gl-MarketGrid ">
                                    <div className="pbb-PopularBetBuilder gl-Participant_General ">
                                        <div className="pbb-PopularBetBuilder_Content">
                                        <div className="pbb-PopularBetBuilder_HeaderContainer">
                                            <div className="pbb-PopularBetBuilder_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularBetBuilder_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_EventContainer">
                                            <div className="pbb-PopularBetBuilder_FixtureDescription ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/13.svg"
                                                className="pbb-PopularBetBuilder_FixtureIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularBetBuilder_FixtureText ">
                                                Elena Rybakina vs Suzan Lamens
                                            </div>
                                            <div className="pbb-PopularBetBuilder_FixImageContainer " />
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLines ">
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Elena Rybakina will win the Match
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                5+ Aces for Elena Rybakina
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Over 9.5 Games in Set 1
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_OddsButton ">
                                            <div className="pbb-PopularBetBuilder_PreviousOdds ">
                                            6.00
                                            </div>
                                            <div className="pbb-PopularBetBuilder_Chevron " />
                                            <div className="pbb-PopularBetBuilder_BoostedOdds ">
                                            6.50
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="pbb-PopularBetBuilder gl-Participant_General ">
                                        <div className="pbb-PopularBetBuilder_Content">
                                        <div className="pbb-PopularBetBuilder_HeaderContainer">
                                            <div className="pbb-PopularBetBuilder_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularBetBuilder_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_EventContainer">
                                            <div className="pbb-PopularBetBuilder_FixtureDescription ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/13.svg"
                                                className="pbb-PopularBetBuilder_FixtureIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularBetBuilder_FixtureText ">
                                                Elena Rybakina vs Suzan Lamens
                                            </div>
                                            <div className="pbb-PopularBetBuilder_FixImageContainer " />
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLines ">
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Elena Rybakina will Win a Set
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Suzan Lamens will Win a Set
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                3+ Aces for Elena Rybakina
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                3+ Aces for Suzan Lamens
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_OddsButton ">
                                            <div className="pbb-PopularBetBuilder_PreviousOdds ">
                                            7.00
                                            </div>
                                            <div className="pbb-PopularBetBuilder_Chevron " />
                                            <div className="pbb-PopularBetBuilder_BoostedOdds ">
                                            8.00
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="pbb-PopularBetBuilder gl-Participant_General ">
                                        <div className="pbb-PopularBetBuilder_Content">
                                        <div className="pbb-PopularBetBuilder_HeaderContainer">
                                            <div className="pbb-PopularBetBuilder_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularBetBuilder_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_EventContainer">
                                            <div className="pbb-PopularBetBuilder_FixtureDescription ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/13.svg"
                                                className="pbb-PopularBetBuilder_FixtureIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularBetBuilder_FixtureText ">
                                                Elena Rybakina vs Suzan Lamens
                                            </div>
                                            <div className="pbb-PopularBetBuilder_FixImageContainer " />
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLines ">
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Elena Rybakina will Win in Straight Sets
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Elena Rybakina to win Set 1 6-3,6-4
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Over 8.5 Games in Set 2
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_OddsButton ">
                                            <div className="pbb-PopularBetBuilder_PreviousOdds ">
                                            6.50
                                            </div>
                                            <div className="pbb-PopularBetBuilder_Chevron " />
                                            <div className="pbb-PopularBetBuilder_BoostedOdds ">
                                            7.00
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="pbb-PopularBetBuilder gl-Participant_General ">
                                        <div className="pbb-PopularBetBuilder_Content">
                                        <div className="pbb-PopularBetBuilder_HeaderContainer">
                                            <div className="pbb-PopularBetBuilder_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularBetBuilder_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_EventContainer">
                                            <div className="pbb-PopularBetBuilder_FixtureDescription ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/13.svg"
                                                className="pbb-PopularBetBuilder_FixtureIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularBetBuilder_FixtureText ">
                                                Elena Rybakina vs Suzan Lamens
                                            </div>
                                            <div className="pbb-PopularBetBuilder_FixImageContainer " />
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLines ">
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Suzan Lamens will Win a Set
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Over 8.5 Games in Set 1
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                5+ Match Aces
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_OddsButton ">
                                            <div className="pbb-PopularBetBuilder_PreviousOdds ">
                                            5.50
                                            </div>
                                            <div className="pbb-PopularBetBuilder_Chevron " />
                                            <div className="pbb-PopularBetBuilder_BoostedOdds ">
                                            6.00
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="pbb-PopularBetBuilder gl-Participant_General ">
                                        <div className="pbb-PopularBetBuilder_Content">
                                        <div className="pbb-PopularBetBuilder_HeaderContainer">
                                            <div className="pbb-PopularBetBuilder_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularBetBuilder_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_EventContainer">
                                            <div className="pbb-PopularBetBuilder_FixtureDescription ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/13.svg"
                                                className="pbb-PopularBetBuilder_FixtureIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularBetBuilder_FixtureText ">
                                                Irina-Camelia Begu vs Katie Boulter
                                            </div>
                                            <div className="pbb-PopularBetBuilder_FixImageContainer " />
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLines ">
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Katie Boulter will win the Match
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                5+ Aces for Katie Boulter
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Over 9.5 Games in Set 1
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_OddsButton ">
                                            <div className="pbb-PopularBetBuilder_PreviousOdds ">
                                            6.50
                                            </div>
                                            <div className="pbb-PopularBetBuilder_Chevron " />
                                            <div className="pbb-PopularBetBuilder_BoostedOdds ">
                                            7.00
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="pbb-PopularBetBuilder gl-Participant_General ">
                                        <div className="pbb-PopularBetBuilder_Content">
                                        <div className="pbb-PopularBetBuilder_HeaderContainer">
                                            <div className="pbb-PopularBetBuilder_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularBetBuilder_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_EventContainer">
                                            <div className="pbb-PopularBetBuilder_FixtureDescription ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/13.svg"
                                                className="pbb-PopularBetBuilder_FixtureIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularBetBuilder_FixtureText ">
                                                Irina-Camelia Begu vs Katie Boulter
                                            </div>
                                            <div className="pbb-PopularBetBuilder_FixImageContainer " />
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLines ">
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Irina-Camelia Begu will win the Match
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                3+ Aces for Irina-Camelia Begu
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Over 21.5 Games
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_OddsButton ">
                                            <div className="pbb-PopularBetBuilder_PreviousOdds ">
                                            5.50
                                            </div>
                                            <div className="pbb-PopularBetBuilder_Chevron " />
                                            <div className="pbb-PopularBetBuilder_BoostedOdds ">
                                            6.00
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="ss-HomepageSpotlight_Pod ss-HomepageSpotlight_CouponPodModuleContainer ">
                            <div className="cpm-CouponPodModule cpm-CouponPodModule-0 cpm-CouponPodModule-spotlight ">
                                <div className="cpm-Header ">
                                <div
                                    style={{
                                    backgroundImage:
                                        "url(https://bet365.com/home/images/Home/imgs/LeagueLogo/zClass_Tennis.svg)"
                                    }}
                                    className="cpm-Header_HeaderImage"
                                />
                                <div className="cpm-Header_Title ">
                                    ATP/WTA Indian Wells
                                </div>
                                <div className="cpm-Header_LinkContainer">
                                    <div className="cpm-Header_Link ">
                                    {lang["SeeAll"]}
                                    </div>
                                </div>
                                </div>
                                <div className="cpm-OffersBar ">{/**/}</div>
                                <div className="cpm-CouponPodMarketGrid gl-MarketGrid ">
                                <div className="gl-MarketGroup cpm-CouponPodMarketGroup ">
                                    <div className="gl-MarketGroup_Wrapper ">
                                    <div className="gl-MarketGroupContainer cpm-CouponPodMarketGroup_MarketGroupContainer ">
                                        <div className="cpm-MarketFixture rcl-MarketFixtureDetailsLabelBase gl-Market_General gl-Market_General-columnheader gl-Market_General-haslabels ">
                                        <div className="cpm-MarketFixtureDateHeader cpm-MarketFixtureDateHeader-isdate ">
                                            Fri 07 Mar
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetails cpm-ParticipantFixtureDetails_HasStatIcon gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetails_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetails_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetails_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetails_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetails_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetails_Team ">
                                                        Elena Rybakina
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetails_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetails_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetails_Team ">
                                                        Suzan Lamens
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetails_Details ">
                                                <div className="cpm-ParticipantFixtureDetails_BookCloses ">
                                                20:00
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetails_Boosts bbb-BetBoostCount ">
                                                4
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetails cpm-ParticipantFixtureDetails_HasStatIcon gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetails_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetails_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetails_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetails_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetails_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetails_Team ">
                                                        Kei Nishikori
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetails_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetails_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetails_Team ">
                                                        Ugo Humbert
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetails_Details ">
                                                <div className="cpm-ParticipantFixtureDetails_BookCloses ">
                                                20:00
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetails_Boosts bbb-BetBoostCount ">
                                                4
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetails cpm-ParticipantFixtureDetails_HasStatIcon gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetails_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetails_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetails_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetails_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetails_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetails_Team ">
                                                        Tommy Paul
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetails_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetails_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetails_Team ">
                                                        Tristan Boyer
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetails_Details ">
                                                <div className="cpm-ParticipantFixtureDetails_BookCloses ">
                                                20:00
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetails_Boosts bbb-BetBoostCount ">
                                                4
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetails cpm-ParticipantFixtureDetails_HasStatIcon gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetails_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetails_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetails_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetails_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetails_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetails_Team ">
                                                        Karolina Muchova
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetails_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetails_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetails_Team ">
                                                        Elisabetta Cocciaretto
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetails_Details ">
                                                <div className="cpm-ParticipantFixtureDetails_BookCloses ">
                                                20:00
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetails_Boosts bbb-BetBoostCount ">
                                                4
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetails cpm-ParticipantFixtureDetails_HasStatIcon gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetails_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetails_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetails_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetails_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetails_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetails_Team ">
                                                        Irina-Camelia Begu
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetails_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetails_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetails_Team ">
                                                        Katie Boulter
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetails_Details ">
                                                <div className="cpm-ParticipantFixtureDetails_BookCloses ">
                                                20:00
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetails_Boosts bbb-BetBoostCount ">
                                                4
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetails cpm-ParticipantFixtureDetails_HasStatIcon gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetails_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetails_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetails_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetails_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetails_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetails_Team ">
                                                        Marta Kostyuk
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetails_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetails_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetails_Team ">
                                                        Robin Montgomery
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetails_Details ">
                                                <div className="cpm-ParticipantFixtureDetails_BookCloses ">
                                                20:00
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetails_Boosts bbb-BetBoostCount ">
                                                4
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetails cpm-ParticipantFixtureDetails_HasStatIcon gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetails_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetails_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetails_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetails_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetails_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetails_Team ">
                                                        Alexander Zverev
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetails_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetails_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetails_Team ">
                                                        Tallon Griekspoor
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetails_Details ">
                                                <div className="cpm-ParticipantFixtureDetails_BookCloses ">
                                                20:00
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetails_Boosts bbb-BetBoostCount ">
                                                4
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetails cpm-ParticipantFixtureDetails_HasStatIcon gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetails_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetails_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetails_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetails_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetails_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetails_Team ">
                                                        Fabian Marozsan
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetails_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetails_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetails_Team ">
                                                        Giovanni Mpetshi Perricard
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetails_Details ">
                                                <div className="cpm-ParticipantFixtureDetails_BookCloses ">
                                                20:00
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetails_Boosts bbb-BetBoostCount ">
                                                4
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        </div>
                                        <div className="cpm-MarketOdds gl-Market_General gl-Market_General-columnheader ">
                                        <div className="cpm-MarketOddsHeader ">1</div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap100 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.071
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap100 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            3.50
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap100 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.10
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap100 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.11
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap100 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            2.37
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap100 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.28
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap100 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.25
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap100 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.72
                                            </span>
                                        </div>
                                        </div>
                                        <div className="cpm-MarketOdds gl-Market_General gl-Market_General-columnheader ">
                                        <div className="cpm-MarketOddsHeader ">2</div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap100 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            9.00
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap100 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.30
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap100 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            7.00
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap100 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            6.50
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap100 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.57
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap100 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            3.75
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap100 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            4.00
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap100 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            2.10
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="ss-HomepageSpotlight_Pod ss-HomepageSpotlight_BetBuilerPlusBannerModuleContainer ">
                            <div className="plb-BetBuilderPlusBannerModule plb-BetBuilderPlusBannerModule-width-0 plb-BetBuilderPlusBannerModule-homepage plb-BetBuilderPlusBannerModule-spotlight ">
                                <div className="plb-BetBuilderBanner plb-BetBuilderBanner-small ">
                                <div
                                    className="plb-BetBuilderBanner_OuterWrapper"
                                    style={{
                                    backgroundImage:
                                        "url(https://bet365.com/home/images/Home/imgs/BBPlusPod/BBPlus-PromoBanner-Tennis-680x340.webp)"
                                    }}
                                >
                                    <div className="plb-BetBuilderBanner_Wrapper">
                                    <div className="plb-BetBuilderBanner_Content">
                                        <div className="plb-BetBuilderBanner_BetBuilderPlus">
                                        <div className="plb-BetBuilderLogo ">
                                            <div
                                            className="plb-BetBuilderLogo_Component "
                                            id="plb-BetBuilderLogo"
                                            >
                                            {/*?xml version="1.0" encoding="UTF-8"?*/}
                                            <svg
                                                height="100%"
                                                viewBox="0 0 88 10"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>Bet-Builder-Plus-en</title>
                                                <g
                                                id="Bet-Builder-Plus-en"
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                                >
                                                <g
                                                    id="{word-1}"
                                                    transform="translate(0.546000, 0.329000)"
                                                    fill="#FFFFFF"
                                                    fillRule="nonzero"
                                                >
                                                    <path
                                                    d="M0,8.671 L3.445,8.671 C4.264,8.671 4.693,8.619 5.122,8.45 C6.123,8.06 6.773,7.111 6.773,6.058 C6.773,5.447 6.565,4.94 6.188,4.615 C5.915,4.381 5.707,4.29 5.161,4.16 C5.72,3.913 5.928,3.744 6.188,3.367 C6.435,3.003 6.578,2.509 6.578,2.015 C6.578,1.365 6.331,0.78 5.889,0.442 C5.473,0.117 4.953,0 3.835,0 L1.066,0 L0,8.671 Z M3.445,1.729 C4.264,1.729 4.498,1.898 4.498,2.483 C4.498,3.159 4.108,3.445 3.146,3.445 L2.834,3.445 L3.042,1.729 L3.445,1.729 Z M3.289,5.07 C4.238,5.07 4.498,5.252 4.498,5.889 C4.498,6.63 4.082,6.942 3.003,6.942 L2.405,6.942 L2.626,5.07 L3.289,5.07 Z"
                                                    id="Shape"
                                                    />
                                                    <polygon
                                                    id="Path"
                                                    points="8.905 0 7.839 8.671 12.688 8.671 12.922 6.76 10.27 6.76 10.452 5.252 12.922 5.252 13.156 3.354 10.686 3.354 10.868 1.911 13.416 1.911 13.65 0"
                                                    />
                                                    <polygon
                                                    id="Path"
                                                    points="20.345 1.911 20.579 0 14.69 0 14.456 1.911 16.302 1.911 15.47 8.671 17.654 8.671 18.499 1.911"
                                                    />
                                                </g>
                                                <g
                                                    id="{word-2}"
                                                    transform="translate(24.546000, 0.329000)"
                                                    fill="#28FFBB"
                                                    fillRule="nonzero"
                                                >
                                                    <path
                                                    d="M0,8.671 L3.445,8.671 C4.264,8.671 4.693,8.619 5.122,8.45 C6.123,8.06 6.773,7.111 6.773,6.058 C6.773,5.447 6.565,4.94 6.188,4.615 C5.915,4.381 5.707,4.29 5.161,4.16 C5.72,3.913 5.928,3.744 6.188,3.367 C6.435,3.003 6.578,2.509 6.578,2.015 C6.578,1.365 6.331,0.78 5.889,0.442 C5.473,0.117 4.953,0 3.835,0 L1.066,0 L0,8.671 Z M3.445,1.729 C4.264,1.729 4.498,1.898 4.498,2.483 C4.498,3.159 4.108,3.445 3.146,3.445 L2.834,3.445 L3.042,1.729 L3.445,1.729 Z M3.289,5.07 C4.238,5.07 4.498,5.252 4.498,5.889 C4.498,6.63 4.082,6.942 3.003,6.942 L2.405,6.942 L2.626,5.07 L3.289,5.07 Z"
                                                    id="Shape"
                                                    />
                                                    <path
                                                    d="M14.209,0 L13.611,4.94 C13.507,5.72 13.416,6.019 13.143,6.331 C12.883,6.617 12.454,6.76 11.908,6.76 C10.946,6.76 10.478,6.318 10.478,5.408 C10.478,5.187 10.491,4.94 10.517,4.68 L11.089,0 L8.905,0 L8.333,4.68 C8.268,5.213 8.229,5.616 8.229,5.876 C8.229,7.735 9.594,8.84 11.843,8.84 C13.117,8.84 14.157,8.502 14.807,7.878 C15.366,7.345 15.587,6.682 15.795,5.018 L16.406,0 L14.209,0 Z"
                                                    id="Path"
                                                    />
                                                    <polygon
                                                    id="Path"
                                                    points="18.226 0 17.16 8.671 19.357 8.671 20.423 0"
                                                    />
                                                    <polygon
                                                    id="Path"
                                                    points="22.243 0 21.177 8.671 26.13 8.671 26.377 6.76 23.608 6.76 24.44 0"
                                                    />
                                                    <path
                                                    d="M27.313,8.671 L30.173,8.671 C31.057,8.671 32.63,8.632 33.943,7.553 C34.71,6.916 35.399,5.889 35.399,4.004 C35.399,2.743 35.048,1.768 34.307,1.079 C33.371,0.208 32.058,0 30.836,0 L28.379,0 L27.313,8.671 Z M30.94,1.911 C31.421,1.911 32.045,1.976 32.513,2.405 C32.89,2.756 33.137,3.341 33.137,4.108 C33.137,4.927 32.838,5.655 32.357,6.097 C32.136,6.305 31.538,6.76 30.407,6.76 L29.744,6.76 L30.342,1.911 L30.94,1.911 Z"
                                                    id="Shape"
                                                    />
                                                    <polygon
                                                    id="Path"
                                                    points="37.401 0 36.335 8.671 41.184 8.671 41.418 6.76 38.766 6.76 38.948 5.252 41.418 5.252 41.652 3.354 39.182 3.354 39.364 1.911 41.912 1.911 42.146 0"
                                                    />
                                                    <path
                                                    d="M48.867,4.615 C49.335,4.121 49.569,3.471 49.569,2.691 C49.569,1.911 49.322,1.196 48.906,0.754 C48.412,0.234 47.684,0 46.501,0 L43.68,0 L42.614,8.671 L44.811,8.671 L45.227,5.226 L47.203,8.671 L49.751,8.671 L47.723,5.304 C48.321,5.096 48.555,4.953 48.867,4.615 Z M46.072,1.742 C46.995,1.742 47.307,2.002 47.307,2.756 C47.307,3.575 46.826,3.965 45.773,3.965 L45.383,3.965 L45.656,1.742 L46.072,1.742 Z"
                                                    id="Shape"
                                                    />
                                                </g>
                                                <path
                                                    d="M84.2079958,0.345426558 L84.1015639,0.950534846 L83.754,3.68842656 L87.1677249,3.68909073 L86.9135256,5.61364557 L83.511,5.61342656 L83.0828572,8.99918015 L80.9371411,9 L81.365,5.61342656 L78,5.61364557 L78.2541994,3.68909073 L81.609,3.68842656 L81.9558478,0.951354693 L82.0491706,0.345426558 L84.2079958,0.345426558 Z"
                                                    id="Combined-Shape"
                                                    fill="#28FFBB"
                                                    fillRule="nonzero"
                                                />
                                                </g>
                                            </svg>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="plb-BetBuilderBanner_Description ">
                                        The biggest fixtures and markets, all in one place
                                        </div>
                                        <div className="plb-BetBuilderBanner_SubHeader ">
                                        Start Building
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="pl-PodLoaderModule_Pod-61 ">
                    <div>
                        <div className="ss-HomepageSpotlight ss-HomepageSpotlight_Width-0 ss-HomepageSpotlight-haslink ">
                        <div className="ss-HomeSpotlightHeader ">
                            <div
                            style={{
                                backgroundImage:
                                "url(https://bet365.com/home/images/Home/imgs/LeagueLogo/zClass_Basketball.svg)"
                            }}
                            className="ss-HomeSpotlightHeader_HeaderImage"
                            />
                            <div className="ss-HomeSpotlightHeader_Title ">NBA</div>
                            <div className="ss-HomeSpotlightHeader_Link ">
                            {lang["SeeAll"]}
                            </div>
                        </div>
                        <div className="ss-HomepageSpotlight_Modules">
                            <div className="ss-HomepageSpotlight_Pod ss-HomepageSpotlight_PopularModuleContainer ">
                            <div className="pbb-PopularModule pbb-PopularModule_betBoost pbb-PopularModule-homepagespotlight ">
                                <div className="pbb-PopularModule_HeaderWrapper ">
                                <img
                                    src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                    className="pbb-BetBoost "
                                />
                                <div className="pbb-AllBoostsLabel ">
                                    {lang["allBoosts"]}
                                </div>
                                </div>
                                <div className="pbb-PopularModuleHorizontalScrollBar ">
                                <div className="pbb-PopularModuleHorizontalScrollBar_Wrapper ">
                                    <div className="pbb-PopularModuleHorizontalScrollBar_ScrollContent gl-MarketGrid ">
                                    <div className="pbb-PopularMultiple gl-Participant_General ">
                                        <div className="pbb-PopularMultiple_Content">
                                        <div className="pbb-PopularMultiple_HeaderContainer">
                                            <div className="pbb-PopularMultiple_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularMultiple_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                            <div className="pbb-PopularMultiple_BetCountHeader">
                                            <div className="pbb-PopularMultiple_Flame" />
                                            <div>1.6k placed</div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularMultiple_EventContainer">
                                            <div className="pbb-PopularMultiple_BetType ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/18.svg"
                                                className="pbb-PopularMultiple_BetTypeIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularMultiple_BetTypeDescription ">
                                                {lang["boosted4"]}
                                            </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_MarketName ">
                                            Points
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLines ">
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#00C1BA"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#F0F0F0"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#F0F0F0"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#F0F0F0"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                LaMelo Ball: 25+ Points
                                                </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#F0F0F0"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#940014"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#940014"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#F0F0F0"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                Tyler Herro: 25+ Points
                                                </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#F0F0F0"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#FC7E00"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#FC7E00"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#8947F5"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                Kevin Durant: 25+ Points
                                                </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#022857"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#C40010"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#022857"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#022857"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                James Harden: 25+ Points
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularMultiple_OddsButton ">
                                            <div className="pbb-PopularMultiple_PreviousOdds ">
                                            10.56
                                            </div>
                                            <div className="pbb-PopularMultiple_Chevron " />
                                            <div className="pbb-PopularMultiple_BoostedOdds ">
                                            11.90
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="pbb-PopularMultiple gl-Participant_General ">
                                        <div className="pbb-PopularMultiple_Content">
                                        <div className="pbb-PopularMultiple_HeaderContainer">
                                            <div className="pbb-PopularMultiple_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularMultiple_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                            <div className="pbb-PopularMultiple_BetCountHeader">
                                            <div className="pbb-PopularMultiple_Flame" />
                                            <div>2.4k placed</div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularMultiple_EventContainer">
                                            <div className="pbb-PopularMultiple_BetType ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/18.svg"
                                                className="pbb-PopularMultiple_BetTypeIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularMultiple_BetTypeDescription ">
                                                {lang["boosted3"]}
                                            </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_MarketName ">
                                            Money Line
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLines ">
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#2B72DE"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#FC7E00"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#FC7E00"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#FC7E00"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                OKC Thunder (v POR Trail Blazers)
                                                </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#022857"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#022857"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#79ADE2"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#C0D6FE"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                MIN Timberwolves (v MIA Heat)
                                                </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#022857"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#022857"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#F0F0F0"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#022857"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                DEN Nuggets (v PHX Suns)
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularMultiple_OddsButton ">
                                            <div className="pbb-PopularMultiple_PreviousOdds ">
                                            3.30
                                            </div>
                                            <div className="pbb-PopularMultiple_Chevron " />
                                            <div className="pbb-PopularMultiple_BoostedOdds ">
                                            3.57
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="pbb-PopularMultiple gl-Participant_General ">
                                        <div className="pbb-PopularMultiple_Content">
                                        <div className="pbb-PopularMultiple_HeaderContainer">
                                            <div className="pbb-PopularMultiple_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularMultiple_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                            <div className="pbb-PopularMultiple_BetCountHeader">
                                            <div className="pbb-PopularMultiple_Flame" />
                                            <div>902 placed</div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularMultiple_EventContainer">
                                            <div className="pbb-PopularMultiple_BetType ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/18.svg"
                                                className="pbb-PopularMultiple_BetTypeIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularMultiple_BetTypeDescription ">
                                                {lang["boosted4"]}
                                            </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_MarketName ">
                                            Points
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLines ">
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#F0F0F0"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#F0F0F0"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#F0F0F0"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#940014"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                Evan Mobley: 20+ Points
                                                </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#C40010"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#0A0A0A"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#0A0A0A"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#34165F"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                Scottie Barnes: 20+ Points
                                                </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#002B87"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#002B87"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#002B87"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#002B87"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                Klay Thompson: 20+ Points
                                                </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#022857"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#C40010"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#022857"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#022857"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                Kawhi Leonard: 20+ Points
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularMultiple_OddsButton ">
                                            <div className="pbb-PopularMultiple_PreviousOdds ">
                                            12.36
                                            </div>
                                            <div className="pbb-PopularMultiple_Chevron " />
                                            <div className="pbb-PopularMultiple_BoostedOdds ">
                                            14.56
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="pbb-PopularMultiple gl-Participant_General ">
                                        <div className="pbb-PopularMultiple_Content">
                                        <div className="pbb-PopularMultiple_HeaderContainer">
                                            <div className="pbb-PopularMultiple_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularMultiple_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                            <div className="pbb-PopularMultiple_BetCountHeader">
                                            <div className="pbb-PopularMultiple_Flame" />
                                            <div>854 placed</div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularMultiple_EventContainer">
                                            <div className="pbb-PopularMultiple_BetType ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/18.svg"
                                                className="pbb-PopularMultiple_BetTypeIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularMultiple_BetTypeDescription ">
                                                {lang["boosted3"]}
                                            </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_MarketName ">
                                            Double Double
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLines ">
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#F0F0F0"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#F0F0F0"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#F0F0F0"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#940014"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                Jarrett Allen - Yes
                                                </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#F0F0F0"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#002B87"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#002B87"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#0046A8"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                Zach Edey - Yes
                                                </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#F0F0F0"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#940014"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#940014"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#F0F0F0"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                Bam Adebayo - Yes
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularMultiple_OddsButton ">
                                            <div className="pbb-PopularMultiple_PreviousOdds ">
                                            12.52
                                            </div>
                                            <div className="pbb-PopularMultiple_Chevron " />
                                            <div className="pbb-PopularMultiple_BoostedOdds ">
                                            14.89
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="pbb-PopularMultiple gl-Participant_General ">
                                        <div className="pbb-PopularMultiple_Content">
                                        <div className="pbb-PopularMultiple_HeaderContainer">
                                            <div className="pbb-PopularMultiple_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularMultiple_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                            <div className="pbb-PopularMultiple_BetCountHeader">
                                            <div className="pbb-PopularMultiple_Flame" />
                                            <div>496 placed</div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularMultiple_EventContainer">
                                            <div className="pbb-PopularMultiple_BetType ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/18.svg"
                                                className="pbb-PopularMultiple_BetTypeIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularMultiple_BetTypeDescription ">
                                                {lang["boosted4"]}
                                            </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_MarketName ">
                                            1st Quarter Points
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLines ">
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#F0F0F0"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#002B87"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#002B87"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#0046A8"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                Ja Morant: 5+ Points
                                                </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#F0F0F0"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#C40010"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#C40010"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#0A0A0A"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                Anfernee Simons: 5+ Points
                                                </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#0A0A0A"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#482F8A"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#0A0A0A"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#482F8A"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                DeMar DeRozan: 5+ Points
                                                </div>
                                            </div>
                                            <div className="pbb-PopularMultiple_BetLine ">
                                                <div className="pbb-PopularMultiple_BetLineImageContainer ">
                                                <div className="pbb-PopularMultiple_BetLineImage-teamkit pbb-PopularMultiple_BetLineImage-teamkitfixed pbb-PopularMultiple_BetLineImage tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                    <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                    >
                                                    <defs>
                                                        <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                        />
                                                        <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                        >
                                                        <use xlinkHref="#b" />
                                                        </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                        <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#022857"
                                                        />
                                                        <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#022857"
                                                        />
                                                        <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#F0F0F0"
                                                        />
                                                        <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#022857"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                        />
                                                        <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                        />
                                                        <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                        />
                                                        <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                        />
                                                    </g>
                                                    </svg>
                                                </div>
                                                </div>
                                                <div className="pbb-PopularMultiple_BetLineText ">
                                                Jamal Murray: 5+ Points
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularMultiple_OddsButton ">
                                            <div className="pbb-PopularMultiple_PreviousOdds ">
                                            5.66
                                            </div>
                                            <div className="pbb-PopularMultiple_Chevron " />
                                            <div className="pbb-PopularMultiple_BoostedOdds ">
                                            6.50
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="pbb-PopularBetBuilder gl-Participant_General ">
                                        <div className="pbb-PopularBetBuilder_Content">
                                        <div className="pbb-PopularBetBuilder_HeaderContainer">
                                            <div className="pbb-PopularBetBuilder_BoostBadgeContainer">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/PopularModule/assets/BetBoostBadges/Bet-Boost-1.svg"
                                                className="pbb-PopularBetBuilder_BoostLogo pbb-BetBoost "
                                            />
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetCountHeader">
                                            <div className="pbb-PopularBetBuilder_Flame" />
                                            <div>431 placed</div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_EventContainer">
                                            <div className="pbb-PopularBetBuilder_FixtureDescription ">
                                            <img
                                                src="https://bet365.com/sports-assets/sports/ClassificationIconsLib/assets/classification/18.svg"
                                                className="pbb-PopularBetBuilder_FixtureIcon cis-ClassificationIconSmall "
                                            />
                                            <div className="pbb-PopularBetBuilder_FixtureText ">
                                                CLE Cavaliers @ CHA Hornets
                                            </div>
                                            <div className="pbb-PopularBetBuilder_FixImageContainer ">
                                                <div className="pbb-PopularBetBuilder_FixImage pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitfixed tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                >
                                                    <defs>
                                                    <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                    />
                                                    <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                    />
                                                    <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                    <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#940014"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                    />
                                                    <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                    />
                                                    </g>
                                                </svg>
                                                </div>
                                                <div className="pbb-PopularBetBuilder_FixImage pbb-PopularBetBuilder_FixImage-teamkit pbb-PopularBetBuilder_FixImage-teamkitfixed tk-TeamKit tk-TeamKit-9 tk-TeamKit-9-1 ">
                                                <svg
                                                    className="tk-TeamKit_SVG"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width={32}
                                                    height={56}
                                                    viewBox="0 0 32 56"
                                                >
                                                    <defs>
                                                    <path
                                                        id="a"
                                                        d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                    />
                                                    <mask
                                                        id="c"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <mask
                                                        id="d"
                                                        x={0}
                                                        y={0}
                                                        width={32}
                                                        height={20}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#a" />
                                                    </mask>
                                                    <path
                                                        d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                        id="b"
                                                    />
                                                    <mask
                                                        id="e"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    <mask
                                                        id="f"
                                                        x={0}
                                                        y={0}
                                                        width={24}
                                                        height={37}
                                                        fill="#fff"
                                                    >
                                                        <use xlinkHref="#b" />
                                                    </mask>
                                                    </defs>
                                                    <g fill="none" fillRule="evenodd">
                                                    <path
                                                        d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                        id="color1"
                                                        fill="#00C1BA"
                                                    />
                                                    <path
                                                        d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                        id="color2"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                        id="color4"
                                                        fill="#F0F0F0"
                                                    />
                                                    <path
                                                        d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                        id="color3"
                                                        fill="#F0F0F0"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#c)"
                                                        strokeWidth={4}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#d)"
                                                        strokeWidth={2}
                                                        xlinkHref="#a"
                                                    />
                                                    <use
                                                        strokeOpacity=".07"
                                                        stroke="#FFF"
                                                        mask="url(#e)"
                                                        strokeWidth={4}
                                                        xlinkHref="#b"
                                                    />
                                                    <use
                                                        stroke="#272727"
                                                        mask="url(#f)"
                                                        strokeWidth={2}
                                                        xlinkHref="#b"
                                                    />
                                                    <path
                                                        d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                        fill="#000"
                                                        opacity=".2"
                                                    />
                                                    </g>
                                                </svg>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLines ">
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Donovan Mitchell: 25+ Points
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Donovan Mitchell: 5+ Assists
                                                </div>
                                            </div>
                                            <div className="pbb-PopularBetBuilder_BetLine ">
                                                <div className="pbb-PopularBetBuilder_BetLineCircleContainer">
                                                <div className="pbb-PopularBetBuilder_BetLineCircle" />
                                                </div>
                                                <div className="pbb-PopularBetBuilder_BetLineText ">
                                                Donovan Mitchell: 5+ Three-Pointers
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pbb-PopularBetBuilder_OddsButton ">
                                            <div className="pbb-PopularBetBuilder_PreviousOdds ">
                                            5.75
                                            </div>
                                            <div className="pbb-PopularBetBuilder_Chevron " />
                                            <div className="pbb-PopularBetBuilder_BoostedOdds ">
                                            6.50
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="ss-HomepageSpotlight_Pod ss-HomepageSpotlight_CouponPodModuleContainer ">
                            <div className="cpm-CouponPodModule cpm-CouponPodModule-0 cpm-CouponPodModule-spotlight ">
                                <div className="cpm-Header ">
                                <div
                                    style={{
                                    backgroundImage:
                                        "url(https://bet365.com/home/images/Home/imgs/LeagueLogo/zClass_Basketball.svg)"
                                    }}
                                    className="cpm-Header_HeaderImage"
                                />
                                <div className="cpm-Header_Title ">NBA</div>
                                <div className="cpm-Header_LinkContainer">
                                    <div className="cpm-Header_Link ">
                                    {lang["SeeAll"]}
                                    </div>
                                </div>
                                </div>
                                <div className="cpm-OffersBar ">{/**/}</div>
                                <div className="cpm-CouponPodMarketGrid gl-MarketGrid ">
                                <div className="gl-MarketGroup cpm-CouponPodMarketGroup ">
                                    <div className="gl-MarketGroup_Wrapper ">
                                    <div className="gl-MarketGroupContainer cpm-CouponPodMarketGroup_MarketGroupContainer ">
                                        <div className="cpm-MarketFixture rcl-MarketFixtureDetailsLabelBase gl-Market_General gl-Market_General-columnheader gl-Market_General-haslabels ">
                                        <div className="cpm-MarketFixtureDateHeader cpm-MarketFixtureDateHeader-isdate ">
                                            Sat 08 Mar
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetailsBasketball cpm-ParticipantFixtureDetailsBasketball_HasStatIcon rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#940014"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        CLE Cavaliers
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#00C1BA"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#F0F0F0"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        CHA Hornets
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_Details ">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_BookCloses ">
                                                01:10
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_Boosts bbb-BetBoostCount ">
                                                7
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetailsBasketball Hidden gl-Market_General-cn1 " />
                                        <div className="cpm-ParticipantFixtureDetailsBasketball cpm-ParticipantFixtureDetailsBasketball_HasStatIcon rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#002B87"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#002B87"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#0046A8"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        MEM Grizzlies
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#002B87"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#002B87"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#002B87"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#002B87"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        DAL Mavericks
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_Details ">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_BookCloses ">
                                                01:40
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_Boosts bbb-BetBoostCount ">
                                                7
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetailsBasketball Hidden gl-Market_General-cn1 " />
                                        <div className="cpm-ParticipantFixtureDetailsBasketball cpm-ParticipantFixtureDetailsBasketball_HasStatIcon rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#F0F0F0"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        UTA Jazz
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#C40010"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#0A0A0A"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#0A0A0A"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#34165F"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        TOR Raptors
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_Details ">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_BookCloses ">
                                                01:40
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_Boosts bbb-BetBoostCount ">
                                                5
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetailsBasketball Hidden gl-Market_General-cn1 " />
                                        <div className="cpm-ParticipantFixtureDetailsBasketball cpm-ParticipantFixtureDetailsBasketball_HasStatIcon rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#C40010"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#C40010"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#0A0A0A"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        POR Trail Blazers
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#2B72DE"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#FC7E00"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#FC7E00"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#FC7E00"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        OKC Thunder
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_Details ">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_BookCloses ">
                                                02:10
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_Boosts bbb-BetBoostCount ">
                                                6
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetailsBasketball Hidden gl-Market_General-cn1 " />
                                        <div className="cpm-ParticipantFixtureDetailsBasketball cpm-ParticipantFixtureDetailsBasketball_HasStatIcon rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#022857"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#022857"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#79ADE2"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#C0D6FE"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        MIN Timberwolves
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#940014"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#940014"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#F0F0F0"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        MIA Heat
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_Details ">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_BookCloses ">
                                                02:10
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_Boosts bbb-BetBoostCount ">
                                                7
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetailsBasketball Hidden gl-Market_General-cn1 " />
                                        <div className="cpm-ParticipantFixtureDetailsBasketball cpm-ParticipantFixtureDetailsBasketball_HasStatIcon rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#FC7E00"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#FC7E00"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#8947F5"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        PHX Suns
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#022857"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#022857"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#022857"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        DEN Nuggets
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_Details ">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_BookCloses ">
                                                04:10
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_Boosts bbb-BetBoostCount ">
                                                7
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetailsBasketball Hidden gl-Market_General-cn1 " />
                                        <div className="cpm-ParticipantFixtureDetailsBasketball cpm-ParticipantFixtureDetailsBasketball_HasStatIcon rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#0A0A0A"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#0A0A0A"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#0A0A0A"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        SA Spurs
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#0A0A0A"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#482F8A"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#0A0A0A"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#482F8A"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        SAC Kings
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_Details ">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_BookCloses ">
                                                04:10
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_Boosts bbb-BetBoostCount ">
                                                5
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetailsBasketball Hidden gl-Market_General-cn1 " />
                                        <div className="cpm-ParticipantFixtureDetailsBasketball cpm-ParticipantFixtureDetailsBasketball_HasStatIcon gl-Market_General-cn1 ">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_LhsContainer">
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_TeamsContainer">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamNames">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#F0F0F0"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#FC7E00"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#FC7E00"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#FC7E00"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        NY Knicks
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_TeamContainer ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_KitWrapper ">
                                                    <svg
                                                        className="tk-TeamKit_SVG"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={32}
                                                        height={56}
                                                        viewBox="0 0 32 56"
                                                    >
                                                        <defs>
                                                        <path
                                                            id="a"
                                                            d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z"
                                                        />
                                                        <mask
                                                            id="c"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <mask
                                                            id="d"
                                                            x={0}
                                                            y={0}
                                                            width={32}
                                                            height={20}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#a" />
                                                        </mask>
                                                        <path
                                                            d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z"
                                                            id="b"
                                                        />
                                                        <mask
                                                            id="e"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        <mask
                                                            id="f"
                                                            x={0}
                                                            y={0}
                                                            width={24}
                                                            height={37}
                                                            fill="#fff"
                                                        >
                                                            <use xlinkHref="#b" />
                                                        </mask>
                                                        </defs>
                                                        <g fill="none" fillRule="evenodd">
                                                        <path
                                                            d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z"
                                                            id="color1"
                                                            fill="#022857"
                                                        />
                                                        <path
                                                            d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z"
                                                            id="color2"
                                                            fill="#C40010"
                                                        />
                                                        <path
                                                            d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z"
                                                            id="color4"
                                                            fill="#022857"
                                                        />
                                                        <path
                                                            d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z"
                                                            id="color3"
                                                            fill="#022857"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#c)"
                                                            strokeWidth={4}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#d)"
                                                            strokeWidth={2}
                                                            xlinkHref="#a"
                                                        />
                                                        <use
                                                            strokeOpacity=".07"
                                                            stroke="#FFF"
                                                            mask="url(#e)"
                                                            strokeWidth={4}
                                                            xlinkHref="#b"
                                                        />
                                                        <use
                                                            stroke="#272727"
                                                            mask="url(#f)"
                                                            strokeWidth={2}
                                                            xlinkHref="#b"
                                                        />
                                                        <path
                                                            d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z"
                                                            fill="#000"
                                                            opacity=".2"
                                                        />
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_TeamInfoWrapper ">
                                                    <div className="cpm-ParticipantFixtureDetailsBasketball_Team ">
                                                        LA Clippers
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="cpm-ParticipantFixtureDetailsBasketball_Details ">
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_BookCloses ">
                                                04:40
                                                </div>
                                                <div className="cpm-FixtureIconBlock ">
                                                <div className="cpm-FixtureIconBlock_VideoIcon" />
                                                </div>
                                                <div className="cpm-ParticipantFixtureDetailsBasketball_Boosts bbb-BetBoostCount ">
                                                6
                                                </div>
                                            </div>
                                            </div>
                                            <div className="cpm-StatsIcon " />
                                        </div>
                                        <div className="cpm-ParticipantFixtureDetailsBasketball Hidden gl-Market_General-cn1 " />
                                        </div>
                                        <div className="cpm-MarketOdds gl-Market_General gl-Market_General-columnheader ">
                                        <div className="cpm-MarketOddsHeader ">
                                            Spread
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            -16.0
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            +16.0
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            -9.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            +9.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            +6.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            -6.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            +2.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.95
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            -2.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.86
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            -5.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            +5.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            +7.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.86
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            -7.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.95
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            +6.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.95
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            -6.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.86
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            +7.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            -7.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        </div>
                                        <div className="cpm-MarketOdds gl-Market_General gl-Market_General-columnheader ">
                                        <div className="cpm-MarketOddsHeader ">
                                            {lang["total"]}
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            O 234.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            U 234.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            O 238.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            U 238.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            O 229.0
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            U 229.0
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            O 229.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            U 229.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            O 215.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            U 215.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            O 238.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            U 238.5
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            O 233.0
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            U 233.0
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            O 218.0
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantHandicap50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Handicap">
                                            U 218.0
                                            </span>
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.90
                                            </span>
                                        </div>
                                        </div>
                                        <div className="cpm-MarketOdds gl-Market_General gl-Market_General-columnheader ">
                                        <div className="cpm-MarketOddsHeader ">
                                            Money Line
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.076
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            9.00
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.23
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            4.25
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            3.00
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.40
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            2.25
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.66
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.47
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            2.75
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            3.35
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.34
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            3.10
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 rcl-MarketCouponAdvancedBase_Divider gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.38
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            3.40
                                            </span>
                                        </div>
                                        <div className="cpm-ParticipantOdds gl-Participant_General cpm-ParticipantOddsOnly50 gl-Market_General-cn1 ">
                                            <span className="cpm-ParticipantOdds_Odds">
                                            1.33
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="ss-HomepageSpotlight_Pod ss-HomepageSpotlight_PlayerParlayRibbonModuleContainer ">
                            <div className="ppr-PlayerParlayRibbonModule-spotlight ppr-PlayerParlayRibbonModule ">
                                <div className="ppr-PlayerParlayHeader ">
                                <div className="ppr-PlayerParlayHeader_Text ">
                                    <span>Player </span>
                                    <span className="ppr-PlayerParlayHeader_Text-green ">
                                    {lang["parlay"]}
                                    </span>
                                </div>
                                <div className="ppr-PlayerParlayHeader_Link ">
                                    {lang["SeeAll"]}
                                </div>
                                </div>
                                <div className="ppr-PlayerParlayRibbonModule_Container ">
                                <div className="ppr-PlayerNavBarScroller ">
                                    <div className="ppr-PlayerNavBarScroller_Wrapper ">
                                    <div className="ppr-PlayerNavBarScroller_Contents ">
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 tk-TeamKitBackImage tk-TeamKitBackImage-18 ">
                                            <img
                                                src="https://content001.bet365.com/SoccerSilks/Basket_Back_DENNuggets_Icon_v1.svg"
                                                draggable="false"
                                                className="tk-TeamKitBackImage_SVG "
                                            />
                                            <div className="tk-TeamKitBackNumberOnly ">
                                                <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                                >
                                                <g
                                                    stroke="none"
                                                    strokeWidth={1}
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <path
                                                    fill="transparent"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                    />
                                                </g>
                                                <text
                                                    fill="#F0F0F0"
                                                    fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                    fontSize={24}
                                                    fontWeight={700}
                                                    letterSpacing="-0.5"
                                                >
                                                    <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                    >
                                                    15
                                                    </tspan>
                                                </text>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            N.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Jokic
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 tk-TeamKitBackImage tk-TeamKitBackImage-18 ">
                                            <img
                                                src="https://content001.bet365.com/SoccerSilks/Basket_Back_CLECavs_Association_v1.svg"
                                                draggable="false"
                                                className="tk-TeamKitBackImage_SVG "
                                            />
                                            <div className="tk-TeamKitBackNumberOnly ">
                                                <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                                >
                                                <g
                                                    stroke="none"
                                                    strokeWidth={1}
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <path
                                                    fill="transparent"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                    />
                                                </g>
                                                <text
                                                    fill="#5F002B"
                                                    fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                    fontSize={24}
                                                    fontWeight={700}
                                                    letterSpacing="-0.5"
                                                >
                                                    <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                    >
                                                    45
                                                    </tspan>
                                                </text>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            D.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Mitchell
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 tk-TeamKitBackImage tk-TeamKitBackImage-18 ">
                                            <img
                                                src="https://content001.bet365.com/SoccerSilks/Basket_Back_MINTimberwolves_Icon_v1.svg"
                                                draggable="false"
                                                className="tk-TeamKitBackImage_SVG "
                                            />
                                            <div className="tk-TeamKitBackNumberOnly ">
                                                <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                                >
                                                <g
                                                    stroke="none"
                                                    strokeWidth={1}
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <path
                                                    fill="transparent"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                    />
                                                </g>
                                                <text
                                                    fill="#B0E8E6"
                                                    fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                    fontSize={24}
                                                    fontWeight={700}
                                                    letterSpacing="-0.5"
                                                >
                                                    <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                    >
                                                    5
                                                    </tspan>
                                                </text>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            A.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Edwards
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 tk-TeamKitBackImage tk-TeamKitBackImage-18 ">
                                            <img
                                                src="https://content001.bet365.com/SoccerSilks/Basket_Back_CHAHornets_Icon_v1.svg"
                                                draggable="false"
                                                className="tk-TeamKitBackImage_SVG "
                                            />
                                            <div className="tk-TeamKitBackNumberOnly ">
                                                <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                                >
                                                <g
                                                    stroke="none"
                                                    strokeWidth={1}
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <path
                                                    fill="transparent"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                    />
                                                </g>
                                                <text
                                                    fill="#F0F0F0"
                                                    fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                    fontSize={24}
                                                    fontWeight={700}
                                                    letterSpacing="-0.5"
                                                >
                                                    <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                    >
                                                    1
                                                    </tspan>
                                                </text>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            L.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Ball
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 tk-TeamKitBackImage tk-TeamKitBackImage-18 ">
                                            <img
                                                src="https://content001.bet365.com/SoccerSilks/Basket_Back_LAClippers_Icon_v1.svg"
                                                draggable="false"
                                                className="tk-TeamKitBackImage_SVG "
                                            />
                                            <div className="tk-TeamKitBackNumberOnly ">
                                                <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                                >
                                                <g
                                                    stroke="none"
                                                    strokeWidth={1}
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <path
                                                    fill="transparent"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                    />
                                                </g>
                                                <text
                                                    fill="#F0F0F0"
                                                    fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                    fontSize={24}
                                                    fontWeight={700}
                                                    letterSpacing="-0.5"
                                                >
                                                    <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                    >
                                                    1
                                                    </tspan>
                                                </text>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            J.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Harden
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 tk-TeamKitBackImage tk-TeamKitBackImage-18 ">
                                            <img
                                                src="https://content001.bet365.com/SoccerSilks/Basket_Back_PHXSuns_Association_v1.svg"
                                                draggable="false"
                                                className="tk-TeamKitBackImage_SVG "
                                            />
                                            <div className="tk-TeamKitBackNumberOnly ">
                                                <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                                >
                                                <g
                                                    stroke="none"
                                                    strokeWidth={1}
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <path
                                                    fill="transparent"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                    />
                                                </g>
                                                <text
                                                    fill="#34165F"
                                                    fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                    fontSize={24}
                                                    fontWeight={700}
                                                    letterSpacing="-0.5"
                                                >
                                                    <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                    >
                                                    35
                                                    </tspan>
                                                </text>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            K.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Durant
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 tk-TeamKitBackImage tk-TeamKitBackImage-18 ">
                                            <img
                                                src="https://content001.bet365.com/SoccerSilks/Basket_Back_PHXSuns_Association_v1.svg"
                                                draggable="false"
                                                className="tk-TeamKitBackImage_SVG "
                                            />
                                            <div className="tk-TeamKitBackNumberOnly ">
                                                <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                                >
                                                <g
                                                    stroke="none"
                                                    strokeWidth={1}
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <path
                                                    fill="transparent"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                    />
                                                </g>
                                                <text
                                                    fill="#34165F"
                                                    fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                    fontSize={24}
                                                    fontWeight={700}
                                                    letterSpacing="-0.5"
                                                >
                                                    <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                    >
                                                    1
                                                    </tspan>
                                                </text>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            D.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Booker
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 tk-TeamKitBackImage tk-TeamKitBackImage-18 ">
                                            <img
                                                src="https://content001.bet365.com/SoccerSilks/Basket_Back_MEMGrizzlies_Association_v1.svg"
                                                draggable="false"
                                                className="tk-TeamKitBackImage_SVG "
                                            />
                                            <div className="tk-TeamKitBackNumberOnly ">
                                                <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                                >
                                                <g
                                                    stroke="none"
                                                    strokeWidth={1}
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <path
                                                    fill="transparent"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                    />
                                                </g>
                                                <text
                                                    fill="#0C183A"
                                                    fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                    fontSize={24}
                                                    fontWeight={700}
                                                    letterSpacing="-0.5"
                                                >
                                                    <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                    >
                                                    12
                                                    </tspan>
                                                </text>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            J.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Morant
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 tk-TeamKitBackImage tk-TeamKitBackImage-18 ">
                                            <img
                                                src="https://content001.bet365.com/SoccerSilks/Basket_Back_SASpurs_Association_v1.svg"
                                                draggable="false"
                                                className="tk-TeamKitBackImage_SVG "
                                            />
                                            <div className="tk-TeamKitBackNumberOnly ">
                                                <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                                >
                                                <g
                                                    stroke="none"
                                                    strokeWidth={1}
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <path
                                                    fill="transparent"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                    />
                                                </g>
                                                <text
                                                    fill="#0A0A0A"
                                                    fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                    fontSize={24}
                                                    fontWeight={700}
                                                    letterSpacing="-0.5"
                                                >
                                                    <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                    >
                                                    4
                                                    </tspan>
                                                </text>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            D.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Fox
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 tk-TeamKitBackImage tk-TeamKitBackImage-18 ">
                                            <img
                                                src="https://content001.bet365.com/SoccerSilks/Basket_Back_MIAHeat_Association_v1.svg"
                                                draggable="false"
                                                className="tk-TeamKitBackImage_SVG "
                                            />
                                            <div className="tk-TeamKitBackNumberOnly ">
                                                <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                                >
                                                <g
                                                    stroke="none"
                                                    strokeWidth={1}
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <path
                                                    fill="transparent"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                    />
                                                </g>
                                                <text
                                                    fill="#940014"
                                                    fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                    fontSize={24}
                                                    fontWeight={700}
                                                    letterSpacing="-0.5"
                                                >
                                                    <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                    >
                                                    13
                                                    </tspan>
                                                </text>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            B.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Adebayo
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 tk-TeamKitBackImage tk-TeamKitBackImage-18 ">
                                            <img
                                                src="https://content001.bet365.com/SoccerSilks/Basket_Back_SACKings_Icon_v1.svg"
                                                draggable="false"
                                                className="tk-TeamKitBackImage_SVG "
                                            />
                                            <div className="tk-TeamKitBackNumberOnly ">
                                                <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                                >
                                                <g
                                                    stroke="none"
                                                    strokeWidth={1}
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <path
                                                    fill="transparent"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                    />
                                                </g>
                                                <text
                                                    fill="#F0F0F0"
                                                    fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                    fontSize={24}
                                                    fontWeight={700}
                                                    letterSpacing="-0.5"
                                                >
                                                    <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                    >
                                                    8
                                                    </tspan>
                                                </text>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            Z.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            LaVine
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 tk-TeamKitBackImage tk-TeamKitBackImage-18 ">
                                            <img
                                                src="https://content001.bet365.com/SoccerSilks/Basket_Back_CHAHornets_Icon_v1.svg"
                                                draggable="false"
                                                className="tk-TeamKitBackImage_SVG "
                                            />
                                            <div className="tk-TeamKitBackNumberOnly ">
                                                <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                                >
                                                <g
                                                    stroke="none"
                                                    strokeWidth={1}
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <path
                                                    fill="transparent"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                    />
                                                </g>
                                                <text
                                                    fill="#F0F0F0"
                                                    fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                    fontSize={24}
                                                    fontWeight={700}
                                                    letterSpacing="-0.5"
                                                >
                                                    <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                    >
                                                    0
                                                    </tspan>
                                                </text>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            M.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Bridges
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 tk-TeamKitBackImage tk-TeamKitBackImage-18 ">
                                            <img
                                                src="https://content001.bet365.com/SoccerSilks/Basket_Back_UTAJazz_Association_v1.svg"
                                                draggable="false"
                                                className="tk-TeamKitBackImage_SVG "
                                            />
                                            <div className="tk-TeamKitBackNumberOnly ">
                                                <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                                >
                                                <g
                                                    stroke="none"
                                                    strokeWidth={1}
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <path
                                                    fill="transparent"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                    />
                                                </g>
                                                <text
                                                    fill="#0A0A0A"
                                                    fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                    fontSize={24}
                                                    fontWeight={700}
                                                    letterSpacing="-0.5"
                                                >
                                                    <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                    >
                                                    26
                                                    </tspan>
                                                </text>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            K.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            George
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 tk-TeamKitBackImage tk-TeamKitBackImage-18 ">
                                            <img
                                                src="https://content001.bet365.com/SoccerSilks/Basket_Back_SACKings_Icon_v1.svg"
                                                draggable="false"
                                                className="tk-TeamKitBackImage_SVG "
                                            />
                                            <div className="tk-TeamKitBackNumberOnly ">
                                                <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                                >
                                                <g
                                                    stroke="none"
                                                    strokeWidth={1}
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <path
                                                    fill="transparent"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                    />
                                                </g>
                                                <text
                                                    fill="#F0F0F0"
                                                    fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                    fontSize={24}
                                                    fontWeight={700}
                                                    letterSpacing="-0.5"
                                                >
                                                    <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                    >
                                                    10
                                                    </tspan>
                                                </text>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            D.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            DeRozan
                                            </span>
                                        </div>
                                        </div>
                                        <div className="ppr-PlayerButton ">
                                        <div className="ppr-PlayerButton_AssetWrapper ppr-PlayerButton_AssetWrapper-18">
                                            <div className="ppr-PlayerButton_Kit ppr-PlayerButton_Kit-18 tk-TeamKitBackImage tk-TeamKitBackImage-18 ">
                                            <img
                                                src="https://content001.bet365.com/SoccerSilks/Basket_Back_DALMavs_Icon_v1.svg"
                                                draggable="false"
                                                className="tk-TeamKitBackImage_SVG "
                                            />
                                            <div className="tk-TeamKitBackNumberOnly ">
                                                <svg
                                                className="tk-TeamKitBack_SVG"
                                                viewBox="0 0 48 52"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                sport="basketball-rear"
                                                title="Basketball Fallback Kit"
                                                >
                                                <g
                                                    stroke="none"
                                                    strokeWidth={1}
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <path
                                                    fill="transparent"
                                                    fillRule="evenodd"
                                                    d="M11.2029013,2.72208784 L15.3853333,0 C17.7223977,2.05575174 20.5937754,3.17140664 23.9994667,3.34696471 C29.1080035,3.61030181 32.4856554,0 32.6146667,0 C32.7006741,0 34.0948181,0.907362614 36.7970987,2.72208784 C36.2761587,4.34030878 31.7592501,16.8991443 40,20.8770008 C39.4947306,35.6401718 39.3565119,45.6977328 39.585344,51.0496837 C29.5506702,52.3629665 19.1604427,52.3047323 8.41466133,50.8749812 C8.60599846,42.0790254 8.46777801,32.0796986 8,20.8770008 C13.0488889,18.2250965 14.1165227,12.1734588 11.2029013,2.72208784 Z"
                                                    coloured=""
                                                    opacity={1}
                                                    id="basketball-rear-base"
                                                    mask="url(#kitMask)"
                                                    sport="basketball-rear"
                                                    />
                                                </g>
                                                <text
                                                    fill="#F0F0F0"
                                                    fontFamily="FuturaPTCond-Bold, -apple-system, sans-serif-condensed, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans Condensed, sans-serif"
                                                    fontSize={24}
                                                    fontWeight={700}
                                                    letterSpacing="-0.5"
                                                >
                                                    <tspan
                                                    textAnchor="middle"
                                                    x="23.5"
                                                    y={36}
                                                    >
                                                    31
                                                    </tspan>
                                                </text>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="ppr-PlayerButton_Name ">
                                            K.{" "}
                                            <span className="ppr-PlayerButton_Name-bold ">
                                            {" "}
                                            Thompson
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="pl-PodLoaderModule_Pod-27 ">
                    <div />
                    </div>
                    <div className="pl-PodLoaderModule_Pod-5 ">
                    <div />
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Body;