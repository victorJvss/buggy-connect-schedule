import { IsNotEmpty, MaxLength } from 'class-validator';

export class PasseiosDto {
  @IsNotEmpty()
  @MaxLength(500, { message: 'Você atingiu o maxímo de caracteres, "500"' })
  datalhesPasseios: string;

  @IsNotEmpty()
  horarios: string;

  @IsNotEmpty()
  distancia: number;

  @IsNotEmpty()
  tempoPasseio: number;

  @IsNotEmpty()
  valor: number;
  
  //   formasDePagamentos: FormasDePagamento;
}
