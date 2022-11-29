
const BASE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=${process.env.REACT_APP_API_KEY}`
                //  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&q=${searchInput}&maxResults=3&`;








export function getYoutubeData() {
    const request = fetch(BASE_URL)
        .then(response => response.json())
        .then(youtubeData => youtubeData)

    return request
}