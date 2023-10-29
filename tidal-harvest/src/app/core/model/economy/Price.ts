import {CropAmount} from "./CropAmount";

export class Price {
    private readonly _price: CropAmount[];

    public constructor(price: CropAmount[]) {
        this._price = price;
    }

    get price(): CropAmount[] {
        return this._price;
    }
}
