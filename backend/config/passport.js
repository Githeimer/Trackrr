import { access } from "fs";
import passport from "passport";

import { Strategy as GithubStrategy } from "passport-github";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as TwitterStrategy } from "passport-twitter";

import User from "../model/Trackrr_User.js";

import dotenv from "dotenv";
dotenv.config();

//how user info is stored in the session
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

//Google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
      callbackURL: process.env.BACKEND_URL + "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      // Save or find user in the database
      try {
        // let user= await User.
      } catch (error) {}
      return true;
    }
  )
);

export default passport;
