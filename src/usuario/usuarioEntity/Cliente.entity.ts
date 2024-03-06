import {
  ContaPessoalDto,
  ContaProfissionalDto,
} from '../usuarioDto/TipoDeConta.dto.js';
import { EnderecoEntity } from './EnderecoCliente.entity.js';

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
