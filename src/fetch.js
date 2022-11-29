const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&maxResults=10`;

// Error version for  Modal Presentation:

//   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&q=${searchInput}&maxResults=10&channelId=-1`;

export function getYoutubeData(searchInput) {
  const request = fetch(BASE_URL.concat(`&q=${searchInput}`)).then((response) =>
    response.json()
  );

  return request;
}
