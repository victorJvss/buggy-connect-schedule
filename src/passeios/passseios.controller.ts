import { Body, Controller, Get, Post } from '@nestjs/common';
import { PasseiosService } from './passeios.service';
import { PasseiosDto } from './passeiosDto/passeios.dto';

@Controller('Passeios')
export class PasseiosController {
  constructor(private passeios: PasseiosService) {}
  @Get()
  async pegaTodosOsPasseios() {
    return this.passeios.pegaTodosOsPasseios();
  }

  @Post()
  async adicionaPasseio(@Body() DadosPasseio: PasseiosDto) {
    const salvaPasseios = await this.passeios.adicionaPasseios(DadosPasseio)
    return salvaPasseios
  }
}
