import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Materia } from "./interfaces/materia.interface";
import { CreateMateriaDTO } from "./dto/materia.dto";

@Injectable()
export class MateriaService {

    constructor(@InjectModel('Materia') private readonly materiaModel: Model<Materia>) {}

    // Get all materias
    async getMaterias(): Promise<Materia[]> {
        const materias = await this.materiaModel.find();
        return materias;
    }
    
    // Get a single Materia
    async getMateria(materiaID: string): Promise<Materia> {
        const materia = await this.materiaModel.findById(materiaID); 
        return materia;
    }

    // Post a single materia
    async createMateria(createMateriaDTO: CreateMateriaDTO): Promise<Materia> {
        const newMateria = new this.materiaModel(createMateriaDTO);
        return newMateria.save();
    }

    // Delete Materia
    async deleteMateria(materiaID: string): Promise<any> {
        const deletedMateria = await this.materiaModel.findByIdAndDelete(materiaID);
        return deletedMateria;
    }

    // Put a single materia
    async updateMateria(materiaID: string, createMateriaDTO: CreateMateriaDTO): Promise<Materia> {
        const updatedMateria = await this.materiaModel
                            .findByIdAndUpdate(materiaID, createMateriaDTO, {new: true});
        return updatedMateria;
    }

}
