import React from "react";
import { Link } from "react-router-dom";

class NavigationBar extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item, mx-5">
              <Link to={"/"} className="nav-link">
                FS Home Page
              </Link>
            </li>
            <li className="nav-item, mx-5">
              <Link to={"/passenger"} className="nav-link">
                Add Passenger
              </Link>
            </li>
            <li className="nav-item, mx-5">
              <Link to={"/flight"} className="nav-link">
                Add Flight
              </Link>
            </li>
            <li className="nav-item, mx-5">
              <Link to={"/confirmation"} className="nav-link">
                Create New Confirmation
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3"></div>
      </>
    );
  }
}

export default NavigationBar;
