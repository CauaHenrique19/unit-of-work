import { Sequelize } from 'sequelize-typescript';
import Sequelizes from 'sequelize';

import { sequelizeConfig } from '@/infra/config/sequelize.config';
import { Provider } from '@nestjs/common';
import { Produto, ProdutosVendas, Venda } from '../entities';

const SEQUELIZE = 'SEQUELIZE';

export const sequelizeProvider: Provider[] = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      Sequelizes.DATE.prototype._stringify = function _stringify(
        date,
        options,
      ) {
        date = this._applyTimezone(date, options);
        return date.format('YYYY-MM-DD HH:mm:ss.SSS');
      };

      const sequelize = new Sequelize(sequelizeConfig as any);
      sequelize.addModels([
        Produto,
        Venda,
        ProdutosVendas,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
