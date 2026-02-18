import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="Error404">
      <h1>404</h1>
      <p>Signal lost. Page not found.</p>
      <Link className="button-primary" to="/">Return Home</Link>
    </div>
  );
}
