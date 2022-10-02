import styles from "../HeaderIllustration/HeaderIllustration.module.scss";
import newStyles from "./AfroBeats.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import useMedia from "../../../common/Hooks/useMedia";

export default function AfroBeats() {
  const small = useMedia("(max-width: 768px)");
  return (
    <div className={newStyles.afroBeats}>
      <div className={newStyles.header}>
        <p className="text3 font-bold globalPurple">Music</p>
        <div className={`font-bold header7 ${newStyles.texts}`}>
          <p>Explore</p>
          <p>Products in</p>
          <p className="millik globalPurple">AfroBeats.</p>
        </div>
      
      </div>
      <div className={styles.headerIllustration}>
        {
          !small && (
            <div className={`${styles.container} ${newStyles.container} `}>
              <div className={styles.img}>
         
                <img loading="eager" src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/web_afrobeats1.webp"
                     alt=" " />
                <p className="text3">Listen to your favorite artistes on music apps</p>
              </div>
              <div className={styles.img}>
         
                <img loading="eager" src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/web_afrobeats2.webp"
                     alt=" " />
                
                <p className="text3">Purchase products off singles and album covers</p>
              </div>
              <div className={styles.img}>
         
                <img loading="eager" src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/web_afrobeat3.webp"
                     alt=" " />
                
                <p className="text3">Observe a world of infinite possibilities through videos with the Edekee app</p>
              </div>
            </div>)
        }
        {
          small && (
            <div className={`${styles.slider} ${newStyles.slider}`}>
              {
                <Swiper className={`${styles.sliderContainer} ${newStyles.sliderContainer}`}
                        spaceBetween={20}
                        slidesPerView={1.4}
                        autoplay={{ delay: 5000, disableOnInteraction: true }}
                        loop
                        modules={[Autoplay]}>
                  <SwiperSlide className={`${styles.slide} ${newStyles.slide}`}>
             
                    <img
                      src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/mobile_afrobeats1.webp"
                      loading="eager" alt="" />
                    <p className="text3">Listen to your favorite artistes on music apps</p>
                  
                  
                  </SwiperSlide>
                  <SwiperSlide className={`${styles.slide} ${newStyles.slide}`}>
                    <div>
               
                      <img loading="eager"
                           src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/mobile_afrobeats2.webp"
                           alt="" />
                    </div>
                    
                    <div>
                      <p className="text3">Purchase products off singles and album covers</p>
                    </div>
                  
                  
                  </SwiperSlide>
                  <SwiperSlide className={`${styles.slide} ${newStyles.slide}`}>
             
                    <img loading="eager"
                         src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/mobile_afrobeat3.webp"
                         alt="" />
                    <p className="text3">Observe a world of infinite possibilities through videos with the Edekee app</p>
                  
                  </SwiperSlide>
                </Swiper>
              }
            
            </div>
          )
        }
      </div>
    </div>
  );
}