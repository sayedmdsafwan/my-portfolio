import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Portfolios from "./Portfolios";

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Portfolios />
            <Contact />
        </div>
    );
};

export default Home;
