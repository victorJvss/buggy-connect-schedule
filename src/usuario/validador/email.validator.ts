import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UsuarioService } from '../usuario.service';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class ValidaEmail implements ValidatorConstraintInterface {
  constructor(private usuarioService: UsuarioService) {}

  async validate(value: any): Promise<boolean> {
    const validandoUsuario =
      await this.usuarioService.filtraUsuarioCadastradoEmail(value);

    return !validandoUsuario;
  }
}

export const emailValidado = (opcoes?: ValidationOptions) => {
  return (obejto: object, propriedade: string) => {
    registerDecorator({
      target: obejto.constructor,
      propertyName: propriedade,
      options: opcoes,
      constraints: [],
      validator: ValidaEmail,
    });
  };
};
