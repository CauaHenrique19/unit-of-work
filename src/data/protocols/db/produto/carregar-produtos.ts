import { CarregarProdutos } from '@/domain/usecases';

export interface CarregarProdutosRepository {
  carregar: (parametros: CarregarProdutosRepository.Parametros) => Promise<CarregarProdutosRepository.Resultado>;
}

export namespace CarregarProdutosRepository {
  export type Parametros = CarregarProdutos.Parametros;
  export type Resultado = CarregarProdutos.Resultado;
}
