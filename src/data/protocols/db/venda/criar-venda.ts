import { CriarVenda } from "@/domain/usecases";

export interface CriarVendaRepository{
    criar: (parametros: CriarVendaRepository.Parametros, transaction?: any) => Promise<CriarVendaRepository.Resultado>
}

export namespace CriarVendaRepository{
    export type Parametros = CriarVenda.Parametros
    export type Resultado = CriarVenda.Resultado
}