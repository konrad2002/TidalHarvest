import {CropAmount} from "./CropAmount";
import {CropKey} from "../field/farm/crop/CropKey";
import {CropOffer} from "./CropOffer";
import {Price} from "./Price";

export class CropOfferBuilder {

    private _cropCosts: CropAmount[] = [];
    private readonly _crop: CropKey;

    public constructor(crop: CropKey) {
        this._crop = crop;
    }

    public addCost(cropKey: CropKey, amount: number): CropOfferBuilder {
        this._cropCosts.push(new CropAmount(cropKey, amount));
        return this;
    }

    public build(): CropOffer {
        return new CropOffer(new Price(this._cropCosts), this._crop);
    }
}
