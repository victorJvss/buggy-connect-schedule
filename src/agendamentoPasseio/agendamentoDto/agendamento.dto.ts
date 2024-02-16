import { IsNotEmpty } from 'class-validator';

export class AgendamentoPasseioDto {
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  PasseioAgendado: string;
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  HorarioInícioPasseio: string;
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  HorarioTerminoPasseio: string;
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  QuantidadePessoas: number;
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  ValorTotalPasseio: string;
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  ProfissionalPasseio: string;
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  titularDoAgendamento: string;
}
