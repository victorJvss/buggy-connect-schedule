import { Module } from '@nestjs/common';
import { PasseiosService } from './passeios.service';

@Module({
  controllers: [],
  providers: [PasseiosService],
})
export class PasseiosModule {}
