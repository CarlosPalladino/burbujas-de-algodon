import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inscripcion from "./Inscripcion";
import Home from'./Home'
// import Navbar from "./components/Navbar";
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route exact path="/Incripcion" element={<Inscripcion />} />
      <Route exact path="/" element={<Home />} />
      {/* <Route exact path="/Navbar" element={<Navbar />} /> */}

    </Routes>
  )
}


