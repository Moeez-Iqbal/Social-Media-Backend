import { Router } from "express";
import UserController from "../../controller/user/index.js";
import userValidator from "../../validator/user/index.js";
import authenticateMiddleware from "../../middleware/authentication.js";

const userRouter = Router();

userRouter.put("/user/:userId", authenticateMiddleware, UserController.update)
userRouter.post("/user/follow", authenticateMiddleware, UserController.follow);
userRouter.get("/user/getOne/:userId", authenticateMiddleware, UserController.getOne);



export default userRouter;