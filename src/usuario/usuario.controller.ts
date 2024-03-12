import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UsuarioService } from '../../src/usuario/usuario.service';
import { UsuarioDto } from '../../src/usuario/usuarioDto/Cliente.dto';
import { UsuarioEntity } from '../../src/usuario/usuarioEntity/Cliente.entity';
import { AtualizaClienteDto } from '../../src/usuario/usuarioDto/AtualizaDadosUsuario.tdo';
import { Usuario } from '../../src/usuario/usuarioSchema/usuario.schema';

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
  @ApiOperation({
    description:
      'Clique em try it out e em execute para fazer a requiseção Get nos usuários',
  })
  async pegaUsuarios() {
    return this.usuarioService.pegaUsuarios();
  }

  @Get('/:id?/:email?/:cpf?')
  @ApiOperation({
    description:
      'Insira o id cpf ou e-mail no input a baixo para pesquisar o usuário desejado',
  })
  @ApiParam({
    name: 'id',
    required: false,
    description: 'Insira o id, cpf ou email',
  })
  async pegaUsuarioPorParametro(
    @Param('id') id: string,
  ): Promise<Usuario | object> {
    try {
      const pegaUsuario = await this.usuarioService.pegaUsuarioPorParametro(id);
      return pegaUsuario;
    } catch {
      return;
    }
  }

  @Put('/:id?/:email?/:cpf?')
  @ApiOperation({
    description:
      'Insira o id cpf ou e-mail no input a baixo para atualizar o usuário desejado',
  })
  @ApiParam({
    name: 'id',
    required: false,
    description: 'Insira o id, cpf ou email',
  })
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() dadosUsuario: AtualizaClienteDto,
  ) {
    try {
      const atualizaUsuario = await this.usuarioService.atualizaUsuario(
        id,
        dadosUsuario,
      );

      return atualizaUsuario;
    } catch {
      return;
    }
  }

  @Delete('/:id?/:email?/:cpf?')
  @ApiParam({
    name: 'id',
    required: false,
    description: 'Insira o id, cpf ou email',
  })
  @ApiOperation({
    description:
      'Insira o id cpf ou e-mail no input a baixo para deletar o usuário desejado',
  })
  async removeUsuario(@Param('id') id: string): Promise<object> {
    try {
      const usuarioDeletado = await this.usuarioService.deletaUsuario(id);
      return usuarioDeletado;
    } catch {
      return;
    }
  }
}
