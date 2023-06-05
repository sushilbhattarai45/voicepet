import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/login.jsx";

import Home from "./components/home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
