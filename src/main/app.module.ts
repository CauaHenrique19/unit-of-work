import { SequelizeModule } from '@/infra/orm/sequelize/sequelize.module';
import { Module } from '@nestjs/common';
import { VendaModule } from './controllers/venda/venda.module';

@Module({
  imports: [
    SequelizeModule,

    VendaModule
  ],
})
export class AppModule {}
