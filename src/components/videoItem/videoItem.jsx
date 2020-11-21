import React from 'react';
import styles from './videoItem.module.css';

const VideoItem = ({ video: { snippet } }) => {
	return (
		<li className={styles.video}>
			<img
				className={styles.thumbnail}
				src={snippet.thumbnails.medium.url}
				alt='video-thumbnail'
			/>
			<div>
				<p className={styles.title}>{snippet.title}</p>
				<p className={styles.channel}>{snippet.chanelTItle}</p>
			</div>
		</li>
	);
};

export default VideoItem;
