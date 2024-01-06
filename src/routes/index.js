// import { rootRoutes } from "./root";
import HomePage from "../container/User/homepage/index";
import HomePageAdmin from "../container/Admin/homepage/index";
import LoginAdmin from "../container/Admin/Login/index"
import NotfoundPage from "../container/staticPage/NotfoundPage/index";
import Login from "../container/User/Login/index";
import Register from "../container/User/Register/index";
import Product from "../container/Admin/Product/index"

export const router = [
  {
    path: "/",
    element: <HomePage />,
    permissions: true,
    exact: true,
  },
  {
    path: "/admin",
    element: <HomePageAdmin />,
    permissions: true,
    exact: true,
  },
  {
    path: "/login",
    element: <Login />,
    permissions: false,
    exact: true,
  },
  {
    path: "/login/admin",
    element: <LoginAdmin />,
    permissions: false,
    exact: true,
  },
  {
    path: "/register",
    element: <Register />,
    permissions: false,
    exact: true,
  },
  {
    path: "/admin/product",
    element: <Product />,
    permissions: true,
    exact: true,
  },
  {
    path: "*",
    element: <NotfoundPage />,
    permissions: false,
    exact: true,
  },
];
