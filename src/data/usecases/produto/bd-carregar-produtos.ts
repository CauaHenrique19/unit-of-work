import { CarregarProdutosRepository } from '@/data/protocols';
import { CarregarProdutos } from '@/domain/usecases';

export class BdCarregarProdutos implements CarregarProdutos {
  constructor(
    private readonly carregarProdutosRepository: CarregarProdutosRepository,
  ) {}

  async carregar(parametros: CarregarProdutos.Parametros): Promise<CarregarProdutos.Resultado> {
    return await this.carregarProdutosRepository.carregar(parametros);
  }
}
