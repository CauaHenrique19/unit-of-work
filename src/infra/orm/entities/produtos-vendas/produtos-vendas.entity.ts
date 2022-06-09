import { ProdutosVendasModel } from '@/domain/models';
import {
    AutoIncrement,
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';
import { Produto } from '../produto/produto.entity';
import { Venda } from '../venda';

@Table({ tableName: 'tb_produtos_vendas', freezeTableName: true, timestamps: false })
export class ProdutosVendas extends Model<ProdutosVendasModel> implements ProdutosVendasModel {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @ForeignKey(() => Venda)
    @Column({
        type: DataType.INTEGER,
        field: 'venda_id',
        allowNull: false,
    })
    vendaId: number;

    @ForeignKey(() => Produto)
    @Column({
        type: DataType.INTEGER,
        field: 'produto_id',
        allowNull: false,
    })
    produtoId: number;

    @BelongsTo(() => Produto)
    produto: Produto
    
    @BelongsTo(() => Venda)
    venda: Produto
}