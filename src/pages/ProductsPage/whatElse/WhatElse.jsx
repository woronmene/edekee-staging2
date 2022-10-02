import styles from './WhatElse.module.scss'

import {JustHeader} from "../index";
import {DownloadLink} from "../../../common/components";

const WhatElse = () => (
    <div className={`globalContainer ${styles.whatElse}`}>
        <JustHeader header="What Else ?"/>
        <div className={`globalContent globalTextDark200  ${styles.paragraph}`}>
            <p>On Edekee, you can also <span className="globalTextDark100">Create</span> your own videos and <span className="globalTextDark100">showcase products</span> in <span className="globalTextDark100"> videos </span> and get a shop on Edekee for your <span className="globalTextDark100"> Business.</span></p>
        </div>
        <DownloadLink/>
    </div>
)



export default WhatElse;