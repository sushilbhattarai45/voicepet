import React from "react";
import ReactDOM from "react-dom/client";
import Auth from "./components/auth.jsx";
import "./index.css";
import Home from "./components/home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.jsx";
import Interview from "./components/interview.jsx";
import Landing from "./components/landing.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Landing />} />
      <Route path="/interview" element={<Interview />} />
    </Routes>
  </BrowserRouter>
);
