import express from "express";
import session from "express-session";
import cors from "cors";

import passport from "./config/passport.js";
import authRoutes from "./routes/auth.routes.js";
import mongoDBconnection from "./config/db.js";

import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;
const SECRET = process.env.APP_SECRET;

//these are the middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoDBconnection();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
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
