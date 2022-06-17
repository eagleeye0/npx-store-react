import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, useLocation } from "react-router-dom";

export function RequireAuth({ children, redirectTo }) {

    let isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
