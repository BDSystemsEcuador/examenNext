import { Schema } from "mongoose";

export const MateriaSchema = new Schema({
    nombre: String,
    horas: String,
    estado: Boolean,
    createdAt: { type: Date, default: Date.now }
});