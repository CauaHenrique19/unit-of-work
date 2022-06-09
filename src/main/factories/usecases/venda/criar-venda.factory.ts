import { BdCriarVenda } from '@/data/usecases';
import { CriarVenda } from '@/domain/usecases';
import { VendaRepository } from '@/infra/orm/repositories';
import { Provider } from '@nestjs/common';
import { CRIAR_VENDA_FACTORY } from '../../providers';

export const criarVendaFactory: Provider = {
  provide: CRIAR_VENDA_FACTORY,
  useFactory: (vendaRepository: VendaRepository): CriarVenda => {
    return new BdCriarVenda(vendaRepository);
  },
  inject: [VendaRepository],
};
