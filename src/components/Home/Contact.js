import React, { useRef } from "react";
import contactImg from "../../images/contact.png";
import { GoLocation } from "react-icons/go";
import { BsFacebook, BsGithub, BsLinkedin, BsTelephone } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_1zwikb3",
                "template_082jzxe",
                form.current,
                "46QSj8fAcC4hNSReu"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
        toast.success("Message sent successfully!");
    };

    return (
        <div id="contact" className="my-20  px-6 lg:px-32">
            <h2 className="text-center text-5xl my-14 font-extralight">
                Contact Me
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-20">
                <div>
                    <h3 className="text-4xl mb-3 font-extralight capitalize">
                        Let's Talk
                    </h3>
                    <span className="text-secondary uppercase">
                        Have a project? I would love to help you
                    </span>
                    <form ref={form} onSubmit={sendEmail} className="mt-6">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-gray-400">
                                    Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name="from_name"
                                required
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
                                name="from_email"
                                required
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-400">
                                    Message
                                </span>
                            </label>
                            <textarea
                                required
                                name="message"
                                className="textarea textarea-bordered h-24"
                            ></textarea>
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
                    <div className="mt-8 flex items-center gap-1 text-primary">
                        <GoLocation />
                        <span>88, East Kazipara, Mirpur, Dhaka, 1216</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-primary">
                        <BsTelephone /> <span>+880 1867 841109</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-primary">
                        <BiEnvelope /> <span>sayedmdsafwan@gmail.com</span>
                    </div>
                    <div className="flex gap-4 mt-4 text-secondary">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://facebook.com/safwan.sayed.09"
                        >
                            <BsFacebook size={26} />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/safwan98/"
                        >
                            <BsLinkedin size={26} />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/sayedmdsafwan"
                        >
                            <BsGithub size={25} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
