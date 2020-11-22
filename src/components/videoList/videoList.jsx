import React from 'react';
import VideoItem from '../videoItem/videoItem';

import styles from './videoList.module.css';

const VideoList = ({ videos, onVideoClick, display }) => (
	<ul className={styles.videos}>
		{videos.map(video => (
			<VideoItem
				video={video}
				key={video.id}
				onVideoClick={onVideoClick}
				display={display}
			/>
		))}
	</ul>
);

export default VideoList;
