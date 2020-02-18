import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put, UseInterceptors } from '@nestjs/common';
import { DocenteService } from "./docente.service";
import { MorganInterceptor } from 'nest-morgan';

import { CreateDocenteDTO } from "./dto/docente.dto";

@Controller('docente')
export class DocenteController {

    constructor(private docenteService: DocenteService) { }

    // Add Docente: /docente/create
    @Post('/create')
    async createDocente(@Res() res, @Body() createDocenteDTO: CreateDocenteDTO) {
        const docente = await this.docenteService.createDocente(createDocenteDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Docente Successfully Created',
            docente
        });
    }

    // Get Docentes /docente
    // @Get('/list')
    @Get('/')
    async getDocentes(@Res() res) {
        const docentes = await this.docenteService.getDocentes();
        return res.status(HttpStatus.OK).json(docentes);
    }

    // GET single docente: /docente/5c9d46100e2e5c44c444b2d1
    @Get('/:docenteID')
    async getDocente(@Res() res, @Param('docenteID') docenteID) {
        const docente = await this.docenteService.getDocente(docenteID);
        if (!docente) throw new NotFoundException('Docente does not exist!');
        return res.status(HttpStatus.OK).json(docente);
    }

    // Delete Docente: /delete?docenteID=5c9d45e705ea4843c8d0e8f7
    @UseInterceptors(MorganInterceptor('combined'))
    @Delete('/delete')
    async deleteDocente(@Res() res, @Query('docenteID') docenteID) {
        const docenteDeleted = await this.docenteService.deleteDocente(docenteID);
        if (!docenteDeleted) throw new NotFoundException('Docente does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Docente Deleted Successfully',
            docenteDeleted
        });
    }

    // Update Docente: /update?docenteID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updateDocente(@Res() res, @Body() createDocenteDTO: CreateDocenteDTO, @Query('docenteID') docenteID) {
        const updatedDocente = await this.docenteService.updateDocente(docenteID, createDocenteDTO);
        if (!updatedDocente) throw new NotFoundException('Docente does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Docente Updated Successfully',
            updatedDocente 
        });
    }

}
