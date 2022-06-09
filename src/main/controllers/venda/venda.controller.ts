import { controllerAdapter } from "@/main/adapters";
import { ConstruirCriarVendaFactory } from "@/main/factories/controllers";
import { Body, Controller, Post, Response } from "@nestjs/common";

@Controller('vendas')
export class VendaController{
    constructor(
        private readonly construirCriarVendaController: ConstruirCriarVendaFactory
    ){}

    @Post()
    async criarVenda(@Body() dados, @Response() response){
        const result = await controllerAdapter(this.construirCriarVendaController.fabricar(), dados)
        return response.status(result.statusCode).json(result)
    }
}