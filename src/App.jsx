import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import { NotFound } from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />

          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
