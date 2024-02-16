import { Test, TestingModule } from '@nestjs/testing';
import { AgendamentoPasseioService } from '../agendamento.service';
import {
  agendamentoMock,
  agendamentoMockService,
} from '../mocks/agendamento.service.mock';
import { AtualizaAgendamentoPasseioDto } from '../agendamentoDto/AtualizaPasseioAgendado.dto';

describe('Teste do agendamento service', () => {
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

  it('Deve criar um agendamento para o passeio', async () => {
    const passeio = {
      PasseioAgendado: 'PRAIA DE GENIPABU',
      HorarioInícioPasseio: '15:00',
      HorarioTerminoPasseio: '15:40',
      QuantidadePessoas: 3,
      ValorTotalPasseio: 'R$ 600',
      ProfissionalPasseio: 'Roberto silva',
      titularDoAgendamento: 'Davi ribeiro',
    };

    const id = '2';

    agendamentoService.passeioAgendadoAdicionado = jest
      .fn()
      .mockResolvedValueOnce({ id, ...passeio });

    const agendaPasseio =
      await agendamentoService.passeioAgendadoAdicionado(passeio);

    expect(agendaPasseio.ValorTotalPasseio).toBe('R$ 600');
  });
});
