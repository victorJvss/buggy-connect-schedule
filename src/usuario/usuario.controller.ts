import { Body, Controller, Get, Post } from '@nestjs/common';

import { UsuarioRepository } from './usuario.repository';
import { ClienteDto } from './usuarioDto/Cliente.dto';
import { ClienteEntity } from './usuarioEntity/Cliente.entity';
import { v4 as uuid } from 'uuid';

@Controller('/usuarios')
export class usuarioController {
  constructor(private repository: UsuarioRepository) {}

  @Post()
  async enviaUsuario(@Body() dadosEnviado: ClienteDto) {
    const usuarioEntity = new ClienteEntity();

    usuarioEntity.nome = dadosEnviado.nome;
    usuarioEntity.telefone = dadosEnviado.telefone;
    usuarioEntity.email = dadosEnviado.email;
    usuarioEntity.senha = dadosEnviado.senha;
    usuarioEntity.cpf = dadosEnviado.cpf;
    usuarioEntity.endereco = dadosEnviado.endereco;
    usuarioEntity.tipoDeConta = dadosEnviado.tipoDeConta;
    usuarioEntity.idCliente = uuid();
    usuarioEntity.dataCadastro = new Date();
    usuarioEntity.dataUltimoAcesso = new Date(); 
    usuarioEntity.dataUltimaAtualizacao = new Date();
    usuarioEntity.dataExlusaoConta = null;
    usuarioEntity.usuarioAutorizado = true;
    usuarioEntity.usuarioAtivo = true;
    usuarioEntity.usuarioMotorista = false;
    return this.repository.salva(usuarioEntity);
  }

  @Get()
  async pegaUsuario() {
    return this.repository.pegar();
  }
}
