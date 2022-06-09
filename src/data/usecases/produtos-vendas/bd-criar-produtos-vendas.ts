import { CriarProdutosVendasRepository } from "@/data/protocols";
import { CriarProdutosVendas } from "@/domain/usecases";

export class BdCriarProdutosVendas implements CriarProdutosVendas{
    constructor(
        private readonly criarProdutosVendasRepository: CriarProdutosVendasRepository
    ){}

    async criar (parametros: CriarProdutosVendas.Parametros, transaction?: any) : Promise<CriarProdutosVendas.Resultado>{
        return await this.criarProdutosVendasRepository.criar(parametros, transaction)
    }
}