import { Module } from '@nestjs/common';
import { agendamentoPasseioController } from './agendamento.controller';
import { agendamentoPasseioService } from './agendamento.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Agendamento,
  agendamentoSchema,
} from './agendamentoSchema/agendamento.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Agendamento.name, schema: agendamentoSchema },
    ]),
  ],
  controllers: [agendamentoPasseioController],
  providers: [agendamentoPasseioService],
})
export class AgendamentoPasseioModule {}
