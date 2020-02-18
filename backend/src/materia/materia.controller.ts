import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put, UseInterceptors } from '@nestjs/common';
import { MateriaService } from "./materia.service";
import { MorganInterceptor } from 'nest-morgan';

import { CreateMateriaDTO } from "./dto/materia.dto";

@Controller('materia')
export class MateriaController {

    constructor(private materiaService: MateriaService) { }

    // Add Materia: /materia/create
    @Post('/create')
    async createMateria(@Res() res, @Body() createMateriaDTO: CreateMateriaDTO) {
        const materia = await this.materiaService.createMateria(createMateriaDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Materia Successfully Created',
            materia
        });
    }

    // Get Materias /materia
    // @Get('/list')
    @Get('/')
    async getMaterias(@Res() res) {
        const materias = await this.materiaService.getMaterias();
        return res.status(HttpStatus.OK).json(materias);
    }

    // GET single materia: /materia/5c9d46100e2e5c44c444b2d1
    @Get('/:materiaID')
    async getMateria(@Res() res, @Param('materiaID') materiaID) {
        const materia = await this.materiaService.getMateria(materiaID);
        if (!materia) throw new NotFoundException('Materia does not exist!');
        return res.status(HttpStatus.OK).json(materia);
    }

    // Delete Materia: /delete?materiaID=5c9d45e705ea4843c8d0e8f7
    @UseInterceptors(MorganInterceptor('combined'))
    @Delete('/delete')
    async deleteMateria(@Res() res, @Query('materiaID') materiaID) {
        const materiaDeleted = await this.materiaService.deleteMateria(materiaID);
        if (!materiaDeleted) throw new NotFoundException('Materia does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Materia Deleted Successfully',
            materiaDeleted
        });
    }

    // Update Materia: /update?materiaID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updateMateria(@Res() res, @Body() createMateriaDTO: CreateMateriaDTO, @Query('materiaID') materiaID) {
        const updatedMateria = await this.materiaService.updateMateria(materiaID, createMateriaDTO);
        if (!updatedMateria) throw new NotFoundException('Materia does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Materia Updated Successfully',
            updatedMateria 
        });
    }

}
