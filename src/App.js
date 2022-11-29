
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components

import Nav from "./common/Nav";
import VideosIndex from "./components/VideosIndex";
import About from "./components/About";

import Video from "./components/Video";



function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<VideosIndex />} />
          <Route path="/videos/:id" element={<Video />} />
          <Route path="*" element={<h1>Error 404 </h1>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;



// import { useEffect, useState} from 'react';
// import './App.css';
// import { getYoutubeData } from './fetch'
// // SEGUN LA DOCUMENTACION EL COMPONENTE SE LLAMA YOUTUBE
// import YouTube from 'react-youtube';

// const YOUTUBE_COMPONENT_OPTIONS = {
//   width: '640',
//   height: '390'
// }

// const YOUTUBE_LOCAL_STORAGE_KEY = 'youtube-data'
// // LOCAL STORAGE es un "sistema de almacenamiento" en el navegador
// // Funciona con el modelo de CLAVE: VALOR
// // Podemos interactuar con el local storage a traves de localStorage.<METHOD>

// // METHODS:
// // setItem ==> para GUARDAR un par clave/valor en el localStorage
// // getItem ==> para OBTENER el valor de una clave en el localStorage

// function App() {
//   const [items, setItems] = useState([])

//   useEffect(() => {
//     // CUANDO NO TENEMOS LA DATA EN EL LOCAL STORAGE
//     if (!localStorage.getItem(YOUTUBE_LOCAL_STORAGE_KEY)) {
//       getYoutubeData()
//       .then(youtubeData => {

//         localStorage.setItem(YOUTUBE_LOCAL_STORAGE_KEY, JSON.stringify(youtubeData))
//         setItems(youtubeData.items) //esto ocurre despues de que se ha llevado a cabo la linea de arriba
//       })
//     }

//     // CUANDO SI TENGAMOS LA DATA EN EL LOCAL STORAGE .parse el caso contrario a .stringify
//     const youtubeData = JSON.parse(localStorage.getItem(YOUTUBE_LOCAL_STORAGE_KEY))
//     setItems(youtubeData.items) //esto ocurre despues de que se ha llevado a cabo la linea de arriba
//   }, [])


//   return (
//     <div className="App">
//       <h1>youtube</h1>


//       <section>
//         {items.length ? <YouTube videoId={items[4].id.videoId} opts={YOUTUBE_COMPONENT_OPTIONS} /> : null}
//       </section>
//     </div>
//   );
// }

// export default App;
