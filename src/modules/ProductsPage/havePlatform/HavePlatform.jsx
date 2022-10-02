import styles from "../whatElse/WhatElse.module.scss";
import {JustHeader} from "../index";
import {DownloadLink} from "../../../common/components";

const HavePlatform = () => {
    return (
            <div className={`globalContainer1 ${styles.whatElse}`}>
                <JustHeader header="Do you have a platform of your own?"/>
                <div className={`globalContent globalTextDark200  ${styles.paragraph}`}>
                    <p>You can still access our services by connecting to our API. Ours APIs are very easy to integrate.</p>
                </div>
                <DownloadLink/>
            </div>
    )
}

export default HavePlatform