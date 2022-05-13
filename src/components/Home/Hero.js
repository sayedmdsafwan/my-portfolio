import React from "react";

const Hero = () => {
    return (
        <>
            <div className="hero mt-16 min-h-screen border-b-2 border-primary bg-[#F5F5F5]">
                <div className="hero-content text-center">
                    <div className="max-w-md lg:max-w-3xl">
                        <h1 className="lg:text-5xl text-3xl mb-8 tracking-wider font-extralight">
                            I love to visualize ideas and make them live into
                            websites
                        </h1>
                        <button class="btn btn-outline btn-primary">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
