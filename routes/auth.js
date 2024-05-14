import express from "express";
import { generateToken } from "../utils/auth.js";
import bcrypt from "node:crypto";

const authRouter = express.Router();

authRouter
  .post("/register", (req, res) => {
    const { username, password } = req.body;

    // create user in db
    // if same name exist then error message
    // success - return message

    res.status(201).json({ message: "User registered successfully" });
  })
  .post("/sign-in", async (req, res) => {
    const { username, password } = req.body;

    // query db for username
    // if not found, return 401
    // if found, compare password and the hashed password
    // if not match, return 401
    // if match, return token

    // compare using hash
    // const hashedPassword = bcrypt.hash(password, 10);
    // const isPasswordValid = await bcrypt.compare(password, hashedPassword);
    // if (!isPasswordValid) {
    //   return res.status(401).send("Invalid password");
    // }

    const token = generateToken({ username });

    res.status(201).json({
      token,
    });
  })
  .get("/", (req, res) => {
    res.status(200).json({ message: "Hello" });
  });

export default authRouter;
