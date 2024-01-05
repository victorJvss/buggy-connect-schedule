import { DadosCnh } from "./DadosCnh.entity";
import { MetodoRecebimento } from "./MetodoRecebimento.entity";
import { TipoDeBuggy } from "./TipoDeCarro.entity";

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
