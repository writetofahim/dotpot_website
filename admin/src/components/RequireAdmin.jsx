/*
This component, RequireAdmin, is used to restrict access to routes for non-admin users. 
It checks the user's role from the AuthContext and redirects to the login page if the user is not an admin. 
The component takes in children as props, which refers to the routes that are to be restricted. 
*/

import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const RequireAdmin = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!user && !loading) {
    return (
      <Navigate to="/admin/login" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default RequireAdmin;
