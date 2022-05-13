import React from "react";

const Footer = () => {
    return (
        <div className="pb-8">
            <p className="text-center text-gray-400">
                Copyright © {new Date().getFullYear()} || Designed By{" "}
                <span className="text-primary">Safwan</span>
            </p>
        </div>
    );
};

export default Footer;
