import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/Repositories", label: "Projects" },
  { to: "/TestingError", label: "System Test" },
];

export default function Navbar() {
  return (
    <header className="Navbar">
      <div className="navInner">
        <div className="brandTag">MECHATRONICS//PORTFOLIO</div>
        <nav aria-label="Main navigation" className="navLinks">
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => (isActive ? "link linkActive" : "link")}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
