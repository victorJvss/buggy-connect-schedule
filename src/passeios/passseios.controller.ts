import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PasseiosService } from '../../src/passeios/./passeios.service';
import { PasseiosDto } from '../../src/passeios/./passeiosDto/passeios.dto';
import { AtualizaPasseioDto } from '../../src/passeios/./passeiosDto/atualizaPasseios.dto';
import { Passeios } from './passeiosSchema/passeios.schema';

@ApiTags('Passeios')
@Controller('passeios')
export class PasseiosController {
  constructor(private passeios: PasseiosService) {}
  @Get()
  async pegaTodosOsPasseios(): Promise<Passeios[] | string> {
    try {
      const todosOsPasseios = await this.passeios.pegaTodosOsPasseios();
      return todosOsPasseios;
    } catch {
      return 'Houve um problema, não foi possível retorna todos os passeios';
    }
  }

  @Get('/:id')
  async pegaPasseioPeloId(@Param('id') id: string): Promise<Passeios | string> {
    try {
      const pegaPasseioPeloId = await this.passeios.pegaPasseioPeloId(id);
      return pegaPasseioPeloId;
    } catch {
      return 'Houve um problema, não foi possível retorna o passeio, verifique se o id está correto';
    }
  }

  @Post()
  async adicionaPasseio(
    @Body() DadosPasseio: PasseiosDto,
  ): Promise<Passeios | string> {
    try {
      const salvaPasseios = await this.passeios.adicionaPasseios(DadosPasseio);
      return salvaPasseios;
    } catch {
      return 'Houve um problema, não foi possível criar o passeio' ;
    }
  }

  @Put('/:id')
  async atualizaPasseio(
    @Param('id') id: string,
    @Body() dadosAtualizadosPasseio: AtualizaPasseioDto,
  ) {
    try {
      const atualizaPasseio = await this.passeios.atualizaPasseios(
        id,
        dadosAtualizadosPasseio,
      );
      return atualizaPasseio;
    } catch {
      return;
    }
  }

  @Delete('/:id')
  async deletaPasseio(@Param('id') id: string) {
    try {
      const deletandoPasseio = await this.passeios.deletaPasseio(id);
      return deletandoPasseio;
    } catch {
      return;
    }
  }
}
