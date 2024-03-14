import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Passeios } from '../../src/passeios/passeiosSchema/passeios.schema';
import { PasseiosDto } from '../../src/passeios/passeiosDto/passeios.dto';

@Injectable()
export class PasseiosService {
  constructor(
    @InjectModel(Passeios.name)
    private passeios: mongoose.Model<Passeios>,
  ) {}

  async pegaTodosOsPasseios(): Promise<Passeios[] | string> {
    try {
      return this.passeios.find();
    } catch {
      return 'Não foi possível retorna todos os passeios';
    }
  }

  async pegaPasseioPeloId(id: string): Promise<Passeios | string> {
    try {
      return this.passeios.findById(id);
    } catch {
      return 'Não foi possível retorna o passeio';
    }
  }

  async adicionaPasseios(dadosPasseio: PasseiosDto) {
    const salvaPasseios = await this.passeios.create(dadosPasseio);
    return salvaPasseios;
  }

  async atualizaPasseios(id: string, atualizacaoPasseio: PasseiosDto) {
    const atualizaPasseio = await this.passeios.findByIdAndUpdate(
      id,
      atualizacaoPasseio,
    );
    return atualizaPasseio;
  }

  async deletaPasseio(id: string) {
    const passeioDeletado = await this.passeios.findByIdAndDelete(id);
    return passeioDeletado;
  }
}
