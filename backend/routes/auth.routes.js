import { Router as router } from "express";
import passport from "../config/passport.js";

import isAuthenticated from "../middleware/checkAuth.js";

const Router = router();

Router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

Router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: process.env.FRONTEND_URL + "/",
  }),
  (req, res) => {
    res.redirect(process.env.FRONTEND_URL + "/dashboard");
  }
);

Router.get("/dashboard", isAuthenticated, (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      isAuthenticated: true,
      user: req.user,
    });
  } else {
    res.status(401).json({ isAuthenticated: false });
  }
});

Router.get("/auth/check", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ isAuthenticated: true });
  } else {
    res.json({ isAuthenticated: false });
  }
});

Router.get("/login", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect(process.env.FRONTEND_URL + "/dashboard");
  } else {
    res.send("Login Page");
  }
});

Router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: "Logout failed" });
    }
    res.clearCookie("connect.sid");
    console.log("User Session Cleared");
    return res
      .status(200)
      .json({ success: true, message: "Logged out successfully" });
  });
});

export default Router;
