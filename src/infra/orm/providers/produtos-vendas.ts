import { Provider } from '@nestjs/common';
import { ProdutosVendas } from '../entities';
import { PRODUTOS_VENDAS_REPOSITORY } from '../sequelize/sequelize.repositories';

export const produtosVendasProvider : Provider = {
  provide: PRODUTOS_VENDAS_REPOSITORY,
  useValue: ProdutosVendas,
};
