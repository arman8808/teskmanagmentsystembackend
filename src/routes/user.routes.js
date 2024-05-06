import { Router } from "express";
import User from "../modals/users.modals.js";

const router = Router();
router.route("/register").post(async (req, res) => {
  const route = await User.create({
    userName: "adasd",
  });
  console.log(route);
  res.status(200).json({ message: "save", route });
});
export default router;
