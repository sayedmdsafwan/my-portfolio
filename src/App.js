import { BsArrowUp } from "react-icons/bs";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Home from "./components/Home/Home";
import AllPortfolios from "./components/Portfolios/AllPortfolios";
import SinglePortfolio from "./components/Portfolios/SinglePortfolio";
import Footer from "./components/Shared/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <ScrollToTop
                smooth={true}
                component={
                    <p className="flex items-center justify-center">
                        <BsArrowUp />
                    </p>
                }
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/allportfolio" element={<AllPortfolios />} />
                <Route
                    path="portfolio/:portfolioId"
                    element={<SinglePortfolio />}
                />
            </Routes>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default App;
