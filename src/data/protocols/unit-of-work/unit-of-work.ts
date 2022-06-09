export interface UnitOfWork {
    start(): Promise<any>;
    commit(): Promise<void>;
    rollback(): Promise<void>;
}