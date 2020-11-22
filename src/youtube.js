class Youtube {
	constructor(key) {
		this.key = key;
		this.requestOptions = {
			method: 'GET',
			redirect: 'follow',
		};
	}

	mostPopular(callback) {
		fetch(
			`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
			this.requestOptions
		)
			.then(response => response.json())
			.then(result => {
				callback(result.items);
			})
			.catch(error => console.log('error', error));
	}

	search(query, callback) {
		fetch(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&maxResults=25&key=${this.key}`,
			this.requestOptions
		)
			.then(response => response.json())
			.then(result =>
				result.items.map(item => ({ ...item, id: item.id.videoId }))
			)
			.then(items => {
				callback(items);
			})
			.catch(error => console.log('error', error));
	}
}

export default Youtube;
