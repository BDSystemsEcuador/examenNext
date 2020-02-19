import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put, UseInterceptors } from '@nestjs/common';
import { AsignacionService } from "./asignacion.service";
import { MorganInterceptor } from 'nest-morgan';

import { CreateAsignacionDTO } from "./dto/asignacion.dto";

@Controller('asignacion')
export class AsignacionController {

    constructor(private asignacionService: AsignacionService) { }

    // Add Asignacion: /asignacion/create
    @Post('/create')
    async createAsignacion(@Res() res, @Body() createAsignacionDTO: CreateAsignacionDTO) {
        const asignacion = await this.asignacionService.createAsignacion(createAsignacionDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Asignacion Successfully Created',
            asignacion
        });
    }

    // Get Asignaciones /asignacion
    // @Get('/list')
    @Get('/')
    async getAsignaciones(@Res() res) {
        const asignaciones = await this.asignacionService.getAsignaciones();
        return res.status(HttpStatus.OK).json(asignaciones);
    }

    // GET single asignacion: /asignacion/5c9d46100e2e5c44c444b2d1
    @Get('/:asignacionID')
    async getAsignacion(@Res() res, @Param('asignacionID') asignacionID) {
        const asignacion = await this.asignacionService.getAsignacion(asignacionID);
        if (!asignacion) throw new NotFoundException('Asignacion does not exist!');
        return res.status(HttpStatus.OK).json(asignacion);
    }

    // Delete Asignacion: /delete?asignacionID=5c9d45e705ea4843c8d0e8f7
    @UseInterceptors(MorganInterceptor('combined'))
    @Delete('/delete')
    async deleteAsignacion(@Res() res, @Query('asignacionID') asignacionID) {
        const asignacionDeleted = await this.asignacionService.deleteAsignacion(asignacionID);
        if (!asignacionDeleted) throw new NotFoundException('Asignacion does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Asignacion Deleted Successfully',
            asignacionDeleted
        });
    }

    // Update Asignacion: /update?asignacionID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updateAsignacion(@Res() res, @Body() createAsignacionDTO: CreateAsignacionDTO, @Query('asignacionID') asignacionID) {
        const updatedAsignacion = await this.asignacionService.updateAsignacion(asignacionID, createAsignacionDTO);
        if (!updatedAsignacion) throw new NotFoundException('Asignacion does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Asignacion Updated Successfully',
            updatedAsignacion 
        });
    }

}
