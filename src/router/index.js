import { Router } from "express";
import userRouter from "./user/index.js";
import postRouter from "./post/index.js";
import authRouter from "./Auth/index.js";
import emailRouter from "./utilis/index.js";
import commentRouter from "./comment/index.js";

const allRouter = Router();

allRouter.use(userRouter);
allRouter.use(postRouter);
allRouter.use(authRouter);
allRouter.use(emailRouter);
allRouter.use(commentRouter)


export default allRouter;