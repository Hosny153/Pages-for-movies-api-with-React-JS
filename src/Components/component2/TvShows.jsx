import React from 'react'
import axios from 'axios'
import {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'

import Body from '../component1/Body'

export default function TvShows() {
  const [show , setShow] = useState([])
  const getShow = async () =>{
      const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2kArrFYlDYF7UV-44Zl3L5UI9sH1UgIXv9N4SrIzcIZb070ZVCbCgfR7A`)
      setShow(response.data.results)
  }
  useEffect( ()=>{
    getShow()
  } ,[])
  
  console.log(show)

  const style1={backgroundColor: 'rgb(19, 23, 34)'}

  return (
   
    <div className="bg" style={{fontFamily:'cursive'}}>
        <Body/> 
        <br/><br />
    <section className='container' >
      <div className='row' >
      {
        show && show.map((item) =>{
          return(
            <div className='col-md-3 col-sm-6 mb-2'>
            <div className='card cardHover p-3 text-center text-white  border-0 ' style={style1}>
                <Link to={`/detailstvshow/${item.id}`} className='card cardHover p-3 text-center text-white border-0' style={style1}>
                    <img src={"http://image.tmdb.org/t/p/w500" + item.poster_path} alt="..."/>
                </Link>
           
            </div>
            
            <div className='text-center text-white'>
            <h4>{item.name}</h4>
           </div>
        </div>
          )
        }

        )
      }
      </div>
    </section>
    </div>
  )
}