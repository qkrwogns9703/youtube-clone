import React from 'react';
import styles from './videoItem.module.css';

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
	const displayType = display === 'list' ? styles.list : styles.grid;
	return (
		<li
			className={`${styles.constainer} ${displayType}`}
			onClick={() => onVideoClick(video)}>
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
