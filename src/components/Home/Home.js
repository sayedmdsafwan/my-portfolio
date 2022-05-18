import React from "react";
import Navbar from "../Shared/Navbar";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Portfolios from "./Portfolios";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Portfolios />
            <Contact />
        </div>
    );
};

export default Home;
