import React from 'react'

import axios from 'axios'
import {useState , useEffect} from 'react'

import { useParams } from 'react-router-dom'

export default function Details() {

    const params = useParams();
    const movieId = params.id;
    
// Calling Api
    const [films , setFilms] = useState([])

  const getFilms = async () =>{
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2kArrFYlDYF7UV-44Zl3L5UI9sH1UgIXv9N4SrIzcIZb070ZVCbCgfR7A`)
      setFilms(response.data)
  }

  useEffect( ()=>{
    getFilms()
  } ,[])

  console.log(films)

  const style2={marginTop:'15px'}

  return (
    <div style={{fontFamily:'cursive'}}>
      <section className="container">

        <div className="row">
          <div className="col-md-4 col-sm-12">

            <br />
            <br />
            <img src={"http://image.tmdb.org/t/p/w500" + films.poster_path} alt="" />
          </div>

          <div className='col-md-1 col-sm-12'></div>

          <div className="col-md-6 col-sm-12 text-white" style={{position: "relative", left: "0%"}}>

            <br />
            <br />
            <h3>{films.title}</h3>

            <div>
              {films.genres &&
                films.genres.map((genre) => (

                    <button className='btn btn-primary text-dark' style={{marginTop:'29px',marginRight:'10px'}} key={genre.id}>{genre.name}</button>

                ))}
                
            </div>

            <div style={{marginTop:'60px'}}>
            <h5 style={style2}>Budget: {films.budget}</h5>
            <h5 style={style2}>Popularity: {films.popularity}</h5>
            <h5 style={style2}>Vote Average: {films.vote_average}</h5>
            <h5 style={style2}>Vote Count: {films.vote_count}</h5>
            <h5 style={style2}>Release date: {films.release_date}</h5>
            </div>
            

          </div>
        </div>
      </section>
      <br/><br />
    </div>
  );
  
}
