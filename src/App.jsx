import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./assets/pages/home";
import { Login } from "./assets/login/login";
import './App.css'
function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/qweeqe" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App
