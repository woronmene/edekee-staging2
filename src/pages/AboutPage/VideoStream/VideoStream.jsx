import styles from "./VideoStream.module.scss"
import {motion} from "framer-motion";
import childVariant from "../../../common/Motion/text";

const VideoStream = () => {
    
    return (
        <div className={styles.videoStream}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {/* https://d3t7szus8c85is.cloudfront.net/websitecontent/images/videostream.webp */}
                    {/* data-src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/videoStream.jpg" */}
                    <img loading="eager" data-src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/videoStream.jpg" className="image lazy" alt="video"/>
                    <motion.div variants={childVariant}
                                initial="rest"
                                whileInView="visible"
                                viewport={{once: true}} className={`${styles.content}`}>
                        <p className={` globalContainer  header4 ${styles.heading}`}>
                            Video streaming platforms
                        </p>
                        <p className={`globalContainer globalContent ${styles.paragraph}`}
                        >Increase your revenue by allowing your users view product tags and purchase products while
                            streaming videos on your platform.
                        </p>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default VideoStream;

