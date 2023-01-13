import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Burger from "./Pages/Ui/Burger";

function App() {
  return (
    <Router>
      <Burger />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
