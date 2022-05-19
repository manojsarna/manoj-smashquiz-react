import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context";

export function RestrictedRoute() {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const nowGoTo = location?.state?.from?.pathname ?? "/";
  return user ? (
    <Navigate to={nowGoTo} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}
