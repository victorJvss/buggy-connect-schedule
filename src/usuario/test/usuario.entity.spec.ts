import { ClienteEntity } from '../usuarioEntity/Cliente.entity';
import { DadosCnh } from '../usuarioEntity/DadosCnh.entity';
import { MetodoRecebimento } from '../usuarioEntity/MetodoRecebimento.entity';
import { TipoDeBuggy } from '../usuarioEntity/TipoDeCarro.entity';
import { ContaPessoal } from '../usuarioEntity/TipoDeConta.entity';

describe('Deve testar o entity cliente', () => {
  const clienteEntity = new ClienteEntity();
  const dadosCnh = new DadosCnh();
  const metodoRecebimento = new MetodoRecebimento();
  const tipoDeCarro = new TipoDeBuggy();
  const contaPessoal = new ContaPessoal();

  it('Teste no entity cliente', () => {
    clienteEntity.nome = 'Raul';
    expect(clienteEntity).toEqual({ nome: 'Raul' });
  });

  it('Teste no entity dadoCnh', () => {
    dadosCnh.numeroCnh = 56565674232;
    expect(dadosCnh.numeroCnh).toBe(56565674232);
  });

  it('Teste no entity metodoRecebimento', () => {
    metodoRecebimento.banco = 'Brasil';
    expect(metodoRecebimento.banco).toBe('Brasil');
  });

  it('Teste no entity TipoDeBuggy', () => {
    tipoDeCarro.corBuggy = 'Amarelo';
    expect(tipoDeCarro.corBuggy).toBe('Amarelo');
  });

  it('Teste no entity contaPessoal', () => {
    contaPessoal.sexo = 'Masculino';
    expect(contaPessoal.sexo).toBe('Masculino');
  });
});
