import { Provider } from '@nestjs/common';
import { Venda } from '../entities';
import { VENDA_REPOSITORY } from '../sequelize/sequelize.repositories';

export const vendaProvider : Provider = {
  provide: VENDA_REPOSITORY,
  useValue: Venda,
};
