const API_IMG="https://image.tmdb.org/t/p/w500/";
const MovieBox =({title, poster_path, vote_average, release_date, overview}) =>{
  return(
    <div>
      <h1>{title}</h1>
      <img src={API_IMG+poster_path} alt='movie poster'/>
      <p>{overview}</p>
    </div>
  )
}
export default MovieBox;