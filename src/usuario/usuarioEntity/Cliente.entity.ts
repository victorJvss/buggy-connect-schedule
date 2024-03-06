import {
  ContaPessoalDto,
  ContaProfissionalDto,
} from '../usuarioDto/TipoDeConta.dto';
import { EnderecoEntity } from './EnderecoCliente.entity';

export class UsuarioEntity {
  nome: string;
  telefone: number;
  email: string;
  senha: string;
  cpf: string;
  endereco: EnderecoEntity;
  tipoDeConta: ContaPessoalDto | ContaProfissionalDto;
  dataUltimoAcesso: Date;
  dataExlusaoConta: Date | null;
  usuarioAutorizado: boolean;
  usuarioAtivo: boolean;
  usuarioMotorista: boolean;
}
