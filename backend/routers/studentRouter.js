import express from "express";
import { createStudent, deleteStudent, getStudentByName, getStudents } from "../controllers/studentController.js";   

const studentRouter = express.Router();

studentRouter.post("/", createStudent);
studentRouter.get("/", getStudents);
studentRouter.get("/:name", getStudentByName);
studentRouter.delete("/:name", deleteStudent);

export default studentRouter;