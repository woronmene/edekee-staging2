import { motion } from "framer-motion";
import styles from "./CallToAction.module.scss";
import {DownloadLink} from "../../../common/components";
import childVariant from "../../../common/Motion/text";

function CallToAction() {

  return (
    <div className={styles.callToAction} >

      <div

        className={`${styles.callToActionWrapper}`}

      >
        <div className={styles.image}>
          {/*<img className='image lazy' loading='eager' data-src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/web_lady.webp" alt=*/}
          {/*    "lady"/>*/}
          <picture>
            <source srcSet="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/web_la.webp" media="(min-width: 800px)"/>
            <img src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/mobile_lady.webp" alt=" "/>
          </picture>
        </div>
        <motion.div className={styles.content}
            variants={childVariant}
            initial="rest"
            whileInView="visible"
            viewport={{ once: true }}
        >

          {/*<p id="get-started" className={`${styles.heading} globalTextLight text1`}>*/}
          {/*  View<span className='globalDot'>.</span> Create<span className='globalDot'>.</span> Buy<span className='globalDot'>.</span>*/}
          {/*</p>*/}
          <DownloadLink/>
        </motion.div>
      </div>
    </div>
  );
}

export default CallToAction;
