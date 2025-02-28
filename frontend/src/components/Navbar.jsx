// src/components/Navbar.jsx
import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand fw-bold" to="/">
          DEV CONNECT
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <SignedIn>
              <li className="nav-item rounded-full border-2 ml-4">
                <Link className="nav-link" to="/create-room">
                  Create New Room
                </Link>
              </li>
              <li className="nav-item">
                <UserButton />
              </li>
            </SignedIn>
            <SignedOut>
              <li className="nav-item">
                <Link className="nav-link" to="/auth">
                  Login
                </Link>
              </li>
            </SignedOut>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
