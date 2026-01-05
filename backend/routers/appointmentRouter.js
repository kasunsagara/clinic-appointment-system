import express from "express";
import { createAppointment, getAppointments } from "../controllers/appointmentController.js";

const appointmentRouter = express.Router();

appointmentRouter.post("/", createAppointment);
appointmentRouter.get("/", getAppointments);

export default appointmentRouter;