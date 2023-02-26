import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Shared from "../src/Components/SharedLayout"
import Home from "../src/Pages/HomePage"
import Repositories from "../src/Pages/Repositories"
import SingleRespository from "../src/Pages/SingleRepository"
import Error404 from "./Pages/404page"
import ErrorBoundary from "../src/Components/ErrorBoundary"
import TestingError from "../src/Pages/TestingError"


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ErrorBoundary>
     <Routes>
        <Route path='/' element={<Shared />} >
             <Route index element={<Home />}/>
             <Route path="Repositories" element={<Repositories />} />
             <Route path="Repositories/:OneRepo"
              element={<SingleRespository />}
              />
         <Route path="TestingError" element={<TestingError />}/>
         <Route path="*" element={<Error404/>}/>
        </Route>
     
        </Routes>
        </ErrorBoundary>
   </BrowserRouter>
)
