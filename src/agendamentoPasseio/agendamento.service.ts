import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Agendamento } from './agendamentoSchema/agendamento.schema';
import mongoose from 'mongoose';

@Injectable()
export class AgendamentoPasseioService {
  constructor(
    @InjectModel(Agendamento.name)
    private agendamento: mongoose.Model<Agendamento>,
  ) {}

  async retornarTodosOsPasseiosAgendados() {
    return this.agendamento.find();
  }

  async passeioAgendadoAdicionado(
    dadosPasseio: Agendamento,
  ): Promise<Agendamento> {
    const salvaPasseioAgendado: Agendamento =
      await this.agendamento.create(dadosPasseio);
    return salvaPasseioAgendado;
  }
}
