import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [theme, setTheme] = React.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <header className="nav-shell">
      <div className="brand">James Onajobi</div>
      <nav className="Navbar">
        <Link to="/" className="link">Home</Link>
        <Link to="/Repositories" className="link">Projects</Link>
      </nav>
      <button className="theme-toggle" type="button" onClick={toggleTheme}>
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}
