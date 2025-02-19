import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";

@Entity("expenses")
export class Expense {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column({ name : "bank_account_name", type : "string", length : 100 })
    bankAccountName!: string;
    
    @Column({ name : "bank_account_id", type : "string", length : 15 })
    bankAccountId!: string;

    @Column({name : "amount", type : "number"})
    amount!: number;

    @Column({name: "expense_date", type : "date"})
    expenseDate!: Date;

    @Column({name : "currency_code", type : "varchar", length : 3})
    currency!: string;
    
    @Column({name : "expense_description", type : "text", nullable : true})
    description!: string;

    @Column({name : "expense_category", type : "varchar", length : 50, nullable : true})
    category!: string;

    @Column({name : "is_payed" , type : "boolean", default : false})
    isBilled!: boolean;

    @Column({name : "date to be payed", type : "date", nullable : true})
    dateToBePayed!: Date;

    @Column({name : "credit/debit", type : "varchar", length : 6, default : "credit"})
    creditOrDebit!: string;

    @Column({name : "Remaining amount in accouny ", type : "number"})
    remainingAmount!: number;

    @Column({name : "remaining amount to budget", type : "number"})
    remainingAmountToBudget!: number;

    async validate(): Promise<void> {
        // Validate bankAccountName
        if (!this.bankAccountName || this.bankAccountName.trim().length === 0) {
            throw new Error("Bank account name cannot be empty");
        }
        if (this.bankAccountName.length > 100) {
            throw new Error("Bank account name cannot exceed 100 characters");
        }
    
        // Validate bankAccountId
        if (this.bankAccountId.length < 11 || this.bankAccountId.length > 15) {
            throw new Error("Bank account ID must be between 11 and 15 characters");
        }
        if (!/^[a-zA-Z0-9]+$/.test(this.bankAccountId)) {
            throw new Error("Bank account ID must be alphanumeric");
        }
    
        // Validate amount
        if (this.amount <= 0) {
            throw new Error("Amount must be a positive number");
        }
        if (isNaN(this.amount)) {
            throw new Error("Amount must be a valid number");
        }
    
        // Validate expenseDate
        if (!(this.expenseDate instanceof Date) || isNaN(this.expenseDate.getTime())) {
            throw new Error("Expense date must be a valid date");
        }
        if (this.expenseDate > new Date()) {
            throw new Error("Expense date cannot be in the future");
        }
    
        // Validate currency (if provided)
        if (this.currency && this.currency.length !== 3) {
            throw new Error("Currency code must be exactly 3 characters");
        }
        if (this.currency && !/^[A-Z]{3}$/.test(this.currency)) {
            throw new Error("Currency code must be in uppercase and contain only letters");
        }
    
        // Validate description (if provided)
        if (this.description && this.description.length > 1000) {
            throw new Error("Description cannot exceed 1000 characters");
        }
    
        // Validate category (if provided)
        if (this.category && this.category.length > 50) {
            throw new Error("Category cannot exceed 50 characters");
        }
        if (this.category && !/^[a-zA-Z\s-]+$/.test(this.category)) {
            throw new Error("Category can only contain letters, spaces, and hyphens");
        }
    
        // Validate isBilled
        if (typeof this.isBilled !== "boolean") {
            throw new Error("isBilled must be a boolean");
        }
    
        // Validate dateToBePayed (if provided)
        if (this.dateToBePayed && !(this.dateToBePayed instanceof Date && !isNaN(this.dateToBePayed.getTime()))) {
            throw new Error("Date to be payed must be a valid date");
        }
        if (this.dateToBePayed && this.dateToBePayed < new Date()) {
            throw new Error("Date to be payed cannot be in the past");
        }
    
        // Validate creditOrDebit
        if (this.creditOrDebit !== "credit" && this.creditOrDebit !== "debit") {
            throw new Error("Credit/Debit must be either 'credit' or 'debit'");
        }
    
        // Validate remainingAmount
        if (this.remainingAmount < 0) {
            throw new Error("Remaining amount cannot be negative");
        }
        if (isNaN(this.remainingAmount)) {
            throw new Error("Remaining amount must be a valid number");
        }
    
        // Validate remainingAmountToBudget
        if (this.remainingAmountToBudget < 0) {
            throw new Error("Remaining amount to budget cannot be negative");
        }
        if (isNaN(this.remainingAmountToBudget)) {
            throw new Error("Remaining amount to budget must be a valid number");
        }
    }
}