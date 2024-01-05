import { Module } from '@nestjs/common';
import { usuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuario.repository';

@Module({
  controllers: [usuarioController],
  providers: [UsuarioRepository],
})
export class usuarioModule {}
