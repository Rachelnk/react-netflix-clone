// import { useState, useEffect } from 'react';
import Movie from './Movie';
import './App.css';
// import { Form, FormControl, Button } from 'react-bootstrap';



function App() {
  return (<Movie/>)
  
//   const API_URL='https://api.themoviedb.org/3/movie/popular?api_key=3114892bac012791fbd2d879d1d3a7d1';
//   const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=3114892bac012791fbd2d879d1d3a7d1&query";


//   const [movies, setMovies] = useState([]);
//   const [query, setQuery] =useState('')
//   useEffect(() => {
//       fetch(API_URL)
//       .then((res) =>res.json())
//       .then(data =>{
//         console.log(data);
//         setMovies(data.results);
//       })
//   }, []);
 
// const searchMovie = async(e)=>{
//     e.preventDefault();
//     console.log("searching");
//     try{
//       const url = `https://api.themoviedb.org/3/search/movie?api_key=3114892bac012791fbd2d879d1d3a7d1&query=${query}`;
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);
//       setMovies(data.results);
//     }
//     catch(e){
//       console.log(e);
//     }
     
// }
// const changeHandler=(e)=>{
//   setQuery(e.target.value)
//  }
//   if(movies) {
//   return (
//     <>    
//     <nav className='navbar navbar-expand-lg navbar-light sticky-top' style ={{backgroundColor: 'black'}}>
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/home" style={{color: '#e63c35', fontSize: '30px'}}>Netflix Clone </a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//             <div className="collapse navbar-collapse" id="collapsibleNavbar">
            
//                     <ul className='navbar-nav mx-auto >'> 
//                     <li className='nav-item' style={{fontSize: '30px', padding: '0 20px', paddingTop: '10px !important', color: 'white'}}><a className="nav-link" href="/home">Trending</a></li>
                    
//                     <li className='nav-item' style={{fontSize: '30px', padding: '0 20px', paddingTop: '10px !important'}}>
//                     <Form className="d-flex" onSubmit={searchMovie}>
//               <FormControl 
//               type="search" 
//               placeholder="Movie Search" 
//               className="me-2" 
//               aria-label="search"
//               name="query"
//               value={query} onChange={changeHandler}/>
//               <Button variant="secondary" type="submit">Search</Button>
//           </Form>
//           </li>            
                     
//                     </ul>
                     
                 
                 
//             </div>    
//           </div>       
           
//      </nav>
//      <div>
//       {movies.length > 0 ?(
//         <div className='container'>
//         <div className='grid'>     
          
//           {movies.map((movieReq) => 
//             // <MovieBox key={movieReq.id} {...movieReq}/>
//             (<h2 key={movieReq.id}>{movieReq.title}, {movieReq.release_date}</h2>)
//             )}
//         </div>       
//       </div>
//       ):(
//         <h2>Sorry!! No films or TV shows found</h2>
//       )}
     

//      </div>
    
//     </>
    
//   );
// }
// else {
//   return(
//     <div>
     
//     <p>No films or TV shows found</p>
    
//     </div>)
// }


    

}

export default App;
