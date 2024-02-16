import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AgendamentoPasseioService } from './agendamento.service';
import { AgendamentoPasseioDto } from './agendamentoDto/agendamento.dto';
import { Agendamento } from './agendamentoSchema/agendamento.schema';

@Controller('/agendamento')
export class AgendamentoPasseioController {
  constructor(private agendamentoService: AgendamentoPasseioService) {}

  @Get()
  async pegaTodosOsPasseiosAgendados() {
    return this.agendamentoService.retornarTodosOsPasseiosAgendados();
  }

  @Post()
  async adicionaPasseioAgendado(
    @Body() dadosPasseio: AgendamentoPasseioDto,
  ): Promise<Agendamento> {
    const salvaPasseioAgendado: Agendamento =
      await this.agendamentoService.passeioAgendadoAdicionado(dadosPasseio);

    return salvaPasseioAgendado;
  }
}
