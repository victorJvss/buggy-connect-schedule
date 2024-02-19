import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { UsuarioService } from './usuario.service';
import { UsuarioDto } from './usuarioDto/Cliente.dto';
import { UsuarioEntity } from './usuarioEntity/Cliente.entity';
import { AtualizaClienteDto } from './usuarioDto/AtualizaDadosUsuario.tdo';
import { Usuario } from './usuarioSchema/usuario.schema';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuários')
@Controller('/usuarios')
export class usuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  async enviaUsuario(@Body() dadosEnviado: UsuarioDto) {
    const usuarioEntity = new UsuarioEntity();

    usuarioEntity.nome = dadosEnviado.nome;
    usuarioEntity.telefone = dadosEnviado.telefone;
    usuarioEntity.email = dadosEnviado.email;
    usuarioEntity.senha = dadosEnviado.senha;
    usuarioEntity.cpf = dadosEnviado.cpf;
    usuarioEntity.endereco = dadosEnviado.endereco;
    usuarioEntity.tipoDeConta = dadosEnviado.tipoDeConta;
    usuarioEntity.dataUltimoAcesso = new Date();
    usuarioEntity.dataExlusaoConta = null;
    usuarioEntity.usuarioAutorizado = true;
    usuarioEntity.usuarioAtivo = true;
    usuarioEntity.usuarioMotorista = false;

    return this.usuarioService.criaUsuario(usuarioEntity);
  }

  @Get()
  async pegaUsuarios() {
    return this.usuarioService.pegaUsuarios();
  }

  @Get('/:id')
  async pegaUsuarioPeloId(@Param('id') id: string): Promise<Usuario> {
    return this.usuarioService.pegaUsuarioPeloId(id);
  }

  @Put('/:id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() dadosUsuario: AtualizaClienteDto,
  ) {
    const atualizaUsuario = await this.usuarioService.atualizaUsuario(
      id,
      dadosUsuario,
    );

    return atualizaUsuario;
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string): Promise<object> {
    return this.usuarioService.deletaUsuario(id);
  }
}

