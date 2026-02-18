import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav-shell">
      <div className="brand">James Onajobi</div>
      <nav className="Navbar">
        <Link to="/" className="link">Home</Link>
        <Link to="/Repositories" className="link">Projects</Link>
        <a className="link" href="/James_Onajobi_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        <a className="link" href="https://github.com/jamesonajobi27" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </header>
  );
}
