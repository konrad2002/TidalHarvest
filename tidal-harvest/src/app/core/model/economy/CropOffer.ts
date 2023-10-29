import {Price} from "./Price";
import {CropKey} from "../field/farm/crop/CropKey";

export class CropOffer {


    private readonly _price: Price;
    private readonly _crop: CropKey;


    get crop(): CropKey {
        return this._crop;
    }


    constructor(price: Price, crop: CropKey) {
        this._price = price;
        this._crop = crop;
    }

    get price(): Price {
        return this._price;
    }
}
