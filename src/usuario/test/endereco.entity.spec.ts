import { EnderecoEntity } from '../usuarioEntity/EnderecoCliente.entity.js';

describe('Deve testar o entity do endereço', () => {
  const enderecoEntity = new EnderecoEntity();

  it('Teste endereço entity', () => {
    enderecoEntity.cidade = 'lagarto';
    expect(enderecoEntity.cidade).toBe('lagarto');
  });
});
