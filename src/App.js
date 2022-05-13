import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Shared/Navbar";

function App() {
    return (
        <div>
            <Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Navbar>
        </div>
    );
}

export default App;
