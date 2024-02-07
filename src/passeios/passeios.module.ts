import { Module } from '@nestjs/common';
import { PasseiosService } from './passeios.service';
import { PasseiosController } from './passseios.controller';

@Module({
  controllers: [PasseiosController],
  providers: [PasseiosService],
})
export class PasseiosModule {}
