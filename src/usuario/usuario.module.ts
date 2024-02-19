import { Module } from '@nestjs/common';
import { usuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from './usuarioSchema/usuario.schema';
import { ValidaEmail } from './validador/email.validator';
import { ValidaCpf } from './validador/cpf.validator';
import { Endereco, EnderecoSchema } from './usuarioSchema/endereco.schema';
import { EnderecoService } from './endereco.service';
import { enderecoController } from './endereco.controller';

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
