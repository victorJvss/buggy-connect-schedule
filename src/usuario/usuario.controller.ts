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
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { query } from 'express';

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

  @Get('/:id?/:email?/:cpf?')
  @ApiParam({
    name: 'id',
    required: false,
    description: 'Insira o id, cpf ou email',
  })
  @ApiParam({ name: 'email', type: query })
  @ApiParam({ name: 'cpf', type: query })
  async pegaUsuarioPorParametro(
    @Param('id') id?: string,
    @Param('email') email?: string,
    @Param('cpf') cpf?: string,
  ): Promise<any> {
    try {
      const pegaUsuario = await this.usuarioService.pegaUsuarioPeloId(
        id || email || cpf,
      );
      return pegaUsuario;
    } catch {
      return;
    }
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
