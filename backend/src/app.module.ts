import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { DocenteModule } from './docente/docente.module';
import { MateriaModule } from './materia/materia.module';
import { AsignacionModule } from './asignacion/asignacion.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/docentes-nest', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }),
    DocenteModule,
    MateriaModule,
    AsignacionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
