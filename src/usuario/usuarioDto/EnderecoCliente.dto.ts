import { IsNotEmpty, MaxLength } from 'class-validator';

export class EnderecoDto {
  @IsNotEmpty({ message: 'O campo estado não pode ser vazio!' })
  @MaxLength(35, { message: 'O campo deve ter no máximo 53 caracteres' })
  estado: string;

  @IsNotEmpty({ message: 'O campo cidade não pode ser vazio!' })
  @MaxLength(35, { message: 'O campo deve ter no máximo 53 caracteres' })
  cidade: string;

  @IsNotEmpty({ message: 'O campo bairro não pode ser vazio!' })
  @MaxLength(35, { message: 'O campo deve ter no máximo 53 caracteres' })
  bairro: string;

  @IsNotEmpty({ message: 'O campo rua não pode ser vazio!' })
  @MaxLength(15, { message: 'O campo deve ter no máximo 15 caracteres' })
  rua: string;

  @IsNotEmpty({ message: 'O campo número da casa não pode ser vazio!' })
  numeroCasa: number;

  @IsNotEmpty({ message: 'O campo cep não pode ser vazio!' })
  @MaxLength(9, { message: 'O campo CEP deve ter no máximo 9 caracteres' })
  cep: number;
}
