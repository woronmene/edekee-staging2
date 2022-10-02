import {motion} from "framer-motion";
import styles from "../ProductPage.module.scss";

import childVariant from "../../../common/Motion/text";


// eslint-disable-next-line react/prop-types
function Layout1({heading1, heading2, body,video, poster, preload, auto}) {
    
    return (
        <div className={styles.layout1}>
            <motion.div
                className={`${styles.layout1Wrapper} globalContainer1`}
                variants={childVariant}
                initial="rest"
                whileInView="visible"
                viewport={{once: true}}
            >
                <div className={styles.content}>
                    {/* <div className="globalSubheading globalPurple">Our Product</div> */}
                    <div className="globalHeading globalTextLight header7">
                        {heading1} {heading2 && <br/>} {heading2}<span className="globalDot">.</span>
                    </div>
                    <br/>
                    <div className={`globalContent globalTextDark200 width70 ${styles.body}`}>
                        {body}
                    </div>
                </div>
                <div className={styles.video}>
                    <div className={styles.videoContainer}>
                        <video className="videos" autoPlay={auto}   muted="1" playsInline="1" loop="1" preload={preload} poster={poster} src={video} />
                    </div>
                </div>

            </motion.div>
        </div>
    );
}


export default Layout1;
