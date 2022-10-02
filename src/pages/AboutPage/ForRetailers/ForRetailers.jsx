import React from "react";
import newStyles from "./ForRetailers.module.scss";
import styles from '../ForCreators/ForCreators.module.scss'
import {motion} from "framer-motion";
import {Button} from "../../../common/components";
import childVariant from "../../../common/Motion/text";
import { useRouter } from "next/router";

function ForRetailers() {
  const router = useRouter();
  
  function navigate() {
    router.push('/signin')
    
  }
    return (
      <div className={`${styles.forCreators} ${newStyles.ForRetailers} `}>
        <motion.div className={`${styles.wrapper} globalContainer ${newStyles.wrapper} `}
                    variants={childVariant}
                    initial="rest"
                    whileInView="visible"
                    viewport={{once: true}}
        >
          <div className={`${ styles.heading } ${newStyles.heading}`}>
            <div className="globalHeading header7 font-bold">
              For Retailers
            </div>
          </div>
          <div className={`${ styles.video} ${newStyles.video}`}>
            <div className={styles.videoContainer}>
              <picture>
                <source srcSet="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/web_retailer.webp" media="(min-width: 800px)"/>
                <img src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/mobile_retailer.webp" alt=" "/>
              </picture>
              {/*<video muted playsInline loop autoPlay className="lazy"*/}
              {/*       poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/creators.webp">*/}
              {/*  <source data-src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/creators.mp4"*/}
              {/*          type="video/mp4"/>*/}
              {/*</video>*/}
            </div>
          </div>
          <div className={styles.paragraph}>
            <div className={`globalContent ${styles.paragraphContainer} ${newStyles.paraContainer}`}>
              <p>You can now easily purchase the products, experience and lifestyle you desire from videos you see.</p>
              {/*<p>You can now easily purchase the products, experience and lifestyle you desire from videos you see.</p>*/}
            </div>
        
            <div className="topButtonMargin">
              <Button clickEvent={() => navigate()} label="Get Started" bgColor="#53389E" textColor="white"/>
            </div>
          </div>
        </motion.div>
  
      </div>
    );
}

export default ForRetailers;
