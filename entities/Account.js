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
exports.Account = void 0;
var typeorm_1 = require("typeorm");
require("reflect-metadata");
var Account = function () {
    var _classDecorators = [(0, typeorm_1.Entity)("Account")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _account_owner_decorators;
    var _account_owner_initializers = [];
    var _account_owner_extraInitializers = [];
    var _account_name_decorators;
    var _account_name_initializers = [];
    var _account_name_extraInitializers = [];
    var _account_type_decorators;
    var _account_type_initializers = [];
    var _account_type_extraInitializers = [];
    var _account_balance_decorators;
    var _account_balance_initializers = [];
    var _account_balance_extraInitializers = [];
    var _currency_code_decorators;
    var _currency_code_initializers = [];
    var _currency_code_extraInitializers = [];
    var _updated_date_decorators;
    var _updated_date_initializers = [];
    var _updated_date_extraInitializers = [];
    var Account = _classThis = /** @class */ (function () {
        function Account_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.account_owner = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _account_owner_initializers, void 0));
            this.account_name = (__runInitializers(this, _account_owner_extraInitializers), __runInitializers(this, _account_name_initializers, void 0));
            this.account_type = (__runInitializers(this, _account_name_extraInitializers), __runInitializers(this, _account_type_initializers, void 0));
            this.account_balance = (__runInitializers(this, _account_type_extraInitializers), __runInitializers(this, _account_balance_initializers, void 0));
            this.currency_code = (__runInitializers(this, _account_balance_extraInitializers), __runInitializers(this, _currency_code_initializers, void 0));
            this.updated_date = (__runInitializers(this, _currency_code_extraInitializers), __runInitializers(this, _updated_date_initializers, void 0));
            __runInitializers(this, _updated_date_extraInitializers);
        }
        Account_1.prototype.validate = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.account_name === null) {
                        throw new Error("This field should not be empty");
                    }
                    if (this.account_name.length > 100) {
                        throw new Error("Account name should not exceed 100 characters");
                    }
                    if (this.account_type.length > 50) {
                        throw new Error("Account type should not exceed 50 characters");
                    }
                    if (this.currency_code.length !== 3) {
                        throw new Error("Currency code should always be 3 characters");
                    }
                    if (this.updated_date >= new Date()) {
                        throw new Error("Date should not be in the past");
                    }
                    if (this.account_balance < 0) {
                        throw new Error("Account balance should not be negative");
                    }
                    if (this.account_owner.length !== 13) {
                        throw new Error("Account owner should be 13 characters");
                    }
                    if (!/^\d{8}-\d{4}$/.test(this.account_owner)) {
                        throw new Error("Account owner should be in the format of 8 digits dash 4 digits");
                    }
                    return [2 /*return*/];
                });
            });
        };
        return Account_1;
    }());
    __setFunctionName(_classThis, "Account");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _account_owner_decorators = [(0, typeorm_1.Column)({ name: "account_owner", type: "varchar", length: 13 })];
        _account_name_decorators = [(0, typeorm_1.Column)({ name: "account_name", type: "varchar", length: 100 })];
        _account_type_decorators = [(0, typeorm_1.Column)({ name: "account_type", type: "varchar", length: 50 })];
        _account_balance_decorators = [(0, typeorm_1.Column)({ name: "account_balance", type: "float" })];
        _currency_code_decorators = [(0, typeorm_1.Column)({ name: "currency_code", type: "varchar", length: 3 })];
        _updated_date_decorators = [(0, typeorm_1.Column)({ name: "last_updated", type: "date" })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _account_owner_decorators, { kind: "field", name: "account_owner", static: false, private: false, access: { has: function (obj) { return "account_owner" in obj; }, get: function (obj) { return obj.account_owner; }, set: function (obj, value) { obj.account_owner = value; } }, metadata: _metadata }, _account_owner_initializers, _account_owner_extraInitializers);
        __esDecorate(null, null, _account_name_decorators, { kind: "field", name: "account_name", static: false, private: false, access: { has: function (obj) { return "account_name" in obj; }, get: function (obj) { return obj.account_name; }, set: function (obj, value) { obj.account_name = value; } }, metadata: _metadata }, _account_name_initializers, _account_name_extraInitializers);
        __esDecorate(null, null, _account_type_decorators, { kind: "field", name: "account_type", static: false, private: false, access: { has: function (obj) { return "account_type" in obj; }, get: function (obj) { return obj.account_type; }, set: function (obj, value) { obj.account_type = value; } }, metadata: _metadata }, _account_type_initializers, _account_type_extraInitializers);
        __esDecorate(null, null, _account_balance_decorators, { kind: "field", name: "account_balance", static: false, private: false, access: { has: function (obj) { return "account_balance" in obj; }, get: function (obj) { return obj.account_balance; }, set: function (obj, value) { obj.account_balance = value; } }, metadata: _metadata }, _account_balance_initializers, _account_balance_extraInitializers);
        __esDecorate(null, null, _currency_code_decorators, { kind: "field", name: "currency_code", static: false, private: false, access: { has: function (obj) { return "currency_code" in obj; }, get: function (obj) { return obj.currency_code; }, set: function (obj, value) { obj.currency_code = value; } }, metadata: _metadata }, _currency_code_initializers, _currency_code_extraInitializers);
        __esDecorate(null, null, _updated_date_decorators, { kind: "field", name: "updated_date", static: false, private: false, access: { has: function (obj) { return "updated_date" in obj; }, get: function (obj) { return obj.updated_date; }, set: function (obj, value) { obj.updated_date = value; } }, metadata: _metadata }, _updated_date_initializers, _updated_date_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Account = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Account = _classThis;
}();
exports.Account = Account;
