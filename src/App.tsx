import React from "react";
import Routes from "./routes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/login">Home</Link>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
        </ul>
        <hr />
        <Routes />
      </div>
    </div>
  );
}

export default App;
