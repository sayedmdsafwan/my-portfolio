import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = ({ children }) => {
    return (
        <div className="drawer drawer-end bg-[#F5F5F5]">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div
                    className="w-full fixed top-0 lg:px-28 navbar"
                    style={{
                        backgroundColor: "#F5F5F5",
                    }}
                >
                    <div className="flex-1 px-2 mx-2">
                        <NavLink to="/">
                            <img src={logo} className="w-36" alt="" />
                        </NavLink>
                    </div>
                    <div className="flex-none lg:hidden">
                        <label
                            htmlFor="my-drawer-3"
                            className="btn btn-square btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-6 h-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>

                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            <li>
                                <NavLink to="/home" className="rounded-lg">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <a href="#about" className="rounded-lg">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="rounded-lg">
                                    Portfolio
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li>
                        <a href="#about" className="rounded-lg">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="rounded-lg">
                            Portfolio
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
