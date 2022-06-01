import express from "express";
import dotenv from "dotenv"
import conectarDB from "./config/db.js";
import StudentRoutes from "./routes/StudentRoutes.js";
import MateriaRouter from "./routes/MateriaRouter.js";
import ProffesorRouter from "./routes/ProffesorRouter.js";

import cors from "cors";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

const dominiosPermitidos = [process.env.FRONTEND_URL];
console.log(dominiosPermitidos)
const corsOptions = {
  origin: function (origin, callback) {
    if (dominiosPermitidos.indexOf(origin) !== -1) {
      //El origen de request esta pemitido
      callback(null, true);
    } else {
      callback(new Error("NO permitido por CORS"));
    }
  },
};

app.use(cors(corsOptions));


app.use("/api/estudiante", StudentRoutes);
app.use("/api/materia", MateriaRouter);
app.use("/api/profesor", ProffesorRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});