import styles from './Studio.module.scss'
export default function Studio() {
  return (
    <div className={styles.Studio}>
      <p className="header7">Introducing</p>
      <p className="font-bold header45"><span className="millik">edekee.</span> <span>Studio.</span></p>
      <div className={styles.img}>
        <picture>
          <source srcSet="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/web_ipad_scre.webp" media="(min-width: 800px)"/>
          <img src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/mobile_ipad_scre.webp" alt=" "/>
        </picture>
      </div>
    </div>
  );
}