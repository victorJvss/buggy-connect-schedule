import {
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { EnderecoDto } from './EnderecoCliente.dto';
import { ContaPessoalDto, ContaProfissionalDto } from './TipoDeConta.dto';
import { Type } from 'class-transformer';
import { emailValidado } from '../validador/email.validator';
import { cpfValidado } from '../validador/cpf.validator';
import { ApiBody, ApiDefaultResponse, ApiProperty } from '@nestjs/swagger';

export class UsuarioDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio!' })
  @MaxLength(30, { message: 'O campo nome deve ter no máximo 30 caracteres' })
  nome: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo telefone não pode ser vazio!' })
  @MaxLength(12, { message: 'O campo telefone deve ter no máximo 12 números' })
  telefone: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo email não pode ser vazio!' })
  @IsEmail()
  @emailValidado({ message: 'Esse email já foi cadastrado' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo senha não pode ser vazio!' })
  @MinLength(7, { message: 'O campo senha deve ter no mínimo 7 caracteres' })
  @IsStrongPassword(undefined, {
    message:
      'A sua senha deve ter no mínimo uma letra maiúscula, uma letra minúscula, um número e um caracter especial: @,!,#,$,%...',
  })
  senha: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo CPF não pode ser vazio!' })
  @MaxLength(14, { message: 'O campo CPF deve ter no máximo 14 números' })
  @MinLength(14, { message: 'O campo CPF deve ter no mínimo 12 números' })
  @cpfValidado({ message: 'CPF já cadastrado' })
  cpf: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo endereço não pode ser vazio!' })
  @ValidateNested()
  @Type(() => EnderecoDto)
  endereco: EnderecoDto;

  @ApiProperty({
    example: {
      rg: 0,
      dataDeNascimento: 'string',
    },
  })

  @IsNotEmpty({ message: 'O campo tipo de conta não pode ser vazio!' })
  @ValidateNested()
  @Type(() => ContaPessoalDto || ContaProfissionalDto)
  tipoDeConta: ContaProfissionalDto | ContaPessoalDto;
}
