import { DadosCnh } from './DadosCnh.entity.js';
import { MetodoRecebimento } from './MetodoRecebimento.entity.js';
import { TipoDeBuggy } from './TipoDeCarro.entity.js';

export class ContaPessoal {
  rg: number;
  sexo: string;
  dataDeNascimento: string;
  metodoDePagamento: any;
  idCliente: string;
}

export class ContaProfissional {
  rg: number;
  sexo: string;
  cnh: DadosCnh;
  tipoDeCarro: TipoDeBuggy[];
  metodoRecebimento: MetodoRecebimento[];
  idCliente: string;
}
