/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'
import { usuarioModule } from '../src/usuario/usuario.module';
import { PasseiosModule } from '../src/passeios/passeios.module';
import { AgendamentoPasseioModule } from '../src/agendamentoPasseio/agendamento.module';

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

