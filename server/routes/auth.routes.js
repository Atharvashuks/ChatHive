import { Router } from "express";
import { signup, login, getUserInfo } from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/user-info", authMiddleware, getUserInfo);

export default authRouter;
