import { IsNotEmpty, MaxLength } from 'class-validator';

export class PasseiosDto {
  @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
  @MaxLength(30, { message: 'Você atingiu o maxímo de caracteres, "30"' })
  nomePasseio: string;

  @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
  @MaxLength(500, { message: 'Você atingiu o maxímo de caracteres, "500"' })
  datalhesPasseios: string;

  @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
  horarios: string;

  @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
  distancia: string;

  @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
  tempoPasseio: string;

  @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
  valor: string;

  //   formasDePagamentos: FormasDePagamento;
}
