import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import Dashboard from "./Components/Dashboard";
import { Landing } from "./Components/Landing";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

  function AppBar() {
    const navigate = useNavigate();
    return (
      <div>
        <div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Landing Page
          </button>
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Dashboard Page
          </button>
        </div>
      </div>
    );
  }
};

export default App;
