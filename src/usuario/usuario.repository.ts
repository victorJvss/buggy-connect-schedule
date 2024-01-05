import { Injectable } from '@nestjs/common';
import { ClienteEntity } from './usuarioEntity/Cliente.entity';

@Injectable()
export class UsuarioRepository {
  private dataBase: ClienteEntity[] = [];

  async salva(dadosCliente: ClienteEntity) {
    this.dataBase.push(dadosCliente);
    return { message: 'Usuário salvo com sucesso' };
  }

  async pegar() {
    return this.dataBase;
  }
}
