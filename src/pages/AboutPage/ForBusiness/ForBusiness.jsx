import {useRouter} from "next/router";
import styles from './ForBusiness.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from "swiper";
import {motion} from "framer-motion";
import {Button} from "../../../common/components";
import childVariant from "../../../common/Motion/text";
import useMedia from "../../../common/Hooks/useMedia";

export default function ForBusiness() {
    const router = useRouter();
    const small = useMedia("(max-width: 768px)");

    function navigate() {
        router.push('/products/business')

    }

    return (
        // ref={business}
        <div className={`${styles.forBusiness}`}>
            <div className={`${styles.wrapper} `}>
                <div className={`${styles.topVideoContainer} globalContainer`}>
                    {
                        !small && (
                            <div className={styles.item}>
                                <video 	className="lazy" muted playsInline loop autoPlay
                                          poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/webVideo3.webp">
                                    <source data-src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/webVideo3.mp4"
                                            type="video/mp4"/>
                                </video>
                            </div>
                        )
                    }

                </div>
                <motion.div variants={childVariant}
                            initial="rest"
                            whileInView="visible"
                            viewport={{once: true}}
                            className={`${styles.content} globalContainer `}>
                    <div className={`${styles.contain}`}>
                        <div className="globalHeading globalTextLight header5 font-bold">
                            <p className={styles.header}>
                                For Businesses<span className="globalDot">.</span>
                            </p>
                        </div>
                        <div className={`globalContent  ${styles.paragraph}`}>
                            <p>
                                Get access to a global customer base with your visual shop on Edekee, showcase and get
                                your products automatically tagged and purchasable on videos.
                            </p>
                            {/* <br/> */}
                            <p>Your personal <span className="globalTextDark50">SALES MACHINE </span> to sell at ease.
                            </p>
                        </div>
                        <div className="topButtonMargin">
                            <Button clickEvent={() => navigate()} label="Learn More" bgColor="white" textColor="black"/>
                        </div>

                    </div>
                </motion.div>
                {
                    !small && (
                        <div className={`${styles.videosContainer}  globalContainer`}>
                            <div className={styles.item1}>
                                {/* https://d3t7szus8c85is.cloudfront.net/websitecontent/images/business3.webp */}
                                <video 	className="lazy" muted playsInline loop autoPlay
                                          poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/webVideo2.png">
                                    <source data-src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/webVideo2.mp4"
                                            type="video/mp4"/>
                                    {/* <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test.mov" */}
                                    {/* 		type="video/quicktime"/> */}
                                    <source data-src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/webVideo2.webm"
                                    type="video/webm"/>
                                </video>
                            </div>
                            <div className={styles.item2}>
                                {/* https://d3t7szus8c85is.cloudfront.net/websitecontent/images/business2.webp */}
                                <video 	className="lazy" muted playsInline loop autoPlay
                                          poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/webVideo1.png">
                                    <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/webVideo1.mp4"
                                            type="video/mp4"/>
                                    {/* <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test.mov" */}
                                    {/* 		type="video/quicktime"/> */}
                                    <source data-src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/webVideo1.webm"
                                            type="video/webm"/>
                                </video>
                            </div>
                        </div>
                    )
                }
                {
                    small && (
                        <div className={styles.slider}>
                            {
                                <Swiper className={styles.sliderContainer}
                                        spaceBetween={10}
                                        slidesPerView={1.2}
                                        autoplay={{delay: 5000, disableOnInteraction: true,}}
                                        loop
                                        modules={[Autoplay]}>
                                    <SwiperSlide className={styles.slide}>
                                        {/* src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/business2.webp" */}
                                        
                                        <img
                                            src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/webVideo3.webp"
                                            loading='lazy' alt=""/>
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.slide}>
                                        {/* https://d3t7szus8c85is.cloudfront.net/websitecontent/images/business3.webp */}
                                        
                                        <img loading='lazy'
                                             src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/webVideo2.webp"
                                             alt=""/>
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.slide}>
                                        {/* https://d3t7szus8c85is.cloudfront.net/websitecontent/images/business1.webp */}
                                        
                                        <img loading='lazy'
                                             src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/webVideo1.webp"
                                             alt=""/>
                                    </SwiperSlide>
                                </Swiper>
                            }

                        </div>
                    )
                }

            </div>
        </div>
    )
}