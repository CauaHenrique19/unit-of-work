import {CarregarProdutosRepository } from '@/data/protocols/db/produto';
import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { Produto } from '../../entities';
import { PRODUTO_REPOSITORY } from '../../sequelize/sequelize.repositories';

@Injectable()
export class ProdutoRepository implements CarregarProdutosRepository{
  constructor(
    @Inject(PRODUTO_REPOSITORY)
    private readonly produtoRepository: typeof Produto,
  ) { }

  async carregar(parametros: CarregarProdutosRepository.Parametros): Promise<CarregarProdutosRepository.Resultado> {
    const produtos = await this.produtoRepository.findAll({ 
      where: {
        id: {
          [Op.in]: parametros
        }
      },
      raw: true
    })

    return produtos
  }
}
