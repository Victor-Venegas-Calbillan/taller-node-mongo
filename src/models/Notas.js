import { Schema, model } from "mongoose";

const NotaSchema = Schema({
  titulo: {
    type: String,
    required: [true, "El titulo es obligatorio"],
  },
  descripcion: {
    type: String,
    required: [true, "La descripcion es obligatoria"],
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

NotaSchema.methods.toJSON = function () {
  const { __v, _id, ...nota } = this.toObject();
  nota.uid = _id;
  return nota;
};

export default model("Nota", NotaSchema);
