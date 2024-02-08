import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ContaPessoalDto,
  ContaProfissionalDto,
} from 'src/usuario/usuarioDto/TipoDeConta.dto';
import { Endereco } from './Endereco.schema';

@Schema({ timestamps: true })
export class Usuario extends Model {
  @Prop()
  nome: string;

  @Prop()
  telefone: number;

  @Prop()
  email: string;

  @Prop()
  senha: string;

  @Prop()
  cpf: number;

  @Prop(Endereco)
  endereco: Endereco;

  @Prop({ type: Object})
  tipoDeConta: ContaPessoalDto | ContaProfissionalDto;

  @Prop()
  dataUltimoAcesso: Date;

  @Prop()
  dataExlusaoConta: Date | null;

  @Prop()
  usuarioAutorizado: boolean;

  @Prop()
  usuarioAtivo: boolean;

  @Prop()
  usuarioMotorista: boolean;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
