import { ClienteEntity } from '../usuarioEntity/Cliente.entity';

describe('Deve testar o entity cliente', () => {
  const usuarioEntity = new ClienteEntity();

  it('Teste no entity cliente', () => {
    usuarioEntity.nome = 'Raul';
    expect(usuarioEntity).toEqual({ nome: 'Raul' });
  });
});
