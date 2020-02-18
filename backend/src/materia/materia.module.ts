import { Module } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaController } from './materia.controller';
// Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { MateriaSchema } from './schemas/materia.schema';

import { MorganModule } from 'nest-morgan';

@Module({
  imports: [
    MorganModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Materia', schema: MateriaSchema }]),
  ],
  providers: [MateriaService],
  controllers: [MateriaController]
})
export class MateriaModule { }
