import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { DadosCnh } from './DadosCnh.dto';
import { MetodoRecebimento } from './MetodoRecebimento.dto';
import { TipoDeBuggy } from './TipoDeCarro.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ContaPessoalDto {
  
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo RG não pode ser vazio!' })
  @MaxLength(11)
  rg: number;

  // @IsOptional()
  // sexo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo data de nascimento não pode ser vazio!' })
  dataDeNascimento: string;

  // @IsOptional()
  // metodoDePagamento: any;
}

export class ContaProfissionalDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo RG não pode ser vazio!' })
  rg: number;

  // @IsOptional()
  // sexo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo CNH não pode ser vazio!' })
  @ValidateNested()
  @Type(() => DadosCnh)
  cnh: DadosCnh;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo tipo de buggy não pode ser vazio!' })
  @IsArray()
  @ValidateNested()
  @Type(() => TipoDeBuggy)
  tipoDeCarro: TipoDeBuggy[];

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo método do recebimento não pode ser vazio!' })
  @IsArray()
  @ValidateNested()
  @Type(() => MetodoRecebimento)
  metodoRecebimento: MetodoRecebimento[];
}

