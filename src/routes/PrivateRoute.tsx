import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const isLogged = false;
  const Component = props.component;
  if (!isLogged) return <Navigate to="/login" />;

  return <Component />;
};

export default PrivateRoute;
