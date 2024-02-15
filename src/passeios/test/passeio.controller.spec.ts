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

  it('Deve criar um passeio', async () => {
    const passeio = {
      nomePasseio: 'PRAIA DE GENIPABU',

      datalhesPasseios:
        'Desfrute de um passeio tranquilo pelas famosas dunas de Jenipabu em nosso buggy confortável e seguro. Guiados por nossos motoristas experientes, você e sua família terão a oportunidade de explorar as maravilhas naturais desta região, enquanto deslizam suavemente pelas dunas e apreciam as vistas panorâmicas deslumbrantes. Aproveite para tirar fotos memoráveis e sentir a brisa suave do oceano acariciar seu rosto.',

      horarios: '5:00 as 17:00',

      distancia: '15KM',

      tempoPasseio: '40 minutos',
      valor: 'R$ 150',
    };

    const id = '2';

    passeioController.adicionaPasseio = jest
      .fn()
      .mockResolvedValueOnce({ id, ...passeio });

    const adicionaPasseio = await passeioController.adicionaPasseio(passeio);

    expect(adicionaPasseio.id).toBe('2');
  });
});
