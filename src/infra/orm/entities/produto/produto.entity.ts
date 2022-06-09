import { ProdutoModel } from '@/domain/models';
import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';

@Table({ tableName: 'tb_produtos', freezeTableName: true })
export class Produto extends Model<ProdutoModel> implements ProdutoModel {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  nome: string;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  valor: number;
}
