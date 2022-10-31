import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import PageNotFound from "./components/PageNotFound";
import Register from "./components/Register";
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
