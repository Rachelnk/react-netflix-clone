import { Modal } from "bootstrap";
const API_IMG="https://image.tmdb.org/t/p/w500/";

 function MovieBox (title, poster_path, vote_average, release_date, overview){
  return(
    <>
      
      <div className="card text-center bg-secondary mb-3" >
        <div className="card-body">
        <img src={API_IMG+poster_path} alt='movie poster'className="card-img-top"/>
          <h1> {title}</h1>     
            <p>{overview}</p>
        </div>
        <div className="card-body">
          <button type="button" className="btn btn-dark">View More </button> 
            <Modal>
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>

              </Modal.Header>
              <Modal.Body></Modal.Body>
              </Modal>    
        </div>      
      </div>
    </>
  )
}
export default MovieBox;