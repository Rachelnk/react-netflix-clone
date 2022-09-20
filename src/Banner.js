import { useState, useEffect} from 'react';
import "./Banner.css";

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=3114892bac012791fbd2d879d1d3a7d1';
const IMAGE ='https://image.tmdb.org/t/p/w500/';

function Banner(){
  const [movie, setBanner] = useState([]);
  useEffect(() =>{
    fetch(API_URL)
    .then((res)=> res.json())
    .then(data =>{
      console.log(data);
      setBanner(data.results[
        Math.floor(Math.random() * data.results.length - 1) //random movie from the request
      ]);
  })
}, []);

function truncate(str, n){
  return str?.length > n ? str.substr(0, n-1) + "...": str;
} // function to trancate a string 

  return(
    <>
      <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie?.poster_path}")`,
        backgroundPosition: " center",
        backgroundRepeat: 'no-repeat',
      }}
      
      >
 <div className="banner__content">
        {/* title */}
        <h1 className="banner_title">
          {" "}
          {movie?.title }
        </h1>
        {/* description */}

        <h2 className="banner__description">{truncate(movie?.overview, 160)}</h2>

        {/* div with 2 buttons play and more info */}
        {/* <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button_list">My List</button>
        </div> */}
      </div>
      <div className="banner__fade"/>

      </header>
    
    </>
  )

}
export default Banner;