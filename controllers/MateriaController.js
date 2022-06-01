import Materia from "../models/Materia.js";

const registrarMateria = async (req, res) => {
    try {
        const materia = new Materia(req.body);
        console.log(materia)
        const materiaGuardado = await materia.save();
        res.json(materiaGuardado)
        
    } catch (error) {
        console.log(error)
    }
}

export { registrarMateria};