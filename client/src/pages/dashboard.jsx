import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Progess from "../components/progess";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("default");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_REACT_APP_BACKEND_URL + "/dashboard",
          {
            credentials: "include",
          }
        );

        const data = await response.json();
        setUsername(data.user.displayName);
        console.log(data);
        if (data.isAutheticated) {
          navigate("/dashboard");
        }
        if (response.status === 200) {
          setLoading(false);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("ERROR CHECKING AUTH:", error);
        navigate("/");
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const logoutURL = import.meta.env.VITE_REACT_APP_BACKEND_URL + "/logout";
      console.log("hello clicked");
      const response = await fetch(logoutURL, {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        // Redirect to login page or home page after successful logout
        navigate("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  if (loading)
    return (
      <>
        <p className="text-white">Loading........</p>
      </>
    );

  return (
    <>
      <h1 className="text-3xl text-white">User Dashboard</h1>
      <h1 className="text-3xl text-white">Hello {username}</h1>

      <button onClick={handleLogout} className="text-white ">
        Logout
      </button>
      <Progess></Progess>
    </>
  );
};

export default Dashboard;
