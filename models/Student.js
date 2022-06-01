import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
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
  }
);

const Student = mongoose.model("Estudiante", studentSchema);
export default Student;