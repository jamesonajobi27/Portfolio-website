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

  const isLight = theme === "light";

  return (
    <header className="nav-shell">
      <div className="brand">James Onajobi</div>
      <div className="nav-right">
        <nav className="Navbar" aria-label="Primary">
          <Link to="/" className="link">Home</Link>
          <Link to="/Repositories" className="link">Projects</Link>
        </nav>
        <button
          className={`theme-toggle slider-toggle ${isLight ? "is-light" : "is-dark"}`}
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
          title={`Switch to ${isLight ? "dark" : "light"} mode`}
        >
          <span className="toggle-track" aria-hidden="true">
            <span className="toggle-option">Dark</span>
            <span className="toggle-option">Light</span>
          </span>
          <span className="toggle-thumb" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
