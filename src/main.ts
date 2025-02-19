import { AppDataSource } from "./data-source";
import { Account } from "../entities/Account";
import "reflect-metadata";


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");

        // Example: Create a new account
        const account = new Account();
        account.account_owner = "12345678-1234";
        account.account_name = "Main Account";
        account.account_type = "Savings";
        account.account_balance = 1000;
        account.currency_code = "USD";
        account.updated_date = new Date();

        return AppDataSource.manager.save(account);
    })
    .then(() => {
        console.log("Account has been saved");
    })
    .catch((error) => console.log("Error: ", error));