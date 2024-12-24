import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            {/* Brand */}
                            <NavLink
                                className={({ isActive }) => isActive ? 'navbar-brand menu_active' : 'navbar-brand'}
                                to="/"
                                aria-current="page"
                            >
                                Home
                            </NavLink>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            {/* Navbar links */}
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? 'nav-link menu_active' : 'nav-link'}
                                            to="/"
                                            aria-current="page"
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? 'nav-link menu_active' : 'nav-link'}
                                            to="/service"
                                            aria-current="page"
                                        >
                                            Services
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? 'nav-link menu_active' : 'nav-link'}
                                            to="/contact"
                                            aria-current="page"
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? 'nav-link menu_active' : 'nav-link'}
                                            to="/about"
                                            aria-current="page"
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
