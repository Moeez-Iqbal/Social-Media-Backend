import { Router } from "express";
import email from "../../utilis/email.js";
import authenticateMiddleware from "../../middleware/authentication.js";

const emailRouter = Router();

emailRouter.post("/email", authenticateMiddleware, email.create)

export default emailRouter;