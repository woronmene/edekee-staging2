import styles from "./Values.module.scss";
import { motion } from "framer-motion";
import childVariant from "../../../common/Motion/text";

function Values() {
  
  return (
    <div className={styles.values}>
      {/*<img className={styles.ellipse1} src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/Ellipse4.svg"*/}
      {/*     alt=""/>*/}
      {/*<img className={styles.ellipse2} src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/Ellipse4.svg"*/}
      {/*     alt=""/>*/}
      <motion.div
        className={`${styles.valuesWrapper} globalContainer`}
        variants={childVariant}
        initial="rest"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={styles.mainContent}>
          <div className={`globalContent ${styles.container}`}>
            <div className={`header45 millik ${styles.header}`}>
              <p>If you can touch it,</p>
              <p> You can buy it! </p>
            </div>
            
            <p className={styles.firstP}>
              Discover meaning in every video pixel. Shop for products and services while enjoying entertaining video content<span className="globalDot">.</span>
            </p>
            <p className={`${styles.firstP} ${styles.secondP}`}>Product, services and locations in your videos can now be identified and
              tagged<span className="globalDot">.</span></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Values;
