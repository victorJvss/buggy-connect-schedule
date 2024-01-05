import {
  IsArray,
  IsNotEmpty,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { DadosCnh } from './DadosCnh.dto';
import { MetodoRecebimento } from './MetodoRecebimento.dto';
import { TipoDeBuggy } from './TipoDeCarro.dto';
import { Type } from 'class-transformer';

export class ContaPessoal {
  @IsNotEmpty({ message: 'O campo RG não pode ser vazio!' })
  @MaxLength(11)
  rg: number;

  sexo: string;

  @IsNotEmpty({ message: 'O campo data de nascimento não pode ser vazio!' })
  dataDeNascimento: string;

  metodoDePagamento: any;
}

export class ContaProfissional {
  @IsNotEmpty({ message: 'O campo RG não pode ser vazio!' })
  rg: number;

  sexo: string;

  @IsNotEmpty({ message: 'O campo CNH não pode ser vazio!' })
  @ValidateNested()
  @Type(() => DadosCnh)
  cnh: DadosCnh;

  @IsNotEmpty({ message: 'O campo tipo de buggy não pode ser vazio!' })
  @IsArray()
  @ValidateNested()
  @Type(() => TipoDeBuggy)
  tipoDeCarro: TipoDeBuggy[];

  @IsNotEmpty({ message: 'O campo método do recebimento não pode ser vazio!' })
  @IsArray()
  @ValidateNested()
  @Type(() => MetodoRecebimento)
  metodoRecebimento: MetodoRecebimento[];
}
