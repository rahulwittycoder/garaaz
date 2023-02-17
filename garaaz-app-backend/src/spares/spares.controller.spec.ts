import { Test, TestingModule } from '@nestjs/testing';
import { SparesController } from './spares.controller';
import { SparesService } from './spares.service';

describe('SparesController', () => {
  let controller: SparesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SparesController],
      providers: [SparesService],
    }).compile();

    controller = module.get<SparesController>(SparesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
