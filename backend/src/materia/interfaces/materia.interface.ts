import { Document } from "mongoose";

export interface Materia extends Document {
    readonly nombre: string;
    readonly horas: string;
    readonly nivel: string;
    readonly createdAt: Date;
}
