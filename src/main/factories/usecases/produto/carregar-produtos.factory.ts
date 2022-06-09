import { BdCarregarProdutos } from '@/data/usecases';
import { CarregarProdutos } from '@/domain/usecases';
import { ProdutoRepository } from '@/infra/orm/repositories';
import { Provider } from '@nestjs/common';
import { CARREGAR_PRODUTOS_FACTORY } from '../../providers';

export const carregarProdutosFactory: Provider = {
  provide: CARREGAR_PRODUTOS_FACTORY,
  useFactory: (produtoRepository: ProdutoRepository): CarregarProdutos => {
    return new BdCarregarProdutos(produtoRepository);
  },
  inject: [ProdutoRepository],
};
