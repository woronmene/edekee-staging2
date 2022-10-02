import React from "react";
import styles from "../ProductPage.module.scss";


import {motion} from "framer-motion";
import childVariant from "../../../common/Motion/text";

// eslint-disable-next-line react/prop-types
function Layout2({heading1, heading2, body, video, poster}) {
    
    return (
        <div className={`${styles.layout1} ${styles.ProductsLayout2}`}>
            <motion.div
                className={`${styles.layout1Wrapper} ${styles.wrapper} globalContainer1`}
                variants={childVariant}
                initial="rest"
                whileInView="visible"
                viewport={{once: true}}
            >

                <div className={styles.heading}>
                    <div className="globalHeading globalTextLight header7">
                        {heading1} {heading2 && <br/>} {heading2}<span className="globalDot">.</span>
                    </div>
                </div>
                <div className={styles.video}>
                    <div className={styles.videoContainer}>
                        <video className="videos" autoPlay="1"   muted="1" playsInline="1" loop="1" preload={"none"} poster={poster} src={video}></video>
                    </div>
                </div>
                <div className={styles.paragraph}>
                    <div className={`globalContent globalTextDark200 ${styles.paragraphContainer}`}>
                        {body}
                    </div>
                </div>
            </motion.div>
        </div>

    );
}

export default Layout2;
