import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import JoinOurTeam from "./pages/JoinOurTeam";
import RequestQuote from "./pages/RequestQuote";
import MainLayout from "./layouts/MainLayout";

import "./customStyles/HeroStyle.css";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/joinOurTeam" element={<JoinOurTeam />} />
        <Route path="/requestQuote" element={<RequestQuote />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
