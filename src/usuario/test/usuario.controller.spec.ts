import { describe, it, expect } from '@jest/globals';
import { Test, TestingModule } from '@nestjs/testing';
import { usuarioController } from '../usuario.controller';
import { usuarioMock, usuarioServiceMock } from '../mocks/usuario.mock';
import { AtualizaClienteDto } from '../usuarioDto/AtualizaDadosUsuario.tdo';

describe('Teste do controller usuarios', () => {
  let UsuarioController: usuarioController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [usuarioController],
      providers: [usuarioServiceMock],
    }).compile();

    UsuarioController = module.get<usuarioController>(usuarioController);
  });

  it('Pega usuário pelo id', async () => {
    const result = await UsuarioController.pegaUsuarioPeloId(usuarioMock.id);
    expect(result).toEqual(usuarioMock);
  });

  it('Pega todos os usuários', async () => {
    const result = await UsuarioController.pegaUsuarios();
    expect(result).toEqual([usuarioMock]);
  });

  it('Atualiza usuário', async () => {
    let atualizaUsuario: AtualizaClienteDto;
    const atualizaUsuarios = { ...atualizaUsuario, nome: 'geremias' };
    const resultadoAtualizacao = await UsuarioController.atualizaUsuario(
      usuarioMock.id,
      atualizaUsuarios,
    );
    expect(resultadoAtualizacao.nome).toEqual(usuarioMock.nome);
  });

  it('Cria usuário', async () => {
    const novoUsuario = { ...usuarioMock};
    delete usuarioMock.id;
    delete usuarioMock.endereco.id;
    const result = await UsuarioController.enviaUsuario(novoUsuario);
    expect(result).toStrictEqual({
      nome: 'cacau',
      telefone: 444484848482,
      email: 'e3633523@email.com',
      senha: 'VOLTSJV!1233e4',
      cpf: 98175144651414,
      endereco: {
        estado: 'bahia',
        cidade: 'alagoinhas',
        bairro: 'catu',
        rua: 'cacau',
        numeroCasa: 190,
        cep: 151515151,
      },
      tipoDeConta: {
        rg: 15151515151,
        dataDeNascimento: '01022002',
      },
    });
  });

  it('Deleta usuário', async () => {
    const deletaUsuario = await UsuarioController.removeUsuario(usuarioMock.id)
    expect(deletaUsuario).toEqual(true)
  })
});
