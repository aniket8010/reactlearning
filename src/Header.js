import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { TbBeta } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";

export const Header = () => {
    const navigate = useNavigate()
    function redirectLogin() {
        navigate("/login")
    }

    return (
        <header className='bg-primary'>
            <nav className="navbar navbar-expand-lg">
                <div style={{ gap: "350px" }} className="container-fluid ">
                    <Link to={"/"} className='navbar-brand mx-5 text-white'>LOGO</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav gap-3">
                            <li className="nav-item">
                                <Link to={"/contact"} className="nav-link text-white">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/About"} className="nav-link text-white">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/features"} className="nav-link text-white">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/pricing"} className="nav-link text-white">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/tour"} className="nav-link text-white">Tour</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item">
                            <Link to={"/instagram"} className="nav-link text-white"><FaInstagram /></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/facebook/ok/good"} className="nav-link text-white"><FaFacebookF /></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/beta/ok/good"} className="nav-link text-white"><TbBeta /></Link>
                        </li>
                    </ul>
                    <button onClick={redirectLogin} className='btn btn-outline-light'>Login</button>
                </div>
            </nav>
        </header>
    )
}