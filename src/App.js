import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { router } from "../src/routes/index";
import { RouterProvider } from "react-router-dom";


const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
