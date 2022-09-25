import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="col-md-12">
      <nav className="navbar py-3">
        <ul className="nav ms-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Gmail
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Images
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
            <i class="fa-solid fa-th"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="fa fa-user-circle"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
