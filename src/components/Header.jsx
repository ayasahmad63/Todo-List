import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand text-white" to="/">
                            {props.title}
                        </Link>
                    </div>
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
                                <Link className="nav-link active text-white about" to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

Header.defaultProps = {
    title: "My Todo's List",
    searchBar: true,
};

Header.prototype = {
    title: PropTypes.string,
    searchBar: PropTypes.bool,
};