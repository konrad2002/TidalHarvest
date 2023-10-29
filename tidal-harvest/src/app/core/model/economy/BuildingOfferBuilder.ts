import {CropAmount} from "./CropAmount";
import {CropKey} from "../field/farm/crop/CropKey";
import {CropOffer} from "./CropOffer";
import {Price} from "./Price";
import {FieldType} from "../field/FieldType";
import {BuildingOffer} from "./BuildingOffer";

export class BuildingOfferBuilder {
    private _cropCosts: CropAmount[] = [];
    private readonly _type: FieldType;

    public constructor(type: FieldType) {
        this._type = type;
    }

    public addCost(cropKey: CropKey, amount: number): BuildingOfferBuilder {
        this._cropCosts.push(new CropAmount(cropKey, amount));
        return this;
    }

    public build(): BuildingOffer {
        return new BuildingOffer(new Price(this._cropCosts), this._type);
    }

}
