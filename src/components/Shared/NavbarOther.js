import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const NavbarOther = () => {
    return (
        <div className="navbar fixed top-0 z-10 py-4 lg:px-32 px-6 bg-[#f5f5f5]">
            <div className="navbar-start w-full flex justify-between">
                <Link to="/">
                    <img className="w-32" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-outline btn-primary" to="/">
                    Back To Home
                </Link>
            </div>
        </div>
    );
};

export default NavbarOther;
