import styles from "./OurWhy.module.scss";
import { motion } from "framer-motion";
import childVariant from "../../../common/Motion/text";

function OurWhy() {
  return (
    <div className={styles.ourWhy}>
      <motion.div
        className={`${styles.ourWhyWrapper} globalContainer header6`}
        variants={childVariant}
        initial="rest"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/*<img*/}
        {/*  src="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/edekeeLogoPurple.svg"*/}
        {/*  alt=""*/}
        {/*/>*/}

        <p className={`${ styles.text } millik header2 `}>We find meaning, and create connections.</p>
      </motion.div>
    </div>
  );
}

export default OurWhy;
