import { Router } from "express";
import PostController from "../../controller/post/index.js";
import postValidator from "../../validator/post/index.js";
import authenticateMiddleware from "../../middleware/authentication.js";


const postRouter = Router();

postRouter.post("/post", postValidator.create,authenticateMiddleware, PostController.create);
postRouter.get("/post", authenticateMiddleware, PostController.getAll);
postRouter.put("/post/:postId", authenticateMiddleware, PostController.update);
postRouter.get("/post/:postId/",authenticateMiddleware, PostController.getOne);

export default postRouter;
