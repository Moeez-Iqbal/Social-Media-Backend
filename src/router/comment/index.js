import { Router } from "express";
import commentController from "../../controller/comment/index.js";
import authenticateMiddleware from "../../middleware/authentication.js";

const commentRouter = Router();

commentRouter.post("/comment", authenticateMiddleware, commentController.create)
commentRouter.put("/put/:commentId", authenticateMiddleware, commentController.update)
commentRouter.get("/comment/:commentId", authenticateMiddleware, commentController.getOne)

export default commentRouter;