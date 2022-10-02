import {motion} from 'framer-motion'
import styles from './Button.module.scss'

export default function Button({bgColor, textColor, clickEvent, label}) {
	return (
		<motion.div whileTap={{scale: 0.95}} whileHover={{scale: 1.15}} onClick={clickEvent} className={styles.Button}>
			<p style={{backgroundColor: bgColor, color: textColor}}>{label}</p>
		</motion.div>
	)
}