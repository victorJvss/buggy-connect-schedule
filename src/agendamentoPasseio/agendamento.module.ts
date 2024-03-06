import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgendamentoPasseioController } from './agendamento.controller.js';
import { AgendamentoPasseioService } from './agendamento.service.js';
import {
  Agendamento,
  agendamentoSchema,
} from './agendamentoSchema/agendamento.schema.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Agendamento.name, schema: agendamentoSchema },
    ]),
  ],
  controllers: [AgendamentoPasseioController],
  providers: [AgendamentoPasseioService],
})
export class AgendamentoPasseioModule {}
