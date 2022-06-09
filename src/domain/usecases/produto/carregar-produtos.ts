import { ProdutoModel } from '@/domain/models';

export interface CarregarProdutos {
  carregar: (parametros: CarregarProdutos.Parametros) => Promise<CarregarProdutos.Resultado>;
}

export namespace CarregarProdutos {
  export type Parametros = number[];
  export type Resultado = ProdutoModel[];
}
