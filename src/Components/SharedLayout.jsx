import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Shared() {
  return (
    <div className="pageShell">
      <Navbar />
      <main className="pageContent">
        <Outlet />
      </main>
    </div>
  );
}
