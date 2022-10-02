import styles from "./Showcase.module.scss";
// import aboutVideos from "../../../common/Videos";
import useMedia from "../../../common/Hooks/useMedia";

// import VideoPlayerPreloaded from "../../../common/components/VideoPlayerPreloaded/VideoPlayerPreloaded";


function Showcase() {
	const small = useMedia("(max-width: 768px)");
	return (<div className={styles.showcase}>
		<div className={styles.wrapper}>
			{
				!small && (
					<>
						<div className={`${styles.videoContainer} ${styles.item0}`}>
							<video  muted playsInline loop autoPlay
								poster="/img/main.jpg">
								<source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/main.mp4"
										type="video/mp4"/>
								{/* <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test.mov" */}
								{/* 		type="video/quicktime"/> */}
								{/* <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test.webm" */}
								{/* 		type="video/webm"/> */}
							</video>
						</div>
						<div className={`${styles.videoContainer} ${styles.item1}`}>
							<video className="lazy" poster="https://edekee-backend-main.s3.us-east-2.amazonaws.com/websitecontent/images/edge_four.webp"
								   // className="video-data videos"
								muted playsInline loop autoPlay
									  // poster="https://edekee-backend-main.s3.us-east-2.amazonaws.com/websitecontent/images/edge_four.webp"
							>
								<source data-src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/edge_four.mp4"
										type="video/mp4"/>
								{/* <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test.mov" */}
								{/* 		type="video/quicktime"/> */}
								{/* <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test.webm" */}
								{/* 		type="video/webm"/> */}
							</video>
						</div>
						<div className={`${styles.videoContainer} ${styles.item2}`}>
							{/* data-src={aboutVideos.showcaseWeb2MP} */}
							<video 	className="lazy" muted playsInline loop autoPlay
									  poster="https://edekee-backend-main.s3.us-east-2.amazonaws.com/websitecontent/images/edge_three.webp">
								<source data-src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/edge_three.mp4"
										type="video/mp4"/>
								{/* <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test.mov" */}
								{/* 		type="video/quicktime"/> */}
								{/* <source src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/Test.webm" */}
								{/* 		type="video/webm"/> */}
							</video>
						</div>
					</>
				)
				
			}
			
			{
				small && (
					<div className={`globalContainer ${styles.mobile}`}>
						{/* https://d3t7szus8c85is.cloudfront.net/websitecontent/images/main.webp */}
						<video
							className="lazy"
							muted="1"
							playsInline="1"
							loop="1"
							autoPlay="1"
							poster="/img/main.jpg"
						>
							<source data-src="https://d3t7szus8c85is.cloudfront.net/websitecontent/videos/main.mp4" type="video/mp4"/>
						</video>
					</div>
				)
				
			}
		
		
		</div>
	</div>)
}

export default Showcase;
