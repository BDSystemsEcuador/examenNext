import { Document } from "mongoose";

export interface Materia extends Document {
    readonly nombre: string;
    readonly horas: string;
    readonly estado: boolean;
    readonly createdAt: Date;
}
