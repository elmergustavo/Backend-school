import Proffsor from "../models/Proffesor.js";

const registrarProffesor = async (req,res) => {
    try {
        const proffesor = new Proffsor(req.body);
        console.log(proffesor)
        const proffesorGuardado = await proffesor.save();
        res.json(proffesorGuardado)
        
    } catch (error) {
        console.log(error)
    }
}

export { registrarProffesor};