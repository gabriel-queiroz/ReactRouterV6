import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateOutletProps {
  children: React.ReactNode;
}

const PrivateOutlet = (props: PrivateOutletProps): ReactNode => {
  const isLogged = true;
  return isLogged ? props.children : <Navigate to="/" />;
};
export default PrivateOutlet;
