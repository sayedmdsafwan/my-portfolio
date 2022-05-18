import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AllPortfolios from "./components/Portfolios/AllPortfolios";
import Footer from "./components/Shared/Footer";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/allportfolio" element={<AllPortfolios />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
