import { Document } from "mongoose";

export interface Docente extends Document {
    readonly cedula: string;
    readonly nombres: string;
    readonly apellidos: string;
    readonly profesion: string;
    readonly createdAt: Date;
}
