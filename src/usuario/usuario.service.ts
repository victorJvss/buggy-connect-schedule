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

  async pegaUsuarioPorParametro(
    dadoEnviado: string,
  ): Promise<Usuario | object> {
    try {
      const usuarioEncontrado: Usuario =
        await this.encontraUsuario(dadoEnviado);

      return usuarioEncontrado;
    } catch (erro) {
      return {
        message:
          'O usuario é encontrado por id, cpf e email, verifique se o dado que você inseriu está correto',
        erro: erro,
      };
    }
  }

  private async encontraUsuario(dadoEnviado: string): Promise<Usuario> {
    try {
      if (this.regexEmail(dadoEnviado)) {
        return await this.usuario.findOne({ email: dadoEnviado });
      } else if (this.regexCpf(dadoEnviado)) {
        return await this.usuario.findOne({ cpf: dadoEnviado });
      } else {
        return await this.usuario.findOne({ _id: dadoEnviado });
      }
    } catch {
      return;
    }
  }

  async atualizaUsuario(
    id: string,
    dadosAtualizados: UsuarioDto,
  ): Promise<Usuario | string> {
    try {
      const buscaUsuario: Usuario = await this.encontraUsuario(id);
      const usuarioEncontrado: Usuario = await this.usuario.findByIdAndUpdate(
        buscaUsuario._id,
        dadosAtualizados,
      );
      const usuarioAtualizado = await this.usuario.findOne(buscaUsuario._id);

      return usuarioAtualizado;
    } catch {
      return 'Não foi possível atualizar o usuário,verifique se o dado que você inseriu está correto';
    }
  }

  async deletaUsuario(id: string): Promise<object> {
    try {
      const tipoDeBusca: Usuario = await this.encontraUsuario(id);
      const enderecoUsuaio: Endereco = tipoDeBusca.endereco;
      const Endereco = await this.enderecoService.apagaEndereco(enderecoUsuaio);
      const usuario = await this.usuario.findByIdAndDelete(tipoDeBusca._id);
      return {
        message: 'Usuário removido com sucesso!',
        usuarioRemovido: usuario,
      };
    } catch {
      return { message: 'Não foi possível excluir o usuário' };
    }
  }

  // Validation

  async filtraUsuarioCadastradoEmail(email: string): Promise<boolean> {
    const filtraUsuario: Usuario[] = await this.usuario.find({ email: email });
    const boolean: boolean = true;

    if (filtraUsuario.length > 0) {
      return boolean;
    } else {
      return !boolean;
    }
  }

  async filtraUsuarioCadastradoCpf(cpf: string): Promise<boolean> {
    const filtraUsuario: Usuario[] = await this.usuario.find({ cpf: cpf });
    const boolean: boolean = true;

    if (filtraUsuario.length > 0) {
      return boolean;
    } else {
      return !boolean;
    }
  }

  // Regex

  private regexEmail(dado: string): boolean {
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexEmail.test(dado);
  }

  private regexCpf(dado: string): boolean {
    const regexCpf = /\d{11}/;

    return regexCpf.test(dado);
  }
}
