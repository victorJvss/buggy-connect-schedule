import { Module } from '@nestjs/common';
import { agendamentoPasseioController } from './agendamento.controller';

@Module({
  controllers: [agendamentoPasseioController],
  providers: [],
})
export class AgendamentoPasseioModule {}
