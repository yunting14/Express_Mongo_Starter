import { Request, Response, NextFunction, Router } from "express";
import UserService from "../services/UserService";

const userRouter: Router = Router();

async function getAllUsers(req: Request, res: Response, next: NextFunction) {
  try {
    console.log("[Getting all users...]");
    const users = await UserService.getAllUsers();
    res.send(users);
  } catch (error) {
    console.log(`[ERROR from getAllUsers]`, error);
  }
}

userRouter.route("/all").get(getAllUsers);

export default userRouter;
