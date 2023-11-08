import express, {Request, Response} from "express";
import UserRoutes from "./UserRoutes";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.json("Express Starter With MongoDB");
});

router.use("/users", UserRoutes);

export default router;
