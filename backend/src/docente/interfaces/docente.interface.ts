import { Document } from "mongoose";

export interface Docente extends Document {
    readonly nombres: string;
    readonly apellidos: string;
    readonly materia: string;
    readonly profesion: string;
    readonly createdAt: Date;
}
