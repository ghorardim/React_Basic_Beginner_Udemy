import React, { Component } from "react";

class NavBar extends Component {
  render() {
    var element = (
      <React.Fragment>
        {/* <h1>হাও মাও খাও</h1>
                        <p className="highlight">মানুষের গন্ধ পাও &#128520;</p> */}
        <nav className="navbar navbar-expand-lg bg-dark navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              React Biginer Basic
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
    return element;
  }
}

export default NavBar;
