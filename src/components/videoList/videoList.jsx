import React from 'react';
import VideoItem from '../videoItem/videoItem';

import styles from './videoList.module.css';

const VideoList = props => (
	<ul className={styles.videos}>
		{props.videos.map(video => (
			<VideoItem video={video} key={video.id} />
		))}
	</ul>
);

export default VideoList;
