import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/videoList/videoList';

function App() {
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		console.log('데이터 불러오기~!');
		const requestOptions = {
			method: 'GET',
			redirect: 'follow',
		};

		fetch(
			'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBkUOOY1I9RlKkVT9_WjJzZEIUfAa1dF44',
			requestOptions
		)
			.then(response => response.json())
			.then(result => {
				setVideos(result.items);
				console.log(result.items);
			})

			.catch(error => console.log('error', error));
	}, []);
	return <VideoList videos={videos} />;
}

export default App;
