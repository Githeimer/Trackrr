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

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(err, null);
  }
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
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
          return done(null, user);
        } else {
          user = new User({
            googleId: profile.Id,
            displayName: profile.displayName,
            email: profile.email,
            profilePhoto: profile.photos[0].value,
          });
          await user.save();
          return done(null, user);
        }
      } catch (error) {}
      console.error(err);
      return done(err, null);
    }
  )
);

export default passport;
