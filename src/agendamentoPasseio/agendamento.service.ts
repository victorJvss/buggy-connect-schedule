import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Agendamento } from './agendamentoSchema/agendamento.schema';
import mongoose from 'mongoose';

@Injectable()
export class agendamentoPasseioService {
  constructor(
    @InjectModel(Agendamento.name)
    private Agendamento: mongoose.Model<Agendamento>,
  ) {}
}
