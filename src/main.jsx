import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Shared from "../src/Pages/SharedLayout"
import Home from "../src/Pages/HomePage"
import Repo from "../src/Pages/Repository"
import SingleProject from "../src/Pages/SingleProject"

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Shared />} >
             <Route index element={<Home />}/>
             <Route path="repo" element={<Repo />} />
             <Route path="repo/:OneRepo"
              element={<SingleProject />}
              />
        </Route>
     </Routes>
   </BrowserRouter>
)
