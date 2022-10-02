import styles from './Logistics.module.scss'
import {Button} from "../../../common/components";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import childVariant from "../../../common/Motion/text";


const Logistics = () => {
    const router = useRouter();
    function navigate() {
        router.push('/products/business',)

    }
    return (
        <div className={styles.logistics}>
            <div className={styles.wrapper}>
                <div className={`${styles.content}`}>
                    <motion.div
                        variants={childVariant}
                        initial="rest"
                        whileInView="visible"
                        viewport={{once: true}}
                        className={` globalContainer ${styles.container}`}>
                        <div className="globalHeading globalTextDark500 header7">
                            Logistics Companies
                        </div>
                        <div className={`globalContent globalTextDark400 ${styles.paragraph} text3`}>
                            Expand your customer base and make deliveries when people place orders from videos across
                            the web.
                        </div>
                        <div className="topButtonMargin">
                            <Button clickEvent={navigate}  label="Learn More" bgColor="black" textColor="white"/>
                        </div>

                    </motion.div>

                </div>
                <div className={`${styles.imgContainer}`}>
                    {/* https://d3t7szus8c85is.cloudfront.net/websitecontent/images/logistics.webp */}
                    {/* data-src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/logistics.jpg" */}
                    <img className="image lazy" loading="eager" data-src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/logistics.jpg"  alt="logistic"/>
                </div>
            </div>
        </div>
    )
}

export default Logistics;