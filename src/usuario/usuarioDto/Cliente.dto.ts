import {
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { EnderecoDto } from '../../../src/usuario/usuarioDto/EnderecoCliente.dto';
import {
  ContaPessoalDto,
  ContaProfissionalDto,
} from '../../../src/usuario/usuarioDto/TipoDeConta.dto';
import { emailValidado } from '../../../src/usuario/validador/email.validator';
import { cpfValidado } from '../../../src/usuario/validador/cpf.validator';

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
  @MinLength(11, { message: 'O campo CPF deve ter no mínimo 11 números' })
  @cpfValidado({ message: 'CPF já cadastrado' })
  cpf: string;

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
