import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Profile from "./components/Profile";
import Info from "./components/Info";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <App />
              <Link to="info">Info</Link>
              <div>This is a page</div>
            </div>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/info" element={<Info />} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
