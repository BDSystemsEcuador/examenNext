import { Schema } from "mongoose";

export const AsignacionSchema = new Schema({
    docente: String,
    materia: String,
    horas: String,
    createdAt: { type: Date, default: Date.now }
});