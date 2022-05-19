import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context";

export function PrivateRoute() {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
}
