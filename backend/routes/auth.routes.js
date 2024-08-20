import { Router as router } from "express";
import passport from "../config/passport.js";

const Router = router();

Router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
// console.log(process.env.FRONTEND_URL + "/");
Router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: process.env.FRONTEND_URL + "/",
  }),
  (req, res) => {
    res.redirect(process.env.FRONTEND_URL + "/dashboard");
  }
);

Router.get("/dashboard", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Hello, ${req.user.displayName}!`);
  } else {
    res.redirect("/login");
  }
});

Router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect(process.env.FRONTEND_URL + "/");
  });
});

export default Router;
