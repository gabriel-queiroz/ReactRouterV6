import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard: React.FC = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Produtos</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);

export default Dashboard;
