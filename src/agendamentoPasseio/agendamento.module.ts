import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgendamentoPasseioController } from '../../src/agendamentoPasseio/agendamento.controller';
import { AgendamentoPasseioService } from '../../src/agendamentoPasseio/agendamento.service';
import {
  Agendamento,
  agendamentoSchema,
} from '../../src/agendamentoPasseio/agendamentoSchema/agendamento.schema';

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
