// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Nav/>
        {/* <Routes> */}
          <Home/>
          <Footer/>
        {/* </Routes> */}
      {/* // </Router> */}
    </div>
  );
}

export default App;
