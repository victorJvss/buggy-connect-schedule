import { Module } from '@nestjs/common';
import { agendamentoPasseioController } from './agendamento.controller';
import { agendamentoPasseioService } from './agendamento.service';

@Module({
  controllers: [agendamentoPasseioController],
  providers: [agendamentoPasseioService],
})
export class AgendamentoPasseioModule {}
