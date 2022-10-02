
import styles from "./Introducing.module.scss";
import {motion} from "framer-motion";
import {Button} from "../../../common/components";
import childVariant from "../../../common/Motion/text";

function Introducing() {
    return (
        <div className={styles.introducing} id="products">
            <img className={styles.ellipse1}
                 src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/Ellipse4.svg" alt=""/>
            <img className={styles.ellipse2}
                 src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/Ellipse4.svg" alt=""/>
            <img className={styles.ellipse3}
                 src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/Ellipse4.svg" alt=""/>

            <motion.div
                className={`${styles.introducingWrapper} globalContainer`}
                variants={childVariant}
                initial="rest"
                whileInView="visible"
                viewport={{once: true}}
            >
                <div className="globalSubheading globalPurple">The App</div>
                <div className={`${styles.mainContent} header7`}>
                    <div className="globalHeading globalTextLight">
                        {/* <div className={styles.mainContentHeading}> */}
                        Explore <p>
                        Edekee<span className="globalDot">.</span>
                    </p>
                    </div>


                    <div className={`globalContent globalTextDark300 ${styles.paragraph}`}>

                        <p>You can now easily purchase the products, experience and lifestyle you desire from videos you
                            see.</p>

                        <p>Observe a world of infinite possibilities through videos with the Edekee app.</p>

                        <p>Watch videos you love and bring your visual cravings to life. </p>
                    </div>
                </div>
                <div className={`${styles.btn} topButtonMargin`}>
                    <Button label="Watch Videos" clickEvent={()=>window.location.href = "http://www.edekee.com.s3-website.us-east-2.amazonaws.com"} bgColor="#4282FF" textColor="white"/>
                </div>
            </motion.div>
        </div>
    );
}

export default Introducing;
