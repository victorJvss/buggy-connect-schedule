import { Test, TestingModule } from '@nestjs/testing';
import { AgendamentoPasseioController } from '../agendamento.controller';
import {
  agendamentoMock,
  agendamentoMockService,
} from '../mocks/agendamento.service.mock';

describe('Deve testar o controller do agendamento de passeio', () => {
  let agendamentoController: AgendamentoPasseioController;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgendamentoPasseioController],
      providers: [agendamentoMockService],
    }).compile();

    agendamentoController = module.get<AgendamentoPasseioController>(
      AgendamentoPasseioController,
    );
  });

  it('Deve retornar uma requisição Get de todos os passeios agendados', async () => {
    const retornarPasseioAgendado =
      await agendamentoController.pegaTodosOsPasseiosAgendados();
    expect(retornarPasseioAgendado).toEqual([agendamentoMock]);
  });
});
