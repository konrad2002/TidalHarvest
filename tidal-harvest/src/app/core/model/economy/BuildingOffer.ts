import {Price} from "./Price";
import {FieldType} from "../field/FieldType";

export class BuildingOffer {

    private readonly _price: Price;
    private readonly _type: FieldType;

    get price(): Price {
        return this._price;
    }

    get type(): FieldType {
        return this._type;
    }

    constructor(price: Price, type: FieldType) {
        this._price = price;
        this._type = type;
    }
}
