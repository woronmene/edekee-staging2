import styles from "../AfroBeats/AfroBeats.module.scss";
import newStyles from "./ForMovies.module.scss";
import React from "react";

export default function ForMovies() {
  return (
    <div className={`${styles.afroBeats} ${newStyles.movies}`}>
      <div className={styles.header}>
        <p className="text3 font-bold globalPurple">Movies</p>
        <div className={`font-bold header7 ${styles.texts}`}>
          <p>Explore</p>
          <p>Products in</p>
          <p className="millik globalPurple">Movies.</p>
        </div>
      
      </div>
      <div className={newStyles.container}>
        <picture>
          <source srcSet="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/web_mobile.webp" media="(min-width: 800px)"/>
          <img src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/v3/movies_mobile.webp" alt=" "/>
        </picture>
        <div className={newStyles.paragraph}>
          <p className='text3'>Get access to a global customer base with your visual shop on Edekee, showcase and get your products
            automatically tagged and purchasable on videos. </p>
        </div>
      </div>
    
    </div>
  );
}