import React from 'react';
import styles from './videoDetail.module.css';
const VideoDetail = ({ video }) => (
	<section className={styles.detail}>
		<iframe
			className={styles.video}
			title='video'
			type='text/html'
			width='100%'
			height='500px'
			src={`https://www.youtube.com/embed/${video.id}`}
			frameBorder='0'
			allowFullScreen></iframe>
		<h2>{video.snippet.title}</h2>
		<h3>{video.snippet.channelTitle}</h3>
		<pre className={styles.description}>{video.snippet.description}</pre>
	</section>
);

export default VideoDetail;
