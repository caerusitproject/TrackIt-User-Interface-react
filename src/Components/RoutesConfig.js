import { lazy } from 'react';

const LoginPage = lazy(() => import('./UserLogin/LoginPage'));
const Request = lazy(() => import('../Components/Requests/RequestPage'));
const Solution = lazy(() => import('./Solution'));
const PasswordReset = lazy(() => import('./UserLogin/PasswordReset'));
const NotFound = lazy(() => import('./Notfound'));
const RegisterPage = lazy(() => import('./UserLogin/RegisterUser'));
const Home = lazy(() => import('./HomePage/HomePage'));
const EditForm = lazy(() => import('../Components/Requests/CreateEditRequest'));
const TicketDetails = lazy(() => import('../Components/Requests/TicketDetails/TicketBody'));
const AccountDetails = lazy(() => import('../Components/HomePage/AccountDetails'));


export const routes = [
  { path: '/', element: <LoginPage /> },
  { path: '/register-user', element: <RegisterPage /> },
  { path: '/request', element: <Request /> },
  { path: '/request', element: <Request /> },
  { path: '/account-details', element: <AccountDetails /> },
  // { path: '/solution', element: <EditForm /> },
  { path: '/ticket/:id', element: <TicketDetails/> },
  { path: '/password_reset', element: <PasswordReset /> },
  { path: '/home', element: <Home /> },
  { path: '*', element: <NotFound /> },
];
