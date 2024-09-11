import React from 'react'
import { Link } from 'react-router-dom'
// import { FaFacebook , FaInstagram , FaTwitter , FaSpotify} from "react-icons/fa";


export default function Navbar() {

  return (

  <nav className="nv navbar navbar-expand-lg bg-body-tertiar">
    
    <div className="container">
      <Link className="navbar-brand text-light fs-1" to="/">WE Movie</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
          </li>

          <li className="nav-item ">
            <Link className="nav-link text-light" to="/items">Movie</Link>
          </li>

          <li className="nav-item ">
            <Link className="nav-link text-light" to="/tvshows">TV Shows</Link>
          </li>

          <li className="nav-item ">
            <Link className="nav-link  text-light" to="/people">People</Link>
          </li>

          <div>
            {/* <FaFacebook size={28} color='white' style={{cursor:'pointer',marginLeft:'40px'}} className='mt-2'/>
            <FaInstagram size={28} color='white' style={{cursor:'pointer'}} className='mt-2 ms-2'/>
            <FaTwitter size={28} color='white' style={{cursor:'pointer'}} className='mt-2 ms-2'/>
            <FaSpotify size={28} color='white' style={{cursor:'pointer'}} className='mt-2 ms-2'/> */}
          </div>

        </ul>
      </div>
    </div>

  </nav>

  )
}
