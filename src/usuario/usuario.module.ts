import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { usuarioController } from './usuario.controller.js';
import { UsuarioService } from './usuario.service.js';
import { Usuario, UsuarioSchema } from './usuarioSchema/usuario.schema.js';
import { ValidaEmail } from './validador/email.validator.js';
import { ValidaCpf } from './validador/cpf.validator.js';
import { Endereco, EnderecoSchema } from './usuarioSchema/endereco.schema.js';
import { EnderecoService } from './endereco.service.js';
import { enderecoController } from './endereco.controller.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),
    MongooseModule.forFeature([
      { name: Endereco.name, schema: EnderecoSchema },
    ]),
  ],
  controllers: [usuarioController, enderecoController],
  providers: [UsuarioService, EnderecoService, ValidaEmail, ValidaCpf],
})
export class usuarioModule {}
