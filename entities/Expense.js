"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expense = void 0;
var typeorm_1 = require("typeorm");
require("reflect-metadata");
var Expense = function () {
    var _classDecorators = [(0, typeorm_1.Entity)("expenses")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _bankAccountName_decorators;
    var _bankAccountName_initializers = [];
    var _bankAccountName_extraInitializers = [];
    var _bankAccountId_decorators;
    var _bankAccountId_initializers = [];
    var _bankAccountId_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _expenseDate_decorators;
    var _expenseDate_initializers = [];
    var _expenseDate_extraInitializers = [];
    var _currency_decorators;
    var _currency_initializers = [];
    var _currency_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _category_decorators;
    var _category_initializers = [];
    var _category_extraInitializers = [];
    var _isBilled_decorators;
    var _isBilled_initializers = [];
    var _isBilled_extraInitializers = [];
    var _dateToBePayed_decorators;
    var _dateToBePayed_initializers = [];
    var _dateToBePayed_extraInitializers = [];
    var _creditOrDebit_decorators;
    var _creditOrDebit_initializers = [];
    var _creditOrDebit_extraInitializers = [];
    var _remainingAmount_decorators;
    var _remainingAmount_initializers = [];
    var _remainingAmount_extraInitializers = [];
    var _remainingAmountToBudget_decorators;
    var _remainingAmountToBudget_initializers = [];
    var _remainingAmountToBudget_extraInitializers = [];
    var Expense = _classThis = /** @class */ (function () {
        function Expense_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.bankAccountName = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _bankAccountName_initializers, void 0));
            this.bankAccountId = (__runInitializers(this, _bankAccountName_extraInitializers), __runInitializers(this, _bankAccountId_initializers, void 0));
            this.amount = (__runInitializers(this, _bankAccountId_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
            this.expenseDate = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _expenseDate_initializers, void 0));
            this.currency = (__runInitializers(this, _expenseDate_extraInitializers), __runInitializers(this, _currency_initializers, void 0));
            this.description = (__runInitializers(this, _currency_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.category = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _category_initializers, void 0));
            this.isBilled = (__runInitializers(this, _category_extraInitializers), __runInitializers(this, _isBilled_initializers, void 0));
            this.dateToBePayed = (__runInitializers(this, _isBilled_extraInitializers), __runInitializers(this, _dateToBePayed_initializers, void 0));
            this.creditOrDebit = (__runInitializers(this, _dateToBePayed_extraInitializers), __runInitializers(this, _creditOrDebit_initializers, void 0));
            this.remainingAmount = (__runInitializers(this, _creditOrDebit_extraInitializers), __runInitializers(this, _remainingAmount_initializers, void 0));
            this.remainingAmountToBudget = (__runInitializers(this, _remainingAmount_extraInitializers), __runInitializers(this, _remainingAmountToBudget_initializers, void 0));
            __runInitializers(this, _remainingAmountToBudget_extraInitializers);
        }
        Expense_1.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
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
                    return [2 /*return*/];
                });
            });
        };
        return Expense_1;
    }());
    __setFunctionName(_classThis, "Expense");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)("uuid", { name: "expense_id" })];
        _bankAccountName_decorators = [(0, typeorm_1.Column)({ name: "bank_account_name", type: "string", length: 100 })];
        _bankAccountId_decorators = [(0, typeorm_1.Column)({ name: "bank_account_id", type: "string", length: 15 })];
        _amount_decorators = [(0, typeorm_1.Column)({ name: "amount", type: "number" })];
        _expenseDate_decorators = [(0, typeorm_1.Column)({ name: "expense_date", type: "date" })];
        _currency_decorators = [(0, typeorm_1.Column)({ name: "currency_code", type: "varchar", length: 3 })];
        _description_decorators = [(0, typeorm_1.Column)({ name: "expense_description", type: "text", nullable: true })];
        _category_decorators = [(0, typeorm_1.Column)({ name: "expense_category", type: "varchar", length: 50, nullable: true })];
        _isBilled_decorators = [(0, typeorm_1.Column)({ name: "is_payed", type: "boolean", default: false })];
        _dateToBePayed_decorators = [(0, typeorm_1.Column)({ name: "date to be payed", type: "date", nullable: true })];
        _creditOrDebit_decorators = [(0, typeorm_1.Column)({ name: "credit/debit", type: "varchar", length: 6, default: "credit" })];
        _remainingAmount_decorators = [(0, typeorm_1.Column)({ name: "Remaining amount in accouny ", type: "number" })];
        _remainingAmountToBudget_decorators = [(0, typeorm_1.Column)({ name: "remaining amount to budget", type: "number" })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _bankAccountName_decorators, { kind: "field", name: "bankAccountName", static: false, private: false, access: { has: function (obj) { return "bankAccountName" in obj; }, get: function (obj) { return obj.bankAccountName; }, set: function (obj, value) { obj.bankAccountName = value; } }, metadata: _metadata }, _bankAccountName_initializers, _bankAccountName_extraInitializers);
        __esDecorate(null, null, _bankAccountId_decorators, { kind: "field", name: "bankAccountId", static: false, private: false, access: { has: function (obj) { return "bankAccountId" in obj; }, get: function (obj) { return obj.bankAccountId; }, set: function (obj, value) { obj.bankAccountId = value; } }, metadata: _metadata }, _bankAccountId_initializers, _bankAccountId_extraInitializers);
        __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
        __esDecorate(null, null, _expenseDate_decorators, { kind: "field", name: "expenseDate", static: false, private: false, access: { has: function (obj) { return "expenseDate" in obj; }, get: function (obj) { return obj.expenseDate; }, set: function (obj, value) { obj.expenseDate = value; } }, metadata: _metadata }, _expenseDate_initializers, _expenseDate_extraInitializers);
        __esDecorate(null, null, _currency_decorators, { kind: "field", name: "currency", static: false, private: false, access: { has: function (obj) { return "currency" in obj; }, get: function (obj) { return obj.currency; }, set: function (obj, value) { obj.currency = value; } }, metadata: _metadata }, _currency_initializers, _currency_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _category_decorators, { kind: "field", name: "category", static: false, private: false, access: { has: function (obj) { return "category" in obj; }, get: function (obj) { return obj.category; }, set: function (obj, value) { obj.category = value; } }, metadata: _metadata }, _category_initializers, _category_extraInitializers);
        __esDecorate(null, null, _isBilled_decorators, { kind: "field", name: "isBilled", static: false, private: false, access: { has: function (obj) { return "isBilled" in obj; }, get: function (obj) { return obj.isBilled; }, set: function (obj, value) { obj.isBilled = value; } }, metadata: _metadata }, _isBilled_initializers, _isBilled_extraInitializers);
        __esDecorate(null, null, _dateToBePayed_decorators, { kind: "field", name: "dateToBePayed", static: false, private: false, access: { has: function (obj) { return "dateToBePayed" in obj; }, get: function (obj) { return obj.dateToBePayed; }, set: function (obj, value) { obj.dateToBePayed = value; } }, metadata: _metadata }, _dateToBePayed_initializers, _dateToBePayed_extraInitializers);
        __esDecorate(null, null, _creditOrDebit_decorators, { kind: "field", name: "creditOrDebit", static: false, private: false, access: { has: function (obj) { return "creditOrDebit" in obj; }, get: function (obj) { return obj.creditOrDebit; }, set: function (obj, value) { obj.creditOrDebit = value; } }, metadata: _metadata }, _creditOrDebit_initializers, _creditOrDebit_extraInitializers);
        __esDecorate(null, null, _remainingAmount_decorators, { kind: "field", name: "remainingAmount", static: false, private: false, access: { has: function (obj) { return "remainingAmount" in obj; }, get: function (obj) { return obj.remainingAmount; }, set: function (obj, value) { obj.remainingAmount = value; } }, metadata: _metadata }, _remainingAmount_initializers, _remainingAmount_extraInitializers);
        __esDecorate(null, null, _remainingAmountToBudget_decorators, { kind: "field", name: "remainingAmountToBudget", static: false, private: false, access: { has: function (obj) { return "remainingAmountToBudget" in obj; }, get: function (obj) { return obj.remainingAmountToBudget; }, set: function (obj, value) { obj.remainingAmountToBudget = value; } }, metadata: _metadata }, _remainingAmountToBudget_initializers, _remainingAmountToBudget_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Expense = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Expense = _classThis;
}();
exports.Expense = Expense;
