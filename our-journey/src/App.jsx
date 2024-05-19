import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import PublicJourneys from "./pages/PublicJourneys/PublicJourneys";

import Dashboard from "./pages/Dashboard/Dashboard";
import YourJourneys from "./pages/YourJourneys/YourJourneys";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/publicjourneys" element={<PublicJourneys />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/yourjourneys" element={<YourJourneys />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
