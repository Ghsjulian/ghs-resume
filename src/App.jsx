import { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    BrowserRouter
} from "react-router-dom";
import "./vendor/bootstrap-icons/bootstrap-icons.css";
import "./css/Responsive.css";
import "./css/Index.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/projects" exact element={<Projects />} />
                <Route path="/skills" exact element={<Skills />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
