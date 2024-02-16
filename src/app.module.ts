/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { usuarioModule } from './usuario/usuario.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'
import { PasseiosModule } from './passeios/passeios.module';
import { AgendamentoPasseioModule } from './agendamentoPasseio/agendamento.module';

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

