"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, type, price, amount, createDay, description) {
        this._productCode = 0;
        this._name = name;
        this._type = type;
        this._price = price;
        this._amount = amount;
        this._createDay = createDay;
        this._description = description;
    }
    get productCode() {
        return this._productCode;
    }
    set productCode(value) {
        this._productCode = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get amount() {
        return this._amount;
    }
    set amount(value) {
        this._amount = value;
    }
    get createDay() {
        return this._createDay;
    }
    set createDay(value) {
        this._createDay = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}
exports.Product = Product;
