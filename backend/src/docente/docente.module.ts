import { Module } from '@nestjs/common';
import { DocenteService } from './docente.service';
import { DocenteController } from './docente.controller';
// Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { DocenteSchema } from './schemas/docente.schema';

import { MorganModule } from 'nest-morgan';

@Module({
  imports: [
    MorganModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Docente', schema: DocenteSchema }]),
  ],
  providers: [DocenteService],
  controllers: [DocenteController]
})
export class DocenteModule { }
