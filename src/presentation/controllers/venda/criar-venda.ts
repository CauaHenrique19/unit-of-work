import { UnitOfWork } from "@/data/protocols";
import { ProdutosVendasModel } from "@/domain/models";
import { CarregarProdutos, CriarProdutosVendas, CriarVenda } from "@/domain/usecases";
import { ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class CriarVendaController implements Controller{
    constructor(
        private readonly unitOfWork: UnitOfWork,
        private readonly criarVenda: CriarVenda,
        private readonly carregarProdutos: CarregarProdutos,
        private readonly criarProdutosVendas: CriarProdutosVendas
    ){}

    async lidar(dados: DadosCriarVendaController) : Promise<HttpResponse>{
        const transacao = await this.unitOfWork.start()

        try{
            const { idProdutos } = dados

            const produtos = await this.carregarProdutos.carregar(idProdutos)
            const total = produtos.reduce((total, produto) => total + produto.valor, 0)
            
            const venda = await this.criarVenda.criar({ dataCadastro: new Date(), total }, transacao)

            const produtosVendas : Omit<ProdutosVendasModel, 'id'>[] = produtos
                .map(produto => ({ produtoId: produto.id, vendaId: venda.id  }))

            // const produtosVendas : Omit<ProdutosVendasModel, 'id'>[] = [...idProdutos, 15, 14, 13]
            //     .map(produto => ({ produtoId: produto, vendaId: venda.id  }))

            await this.criarProdutosVendas.criar(produtosVendas, transacao)
            await transacao.commit()
            
            return ok({ ...venda, produtos })
        }
        catch(error){
            console.log(error)

            await transacao.rollback()
            return serverError(error)
        }
    }
}

interface DadosCriarVendaController{
    idProdutos: number[]
}