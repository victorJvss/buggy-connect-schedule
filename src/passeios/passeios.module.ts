import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PasseiosService } from './passeios.service.js';
import { PasseiosController } from './passseios.controller.js';
import { Passeios, passseiosSchema } from './passeiosSchema/passeios.schema.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Passeios.name, schema: passseiosSchema },
    ]),
  ],
  controllers: [PasseiosController],
  providers: [PasseiosService],
})
export class PasseiosModule {}
