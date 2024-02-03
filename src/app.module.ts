/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { usuarioModule } from './usuario/usuario.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    usuarioModule,
    MongooseModule.forRoot(
      process.env.SERVIDOR_MONGO
    )  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

