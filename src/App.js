import { useState, useEffect } from 'react';
import MovieBox from './MovieBox';
import './App.css';


function App() {
  const API_URL='https://api.themoviedb.org/3/movie/550?api_key=3114892bac012791fbd2d879d1d3a7d1';

  const [movies, setMovies] = useState([]);
  useEffect(() => {
      fetch(API_URL)
      .then((res) =>res.json())
      .then(data =>{
        console.log(data);
        setMovies(data.results);
      })
  }, []);
 

  if(movies) {
  return (
    <>
    <div className='container'>
      <div className='grid'>
        <h1>Hi</h1>
        
        {movies.map((movieReq) => (
          <MovieBox key={movieReq.id} {...movieReq}/>))        
      }
      </div>       
    </div>
    </>
    
  );
}
else {
  return(
    <p>No films or TV shows found</p>)
}


    

}

export default App;
