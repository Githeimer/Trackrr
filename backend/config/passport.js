import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../model/Trackrr_User.js";
import dotenv from "dotenv";
dotenv.config();

// How user info is stored in the session
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
      callbackURL: process.env.BACKEND_URL + "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ email: profile.emails[0].value });

        if (user) {
          console.log("Old user detected");
          return done(null, user);
        } else {
          user = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            profilePhoto: profile.photos[0].value,
          });
          await user.save();
          console.log("New user saved");
          return done(null, user);
        }
      } catch (error) {
        console.error("Error in Google Strategy:", error);
        return done(error, null);
      }
    }
  )
);

export default passport;
