import Usuario from "../models/Usuario.js";

export const crearUsuario = async (request, response) => {
  const { ...user } = request.body;

  const usuario = new Usuario(user);

  await usuario.save();

  response.json({
    ok: true,
    usuario,
  });
};

export const obtenerUsuarios = async (request, response) => {
  const usuarios = await Usuario.find();

  response.json({
    ok: true,
    usuarios,
  });
};

export const actualizarUsuario = async (request, response) => {
  const { id } = request.params;

  const { password, email, ...resto } = request.body;

  const usuario = await Usuario.findByIdAndUpdate(id, resto, {
    new: true,
  });

  response.json({
    ok: true,
    usuario,
  });
};

export const eliminarUsuario = async (request, response) => {
  const { id } = request.params;

  await Usuario.findByIdAndDelete(id);

  response.json({
    ok: true,
  });
};
