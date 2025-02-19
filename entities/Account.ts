import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";

@Entity("Account")
export class Account {
    @PrimaryGeneratedColumn("uuid", {name : "Account ID"})
    id! : string;

    @Column({name : "Account Owner", type : "string", length : 13})
    account_owner! : string;

    @Column({name : "Account name", type : "string", length : 100})
    account_name! : string;

    @Column({name : "Account type", type : "string", length : 50})
    account_type! : string;

    @Column({name : "Account balance", type : "number"})
    account_balance! : number;

    @Column({name : "Currency code", type : "string", length : 3})
    currency_code! : string;

    @Column({name : "Last updated", type : "date"})
    updated_date! : Date;

    async validate(): Promise<void> {
        if (this.account_name === null) {
            throw new Error ("This field should not be empty");
        }
        if (this.account_name.length > 100) {
            throw new Error ("Account name should not exceed 100 charachter")
        }
        if (this.account_type.length > 50) {
            throw new Error ("Account type should not exceed 50 charachter")
        }
        if (this.currency_code.length !== 3) {
            throw new Error ("Currency code should always be 3 charachter")
        }
        if (this.updated_date >= new Date()) {
            throw new Error ("Date should not be in the past")
        }
        if (this.account_balance < 0) {
            throw new Error ("Account balance should not be negative")
        }
        if (this.account_owner.length !== 13) {
            throw new Error ("Account owner should be 13 charachter")
        }
        if (!/^\d{8}-\d{4}$/.test(this.account_owner)) {
            throw new Error ("Account owner should be in the format of 8 digit dash 4 digit")
        }
    }
} 
