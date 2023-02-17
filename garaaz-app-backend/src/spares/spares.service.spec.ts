import { Test, TestingModule } from '@nestjs/testing';
import { SparesService } from './spares.service';

describe('SparesService', () => {
  let service: SparesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SparesService],
    }).compile();

    service = module.get<SparesService>(SparesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
