import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div style={{ marginBottom: "80px" }} className="container">
      <nav className="navbar fixed-top  navbar-expand-sm navbar-dark bg-danger mb-3 p-0">
        <div className="container">
          <div className="  navbar-collapse">
            <a className="navbar-left">
              <img
                className="img-responsive"
                src={process.env.REACT_APP_root_dir + "/images/logo.png"}
              />
            </a>
            <a className="navbar-left whitelogo">
              <h1>PFA</h1>
            </a>
          </div>
          <div className="container" style={{ paddingRight: "0px" }}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  exact={true}
                  activeClassName="active"
                >
                  Terminal Assignment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/centralstations"
                  className="nav-link"
                  activeClassName="active"
                >
                  Central Stations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/reports"
                  className="nav-link"
                  activeClassName="active"
                >
                  Reports
                </NavLink>
              </li>
            </ul>
            <div className="profilediv">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link">Welcome John Doe</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">|</a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
