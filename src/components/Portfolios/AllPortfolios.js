import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";
import NavbarOther from "../Shared/NavbarOther";

const AllPortfolios = () => {
    const [portfolios, setPortfolios] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const navigateToPortfolioDetail = (id) => {
        navigate(`/portfolio/${id}`);
    };

    useEffect(() => {
        fetch("https://demo-portfolio-safwan.herokuapp.com/portfolios")
            .then((res) => res.json())
            .then((data) => {
                setPortfolios(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <NavbarOther />
            <div className="mx-auto w-4/5 pt-20 mb-10">
                <h2 className="text-center text-5xl my-8 font-extralight">
                    My Portfolios
                </h2>

                <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {portfolios
                        .map((portfolio) => (
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
                                            <span className="badge badge-md badge-outline">
                                                {portfolio.type}
                                            </span>
                                        </div>
                                        <h2 className="card-title text-2xl font-light">
                                            {portfolio.name}
                                        </h2>
                                        <small>
                                            {portfolio.description.replace(
                                                /^(.{50}[^\s]*).*/,
                                                "$1"
                                            )}
                                            ...
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
                                        <button
                                            onClick={() =>
                                                navigateToPortfolioDetail(
                                                    portfolio._id
                                                )
                                            }
                                            className="btn btn-outline btn-primary"
                                        >
                                            See Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                        .reverse()}
                </div>
            </div>
        </>
    );
};

export default AllPortfolios;
