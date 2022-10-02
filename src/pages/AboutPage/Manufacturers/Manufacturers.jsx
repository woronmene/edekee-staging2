import styles from "./Manufacturers.module.scss";
import {motion} from "framer-motion";
// import {useEffect, useRef} from "react";
import childVariant from "../../../common/Motion/text";


function Manufacturers() {
    // const manufacturer = useRef();
    // const config = {
    //     // Add root here so rootBounds in entry object is not null
    //     root: null,
    //     rootMargin: '-100px 0px',
    //     threshold: 0
    // };
    //
    //
    // const video = document.getElementsByClassName('video3')
    //
    // const  callbackFunction = entries => {
    //     const entry = entries[0]
    //     if (entry.isIntersecting) {
    //
    //         for (let index = 0; index < video.length; ++index) {
    //             if (!video[index].src) {
    //                 video[index].setAttribute('src', video[index].dataset.src)
    //             }
    //         }
    //
    //         observer.disconnect(manufacturer.current);
    //     }
    // }
    //
    // const observer = new IntersectionObserver(callbackFunction, config);

    // useEffect(() => {
    //     observer.observe(manufacturer.current);
    // }, [])

    return (
        <div className={styles.manufacturers}>

                {/* <img className={styles.ellipse1} src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/Ellipse5.svg" alt="" /> */}

                <div
                    className={`${styles.wrapper}`}

                >

                    <div className={styles.image}>
                        <div className={styles.overlay}></div>
                        {/* https://d3t7szus8c85is.cloudfront.net/websitecontent/images/manufacturers.webp */}
                        
                        <img loading="lazy" src="https://d3t7szus8c85is.cloudfront.net/websitecontent/images/manufacturers.jpg" alt=
                            ""/>

                        <motion.div
                            variants={childVariant}
                            initial="rest"
                            whileInView="visible"
                            viewport={{once: true}}
                            className={styles.content}>
                            <p className={`${styles.heading} globalTextLight header4`}>
                                Manufacturers
                            </p>
                            <p className={` globalContent globalTextLight ${styles.paragraph}`}>
                                Allow your customers get direct access to you, your products and services on video streaming platforms across the web.
                            </p>
                        </motion.div>
                    </div>
                </div>

        </div>
    );
}

export default Manufacturers;
