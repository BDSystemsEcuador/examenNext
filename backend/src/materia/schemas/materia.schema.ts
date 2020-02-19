import { Schema } from "mongoose";

export const MateriaSchema = new Schema({
    nombre: String,
    horas: String,
    nivel: String,
    createdAt: { type: Date, default: Date.now }
});