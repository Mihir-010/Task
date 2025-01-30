import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
   
          <nav className="navbar navbar-light bg-white shadow-sm p-3 d-flex justify-content-end">
     <Link to="/login"><button className="btn btn-primary me-2">Login</button></Link> 
     <Link to="/register"><button className="btn btn-success">Register</button></Link> 
    </nav>
  )
}

export default Navbar