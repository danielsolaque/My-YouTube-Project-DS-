import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getYoutubeData } from './fetch'

function App() {

  useEffect(() => {
    // PETICION A LA API
    getYoutubeData()
  }, [])


  return (
    <div className="App">
      <h1>youtube</h1>
    </div>
  );
}

export default App;
