import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Endereco } from './EnderecoCliente.dto';
import { ContaPessoal, ContaProfissional } from './TipoDeConta.dto';
import { Type } from 'class-transformer';

export class ClienteDto {
  @IsNotEmpty({ message: 'o campo nome não pode ser vazio!' })
  @MaxLength(30, { message: 'o campo nome deve ter no máximo 30 caracteres' })
  nome: string;

  @IsNotEmpty({ message: 'o campo telefone não pode ser vazio!' })
  @MaxLength(12, { message: 'o campo telefone deve ter no máximo 12 números' })
  telefone: number;

  @IsNotEmpty({ message: 'o campo email não pode ser vazio!' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'o campo senha não pode ser vazio!' })
  @MinLength(7, { message: 'o campo senha deve ter no mínimo 7 caracteres' })
  @IsStrongPassword(undefined, {
    message:
      'A sua senha deve ter no mínimo uma letra maiúscula, uma letra minúscula, um número e um caracter especial: @,!,#,$,%...',
  })
  senha: string;

  @IsNotEmpty({ message: 'o campo CPF não pode ser vazio!' })
  @MaxLength(14, { message: 'o campo CPF deve ter no máximo 14 números' })
  @MinLength(14, { message: 'o campo CPF deve ter no mínimo 12 números' })
  cpf: number;

  @IsNotEmpty({ message: 'o campo endereço não pode ser vazio!' })
  @IsArray()
  @ValidateNested()
  @Type(() => Endereco)
  endereco: Endereco[];

  @IsNotEmpty({ message: 'o campo tipo de conta não pode ser vazio!' })
  @ValidateNested()
  @Type(() => ContaPessoal || ContaProfissional)
  tipoDeConta: ContaPessoal | ContaProfissional;
}
