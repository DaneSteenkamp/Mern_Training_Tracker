import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <nav className="navbar navbar-dark bg-primary">
          <Link to="/home" className="navbar-brand">
            The Mern Training App
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/profile" className="nav-link">
                  Create Profile
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create New Exercise
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/log" className="nav-link">
                  Training Log
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
