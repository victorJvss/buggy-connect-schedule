import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './usuarioSchema/usuario.schema';
import mongoose from 'mongoose';
import { UsuarioDto } from './usuarioDto/Cliente.dto';
import { UsuarioEntity } from './usuarioEntity/Cliente.entity';
import { Endereco } from './usuarioSchema/endereco.schema';
import { EnderecoService } from './endereco.service';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario.name)
    private usuario: mongoose.Model<Usuario>,
    private enderecoService: EnderecoService,
  ) {}

  // cliente

  async criaUsuario(usuarioCriado: UsuarioEntity): Promise<Usuario> {
    const salvaUsuario: Usuario = await this.usuario.create(usuarioCriado);
    this.enderecoService.salvaEndereco(salvaUsuario.endereco);
    return salvaUsuario;
  }

  async pegaUsuarios(): Promise<Usuario[]> {
    const usuarios: Usuario[] = await this.usuario.find();
    return usuarios;
  }

  async pegaUsuarioPeloId(id: string): Promise<Usuario> {
    const pegaUsuario: Usuario = await this.usuario.findById(id);
    return pegaUsuario;
  }

  async atualizaUsuario(
    id: string,
    dadosAtualizados: UsuarioDto,
  ): Promise<UsuarioDto> {
    const usuarioEncontrado: Usuario = await this.usuario.findByIdAndUpdate(
      id,
      dadosAtualizados,
    );
    return usuarioEncontrado;
  }

  async deletaUsuario(id: string): Promise<object> {
    const procuraUsuario: Usuario = await this.usuario.findById(id);
    const enderecoUsuaio: Endereco = procuraUsuario.endereco;
    const Endereco = await this.enderecoService.apagaEndereco(enderecoUsuaio);
    const usuario = await this.usuario.deleteOne({ _id: id });
    return {
      message: 'Usuário removido com sucesso!',
      usuarioRemovido: usuario,
    };
  }

  // Validation

  async filtraUsuarioCadastradoEmail(email: string): Promise<boolean> {
    const filtraUsuario = await this.usuario.find({ email: email });
    const boolean: boolean = true;

    if (filtraUsuario.length > 0) {
      return boolean;
    } else {
      return !boolean;
    }
  }

  async filtraUsuarioCadastradoCpf(cpf: string): Promise<boolean> {
    const filtraUsuario = await this.usuario.find({ cpf: cpf });
    const boolean: boolean = true;

    if (filtraUsuario.length > 0) {
      return boolean;
    } else {
      return !boolean;
    }
  }
}
