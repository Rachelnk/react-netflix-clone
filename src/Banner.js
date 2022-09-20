import { useState, useEffect} from 'react';

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
        backgroundPosition: "center center",
      }}
      
      >


      </header>
    
    </>
  )

}
export default Banner;