import React from "react";

const Hero = () => {
    return (
        <div
            id="hero"
            className="hero mt-16 lg:-mb-36 -mb-40 min-h-screen bg-[#F5F5F5]"
        >
            <div className="hero-content text-center mb-20">
                <div className="max-w-md lg:max-w-3xl">
                    <h3 className="text-2xl font-light text-primary mb-4">
                        Hi, this is Safwan
                    </h3>
                    <h1 className="lg:text-5xl text-3xl mb-8 tracking-wider font-extralight">
                        I love to visualize ideas and make them live into
                        websites
                    </h1>
                    <a href="#contact">
                        <button className="btn btn-outline mr-2 btn-primary">
                            Contact Me
                        </button>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://drive.google.com/file/d/1xW89ZNvqB4WE_jjXzey8s58W-VxLCsPn/view?usp=sharing"
                    >
                        <button className="btn btn-outline ml-2 btn-secondary">
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
