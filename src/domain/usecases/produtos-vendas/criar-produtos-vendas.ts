import { ProdutosVendasModel } from "@/domain/models";

export interface CriarProdutosVendas{
    criar: (parametros: CriarProdutosVendas.Parametros, transaction?: any) => Promise<CriarProdutosVendas.Resultado>
}

export namespace CriarProdutosVendas{
    export type Parametros = Omit<ProdutosVendasModel, 'id'>[]
    export type Resultado = ProdutosVendasModel[]
}