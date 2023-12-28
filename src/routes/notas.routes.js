import { Router } from "express";
import {
  actualizarNota,
  crearNota,
  eleiminarNota,
  obtenerNotas,
} from "../controllers/index.js";

export const notesRouter = Router();

notesRouter.get("/", obtenerNotas);

notesRouter.post("/", crearNota);

notesRouter.patch("/:id", actualizarNota);

notesRouter.delete("/", eleiminarNota);
