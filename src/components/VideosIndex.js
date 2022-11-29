import { useEffect, useState} from 'react';
import './VideosIndex.css';
import { getYoutubeData } from '../fetch'
// SEGUN LA DOCUMENTACION EL COMPONENTE SE LLAMA YOUTUBE
// import YouTube from 'react-youtube';
import VideoListing from "./VideoListing";


// const YOUTUBE_COMPONENT_OPTIONS = {
//   width: '640',
//   height: '390'
// }

const YOUTUBE_LOCAL_STORAGE_KEY = 'youtube-data'
// LOCAL STORAGE es un "sistema de almacenamiento" en el navegador
// Funciona con el modelo de CLAVE: VALOR
// Podemos interactuar con el local storage a traves de localStorage.<METHOD>

// METHODS:
// setItem ==> para GUARDAR un par clave/valor en el localStorage
// getItem ==> para OBTENER el valor de una clave en el localStorage

function VideosIndex() {

    // CUANDO CARGAS
    // TODOS LOS VIDEOS (25)
    const [baseItems, setBaseItems] = useState([])
    const [items, setItems] = useState([])

    const [filterValue, setFilterValue] = useState('')
    const [isSearch, setIsSearch] = useState(false)

    useEffect(() => {
    // CUANDO NO TENEMOS LA DATA EN EL LOCAL STORAGE
    if (!localStorage.getItem(YOUTUBE_LOCAL_STORAGE_KEY)) {
      getYoutubeData()
      .then(youtubeData => {

        localStorage.setItem(YOUTUBE_LOCAL_STORAGE_KEY, JSON.stringify(youtubeData))
        setItems(youtubeData.items) //esto ocurre despues de que se ha llevado a cabo la linea de arriba
        setBaseItems(youtubeData.items)
      })
    }

    // CUANDO SI TENGAMOS LA DATA EN EL LOCAL STORAGE .parse el caso contrario a .stringify
    const youtubeData = JSON.parse(localStorage.getItem(YOUTUBE_LOCAL_STORAGE_KEY))
    setItems(youtubeData.items) //esto ocurre despues de que se ha llevado a cabo la linea de arriba
    setBaseItems(youtubeData.items)
     }, [])
    
    // LA LOGICA PARA FILTRAR LOS SHOWS 

    // filter value = suits
    // shows = [start TREK, sUits, queens gaMbIt]

    // sUits ==> suits
    // "suits" incluye "suits"

    // filteredShows = ["suits"]
//////////////////////////////////////////
    const handleTextChange = (event) => {
        event.preventDefault()
        const video = event.target.video.value.toString().toLowerCase()

        const result = baseItems.filter(info => { 
            const element = info.snippet.title.toString().toLowerCase()
            if (element.includes(video)) {
                return info
            } 
        })
        

      // VIDEOS (2)
      setItems(result)
      setIsSearch(true)
    }

  return (
      <div className="VideosIndex">
          
        <section className="shows-index-wrapper">
            <br/>
              
              {/* <p>{ items[0].snippet.title }</p> */}
              <form onSubmit={handleTextChange}>
                  <label htmlFor="">Search Videos:</label>
                  <input type="text" name="video" />
                  <button>Search</button>
              </form>


              <section className="shows-index">
                  {isSearch ? items.map(video => <VideoListing key={video.id?.videoId} video={video} /> ) : " "}
                  
                {/* {items.length ? <YouTube videoId={items[0].id.videoId} opts={YOUTUBE_COMPONENT_OPTIONS} /> : null}  */}
                {/* reemplazar null por error message? */}
            </section>
        </section>
    </div>
  );
}

export default VideosIndex;
