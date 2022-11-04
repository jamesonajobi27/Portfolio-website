import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Shared from "../src/Components/SharedLayout"
import Home from "../src/Pages/HomePage"
import Repositories from "../src/Pages/Repositories"
import SingleRespository from "../src/Pages/SingleRepository"


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Shared />} >
             <Route index element={<Home />}/>
             <Route path="Repositories" element={<Repositories />} />
             <Route path="Repositories/:OneRepo"
              element={<SingleRespository />}
              />
        </Route>
        </Routes>
   </BrowserRouter>
)
