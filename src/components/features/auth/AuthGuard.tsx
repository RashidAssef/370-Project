import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface AuthGuardProps {
  children: React.ReactNode;
}

/**
 * A simple guard that prevents unauthenticated users from accessing protected routes.
 * If no token is found in localStorage, it redirects to the landing page.
 */
export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    // Redirect them to the landing page, but save the current location they were
    // trying to go to. This allows us to send them back after they log in.
    return <Navigate to="/?auth=signin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
