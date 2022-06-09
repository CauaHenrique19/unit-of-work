import { CriarProdutosVendasRepository } from "@/data/protocols";
import { CriarProdutosVendas } from "@/domain/usecases";
import { Inject } from "@nestjs/common";
import { ProdutosVendas } from "../../entities";
import { PRODUTOS_VENDAS_REPOSITORY } from "../../sequelize/sequelize.repositories";

export class ProdutosVendasRepository implements CriarProdutosVendasRepository{
    constructor(
        @Inject(PRODUTOS_VENDAS_REPOSITORY)
        private readonly vendaRepoisitory: typeof ProdutosVendas
    ){}

    async criar(parametros: CriarProdutosVendas.Parametros, transaction?: any) : Promise<CriarProdutosVendas.Resultado>{

        const resultado = []

        for(const produtoVenda of parametros){
            const retorno = await this.vendaRepoisitory.create(produtoVenda, { transaction, raw: true })
            resultado.push(retorno)
        }

        //return await this.vendaRepoisitory.bulkCreate(parametros, { transaction, raw: true })
        return resultado
    }
}