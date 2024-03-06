import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { DadosCnh } from './DadosCnh.dto.js';
import { MetodoRecebimento } from './MetodoRecebimento.dto.js';
import { TipoDeBuggy } from './TipoDeCarro.dto.js';

export class AtualizaContaPessoal {
  @IsNotEmpty({ message: 'O campo RG não pode ser vazio!' })
  @MaxLength(11)
  @IsOptional()
  rg: number;

  @IsOptional()
  sexo: string;

  @IsNotEmpty({ message: 'O campo data de nascimento não pode ser vazio!' })
  @IsOptional()
  dataDeNascimento: string;

  @IsOptional()
  metodoDePagamento: any;
}

export class AtualizaContaProfissional {
  @IsNotEmpty({ message: 'O campo RG não pode ser vazio!' })
  @IsOptional()
  rg: number;

  @IsOptional()
  sexo: string;

  @IsNotEmpty({ message: 'O campo CNH não pode ser vazio!' })
  @ValidateNested()
  @IsOptional()
  @Type(() => DadosCnh)
  cnh: DadosCnh;

  @IsNotEmpty({ message: 'O campo tipo de buggy não pode ser vazio!' })
  @IsArray()
  @ValidateNested()
  @IsOptional()
  @Type(() => TipoDeBuggy)
  tipoDeCarro: TipoDeBuggy[];

  @IsNotEmpty({ message: 'O campo método do recebimento não pode ser vazio!' })
  @IsArray()
  @ValidateNested()
  @IsOptional()
  @Type(() => MetodoRecebimento)
  metodoRecebimento: MetodoRecebimento[];
}
