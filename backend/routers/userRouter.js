import express from "express";
import { createUser, deleteUser, getUserById, getUsers, loginUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.post("/login", loginUser);
userRouter.get("/", getUsers);
userRouter.get("/:_id", getUserById);
userRouter.delete("/:_id", deleteUser);

export default userRouter;