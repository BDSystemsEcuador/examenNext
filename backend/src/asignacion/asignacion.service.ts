import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Asignacion } from "./interfaces/asignacion.interface";
import { CreateAsignacionDTO } from "./dto/asignacion.dto";

@Injectable()
export class AsignacionService {

    constructor(@InjectModel('Asignacion') private readonly asignacionModel: Model<Asignacion>) {}

    // Get all asignaciones
    async getAsignaciones(): Promise<Asignacion[]> {
        const asignaciones = await this.asignacionModel.find();
        return asignaciones;
    }
    
    // Get a single Asignacion
    async getAsignacion(asignacionID: string): Promise<Asignacion> {
        const asignacion = await this.asignacionModel.findById(asignacionID); 
        return asignacion;
    }

    // Post a single asignacion
    async createAsignacion(createAsignacionDTO: CreateAsignacionDTO): Promise<Asignacion> {
        const newAsignacion = new this.asignacionModel(createAsignacionDTO);
        return newAsignacion.save();
    }

    // Delete Asignacion
    async deleteAsignacion(asignacionID: string): Promise<any> {
        const deletedAsignacion = await this.asignacionModel.findByIdAndDelete(asignacionID);
        return deletedAsignacion;
    }

    // Put a single asignacion
    async updateAsignacion(asignacionID: string, createAsignacionDTO: CreateAsignacionDTO): Promise<Asignacion> {
        const updatedAsignacion = await this.asignacionModel
                            .findByIdAndUpdate(asignacionID, createAsignacionDTO, {new: true});
        return updatedAsignacion;
    }

}
