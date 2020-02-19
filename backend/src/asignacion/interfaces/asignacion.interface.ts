import { Document } from "mongoose";

export interface Asignacion extends Document {
    readonly docente: string;
    readonly materia: string;
    readonly createdAt: Date;
}
