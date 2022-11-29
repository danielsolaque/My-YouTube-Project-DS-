// const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&maxResults=10`;

// Error version for  Modal Presentation:

<<<<<<< HEAD
const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&maxResults=10&channelId=-1`;
=======
//   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&maxResults=10&channelId=-1`;
>>>>>>> modal-functionality-css

export function getYoutubeData(searchInput) {
  const request = fetch(BASE_URL.concat(`&q=${searchInput}`)).then((response) =>
    response.json()
  );

  return request;
}
