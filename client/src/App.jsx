import React from "react";
import "./progess_bar.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Navbar from "./components/navbar.jsx";
import Notfound from "./pages/404notfound.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Landing from "./pages/Landing.jsx";
import Task from "./components/task.jsx";

const App = () => {
  return (
    <>
      <div className="container ">
        <Navbar></Navbar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/landing" element={<Landing></Landing>}></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/task" element={<Task />}></Route>
            <Route path="*" element={<Notfound></Notfound>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
