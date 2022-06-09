import { UnitOfWork } from "@/data/protocols";
import { sequelizeConfig } from "@/infra/config/sequelize.config";
import { Sequelize } from "sequelize-typescript";
import { Transaction } from "sequelize/types";

export class UnitOfWorkSequelize implements UnitOfWork {
    _transaction: Transaction = null

    async commit(): Promise<void> {
        await this._transaction.commit()
    }

    async rollback(): Promise<void> {
        await this._transaction.rollback()
    }

    async start() {
        const sequelize = new Sequelize(sequelizeConfig as any)
        this._transaction = await sequelize.transaction()
        return this._transaction
    }
}