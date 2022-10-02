import styles from './ECommerce.module.scss'
import {motion} from "framer-motion";

// import aboutVideos from "../../../common/Videos";
import childVariant from "../../../common/Motion/text";

const ECommerce = () => {
    
    return(
        <div className={styles.ecommerce}>
            <div className={`${styles.wrapper}`}>
                <div className={`globalContainer ${styles.content}`}>
                    <motion.p variants={childVariant}
                       initial="rest"
                       whileInView="visible"
                       viewport={{once: true}} className={`globalHeading header1`}>
                        e-commerce
                    </motion.p>
                    <div className={styles.paragraph}>
                        <motion.p variants={childVariant}
                           initial="rest"
                           whileInView="visible"
                           viewport={{once: true}} className={`globalContent`}>
                            Experience rapid growth by allowing customers across the web gain easy access to you through video streaming platforms.
                        </motion.p>
                    </div>

                </div>
                <div className={styles.container}>
           
                    <video muted playsInline loop autoPlay className="lazy"
                           data-poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/ecommerce.jpg">
                        <source data-src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/commerce.mp4"
                                type="video/mp4"/>
                    </video>
                </div>

            </div>

        </div>
    )
}

export default ECommerce;

