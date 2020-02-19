import { Module } from '@nestjs/common';
import { AsignacionService } from './asignacion.service';
import { AsignacionController } from './asignacion.controller';
// Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { AsignacionSchema } from './schemas/asignacion.schema';

import { MorganModule } from 'nest-morgan';

@Module({
  imports: [
    MorganModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Asignacion', schema: AsignacionSchema }]),
  ],
  providers: [AsignacionService],
  controllers: [AsignacionController]
})
export class AsignacionModule { }
