import {
  IsArray,
  IsNotEmpty,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { DadosCnh } from './DadosCnh.dto.js';
import { MetodoRecebimento } from './MetodoRecebimento.dto.js';
import { TipoDeBuggy } from './TipoDeCarro.dto.js';

export class ContaPessoalDto {
  @IsNotEmpty({ message: 'O campo RG não pode ser vazio!' })
  @MaxLength(11)
  rg: number;

  // @IsOptional()
  // sexo: string;

  @IsNotEmpty({ message: 'O campo data de nascimento não pode ser vazio!' })
  dataDeNascimento: string;

  // @IsOptional()
  // metodoDePagamento: any;
}

export class ContaProfissionalDto {
  @IsNotEmpty({ message: 'O campo RG não pode ser vazio!' })
  rg: number;

  // @IsOptional()
  // sexo: string;

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
