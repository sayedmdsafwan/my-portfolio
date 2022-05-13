import React from "react";
import contactImg from "../../images/contact.png";
import { GoLocation } from "react-icons/go";
import { BsFacebook, BsLinkedin, BsTelephone } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";

const Contact = () => {
    return (
        <div id="contact" className="my-20 pt-12 px-6 lg:px-32">
            <h2 className="text-center text-5xl my-14 font-extralight">
                Contact Me
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <h3 className="text-4xl mb-3 font-extralight capitalize">
                        Let's Talk
                    </h3>
                    <span className="text-secondary uppercase">
                        Have a project? I would love to help you
                    </span>
                    <form className="mt-6">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-gray-400">
                                    Name
                                </span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-gray-400">
                                    Email
                                </span>
                            </label>
                            <input
                                type="Email"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-400">
                                    Message
                                </span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24"></textarea>
                        </div>
                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-outline btn-primary mt-4"
                        />
                    </form>
                </div>
                <div>
                    <img src={contactImg} alt="contact svg" />
                    <div className="mt-8 flex items-center gap-1 text-secondary">
                        <GoLocation />
                        <span>1901 Thornridge Cir. Shiloh, Hawaii 81063</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-secondary">
                        <BsTelephone /> <span>+880 1867 841109</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-secondary">
                        <BiEnvelope /> <span>sayedmdsafwan@gmail.com</span>
                    </div>
                    <div className="flex gap-4 mt-4 text-secondary">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://facebook.com/safwan.sayed.09"
                        >
                            <BsFacebook size={42} />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/safwan404/"
                        >
                            <BsLinkedin size={42} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
