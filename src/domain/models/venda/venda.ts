import { ProdutoModel } from "../produto"

export interface VendaModel{
    id: number
    total: number
    dataCadastro: Date
    produtos?: ProdutoModel[]
}