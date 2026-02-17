import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/Repositories", label: "Repositories" },
  { to: "/TestingError", label: "Testing Error" },
];

export default function Navbar() {
  return (
    <header className="Navbar">
      <nav className="navInner" aria-label="Main navigation">
        {navItems.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              isActive ? "link linkActive" : "link"
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
