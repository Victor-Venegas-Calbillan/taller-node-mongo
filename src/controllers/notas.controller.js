import Notas from "../models/Notas.js";

export const obtenerNotas = async (request, response) => {
  const notas = await Notas.find().populate("usuario", "name");

  response.json({
    ok: true,
    notas,
  });
};

export const crearNota = async (request, response) => {
  const { ...data } = request.body;

  const nota = new Notas(data);

  await nota.save();

  response.json({
    ok: true,
    nota,
  });
};

export const actualizarNota = async (request, response) => {
  const { id } = request.params;

  const { _id, ...resto } = request.body;

  const nota = await Notas.findByIdAndUpdate(id, resto, {
    new: true,
  });

  response.json({
    ok: true,
    nota,
  });
};

export const eleiminarNota = async (request, response) => {
  const { id } = request.params;

  await Notas.findByIdAndDelete(id);

  response.json({
    ok: true,
  });
};
