import { CriarVendaRepository } from "@/data/protocols";
import { CriarVenda } from "@/domain/usecases";

export class BdCriarVenda implements CriarVenda {
    constructor(
        private readonly criarVendaRepository: CriarVendaRepository
    ){}

    async criar(parametros: CriarVenda.Parametros, transaction?: any) : Promise<CriarVenda.Resultado>{
        return await this.criarVendaRepository.criar(parametros, transaction)
    }
}