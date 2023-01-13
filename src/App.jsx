import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
