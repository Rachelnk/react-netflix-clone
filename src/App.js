import { useState, useEffect } from 'react';
import MovieBox from './MovieBox';
import './App.css';

const API_URL="https://api.themoviedb.org/3/movie/550?api_key=3114892bac012791fbd2d879d1d3a7d1";
function App() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
      fetch(API_URL)
      .then((res)=>res.json())
      .then(data=>{
        console.log(data);
        setMovies(data.results);
      })
  }, [])
  return (
    <>
    <div>
      
      {movies.map((movieReq)=>
      <MovieBox key={movieReq.id} {...movieReq}/>)}

    </div>
    </>
  );
}

export default App;
