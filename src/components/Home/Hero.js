import React from "react";

const Hero = () => {
    return (
        <div
            id="hero"
            className="hero mt-16 lg:-mb-36 -mb-40 min-h-screen bg-[#F5F5F5]"
        >
            <div className="hero-content text-center">
                <div className="max-w-md lg:max-w-3xl">
                    <h1 className="lg:text-5xl text-3xl mb-8 tracking-wider font-extralight">
                        I love to visualize ideas and make them live into
                        websites
                    </h1>
                    <a href="#contact">
                        <button className="btn btn-outline btn-primary">
                            Contact Me
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
