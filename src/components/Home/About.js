import React from "react";
import myPic from "../../images/Safwan.jpg";

const About = () => {
    return (
        <div id="about" className="min-h-screen pt-52">
            <div className="">
                <div className="flex justify-center -mt-12 lg:-mt-16">
                    <div className="border-t-2 border-primary w-full flex justify-center">
                        <div className="avatar -mt-12 lg:-mt-16">
                            <div className="w-24 lg:w-32 rounded-full ring ring-primary ring-offset-base-100">
                                <img src={myPic} alt="my pic" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-6 lg:px-32">
                    <h2 className="text-center text-5xl my-8 font-extralight">
                        About Me
                    </h2>
                    <div className="flex items-center flex-col-reverse lg:flex-row">
                        <div className="flex flex-1 flex-col gap-4 lg:pr-14 pb-6">
                            <p>HTML 90%</p>
                            <progress
                                className="progress progress-primary w-60 lg:w-full"
                                value="90"
                                max="100"
                            ></progress>
                            <p>CSS 85%</p>
                            <progress
                                className="progress progress-primary w-60 lg:w-full"
                                value="85"
                                max="100"
                            ></progress>
                            <p>JAVASCRIPT 80%</p>
                            <progress
                                className="progress progress-primary w-60 lg:w-full"
                                value="80"
                                max="100"
                            ></progress>
                            <p>REACT 90%</p>
                            <progress
                                className="progress progress-primary w-60 lg:w-full"
                                value="90"
                                max="100"
                            ></progress>
                            <p>NODE 70%</p>
                            <progress
                                className="progress progress-primary w-60 lg:w-full"
                                value="85"
                                max="100"
                            ></progress>
                            <p>MONGODB 90%</p>
                            <progress
                                className="progress progress-primary w-60 lg:w-full"
                                value="85"
                                max="100"
                            ></progress>
                        </div>
                        <div className="divider lg:divider-horizontal">
                            SKILLS
                        </div>
                        <div className="flex-1 lg:pl-14 pb-6 ">
                            <h3 className="text-4xl mb-3 font-extralight capitalize">
                                md. Safwan
                            </h3>
                            <span className="text-secondary">
                                FRONTEND DEVELOPER AND UI UX EXPERT
                            </span>
                            <p className="mt-5 tracking-wider">
                                I loved designing things, so I started designing
                                websites to improve my skills. This meant that I
                                had to create something new every week, which
                                was a little better for each project.
                            </p>
                            <p className="my-5 tracking-wider">
                                I've heard of React before, but I haven't really
                                looked into it. I knew JAVASCRIPT before. It all
                                changed when I decided it was time to expand my
                                skill set to realize my website design project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
