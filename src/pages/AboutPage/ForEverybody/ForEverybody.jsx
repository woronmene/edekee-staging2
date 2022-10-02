import styles from './ForEverybody.module.scss'
import {Button} from "../../../common/components";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import childVariant from "../../../common/Motion/text";

// import aboutVideos from "../../../common/Videos";
// import VideoPlayerPreloaded from "../../../common/components/VideoPlayerPreloaded/VideoPlayerPreloaded";

export default function ForEveryone() {
    const router = useRouter();
    function navigate() {
        router.push('/products')

    }
    return (
        <div className={styles.forEverybody}>
            <div className={styles.wrapper}>
                <div className={`${styles.content}`}>
                    <motion.div className={`globalContainer ${styles.container}`
                    }
                                variants={childVariant}
                                initial="rest"
                                whileInView="visible"
                                viewport={{once: true}}>
                        <div className="globalHeading header7 font-bold">
                            For Everyone<span className="globalDot">.</span>
                        </div>
                        <div className= {`globalContent globalTextDark400 ${styles.paragraph} text3`}>
                            Enjoy amazing contents, discover new brands and shop easy with a single tap all at the same time.
                        </div>
                        <div className="topButtonMargin">
                            <Button label="Learn More" bgColor="black" clickEvent={()=>navigate()} textColor="white"/>
                        </div>

                    </motion.div>

                </div>
                <div className={styles.videoContainer}>
                    {/* https://d3t7szus8c85is.cloudfront.net/websitecontent/images/Test2.webp */}
                    {/* https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test2.webm */}
                    {/* <VideoPlayerPreloaded poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/Test2.jpg" urlMp4={'https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test2.mp4'}></VideoPlayerPreloaded> */}
                    <video 	className="lazy" muted playsInline loop autoPlay
                              poster="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/Test2.jpg">
                        <source data-src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/test2.mp4"
                                type="video/mp4"/>
                        {/* <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test.mov" */}
                        {/* 		type="video/quicktime"/> */}
                        {/* <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test.webm" */}
                        {/* 		type="video/webm"/> */}
                    </video>
                </div>
            </div>

        </div>
    )
}