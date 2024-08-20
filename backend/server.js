import express from "express";

import dotenv from "dotenv";
dotenv.config();
import session from "express-session";
import cors from "cors";

import passport from "./config/passport.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const port = process.env.PORT;
const SECRET = process.env.APP_SECRET;

//these are the middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: process.env.FRONTEND_URL, // Allow requests from the frontend URL
  credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));
//express ko session middleware
//Creation and storage of session data (user authenication or preferences manage garna use aauxa)
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

//passport session
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
app.use(authRoutes);

app.get("/", (req, res) => {
  res.send("welcome to Trackrr backend");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
