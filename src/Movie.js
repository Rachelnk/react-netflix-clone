import { useState, useEffect } from 'react';
import './App.css';
import { Form, FormControl, Button, Modal } from 'react-bootstrap';
import Banner from './Banner'



function Movie(poster_path) {
  const API_IMG="https://image.tmdb.org/t/p/w500/";
  const API_URL='https://api.themoviedb.org/3/movie/popular?api_key=3114892bac012791fbd2d879d1d3a7d1';

  
  //hook to open and close modal
  const [show, setShow] = useState(false);
  const handleShow=()=>setShow(true);
  const handleClose=()=>setShow(false);

  //hooks to fetch popular and movie search endpoints
  const [movies, setMovies] = useState([]);
  const [query, setQuery] =useState('')
  useEffect(() => {
      fetch(API_URL)
      .then((res) =>res.json())
      .then(data =>{
        console.log(data);
        setMovies(data.results);
      })
  }, []);
 
const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("searching");
    try{
      const url = `https://api.themoviedb.org/3/search/movie?api_key=3114892bac012791fbd2d879d1d3a7d1&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
     
}
const changeHandler=(e)=>{
  setQuery(e.target.value)
 }
  if(movies) {
  return (
    <>    
    <nav className='navbar navbar-expand-lg navbar-light sticky-top' style ={{backgroundColor: 'black'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/home" style={{color: '#e63c35', fontSize: '30px'}}>Netflix Clone </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            
                    <ul className='navbar-nav mx-auto >'> 
                    <li className='nav-item' style={{fontSize: '30px', padding: '0 20px', paddingTop: '10px !important', color: 'white'}}><a className="nav-link" href="/home">Trending</a></li>
                    
                    <li className='nav-item' style={{fontSize: '30px', padding: '0 20px', paddingTop: '10px !important'}}>
                    <Form className="d-flex" onSubmit={searchMovie}>
              <FormControl 
              type="search" 
              placeholder="Movie Search" 
              className="me-2" 
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}/>
              <Button variant="secondary" type="submit">Search</Button>
          </Form>
          </li>            
                     
                    </ul>
                     
                 
                 
            </div>    
          </div>       
           
     </nav>
     <div>
      <Banner />
     </div>
     <div>
      {movies.length > 0 ?(
        <div className='container'>
        <div className='grid'>    
         
          
          {movies.map((movieReq) => 
            
            (
              
              <div className="card text-center bg-secondary mb-3">
        <div className="card-body" >
        <img src={API_IMG+ movieReq.poster_path} alt={movieReq.title} className="card-img-top"/>
          
        </div>
        <div className="card-body" >
          <h3>{movieReq.title}</h3>
          <button type="button" className="btn btn-dark" onClick={handleShow} data-target={movieReq.id}>View More </button> 
            <Modal show={show} onHide={handleClose} id={movieReq.id}>
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>

              </Modal.Header>
              <Modal.Body>
              <img src={API_IMG+movieReq.poster_path} alt={movieReq.title} className="card-img-top" style={{width: '14rem'}}/>
              <h3>{movieReq.title}</h3> 
              <h4>ImDb: {movieReq.vote_average}</h4>   
              <h5>Release Date: {movieReq.release_date}</h5> 
              <br></br>
              <h6>Overview</h6>
            <p>{movieReq.overview}</p>
              </Modal.Body>
              <Modal.Footer>

              </Modal.Footer>
              <Button varient="secondary" onClick={handleClose}>Close</Button>
              </Modal>    
        </div>      
      </div>
     

            )
            )}
           
        </div>       
      </div>
      ):(
        <h2 style={{color: 'white'}}>Sorry!! No films or TV shows found</h2>
      )}
     

     </div>
    
    </>
    
  );
}
else {
  return(
    <div>
     
    <p>No films or TV shows found</p>
    
    </div>)
}


    

}

export default Movie;
