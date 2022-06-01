import express from "express";
const router = express.Router();
import {registrarMateria} from "../controllers/MateriaController.js"

router.post("/", registrarMateria)

export default router;