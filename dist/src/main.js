"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const Account_1 = require("../entities/Account");
require("reflect-metadata");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
    // Example: Create a new account
    const account = new Account_1.Account();
    account.account_owner = "12345678-1234";
    account.account_name = "Main Account";
    account.account_type = "Savings";
    account.account_balance = 1000;
    account.currency_code = "USD";
    account.updated_date = new Date();
    return data_source_1.AppDataSource.manager.save(account);
})
    .then(() => {
    console.log("Account has been saved");
})
    .catch((error) => console.log("Error: ", error));
