// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Antipasto from "./Components/Antipasto";
import Ceviche from "./Components/Ceviche";
import Landing from "./Components/Landing";
import Nav from "./Components/Nav";
import Postres from "./Components/Postres";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Nav/>
        {/* <Routes> */}
          <Landing/>
          <Ceviche/>
          <Antipasto/>
          <Postres/>
        {/* </Routes> */}
      {/* // </Router> */}
    </div>
  );
}

export default App;
