import { Module } from '@nestjs/common';
import { PasseiosService } from './passeios.service';
import { PasseiosController } from './passseios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Passeios, passseiosSchema } from './passeiosSchema/Passeios.schema';

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
