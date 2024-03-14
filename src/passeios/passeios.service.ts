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

  async adicionaPasseios(
    dadosPasseio: PasseiosDto,
  ): Promise<Passeios | string> {
    try {
      const salvaPasseios = await this.passeios.create(dadosPasseio);
      return salvaPasseios;
    } catch {
      return 'Não foi possível criar o passeio';
    }
  }

  async atualizaPasseios(
    id: string,
    atualizacaoPasseio: PasseiosDto,
  ): Promise<Passeios | string> {
    try {
      const atualizaPasseio = await this.passeios.findByIdAndUpdate(
        id,
        atualizacaoPasseio,
      );
      return atualizaPasseio;
    } catch {
      return 'Não foi possível atualizar o passeio';
    }
  }

  async deletaPasseio(id: string): Promise<void | string> {
    try {
      await this.passeios.findByIdAndDelete(id);
    } catch {
      return 'Não foi possível deletar o passeio';
    }
  }
}
