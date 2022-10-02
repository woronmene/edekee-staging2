import styles from "./OurPartners.module.scss";


const OurPartners = () => {
  return (
    <div className={styles.partners}>
      <div className={styles.wrapper}>
        <div className={`${styles.content}`}>
          <div className={`globalContainer ${styles.container}`}>
            <p className="text1">Our Partners</p>
            <div className={styles.logos}>
              <img src="https://edekee-backend-main.s3.us-east-2.amazonaws.com/websitecontent/icons/Forge.svg" alt=" " />
              <img src="https://edekee-backend-main.s3.us-east-2.amazonaws.com/websitecontent/icons/dhl-3.svg" alt=" " />
              <img src="https://edekee-backend-main.s3.us-east-2.amazonaws.com/websitecontent/icons/gokada.svg" alt=" " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;