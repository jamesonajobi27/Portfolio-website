import React from "react";
import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <div className="Navbar">
          <Link to="/" className="link">Home</Link>
          <Link to="/Repositories" className="link">Repositories</Link>
        </div>
    )
}