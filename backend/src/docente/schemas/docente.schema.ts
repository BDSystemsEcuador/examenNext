import { Schema } from "mongoose";

export const DocenteSchema = new Schema({
    cedula: String,
    nombres: String,
    apellidos: String,
    profesion: String,
    createdAt: { type: Date, default: Date.now }
});