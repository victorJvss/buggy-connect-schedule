import { Controller, Get } from '@nestjs/common';
import { PasseiosService } from './passeios.service';

@Controller('Passeios')
export class PasseiosController {
  constructor(private passeios: PasseiosService) {}
  @Get()
  async pegaTodosOsPasseios() {
    return this.passeios.pegaTodosOsPasseios()
  }
}
