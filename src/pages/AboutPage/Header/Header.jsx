import styles from "./Header.module.scss";
import { motion } from "framer-motion";
import childVariant from "../../../common/Motion/text";
import { Button } from "../../../common/components";
import { useRouter } from "next/router";

// eslint-disable-next-line react/prop-types
function Header({ playVideo, showVideo }) {
  const router = useRouter();
  
  function navigate() {
    router.push('/signin')
    
  }
  
  return (
    <div className={styles.header}>
      <motion.div
        className={styles.thumbnail}
        variants={childVariant}
        initial="rest"
        animate="visible">
        <p className={`${styles.headerPrimaryText} header45`}>
          Connecting People to
           Products.
        </p>
        <p className={`${styles.headerSecondaryText} text2`}>
          <span className="text-gray">Available on</span> Android, iOS, Web <span className="text-gray">and</span> API.
        </p>
        <div className={`${styles.actionButtons} text-gray`}>
          <Button clickEvent={()=>navigate()} label="Sign Up" bgColor="#53389E" textColor="white" />
          <span className={`${styles.divider } text4 `}>OR</span>
          <p className={` ${ styles.watch} text3 `}><span
            onClick={() => {
              showVideo();
              playVideo();
            }}>Watch Video</span> <span
            
            onClick={() => {
              showVideo();
              playVideo();
            }}
            className={styles.videoPlayIcon}
          >
              <img loading="eager"
                   src="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/videoPlayButton.svg"
                   alt=" " />
            </span></p>
        </div>
      
      </motion.div>
    
    </div>
  );
}

export default Header;
