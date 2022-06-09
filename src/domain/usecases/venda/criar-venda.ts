import { VendaModel } from "@/domain/models";

export interface CriarVenda{
    criar: (parametros: CriarVenda.Parametros, transaction?: any) => Promise<CriarVenda.Resultado>
}

export namespace CriarVenda{
    export type Parametros = Omit<VendaModel, 'id' | 'produtos'>
    export type Resultado = VendaModel
}