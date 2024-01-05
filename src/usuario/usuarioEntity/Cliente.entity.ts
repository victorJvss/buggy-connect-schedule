import { Endereco } from '../usuarioDto/EnderecoCliente.dto';
import { ContaPessoal, ContaProfissional } from '../usuarioDto/TipoDeConta.dto';

export class ClienteEntity {
  nome: string;
  telefone: number;
  email: string;
  senha: string;
  cpf: number;
  endereco: Endereco[];
  tipoDeConta: ContaPessoal | ContaProfissional;
  idCliente: string;
  dataCadastro: Date;
  dataUltimoAcesso: Date;
  dataUltimaAtualizacao: Date;
  dataExlusaoConta: Date | null;
  usuarioAutorizado: boolean;
  usuarioAtivo: boolean;
  usuarioMotorista: boolean; 
}
