import { ContaPessoal, ContaProfissional } from '../usuarioDto/TipoDeConta.dto';
import { EnderecoEntity } from './EnderecoCliente.entity';

export class ClienteEntity {
  nome: string;
  telefone: number;
  email: string;
  senha: string;
  cpf: number;
  endereco: EnderecoEntity;
  tipoDeConta: ContaPessoal | ContaProfissional;
  dataUltimoAcesso: Date;
  dataExlusaoConta: Date | null;
  usuarioAutorizado: boolean;
  usuarioAtivo: boolean;
  usuarioMotorista: boolean;
}
