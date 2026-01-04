import express from "express";
import { createDoctor } from "../controllers/doctorController.js";

const doctorRouter = express.Router();

doctorRouter.post("/", createDoctor);

export default doctorRouter;