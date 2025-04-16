import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FormPage from "./components/FormPage";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <audio autoPlay loop>
          <source src="https://yourdomain.com/audio.mp3" type="audio/mpeg" />
        </audio>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;