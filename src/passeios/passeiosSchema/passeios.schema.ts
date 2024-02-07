import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Passeios {
  @Prop()
  datalhesPasseios: string;

  @Prop()
  horarios: string;

  @Prop()
  distancia: number;

  @Prop()
  tempoPasseio: number;

  @Prop()
  valor: number;
}
