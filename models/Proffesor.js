import mongoose from "mongoose";

const profesorSchema = mongoose.Schema({
  nombre: {
    type: String,
    require: true,
    trim: true,
  },

  telefono: {
    type: String,
    default: null,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
},
{
    timestamps: true,
  });

  const Proffsor = mongoose.model("Profesor", profesorSchema);
  export default Proffsor;