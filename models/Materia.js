import mongoose from "mongoose";

const materiaSchema = mongoose.Schema({
  nombre: {
    type: String,
  },
  creditos: {
    type: String,
    trim: true,
  },
  horario: {
    type: String,
    trim: true,
  },
  fecha: {
    type: Date,
    default: Date.now(),
  },
});

const Materia = mongoose.model("Materia", materiaSchema);
export default Materia;
