import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Endereco } from '../../src/usuario/usuarioSchema/endereco.schema';
import { EnderecoDto } from '../../src/usuario/usuarioDto/EnderecoCliente.dto';
import { Usuario } from '../../src/usuario/usuarioSchema/usuario.schema';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectModel(Endereco.name)
    private endereco: mongoose.Model<Endereco>,
    @InjectModel(Usuario.name)
    private usuario: mongoose.Model<Usuario>,
  ) {}

  async pegaTodosOsEnderecos(): Promise<Endereco[]> {
    const enderecos = await this.endereco.find();
    return enderecos;
  }

  async pegaEnderecoPeloId(id: string): Promise<Endereco> {
    const enderecoSelecionado: Endereco = await this.endereco.findById(id);
    return enderecoSelecionado;
  }

  async salvaEndereco(endereco: Endereco) {
    const enderecoSalvo = await this.endereco.insertMany(endereco);
    return enderecoSalvo;
  }

  async atualizaEndereco(id: string, dadosAtualizados: EnderecoDto) {
    const atualizaEndereco: Endereco = await this.endereco.findByIdAndUpdate(
      id,
      dadosAtualizados,
    );

    const encontraEnderecoAtualizado: Endereco =
      await this.endereco.findById(id);

    const recebeEndereco: Usuario[] = await this.usuario.find({
      'endereco._id': id,
    });

    const atualizaEnderecoUsuario: Usuario =
      await this.usuario.findByIdAndUpdate(recebeEndereco[0]._id, {
        endereco: encontraEnderecoAtualizado,
      });

    return atualizaEndereco;
  }

  async apagaEndereco(endereco: Endereco) {
    const enderecoId = await this.endereco.deleteOne(endereco._id);
    return enderecoId;
  }
}
