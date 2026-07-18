import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import { NotFound } from "./pages/NotFound/NotFound";
import Layout from "./Layout";
import Discover from "./pages/Discover/Discover";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<LandingPage />} path="/" />
            <Route element={<Discover />} path="/discoverevents" />
            <Route element={<NotFound />} path="*" />
          </Route>
        </Routes>{" "}
      </BrowserRouter>
    </>
  );
};

export default App;
