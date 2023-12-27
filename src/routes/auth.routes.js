import { Router } from "express";
import { login, loginWithGoogle } from "../controllers";

export const authRouter = Router();

authRouter.post("/", login);

authRouter.post("/google", loginWithGoogle);
