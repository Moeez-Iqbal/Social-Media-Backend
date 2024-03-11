import { Router } from "express";
import authController from "../../controller/Auth/index.js";
import userValidator from "../../validator/user/index.js";

const authRouter = Router();

authRouter.post("/login", userValidator.create, authController.login);
authRouter.post("/register", authController.register);


export default authRouter;