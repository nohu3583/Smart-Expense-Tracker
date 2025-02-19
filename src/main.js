"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_source_1 = require("./data-source");
var Account_1 = require("../entities/Account");
require("reflect-metadata");
data_source_1.AppDataSource.initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
    // Example: Create a new account
    var account = new Account_1.Account();
    account.account_owner = "12345678-1234";
    account.account_name = "Main Account";
    account.account_type = "Savings";
    account.account_balance = 1000;
    account.currency_code = "USD";
    account.updated_date = new Date();
    return data_source_1.AppDataSource.manager.save(account);
})
    .then(function () {
    console.log("Account has been saved");
})
    .catch(function (error) { return console.log("Error: ", error); });
