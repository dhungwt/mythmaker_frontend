import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

//this component checks whether a user is authenticated and decides what to 
//render based on that check
export default function PrivateRoute() {
  const authorizedUser = useSelector((state) => !!state.user.id);

  return authorizedUser ? <Outlet /> : <Navigate to="/login" />;
}