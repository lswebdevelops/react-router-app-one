import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Profile from "./pages/Profile";
import Info from "./pages/Info";
import Books from "./pages/Books";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/books"}>Books</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link to={"/info"}>Info</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/info" element={<Info />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
