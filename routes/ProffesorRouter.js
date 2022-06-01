import express from "express";
const router = express.Router();
import {registrarProffesor} from "../controllers/ProffesorController.js"

router.post("/", registrarProffesor)

export default router;