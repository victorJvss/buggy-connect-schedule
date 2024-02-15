import { ClienteEntity } from '../usuarioEntity/Cliente.entity';
import { DadosCnh } from '../usuarioEntity/DadosCnh.entity';

describe('Deve testar o entity cliente', () => {
  const clienteEntity = new ClienteEntity();
  const dadosCnh = new DadosCnh();

  it('Teste no entity cliente', () => {
    clienteEntity.nome = 'Raul';
    expect(clienteEntity).toEqual({ nome: 'Raul' });
  });

  it('Teste no entity dadoCnh', () => {
    dadosCnh.numeroCnh = 56565674232;
    expect(dadosCnh.numeroCnh).toBe(56565674232);
  });
});
