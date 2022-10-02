import {motion} from "framer-motion";
import styles from './SpeakToYou.module.scss'
import childVariant from "../../../common/Motion/text";
import useMedia from "../../../common/Hooks/useMedia";


export default function SpeakToYou() {
    const small = useMedia("(max-width: 768px)");
    return (
        // ref={speak}
        <div className={`${styles.speakToYou} globalTextDark400`}>
            <div className={styles.content}>
                <motion.div className={styles.container}
                            variants={childVariant}
                            initial="rest"
                            whileInView="visible"
                            viewport={{once: true}}>
                    <p className={`globalContent ${styles.heading} header8 `}>
                        Let’s Add Meaning
                    </p>
                    <p className="globalHeading globalTextDark500 header4">
                        To Your Videos<span className="globalDot">.</span>
                    </p>
                </motion.div>
            </div>
            <div className={`${styles.videoContainer}`}>
                {
                    !small &&
                    (
                        // eslint-disable-next-line jsx-a11y/media-has-caption
                        <video className="videos" muted playsInline loop autoPlay
                               poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/Test.webp">
                            <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test.mp4"
                                    type="video/mp4"/>
                            <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test.mov"
                                    type="video/quicktime"/>
                            <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test.webm"
                                    type="video/webm"/>
                        </video>
                    )
                }

            </div>
            <div className={`${styles.videoContainer} ${styles.phone}`}>
                {
                    small &&
                    (
                        // eslint-disable-next-line jsx-a11y/media-has-caption
                        <video className="videos" muted playsInline loop autoPlay
                               poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/mobileSpeak.webp">
                            {/* <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test.mp4" */}
                            {/*         type="video/mp4"/> */}
                            {/* <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test.mov" */}
                            {/*         type="video/quicktime"/> */}
                            <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/speak_mobile.webm"
                                    type="video/webm"/>
                        </video>
                    )
                }

            </div>
            <motion.div className={styles.contentParagraph}
                        variants={childVariant}
                        initial="rest"
                        whileInView="visible"
                        viewport={{once: true}}>
                <p className={`globalContent`}>Product, services and locations in your videos can now be identified and
                    tagged.</p>
            </motion.div>
        </div>

    )
}