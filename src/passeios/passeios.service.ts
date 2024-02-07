import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Passeios } from './passeiosSchema/passeios.schema';
import mongoose from 'mongoose';

@Injectable()
export class PasseiosService {
  constructor(
    @InjectModel(Passeios.name)
    private passeios: mongoose.Model<Passeios>,
  ) {}

  async pegaTodosOsPasseios(){
    return this.passeios.find()
  }
}
