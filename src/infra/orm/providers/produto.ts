import { Provider } from '@nestjs/common';
import { Produto } from '../entities';
import { PRODUTO_REPOSITORY } from '../sequelize/sequelize.repositories';

export const produtoProvider : Provider = {
  provide: PRODUTO_REPOSITORY,
  useValue: Produto,
};
