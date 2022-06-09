import { CriarProdutosVendas } from "@/domain/usecases";

export interface CriarProdutosVendasRepository{
    criar: (parametros: CriarProdutosVendasRepository.Parametros, transaction?: any) => Promise<CriarProdutosVendasRepository.Resultado>
}

export namespace CriarProdutosVendasRepository{
    export type Parametros = CriarProdutosVendas.Parametros
    export type Resultado = CriarProdutosVendas.Resultado
}