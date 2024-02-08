import { Test, TestingModule } from '@nestjs/testing';
import { PasseiosService } from '../passeios.service';
import { mockPasseio, mockPasseioService } from '../mocks/passeio.service.mock';

describe('Teste passeio controller', () => {
  let passeioService: PasseiosService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [mockPasseioService],
    }).compile();

    passeioService = module.get<PasseiosService>(PasseiosService);
  });

  it('Deve retornar todos os passeios', async () => {
    const retornarPasseios = await passeioService.pegaTodosOsPasseios();
    expect(retornarPasseios).toEqual([mockPasseio]);
  });
});
