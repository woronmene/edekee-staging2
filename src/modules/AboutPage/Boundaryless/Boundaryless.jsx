import styles from './Boundaryless.module.scss'

import {motion} from "framer-motion";
import childVariant from "../../../common/Motion/text";

const Boundaryless = () => {

   

    return (<div className={styles.boundaryless}>
            <div className={styles.wrapper}>
                <motion.div className={`globalContainer ${styles.content}`}
                            variants={childVariant}
                            initial="rest"
                            whileInView="visible"
                            viewport={{once: true}}>
                    <div>
                        <p className={`globalSubheading globalPurple text2 ${styles.subheading}`}>Our Tools</p>
                    </div>
                    <div className={`globalHeading header4 globalTextDark500  ${styles.heading}`}>
                        <p>Boundaryless</p>
                        <p>Commerce</p>
                    </div>
                    <div className={` width70  ${styles.paragraph}`}>
                        <p className={`globalContent`}>
                            Connect your products to videos across the web, allow your customers
                            get <span>boundaryless</span> access to you, your products and services on videos using our
                            API.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Boundaryless

