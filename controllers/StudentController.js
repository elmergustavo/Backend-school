import Student from "../models/Student.js";

const registrar = async (req, res) => {
  try {
    const { email, nombre } = req.body;

    // prevenir usuarios duplicados
    const existeUsuario = await Student.findOne({ email });

    if (existeUsuario) {
      const error = new Error("Usuario ya registrado - DESDE BACKEND");
      return res.status(400).json({ msg: error.message });
    }
    // GUardar un NUevo Estudiante
    const student = new Student(req.body);
    console.log(student);
    const EstudianteGuardado = await student.save();
    res.json(EstudianteGuardado);
  } catch (error) {
    console.log(error);
  }
};

const EstudianteAll = async (req, res) => {
  const usuarioALL = await Student.find();
  console.log(usuarioALL);
  res.json(usuarioALL)
}

const verEstudiante = async (req, res) => {
  const usuario = await Student.findById(req.params.id);
  console.log(usuario);
  res.json(usuario)
  
}
export { registrar, EstudianteAll, verEstudiante };
