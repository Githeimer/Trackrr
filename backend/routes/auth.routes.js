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
  res.send(`Hello, ${req.user.displayName}!`);
});

Router.get("/auth/check", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ isAuthenticated: true });
  } else {
    res.json({ isAuthenticated: false });
  }
});

Router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      // Handle logout errors
      return res.status(500).json({ error: "Logout failed" });
    }
    // Send a success response
    res.status(200).json({ message: "Logged out successfully" });
  });
});

export default Router;
