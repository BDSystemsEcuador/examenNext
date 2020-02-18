import { Schema } from "mongoose";

export const DocenteSchema = new Schema({
    nombres: String,
    apellidos: String,
    materia: String,
    profesion: String,
    createdAt: { type: Date, default: Date.now }
});