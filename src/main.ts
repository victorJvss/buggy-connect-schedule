/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform:true,
      whitelist:true,
      forbidNonWhitelisted: true
    })
  )
  const config = new DocumentBuilder()
  .setTitle('Clientes')
  .setDescription('Requisição HTTP na rota /usuarios e na rota /enderecos')
  .setVersion('1.0')
  .addTag('Usuários')
  .addTag('Endereços')
  .addTag('Passeios')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  useContainer(app.select(AppModule), {fallbackOnErrors: true});
}


bootstrap();

