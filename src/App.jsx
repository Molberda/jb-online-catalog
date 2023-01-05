import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
