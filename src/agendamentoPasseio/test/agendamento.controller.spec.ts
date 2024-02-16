import { Test, TestingModule } from '@nestjs/testing';
import { AgendamentoPasseioService } from '../agendamento.service';
import {
  agendamentoMock,
  agendamentoMockService,
} from '../mocks/agendamento.service.mock';

describe('Teste do agendamento controller', () => {
  let agendamentoService: AgendamentoPasseioService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [agendamentoMockService],
    }).compile();

    agendamentoService = module.get<AgendamentoPasseioService>(
      AgendamentoPasseioService,
    );
  });

  it('Deve retornar todos os passeios agendados', async () => {
    const retornarPasseioAgendado =
      await agendamentoService.retornarTodosOsPasseiosAgendados();
    expect(retornarPasseioAgendado).toEqual([agendamentoMock]);
  });

  it('Deve retornar o passeio agendado pelo id', async () => {
    const retornaPeloId = await agendamentoService.retornaPasseioAgendadoPeloId(
      agendamentoMock.id,
    );
    expect(retornaPeloId.HorarioInícioPasseio).toBe('15:00');
  });

  
});
