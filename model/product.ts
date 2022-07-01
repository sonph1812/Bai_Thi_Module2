export class Product{
    private _productCode = 0;
    private _name:string;
    private _type:string;
    private _price:number;
    private _amount:number;
    private _createDay:string;
    private _description:string;


    constructor( name: string, type: string, price: number, amount: number, createDay: string, description: string) {
        this._name = name;
        this._type = type;
        this._price = price;
        this._amount = amount;
        this._createDay = createDay;
        this._description = description;
    }

    get productCode(): number {
        return this._productCode;
    }

    set productCode(value: number) {
        this._productCode = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get createDay(): string {
        return this._createDay;
    }

    set createDay(value: string) {
        this._createDay = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}