import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
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
  const arrayList = useSelector((state) => state.user.dataList);

  useEffect(() => {
    dispatch(actions.fetchUser());
  }, [dispatch]);

  console.log("dummy json___", arrayList);

  return (
    <Router>
        <Routes>
          {/* Public layout (no navbar/footer) */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Login/>} />
            <Route path="/password_reset" element={<PasswordReset/>} />
            <Route path="/register-user" element={<RegisterPage/>} />
          </Route>

          {/* App layout (with navbar/footer) */}
          <Route element={<AppLayout />}>
            {routes
              .filter((r) => r.path !== "/" && r.path !== "/password_reset" && r.path !== "/register-user") // exclude login + pwd reset + sign_up
              .map(({ path, element, index, ...rest }) => (
                <>
                <Route
                  key={path || "index"}
                  path={path}
                  index={index}
                  element={element}
                  {...rest}
                />
                
                </>
              ))}
          </Route>
        </Routes>
    </Router>
  );
}
