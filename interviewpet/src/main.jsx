import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/login.jsx";
import "./index.css";
import Home from "./components/home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.jsx";
import Landing from "./components/landing.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  </BrowserRouter>
);
