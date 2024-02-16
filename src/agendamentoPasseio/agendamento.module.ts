import { Module } from '@nestjs/common';
import { AgendamentoPasseioController } from './agendamento.controller';
import { AgendamentoPasseioService } from './agendamento.service';
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
  controllers: [AgendamentoPasseioController],
  providers: [AgendamentoPasseioService],
})
export class AgendamentoPasseioModule {}
