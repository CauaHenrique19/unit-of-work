import { CriarVendaRepository } from "@/data/protocols";
import { CriarVenda } from "@/domain/usecases";
import { Inject } from "@nestjs/common";
import { Venda } from "../../entities";
import { VENDA_REPOSITORY } from "../../sequelize/sequelize.repositories";

export class VendaRepository implements CriarVendaRepository{
    constructor(
        @Inject(VENDA_REPOSITORY)
        private readonly vendaRepoisitory: typeof Venda
    ){}

    async criar(parametros: CriarVenda.Parametros, transaction?: any) : Promise<CriarVenda.Resultado>{
        const { id, dataCadastro, total } = await this.vendaRepoisitory.create(parametros, { transaction, returning: true, raw: true })
        return {
            id, dataCadastro, total 
        }
    }
}