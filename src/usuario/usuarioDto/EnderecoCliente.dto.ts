import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class EnderecoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo estado não pode ser vazio!' })
  @MaxLength(35, { message: 'O campo deve ter no máximo 53 caracteres' })
  estado: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo cidade não pode ser vazio!' })
  @MaxLength(35, { message: 'O campo deve ter no máximo 53 caracteres' })
  cidade: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo bairro não pode ser vazio!' })
  @MaxLength(35, { message: 'O campo deve ter no máximo 53 caracteres' })
  bairro: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo rua não pode ser vazio!' })
  @MaxLength(50, { message: 'O campo deve ter no máximo 15 caracteres' })
  rua: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo número da casa não pode ser vazio!' })
  numeroCasa: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo cep não pode ser vazio!' })
  @MaxLength(9, { message: 'O campo CEP deve ter no máximo 9 caracteres' })
  cep: number;
}
