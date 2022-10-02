import styles from './DownloadLink.module.scss';

export default function DownloadLink() {
	return (
		<>
			<div className={styles.downloadButtons}>
            <span className={styles.googlePlayBtn}>
                <a href="https://play.google.com/store/apps/details?id=com.edekee.edekee"
                   rel="noreferrer"
                   target="_blank"
                >
                  
					<img loading="lazy" src="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/googlePlayBtn.svg" alt=""/>
                </a>

            </span>
			
				<span className={styles.apple}>
					<a href="https://apps.apple.com/ng/app/edekee/id1621856206"
					rel="noreferrer"
					target="_blank"
					>
					
					<img loading="lazy" src="https://d3t7szus8c85is.cloudfront.net/websitecontent/icons/appStoreBtn.svg" alt=""/>
							{/*<p className="text3">( Beta )</p>*/}
					</a>
				</span>
			</div>
		</>
	)
}