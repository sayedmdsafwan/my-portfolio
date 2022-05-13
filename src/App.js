import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";

function App() {
    return (
        <Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
            </Routes>
            <Footer />
        </Navbar>
    );
}

export default App;
