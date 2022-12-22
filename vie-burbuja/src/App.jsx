import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inscripcion from "./pages/Inscripcion";
import Consultas from "./pages/Consultas";
import Home from './Home'
import './App.css'
export default function App() {
  return (
    <Routes>
      <Route exact path="/pages/Consultas" element={<Consultas />} />
      <Route exact path="/pages/Incripcion" element={<Inscripcion />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  )
}


