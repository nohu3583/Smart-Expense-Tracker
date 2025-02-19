"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Expense_1 = require("../entities/Expense");
const Currency_1 = require("../entities/Currency");
const Account_1 = require("../entities/Account");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "expense-tracker.sqlite", // Database file name
    entities: [Expense_1.Expense, Currency_1.Currency, Account_1.Account],
    synchronize: true, // Auto-create tables (disable in production)
    logging: false,
    migrations: [],
    subscribers: [],
});
