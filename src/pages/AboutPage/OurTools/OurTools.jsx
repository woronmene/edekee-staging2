import React from "react";
import styles from "./OurTools.module.scss";
import {Button} from "../../../common/components";


function  OurTools() {
  return (
    <div className={styles.ourTools}>
      <div className={styles.wrapper}>
          <div className={styles.content}>
              <div>
                  <div className={`globalSubheading globalPurple text2 ${styles.subheading}`}>Our Tools</div>
                  <div className="globalHeading globalTextLight  header2">
                      Developers <br/> We’ve Got You<span className="globalDot">.</span>
                  </div>
              </div>

          </div>
          <div className={`${styles.docBoxContainer}`}>
              <div className={`${styles.box} ${styles.android}`}>
                  <img loading="lazy" src="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/android.svg" alt=""/>
                  <p className='globalHeading2 header8'>Android SDK</p>
                  <p className={`${styles.desc} globalTextDark100`}></p>
                  <Button clickEvent={()=>window.location.href = "https://api.edekee.com/android/get-started"} label="See Documentation" bgColor="white" textColor="black"/>
              </div>
              <div className={`${styles.box} ${styles.ios}`}>
                  <img loading="lazy" src="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/icon-ios.svg" alt=""/>
                  <p className='globalHeading2 header8'>IOS SDK</p>
                  <p className={`${styles.desc} globalTextDark100`}></p>
    
                  <Button clickEvent={()=>window.location.href = "https://api.edekee.com/ios/get-started"} label="See Documentation" bgColor="white" textColor="black"/>
              </div>
              <div className={`${styles.box} ${styles.web}`}>
                  <img loading="lazy" src="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/web.svg" alt=""/>
                  <p className='globalHeading2 header8'>Web Api</p>
                  <p className={`${styles.desc} globalTextDark100`}></p>
                  <Button clickEvent={()=>window.location.href = "https://api.edekee.com/intro"} label="See Documentation" bgColor="white" textColor="black"/>
              </div>
          </div>

      </div>

    </div>
  );
}

export default OurTools;
