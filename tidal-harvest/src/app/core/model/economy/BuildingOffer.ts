import {Price} from "./Price";
import {FieldType} from "../field/FieldType";
import {BuildingType} from "../field/BuildingType";

export class BuildingOffer {

    private readonly _price: Price;
    private readonly _type: BuildingType;

    get price(): Price {
        return this._price;
    }

    get type(): BuildingType {
        return this._type;
    }

    constructor(price: Price, type: BuildingType) {
        this._price = price;
        this._type = type;
    }
}
