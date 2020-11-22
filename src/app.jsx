import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/videoList/videoList';
import NavBar from './components/navBar/navBar';
import VideoDetail from './components/videoDetail/videoDetail';

function App({ youtube }) {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);
	useEffect(() => {
		youtube.mostPopular(data => {
			setVideos(data);
		});
	}, []);

	const selectVideo = video => {
		console.log(video);
		setSelectedVideo(video);
	};

	const handleSearch = query => {
		youtube.search(query, data => {
			setVideos(data);
		});
		setSelectedVideo(null);
	};

	return (
		<div className={styles.app}>
			<NavBar handleSearch={handleSearch} />
			<section className={styles.content}>
				{selectedVideo && (
					<div className={styles.detail}>
						<VideoDetail video={selectedVideo} />
					</div>
				)}
				<div className={styles.list}>
					<VideoList
						videos={videos}
						onVideoClick={selectVideo}
						display={selectedVideo ? 'list' : 'grid'}
					/>
				</div>
			</section>
		</div>
	);
}

export default App;
