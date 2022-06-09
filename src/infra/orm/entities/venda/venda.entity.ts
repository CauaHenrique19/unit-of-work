import { VendaModel } from "@/domain/models";
import { ProdutoModel } from '@/domain/models';
import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  BelongsToMany
} from 'sequelize-typescript';
import { Produto } from "../produto";
import { ProdutosVendas } from "../produtos-vendas";

@Table({ tableName: 'tb_vendas', freezeTableName: true, timestamps: false })
export class Venda extends Model<VendaModel> implements VendaModel {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number

  @Column({ type: DataType.DECIMAL(7, 2), allowNull: false })
  total: number

  @Column({ type: DataType.DATE, allowNull: false })
  dataCadastro: Date

  @BelongsToMany(() => Produto, () => ProdutosVendas)
  produtos?: ProdutoModel[]
}