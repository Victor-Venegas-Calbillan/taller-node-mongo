import Express from "express"; // -> Exportacion por defecto
import cors from "cors";
import { userRouter, notesRouter } from "../routes/index.js"; // -> exportacion por nombre
import { dbConection } from "../db/config.js";

export default class Server {
  //constructor de la clase
  constructor() {
    this.app = Express();
    this.port = process.env.PORT;
    this.rutas = {
      notas: "/api/notas",
      usuarios: "/api/usuarios",
      auth: "/api/auth",
    };

    //llamar a los metodos
    this.utils();
    this.routes();
    this.db();
  }

  //utilidades para el servidor
  utils() {
    //parse el body para que sea json
    this.app.use(Express.json());

    //habilita las cors
    this.app.use(cors());

    this.app.use(Express.static("src/public"));
  }

  //rutas del servidor
  routes() {
    this.app.use(this.rutas.usuarios, userRouter);
    this.app.use(this.rutas.notas, notesRouter);
  }

  db() {
    //conectar a la base de datos
    dbConection();
  }

  //iniciar el servidor
  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `Servidor corriendo en el puerto ${this.port}`
      );
    });
  }
}
