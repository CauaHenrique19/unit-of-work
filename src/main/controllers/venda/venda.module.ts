import { ConstruirCriarVendaFactory } from "@/main/factories/controllers";
import { FactoryModule } from "@/main/factories/usecases/factory.module";
import { Module } from "@nestjs/common";
import { VendaController } from "./venda.controller";

@Module({
    imports: [FactoryModule],
    controllers: [VendaController],
    providers: [
        ConstruirCriarVendaFactory
    ]
})
export class VendaModule{}