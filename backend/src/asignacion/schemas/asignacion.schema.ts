import { Schema } from "mongoose";

export const AsignacionSchema = new Schema({
    docente: String,
    materia: String,
    createdAt: { type: Date, default: Date.now }
});