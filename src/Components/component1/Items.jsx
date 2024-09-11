import React from 'react'
import Body from './Body'

import axios from 'axios'
import {useState , useEffect} from 'react'


import { Link } from 'react-router-dom'

export default function Items() {


    const [films , setFilms] = useState([])

  const getFilms = async () =>{
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2kArrFYlDYF7UV-44Zl3L5UI9sH1UgIXv9N4SrIzcIZb070ZVCbCgfR7A`)
      setFilms(response.data.results)
  }

  useEffect( ()=>{
    getFilms()
  } ,[])

  console.log(films)

const style1={backgroundColor: 'rgb(19, 23, 34)'}
  return (
    <div>

    <section className='container' >
      <div className='row' >
      <Body/>
      {
        films && films.map((item) =>{

          return(
            <div className='col-md-3 col-sm-6 mb-2'>
                <div className='card cardHover p-3 text-center text-white border-0 ' style={style1} >
                    <Link to={'/details/'+item.id} className='card cardHover p-3 text-center text-white border-0' style={style1}>
                    <img src={"http://image.tmdb.org/t/p/w500" + item.poster_path} alt="..."/>
                    </Link>
                    <h4>{item.title}</h4>

                </div>
            </div>
          )
        })
      }

      </div>
    </section>
    </div>
  )
}
