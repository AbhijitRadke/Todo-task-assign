import "./App.js"
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Contact from "./Pages/Contact";
import Task from "./Pages/Task";
import Home from "./Pages/Home";
import Header from "./components/Header.js";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/task" element={<Task/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
