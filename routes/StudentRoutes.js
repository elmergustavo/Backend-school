import express from "express";
const router = express.Router();
import {registrar, EstudianteAll, verEstudiante } from "../controllers/StudentController.js"

router.post("/", registrar);
router.get("/studentAll", EstudianteAll);
router.get("/:id", verEstudiante);

export default router;