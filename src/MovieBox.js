import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
 
const API_IMG="https://image.tmdb.org/t/p/w500/";
const API_URL='https://api.themoviedb.org/3/movie/popular?api_key=3114892bac012791fbd2d879d1d3a7d1';
  const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=3114892bac012791fbd2d879d1d3a7d1&query";

 function MovieBox (title, poster_path, vote_average, release_date, overview){
  const [show, setShow] = useState(false);
  const handleShow=()=>setShow(true);
  const handleClose=()=>setShow(false);

  return(
    <>
      
      <div className="card text-center bg-secondary mb-3" >
        <div className="card-body">
        <img src={API_IMG+poster_path} alt='movie poster'className="card-img-top"/>
          
        </div>
        <div className="card-body">
          <button type="button" className="btn btn-dark" onClick={handleShow}>View More </button> 
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>

              </Modal.Header>
              <Modal.Body>
              <img src={API_IMG+poster_path} alt='movie poster'className="card-img-top" style={{width: '14rem'}}/>
              <h3>{title}</h3> 
              <h4>ImDb: {vote_average}</h4>   
              <h5>Release Date: {release_date}</h5> 
              <br></br>
              <h6>Overview</h6>
            <p>{overview}</p>
              </Modal.Body>
              <Modal.Footer>

              </Modal.Footer>
              <Button varient="secondary" onClick={handleClose}>Close</Button>
              </Modal>    
        </div>      
      </div>
    </>
  )
}
export default MovieBox;