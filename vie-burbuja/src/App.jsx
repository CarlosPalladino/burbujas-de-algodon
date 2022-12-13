import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inscripcion from "./pages/Inscripcion";
import Faq from "./pages/Faq";
import Home from'./Home'
import './App.css'
export default function App() {
  return (
    <Routes>
      <Route exact path="/pages/Faq" element={<Faq/>} />
      <Route exact path="/pages/Incripcion" element={<Inscripcion />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  )
}


