import React from "react";
import { Outlet } from "react-router-dom";

export default function Shared(){
    return(<>
         <div>Shared Layout</div>
         <Outlet />
         </>)
}