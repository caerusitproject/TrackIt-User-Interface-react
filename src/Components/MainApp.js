import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from "react-router-dom";
import { useEffect, Suspense } from "react";
import * as actions from "../actions";
import { routes } from "./RoutesConfig";

import Navbar from "../Components/HomePage/Navbar";
import Footer from "../Components/HomePage/Footer";
import Login from "../Components/UserLogin/LoginPage";
import PasswordReset from "../Components/UserLogin/PasswordReset";
import RegisterPage from "../Components/UserLogin/RegisterUser";
import GlobalLoader from "../Config/GlobalLoader";
import LinearProgress from '@mui/material/LinearProgress';
import SuccessFailureSnackbar from "../Config/SuccessFailureSnackbar";
import ProtectedRoute from "../Config/ProtectedRoute";
import HomePage from "../Components/HomePage/HomePage";
import PublicRoute from "../Config/PublicRoute"

// Layout with Navbar + Footer
function AppLayout() {
  return (
   <>
      <Navbar />
      <div style={{ marginTop: "4px", marginBottom: "24px" }}>
        <Suspense fallback={<LinearProgress/>}>
          <GlobalLoader/>
          <SuccessFailureSnackbar/>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

// Layout without Navbar + Footer (for login)
function PublicLayout() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <SuccessFailureSnackbar/>
      <Outlet />
    </div>
  );
}

export default function MainApp() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const arrayList = useSelector((state) => state.user.dataList);
  const value =  JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    dispatch(actions.fetchUser());
  }, [dispatch]);

  console.log('value JSON___',value);

  console.log("dummy json___", arrayList);
  console.log('isAuthenticate___',isAuthenticated)

  return (
 
    <Router>
      <Routes>
        {/* Public layout (no navbar/footer) */}
        <Route element={<PublicRoute />}>
          <Route element={<PublicLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/password_reset" element={<PasswordReset />} />
            <Route path="/register-user" element={<RegisterPage />} />
          </Route>
        </Route>

        {/* Protected layout (with navbar/footer) */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            {/* Default landing → Home */}
            <Route index element={<Navigate to="/home" replace />} />

            {routes
              .filter(
                (r) =>
                  r.path !== "/login" &&
                  r.path !== "/password_reset" &&
                  r.path !== "/register-user"
              )
              .map(({ path, element, index, ...rest }) => (
                <Route
                  key={path || "index"}
                  path={path}
                  index={index}
                  element={element}
                  {...rest}
                />
              ))}
          </Route>
        </Route>

        {/* Fallback → conditional based on auth */}
        <Route
          path="*"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>

  );
}
