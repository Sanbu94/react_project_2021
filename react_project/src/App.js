import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import TODO from "./TODO";
import Info from "./Info";
import "./index.css";

//Router used to acces different pages.
const App = () => {
  return (
    <Router>
      <h1>Projectwork</h1>
      <ul className="header">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/TODO">TODO</NavLink>
        </li>
        <li>
          <NavLink to="/Info">Info</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TODO" element={<TODO />} />
        <Route path="/Info" element={<Info />} />
      </Routes>
    </Router>
  );
};

export default App;
