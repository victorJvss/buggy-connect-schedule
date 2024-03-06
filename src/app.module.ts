/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'
import { usuarioModule } from './usuario/usuario.module.js';
import { PasseiosModule } from './passeios/passeios.module.js';
import { AgendamentoPasseioModule } from './agendamentoPasseio/agendamento.module.js';

@Module({
  imports: [
    ConfigModule.forRoot(),
    usuarioModule,
    PasseiosModule,
    AgendamentoPasseioModule,
    MongooseModule.forRoot(
      process.env.SERVIDOR_MONGO
    )  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

