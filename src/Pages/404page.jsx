import React from "react";
import {Link} from "react-router-dom"

export default function Error404(){
    return(
        <div className="Error404">
            <h1>404</h1>
            <p>Page Not Found</p>
            <Link className="link"to="/">Return Home </Link>
        </div>
    )
}