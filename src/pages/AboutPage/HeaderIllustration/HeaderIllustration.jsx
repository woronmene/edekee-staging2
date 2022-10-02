import styles from "./HeaderIllustration.module.scss";
import useMedia from "../../../common/Hooks/useMedia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

function HeaderIllustration() {
  const small = useMedia("(max-width: 768px)");
  
  return (
    <div className={styles.headerIllustration}>
      {
        !small && (
          <div className={styles.container}>
             <div className={styles.img}>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img loading="eager" src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/web_header1.webp" alt=" " />
               <p className="text1">Watch it.</p>
             </div>     <div className={styles.img}>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img loading="eager" src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/web_header2.webp" alt=" " />
  
            <p className="text1">Click it.</p>
             </div>     <div className={styles.img}>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img  loading="eager" src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/web_header3.webp" alt=" " />
  
            <p className="text1">Buy it.</p>
             </div>
        </div>)
      }
      {
        small && (
          <div className={styles.slider}>
            {
              <Swiper className={styles.sliderContainer}
                      spaceBetween={20}
                      slidesPerView={1.4}
                      autoplay={{delay: 5000, disableOnInteraction: true,}}
                      loop
                      modules={[Autoplay]}>
                <SwiperSlide className={styles.slide}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/mobile_header1.webp"
                    loading='eager' alt=""/>
                    <p className="text1">Watch it.</p>
               
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading='eager'
                       src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/mobile_header2.webp"
                       alt=""/>
                  <p className="text1">Click it.</p>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading='eager'
                       src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/mobile_header3.webp"
                       alt=""/>
                  <p className="text1">Buy it.</p>
                </SwiperSlide>
              </Swiper>
            }
    
          </div>
        )
      }
    </div>
  );
}

export default HeaderIllustration;
