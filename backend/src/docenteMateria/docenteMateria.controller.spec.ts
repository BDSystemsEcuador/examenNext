import { Test, TestingModule } from '@nestjs/testing';
import { MateriaController } from './materia.controller';

describe('Materia Controller', () => {
  let controller: MateriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MateriaController],
    }).compile();

    controller = module.get<MateriaController>(MateriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
