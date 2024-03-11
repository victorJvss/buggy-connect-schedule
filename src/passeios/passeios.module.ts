import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PasseiosService } from '../../src/passeios/passeios.service';
import { PasseiosController } from '../../src/passeios/passseios.controller';
import {
  Passeios,
  passseiosSchema,
} from '../../src/passeios/passeiosSchema/passeios.schema';

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
