import { useEffect, useState } from "react";
import "./VideosIndex.css";
import { getYoutubeData } from "../fetch";
// SEGUN LA DOCUMENTACION EL COMPONENTE SE LLAMA YOUTUBE
// import YouTube from 'react-youtube';
import VideoListing from "./VideoListing";
import Modal from "./Modal";

// const YOUTUBE_COMPONENT_OPTIONS = {
//   width: '640',
//   height: '390'
// }

const YOUTUBE_LOCAL_STORAGE_KEY = "youtube-data";
// LOCAL STORAGE es un "sistema de almacenamiento" en el navegador
// Funciona con el modelo de CLAVE: VALOR
// Podemos interactuar con el local storage a traves de localStorage.<METHOD>

// METHODS:
// setItem ==> para GUARDAR un par clave/valor en el localStorage
// getItem ==> para OBTENER el valor de una clave en el localStorage

function VideosIndex() {
  // CUANDO CARGAS
  // TODOS LOS VIDEOS (25)
  // const [baseItems, setBaseItems] = useState([]);
  const [items, setItems] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const [loadingError, setLoadingError] = useState(false);
  // const [filterValue, setFilterValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  // useEffect(() => {
  //   // CUANDO NO TENEMOS LA DATA EN EL LOCAL STORAGE
  //   if (!localStorage.getItem(YOUTUBE_LOCAL_STORAGE_KEY)) {
  //     getYoutubeData()
  //       .then((youtubeData) => {
  //         localStorage.setItem(
  //           YOUTUBE_LOCAL_STORAGE_KEY,
  //           JSON.stringify(youtubeData)
  //         );
  //         setItems(youtubeData.items); //esto ocurre despues de que se ha llevado a cabo la linea de arriba
  //         setBaseItems(youtubeData.items);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         // setLoadingError(true);
  //       });
  //   }

  //   // CUANDO SI TENGAMOS LA DATA EN EL LOCAL STORAGE .parse el caso contrario a .stringify
  //   const youtubeData = JSON.parse(
  //     localStorage.getItem(YOUTUBE_LOCAL_STORAGE_KEY)
  //   );

  //   setItems(youtubeData.items); //esto ocurre despues de que se ha llevado a cabo la linea de arriba
  //   setBaseItems(youtubeData.items);
  // }, []);

  // LA LOGICA PARA FILTRAR LOS SHOWS

  // filter value = suits
  // shows = [start TREK, sUits, queens gaMbIt]

  // sUits ==> suits
  // "suits" incluye "suits"

  // filteredShows = ["suits"]
  //////////////////////////////////////////
  function handleSubmit(e) {
    e.preventDefault();
    const localResults = JSON.parse(window.localStorage.getItem(searchInput));
    setIsSearch(true);
    if (localResults) {
      setItems(localResults);
    } else {
      getYoutubeData(searchInput)
        .then((data) => {
          if (data.error) {
            setLoadingError(true);
          } else {
            window.localStorage.setItem(
              searchInput,
              JSON.stringify(data.items)
            );
            setItems(data.items);
          }
        })
        .catch((error) => {
          console.log(error);
          setLoadingError(true);
        });
    }
    setSearchInput("");
  }

  function handleTextChange(e) {
    setSearchInput(e.target.value);
  }

  // const handleTextChange = (event) => {
  //   event.preventDefault();
  //   const video = event.target.video.value.toString().toLowerCase();

  //   const result = baseItems.filter((info) => {
  //     const element = info.snippet.title.toString().toLowerCase();
  //     if (element.includes(video)) {
  //       return info;
  //     }
  //   });

  //   // VIDEOS (2)
  //   setItems(result);
  //   setIsSearch(true);
  // };

  return (
    <div className="VideosIndex">
      <section className="videos-index-wrapper">
        <br />

        {/* <p>{ items[0].snippet.title }</p> */}
        <form className="cont-search" onSubmit={handleSubmit}>
          <input
            id=""
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleTextChange}
          />
          <button>Search</button>
        </form>

        {isSearch ? (
          <section className="shows-videos">
            {loadingError || items.length === 0 ? (
              <Modal
                open={loadingError}
                onClose={() => setLoadingError(false)}
              ></Modal>
            ) : (
              items
                .filter((video) => {
                  return video.id?.videoId;
                })
                .map((video) => (
                  <VideoListing key={video.id?.videoId} video={video} />
                ))
            )}

            {/* {items.length ? <YouTube videoId={items[0].id.videoId} opts={YOUTUBE_COMPONENT_OPTIONS} /> : null}  */}
            {/* reemplazar null por error message? */}
          </section>
        ) : (
          <div className="no-results">
            <p className="text">
              No search results yet! Please submit a search above!
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default VideosIndex;
