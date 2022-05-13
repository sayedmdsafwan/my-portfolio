import React, { useEffect, useState } from "react";

const Portfolios = () => {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        fetch("portfolios.json")
            .then((res) => res.json())
            .then((data) => setPortfolios(data));
    }, []);

    return (
        <div id="portfolio" className="mx-auto w-4/5 pt-28 mb-10 min-h-screen">
            <h2 className="text-center text-5xl my-8 font-extralight">
                My Portfolios
            </h2>
            <div className="tabs bg-transparent tabs-boxed flex justify-center gap-8">
                <a href=" " className="tab tab-active">
                    All
                </a>
                <a href=" " className="tab">
                    E-Commerce
                </a>
                <a href=" " className="tab">
                    Blogs
                </a>
                <a href=" " className="tab">
                    UI/UX
                </a>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {portfolios.map((portfolio) => (
                    <div key={portfolio._id}>
                        <div className="card lg:max-w-xs bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={portfolio.img}
                                    alt="portfolio thumb"
                                />
                            </figure>
                            <div className="card-body">
                                <div className="">
                                    <span className="badge badge-sm badge-outline">
                                        {portfolio.type}
                                    </span>
                                </div>
                                <h2 className="card-title text-3xl font-extralight">
                                    {portfolio.name}
                                </h2>
                                <small>
                                    {portfolio.description.slice(0, 60)}
                                </small>
                                <div className="card-actions my-2">
                                    {portfolio.tech.map((t, index) => (
                                        <div
                                            key={index}
                                            className="badge badge-sm badge-secondary"
                                        >
                                            {t}
                                        </div>
                                    ))}
                                </div>
                                <button class="btn btn-outline btn-primary">
                                    See Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button class="btn btn-outline btn-primary mx-auto block">
                See More Works...
            </button>
        </div>
    );
};

export default Portfolios;