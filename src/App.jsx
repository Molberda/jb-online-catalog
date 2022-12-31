// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Ceviche from "./Components/Ceviche";
import Landing from "./Components/Landing";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Nav/>
        {/* <Routes> */}
          <Landing/>
          <Ceviche/>
        {/* </Routes> */}
      {/* // </Router> */}
    </div>
  );
}

export default App;
