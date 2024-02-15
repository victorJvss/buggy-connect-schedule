import { Test, TestingModule } from '@nestjs/testing';
import { mockPasseioService } from '../mocks/passeio.service.mock';
import { PasseiosController } from '../passseios.controller';

describe('Teste do arquivo controller', () => {
  let passeioController: PasseiosController;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasseiosController],
      providers: [mockPasseioService],
    }).compile();
    passeioController = module.get<PasseiosController>(PasseiosController)
  });
});
