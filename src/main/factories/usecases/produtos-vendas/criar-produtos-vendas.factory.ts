import { BdCriarProdutosVendas } from '@/data/usecases';
import { CriarProdutosVendas } from '@/domain/usecases';
import { ProdutosVendasRepository } from '@/infra/orm/repositories';
import { Provider } from '@nestjs/common';
import { CRIAR_PRODUTOS_VENDAS_FACTORY } from '../../providers';

export const criarProdutosVendasFactory: Provider = {
  provide: CRIAR_PRODUTOS_VENDAS_FACTORY,
  useFactory: (produtosVendasRepository: ProdutosVendasRepository): CriarProdutosVendas => {
    return new BdCriarProdutosVendas(produtosVendasRepository);
  },
  inject: [ProdutosVendasRepository],
};
