import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Docente } from "./interfaces/docente.interface";
import { CreateDocenteDTO } from "./dto/docente.dto";

@Injectable()
export class DocenteService {

    constructor(@InjectModel('Docente') private readonly docenteModel: Model<Docente>) {}

    // Get all docentes
    async getDocentes(): Promise<Docente[]> {
        const docentes = await this.docenteModel.find();
        return docentes;
    }
    
    // Get a single Docente
    async getDocente(docenteID: string): Promise<Docente> {
        const docente = await this.docenteModel.findById(docenteID); 
        return docente;
    }

    // Post a single docente
    async createDocente(createDocenteDTO: CreateDocenteDTO): Promise<Docente> {
        const newDocente = new this.docenteModel(createDocenteDTO);
        return newDocente.save();
    }

    // Delete Docente
    async deleteDocente(docenteID: string): Promise<any> {
        const deletedDocente = await this.docenteModel.findByIdAndDelete(docenteID);
        return deletedDocente;
    }

    // Put a single docente
    async updateDocente(docenteID: string, createDocenteDTO: CreateDocenteDTO): Promise<Docente> {
        const updatedDocente = await this.docenteModel
                            .findByIdAndUpdate(docenteID, createDocenteDTO, {new: true});
        return updatedDocente;
    }

}
