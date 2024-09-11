import React from 'react'

import img1 from '../images/sawx.jpg'
import img2 from '../images/the other zoey.jpg'
import img3 from '../images/old dads.jpg'

export default function Home() {


  const somemargin={marginLeft:'100px'}
  const somepadding={paddingLeft:'60px',paddingRight:'60px'}

  return (
    <div className='row text-white' style={{paddingBottom:'50px'}}>

        <div className='col-12'>
          <br/><br/><br/>

            <h1 className='text-center fs-1' >We Movie</h1>

            <div style={somemargin}>
              <h2><b>Movies</b></h2>
              <p>Movies move us like nothing else can, whether they’re scary, funny,<br />
                dramatic, romantic or anywhere in-between. So many titles, so much <br/>to experience.</p>
            </div>
            <br /><br /><br />
        </div>

        
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-50 " alt="..." style={{display:'block',marginLeft: 'auto',marginRight: 'auto',width: '50%'}} />
    </div>
    <div className="carousel-item">
      <img src={img2}  className="d-block w-50 " alt="..." style={{display:'block',marginLeft: 'auto',marginRight: 'auto',width: '50%'}}/>
    </div>
    <div className="carousel-item">
      <img src={img3}  className="d-block w-50 " alt="..." style={{display:'block',marginLeft: 'auto',marginRight: 'auto',width: '50%'}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
        <div className='col-3'></div>
      </div>
        
        <div className='col-12 text-center'>
        <br/><br/><br/><br/>
          <h2>There’s even more to watch.</h2><br/>
          <h4>
          We Movie has an extensive library of feature films, documentaries, TV <br/>
          shows, anime, award-winning We Movie originals, and more. Watch as 
          <br/> much as you want, anytime you want.
          </h4><br/>
          <button className='btn btn-primary btn-lg  fs-2' style={somepadding}>Join Now</button>
        </div>
        
        </div>
  )
}
