import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./components/Profile";
import Info from "./components/Info";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/info" element={<Info />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;