import React from "react";
import { Routes as RoutesDom, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

const Login = React.lazy(() => import("../pages/Login"));

const Details = React.lazy(() => import("../pages/Details"));

const Products = React.lazy(() => import("../pages/Products"));

const Users = React.lazy(() => import("../pages/Users"));

const Loading = () => <p>loading...</p>;

const Routes: React.FC = () => (
  <React.Suspense fallback={<Loading />}>
    <RoutesDom>
      <Route path="login" element={<Login />}></Route>
      <Route
        path="/"
        element={<PrivateRoute component={Dashboard}></PrivateRoute>}
      >
        <Route path="/" element={<Products />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Route>
      <Route path="details" element={<Details />}></Route>
    </RoutesDom>
  </React.Suspense>
);

export default Routes;
