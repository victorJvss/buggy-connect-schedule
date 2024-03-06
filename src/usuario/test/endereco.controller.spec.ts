import { Test, TestingModule } from '@nestjs/testing';
import { enderecoController } from '../endereco.controller.js';
import { enderecoMock, enderecoServiceMock } from '../mocks/endereco.mock.js';
import { AtualizaEnderecoDto } from '../usuarioDto/AtualizaEndereco.dto.js';
import { Endereco } from '../usuarioSchema/endereco.schema.js';

describe('Teste controller endereço', () => {
  let EnderecoController: enderecoController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [enderecoController],
      providers: [enderecoServiceMock],
    }).compile();

    EnderecoController = module.get<enderecoController>(enderecoController);
  });

  it('Esperado a busca do usuário pelo id', async () => {
    const buscaUsuario = await EnderecoController.pegaEnderecoPeloId(
      enderecoMock.id,
    );
    expect(buscaUsuario).toEqual(enderecoMock);
  });

  it('Esperado todos os usuários', async () => {
    const buscaTodosOsUsarios = await EnderecoController.pegaEnderecos();
    expect(buscaTodosOsUsarios).toEqual([enderecoMock]);
  });

  it('Esperado atualiza endereço', async () => {
    let atualizaEndereco: AtualizaEnderecoDto;
    const enderecoAtualizado: Endereco = {
      ...atualizaEndereco,
      bairro: 'juazeiro',
    };
    const endereco: Endereco = await EnderecoController.AtualizaEndereco(
      enderecoMock.id,
      enderecoAtualizado,
    );

    expect(endereco.bairro).toEqual(enderecoMock.bairro);
  });
});
