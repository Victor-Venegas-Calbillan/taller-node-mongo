import dotenv from "dotenv";
import Server from "./models/Server.js";

//confugurar las variables de entorno
dotenv.config();

//inicializar el servidor / crear una instancia de la clase Servidor
const server = new Server();

//iniciar el servidor
server.listen();
