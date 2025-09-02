import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  // Assuming your login reducer keeps something like: { isAuthenticated: true, user: {...} }
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

 console.log('authenticate__',isAuthenticated)
//   if (!isAuthenticated) {
//     return <Navigate to={redirectPath} replace />;
//   }

  return isAuthenticated ?  <Outlet /> : <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
