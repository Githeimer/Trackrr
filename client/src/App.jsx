import React from "react";
import Login from "./pages/Login.jsx";
import Navbar from "./components/navbar.jsx";

const App = () => {
  return (
    <>
      <div className="container ">
        <Navbar></Navbar>
        <Login></Login>
      </div>
    </>
  );
};

export default App;
