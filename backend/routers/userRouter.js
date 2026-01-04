import express from "express";
import { createUser, deleteUser, getUserByEmail, getUsers, loginUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.post("/login", loginUser);
userRouter.get("/", getUsers);
userRouter.get("/:email", getUserByEmail);
userRouter.delete("/:email", deleteUser);

export default userRouter;