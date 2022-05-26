import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import NavbarOther from "../Shared/NavbarOther";

const SinglePortfolio = () => {
    const { portfolioId } = useParams();
    const [portfolio, setPortfolio] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            `https://demo-portfolio-safwan.herokuapp.com/portfolio/${portfolioId}`
        )
            .then((res) => res.json())
            .then((data) => {
                setPortfolio(data);
                setLoading(false);
            });
    }, [portfolioId]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <NavbarOther />

            <div className="bg-[#f5f5f5] mt-20 lg:py-20 py-10">
                <h2 className="text-5xl text-center text-primary font-extralight tracking-widest mb-10">
                    {portfolio.name}
                </h2>
            </div>
            <section className="max-w-4xl mx-auto py-20">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row gap-14">
                        <img
                            src={portfolio.img}
                            className="max-w-sm rounded-lg shadow-2xl"
                            alt={portfolio.name}
                        />
                        <div>
                            <h3 className="text-xl font-semibold">
                                Type:
                                <span className="text-secondary mx-2">
                                    {portfolio.type}
                                </span>
                            </h3>

                            <h3 className="text-xl mt-3 font-semibold">
                                Technology Used:
                                {portfolio.tech &&
                                    Object.values(portfolio.tech).map(
                                        (t, index) => (
                                            <span
                                                key={index}
                                                className="badge font-light badge-lg badge-secondary mx-2 "
                                            >
                                                {t}
                                            </span>
                                        )
                                    )}
                            </h3>
                            <h3 className="text-xl mt-3 font-semibold">
                                Project Desc:{" "}
                            </h3>
                            <p className="tracking-wide">
                                {portfolio.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SinglePortfolio;
