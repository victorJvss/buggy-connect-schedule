import {
  ContaPessoalDto,
  ContaProfissionalDto,
} from '../usuarioDto/TipoDeConta.dto';
import { EnderecoEntity } from './EnderecoCliente.entity';

export class ClienteEntity {
  nome: string;
  telefone: number;
  email: string;
  senha: string;
  cpf: number;
  endereco: EnderecoEntity;
  tipoDeConta: ContaPessoalDto | ContaProfissionalDto;
  dataUltimoAcesso: Date;
  dataExlusaoConta: Date | null;
  usuarioAutorizado: boolean;
  usuarioAtivo: boolean;
  usuarioMotorista: boolean;
}
