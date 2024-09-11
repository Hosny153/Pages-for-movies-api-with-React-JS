import React from 'react'

import Navbar from "./Components/component1/Navbar";
import Items from './Components/component1/Items';

import { Route, Routes } from 'react-router-dom';

import Details from './Components/component3/Details';
import TvShows from './Components/component2/TvShows';
import People from './Components/component4/People';
import Home from './Components/component3/Home';
import Detailsp from './Components/component4/Detailsp';
import DetailsTvShow from './Components/component2/DetailsTvShow';
import Footer from './Components/component1/Footer';

export default function App() {
  
  return (
    <div className="bg">


      
      
      
    <>

    <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>

        <Route path='/items' element={<Items/>}></Route>

        <Route path='/details' element={<Details/>}></Route>
        <Route path="/details/:id" element={<Details/>}/> 


        <Route path='/tvshows' element={<TvShows/>}></Route>

        <Route path='/detailstvshow' element={<DetailsTvShow/>}></Route>
        <Route path="/detailstvshow/:detailsTvShowId" element={<DetailsTvShow/>}/> 

        <Route path='/people' element={<People/>}></Route>
        
        <Route path='/detailsp' element={<Detailsp/>}></Route>
        <Route path="/detailsp/:detailspId" element={<Detailsp/>}/> 
        


      </Routes>
      
    <Footer/>
    </>

    </div>
  )
}
