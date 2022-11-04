import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Shared(){
    return(<>
          <Navbar />
         <Outlet />
         </>)
}