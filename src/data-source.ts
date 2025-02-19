import "reflect-metadata";
import { DataSource } from "typeorm";
import { Expense } from "../entities/Expense";
import { Currency } from "../entities/Currency";
import { Account } from "../entities/Account";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "expense-tracker.sqlite", // Database file name
    entities: [Expense, Currency, Account],
    synchronize: true, // Auto-create tables (disable in production)
    logging: false,
    migrations: [],
    subscribers: [],
});