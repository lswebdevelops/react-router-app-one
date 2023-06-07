import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App";
import About from './pages/About';
import NotFound from "./pages/NotFound";


const RouteSwitch = () => {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
       </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
