import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Usuario } from '../../src/usuario/usuarioSchema/usuario.schema';
import { UsuarioDto } from '../../src/usuario/usuarioDto/Cliente.dto';
import { UsuarioEntity } from '../../src/usuario/usuarioEntity/Cliente.entity';
import { Endereco } from '../../src/usuario/usuarioSchema/endereco.schema';
import { EnderecoService } from '../../src/usuario/endereco.service';

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
    try {
      const usuarios: Usuario[] = await this.usuario.find();
      return usuarios;
    } catch {
      return;
    }
  }

  async pegaUsuarioPorParametro(
    dadoEnviado: string,
  ): Promise<Usuario | object> {
    try {
      const usuarioEncontrado: Usuario[] =
        await this.encontraUsuario(dadoEnviado);

      if (usuarioEncontrado.length == 0) {
        throw new Error();
      }

      return usuarioEncontrado;
    } catch (erro) {
      return {
        message:
          'O usuario é encontrado por id, cpf e email, verifique se o dado que você inseriu está correto',
        erro: (erro.message = 'Usuário não encontrado'),
      };
    }
  }

  private async encontraUsuario(dadoEnviado: string): Promise<Usuario[]> {
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
      const buscaUsuario: Usuario[0] = await this.encontraUsuario(id);

      if (buscaUsuario.length == 0) {
        throw new Error();
      }

      const usuarioEncontrado: Usuario = await this.usuario.findByIdAndUpdate(
        buscaUsuario._id,
        dadosAtualizados,
      );
      const usuarioAtualizado = await this.usuario.findOne(buscaUsuario._id);

      return usuarioAtualizado;
    } catch (erro) {
      return (erro.message =
        'Usuario não encontrado, verifique se o dado que inseriu é um id, cpf ou email');
    }
  }

  async deletaUsuario(id: string): Promise<object> {
    try {
      const tipoDeBusca: Usuario[0] = await this.encontraUsuario(id);
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
