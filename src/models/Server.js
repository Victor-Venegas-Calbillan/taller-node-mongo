import Express from "express"; // -> Exportacion por defecto
import cors from "cors";
import { userRouter, notesRouter } from "../routes/index.js"; // -> exportacion por nombre

export default class Server {
  //constructor de la clase
  constructor() {
    this.app = Express();
    this.port = process.env.PORT;
    this.rutas = {
      notas: "/api/notas",
      usuarios: "/api/usuarios",
    };

    //llamar a los metodos
    this.utils();
    this.routes();
  }

  //utilidades para el servidor
  utils() {
    //parse el body para que sea json
    this.app.use(Express.json());

    //habilita las cors
    this.app.use(cors());
  }

  //rutas del servidor
  routes() {
    this.app.use(this.rutas.usuarios, userRouter);
    this.app.use(this.rutas.notas, notesRouter);
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
