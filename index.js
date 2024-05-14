import express from "express";
import morgan from "morgan";
import { expenseRouter } from "./routes/expenseRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import authRouter from "./routes/auth.js";
import catRouter from "./routes/cat.js";
import { verifyToken } from "./utils/auth.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/expenses", expenseRouter);
app.use("/user", userRouter);
app.use("/cat", catRouter);
app.use("/auth", authRouter);

// HTTP methods
app.get("/health", (req, res) => {
  return res.send("Api running normally");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
