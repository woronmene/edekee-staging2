import   styles from './ForCreators.module.scss'
import {motion} from "framer-motion";
import childVariant from "../../../common/Motion/text";
import {Button} from "../../../common/components";
import {useRouter} from "next/router";

export default function ForCreators() {
    const router = useRouter();

    function navigate() {
        router.push('/products/creators')

    }
    
    return (
        <div className={`${styles.forCreators} `}>
            <motion.div className={`${styles.wrapper} globalContainer`}
                        variants={childVariant}
                        initial="rest"
                        whileInView="visible"
                        viewport={{once: true}}
            >
                <div className={styles.heading}>
                    <div className="globalHeading globalTextLight header7 font-bold">
                        For Creators
                    </div>
                </div>
                <div className={styles.video}>
                    <div className={styles.videoContainer}>
                        <video muted playsInline loop autoPlay className="lazy"
                                  poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/creators.webp">
                            <source data-src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/creators.mp4"
                                    type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div className={styles.paragraph}>
                    <div className={`globalContent ${styles.paragraphContainer}`}>
                        <p>Become <span className="globalTextDark50">VISUALLY INDISPENSABLE</span></p>
                            Earn, get access to brand endorsements and bring your creative ideas through videos into reality.
                    </div>

                    <div className="topButtonMargin">
                        <Button clickEvent={() => navigate()} label="Learn More" bgColor="white" textColor="black"/>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}