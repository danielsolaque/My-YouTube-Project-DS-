
const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`

export function getYoutubeData() {
    const request = fetch(BASE_URL)
        .then(response => response.json())
        .then(youtubeData => console.log(youtubeData))

    return request
}