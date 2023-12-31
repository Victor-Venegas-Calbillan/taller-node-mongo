import { Router } from "express";
import {
  actualizarUsuario,
  crearUsuario,
  eliminarUsuario,
  obtenerUsuarios,
} from "../controllers/index.js";

export const userRouter = Router();

userRouter.get("/", obtenerUsuarios);

userRouter.post("/", crearUsuario);

userRouter.patch("/:id", actualizarUsuario);

userRouter.delete("/:id", eliminarUsuario);
