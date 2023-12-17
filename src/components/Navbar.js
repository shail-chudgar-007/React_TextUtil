import React from "react";
import PropTypes from "prop-types";

//rfc :- Shortcut fo the function based component
export default function Navbar(propes) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${propes.mode}} bg-${propes.mode}`}
    >
      <div className="container-fluid">
        <a className={`navbar-brand text-${propes.mode === 'light'?'dark':'light'}`} href="/">
          {propes.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${propes.mode === 'light'?'dark':'light'}`} aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-${propes.mode === 'light'?'dark':'light'}`} href="/">
                {propes.about}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          <div className={`form-check form-switch text-${propes.mode === 'light'?'dark':'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={propes.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable {propes.mode === 'light'?'Dark':'Light'} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Demo",
  about: "About Demo",
};
