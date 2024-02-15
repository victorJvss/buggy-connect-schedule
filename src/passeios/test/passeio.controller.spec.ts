import { Test, TestingModule } from '@nestjs/testing';
import { mockPasseio, mockPasseioService } from '../mocks/passeio.service.mock';
import { PasseiosController } from '../passseios.controller';

describe('Teste do  controller', () => {
  let passeioController: PasseiosController;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasseiosController],
      providers: [mockPasseioService],
    }).compile();
    passeioController = module.get<PasseiosController>(PasseiosController);
  });

  it('Deve retornar todos os passeios', async () => {
    const pegaTodosOsPasseios = await passeioController.pegaTodosOsPasseios();
    expect(pegaTodosOsPasseios).toEqual([mockPasseio]);
  });

  it('Deve retornar o passeio pelo id', async () => {
    const pegaPasseioPeloId = await passeioController.pegaPasseioPeloId(
      mockPasseio.id,
    );

    expect(pegaPasseioPeloId.id).toBe('1');
  });
});
