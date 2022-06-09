import { CarregarProdutos, CriarProdutosVendas, CriarVenda } from "@/domain/usecases";
import { UnitOfWorkSequelize } from "@/infra/orm/unit-of-work-sequelize/unit-of-work-sequelize";
import { CriarVendaController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { Inject } from "@nestjs/common";
import { CARREGAR_PRODUTOS_FACTORY, CRIAR_PRODUTOS_VENDAS_FACTORY, CRIAR_VENDA_FACTORY } from "../../providers";
import { LogControllerDecoratorFactory } from "../log-controller-decorator.factory";

export class ConstruirCriarVendaFactory{
    constructor(
        @Inject(CRIAR_VENDA_FACTORY)
        private readonly criarVenda: CriarVenda,

        @Inject(CARREGAR_PRODUTOS_FACTORY)
        private readonly carregarProdutos: CarregarProdutos,

        @Inject(CRIAR_PRODUTOS_VENDAS_FACTORY)
        private readonly criarProdutosVendas: CriarProdutosVendas,
    ){}

    public fabricar() : Controller{
        const unitOfWork = new UnitOfWorkSequelize()
        const controller = new CriarVendaController(
            unitOfWork,
            this.criarVenda, 
            this.carregarProdutos, 
            this.criarProdutosVendas
        )
        return new LogControllerDecoratorFactory(controller)
    }
}