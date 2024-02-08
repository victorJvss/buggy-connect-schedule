import { Test, TestingModule } from '@nestjs/testing';
import { PasseiosService } from '../passeios.service';

describe('Teste passeio controller', () => {
  let passeioService: PasseiosService;

  beforeAll(async () => {
    const module: TestingModule = Test.createTestingModule({
      controllers: [],
      providers: [],
    }).compile();

    passeioService = module.get<PasseiosService>(PasseiosService);
  });
});
