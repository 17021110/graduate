// import { rootRoutes } from "./root";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../container/User/homepage/index";
import HomePageAdmin from "../container/Admin/homepage/index";
import LoginAdmin from "../container/Admin/Login/index"
import NotfoundPage from "../container/staticPage/NotfoundPage/index";
import Login from "../container/User/Login/index";
import Register from "../container/User/Register/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/admin",
    element: <HomePageAdmin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/admin",
    element: <LoginAdmin />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotfoundPage />,
  },
]);
