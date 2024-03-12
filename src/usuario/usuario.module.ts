import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { usuarioController } from '../../src/usuario/usuario.controller';
import { UsuarioService } from '../../src/usuario/usuario.service';
import {
  Usuario,
  UsuarioSchema,
} from '../../src/usuario/usuarioSchema/usuario.schema';
import { ValidaEmail } from '../../src/usuario/validador/email.validator';
import { ValidaCpf } from '../../src/usuario/validador/cpf.validator';
import {
  Endereco,
  EnderecoSchema,
} from '../../src/usuario/usuarioSchema/endereco.schema';
import { EnderecoService } from '../../src/usuario/endereco.service';
import { enderecoController } from '../../src/usuario/endereco.controller';
import { validaSenha } from './validador/senha.validator';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),
    MongooseModule.forFeature([
      { name: Endereco.name, schema: EnderecoSchema },
    ]),
  ],
  controllers: [usuarioController, enderecoController],
  providers: [
    UsuarioService,
    EnderecoService,
    ValidaEmail,
    ValidaCpf,
    validaSenha,
  ],
})
export class usuarioModule {}
