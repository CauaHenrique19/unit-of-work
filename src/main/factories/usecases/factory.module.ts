import { produtoProvider, vendaProvider, produtosVendasProvider } from '@/infra/orm/providers';
import { ProdutoRepository, ProdutosVendasRepository, VendaRepository } from '@/infra/orm/repositories';
import { Module } from '@nestjs/common';

import { carregarProdutosFactory } from './produto';
import { criarProdutosVendasFactory } from './produtos-vendas';
import { criarVendaFactory } from './venda';

@Module({
  providers: [
    ProdutoRepository,
    VendaRepository,
    ProdutosVendasRepository,
    
    produtoProvider,
    vendaProvider,
    produtosVendasProvider,

    //produtos
    carregarProdutosFactory,

    //venda
    criarVendaFactory,

    //produtos vendas
    criarProdutosVendasFactory
  ],
  exports: [
    //produtos
    carregarProdutosFactory,

    //venda
    criarVendaFactory,

    //produtos vendas
    criarProdutosVendasFactory
  ],
})
export class FactoryModule {}
