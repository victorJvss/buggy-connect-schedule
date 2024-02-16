import { Controller } from '@nestjs/common';
import { AgendamentoPasseioService } from './agendamento.service';

@Controller('/agendamento')
export class AgendamentoPasseioController {
  constructor(private agendamentoService: AgendamentoPasseioService) {}
}
