import Head from "next/head";
import Script from 'next/script'

import {
    AfroBeats,
    // Boundaryless,
    CallToAction,
    // ECommerce,
    // ForBusiness,
    ForCreators,
    // ForEveryone,
    ForRetailers,
    ForMovies,
    Header, HeaderIllustration,
    // Introducing,
    // Logistics,
    // Manufacturers,
    OurPartners,
    OurTools,
    // OurWhy,
    Retailers,
    // Showcase,
    // SpeakToYou,
    Values,
    // VideoStream,
    Studio,
} from "../modules/AboutPage";
import styles from "../modules/AboutPage/index.module.scss";
import { ActionButton, Footer } from "../common/components";
import {useRef, useState} from "react";
import 'swiper/css';
import { useRouter } from "next/router";


export default function Home() {
    const [videoPlaying, setIsVideoPlaying] = useState(false);
    const vidRef = useRef(null);
    const showVideo = () => {
        if (!videoPlaying) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "scroll";
        }
        setIsVideoPlaying(!videoPlaying);
    };
    const playVideo = () => {
        if (vidRef.current) {
            vidRef.current.play();
        }

    };
    const stopVideo = () => {
        if (vidRef.current) {
            vidRef.current.pause();
            vidRef.current.currentTime = 0;
        }

    };
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>edekee</title>
                <meta name="description" content="Edekee Official Website"/>
                <link rel="preconnect" href="https://d3t7szus8c85is.cloudfront.net"/>
                <link rel="apple-touch-icon" sizes="57x57"
                      href="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/57x57.png"/>
                <link rel="apple-touch-icon" sizes="114x114"
                      href="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/114x114.png"/>
                <link rel="apple-touch-icon" sizes="72x72"
                      href="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/72x72.png"/>

                <link rel="icon" href="/edekee_favicon.svg"/>
            </Head>

            <main>
                <div>
                    <Header playVideo={playVideo} showVideo={showVideo}/>
                    <div>
                        <HeaderIllustration/>
                        <Values/>
                        <OurPartners/>
                    </div>
                    {/*<SpeakToYou/>*/}
                    <Retailers/>
                    <ForRetailers/>
                    <ForCreators/>
                    {/*<ActionButton label="Get Started"/>*/}
                    <AfroBeats/>
                    <ActionButton onDivClick={()=>router.push('/signin')} label="Get Started"/>
                    {/*<Showcase/>*/}
                    {/*<ForEveryone/>*/}
                    {/*<ForBusiness/>*/}
                
                    <ForMovies/>
                    <Studio/>
                    <div className={styles.whiteBg}/>
                    {/*<ActionButton label="Join Waitlist"/>*/}
                    {/*<Boundaryless/>*/}
                    {/*<Manufacturers/>*/}
                    {/*<ECommerce/>*/}
                    {/*<VideoStream/>*/}
                    {/*<Logistics/>*/}
                    <OurTools/>
                    {/*<ActionButton label="Get Started"/>*/}
                    <CallToAction/>
                        {/*<OurWhy style={{position: 'absolute', zIndex: '2'}}/>*/}
                        <Footer color="#111110"/>
                    <div className={styles.fixedVideo}>
                        <video
                            ref={vidRef}
                            preload="none"
                            className={` ${videoPlaying && styles.indexChange}`}
                            controls
                            src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/header_video_with_watermark.mp4"
                        ></video>
                        <div
                            className={`${styles.overlay} ${videoPlaying && styles.overlayIndexChange
                            }`}
                        ></div>
                        <img
                            id="stop-button"
                            src="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/cancel_vid.svg"
                            alt="stop video"
                            loading="lazy"
                            className={`${styles.cancel} ${
                                videoPlaying && styles.cancelIndexChange
                            }`}
                            onClick={() => {
                                stopVideo();
                                showVideo();
                            }}
                        />
                    </div>

                </div>
            </main>
            {/* eslint-disable-next-line no-undef */}
            {/* <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`} />
    
            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    // eslint-disable-next-line no-undef
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script> */}
            <Script id="lazyload-cdn" onLoad={() => {
                // eslint-disable-next-line no-unused-vars,no-undef
                const lazyLoadInstance = new LazyLoad({
                    // Your custom settings go here
                });
            }} strategy="afterInteractive"
                    src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.8.3/dist/lazyload.min.js"/>
        </div>


    )
}
