// import { rootRoutes } from "./root";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../container/homepage/index";
import NotfoundPage from "../container/staticPage/NotfoundPage/index";
import Login from "../container/Login/index";
import Register from "../container/Register/index"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
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
