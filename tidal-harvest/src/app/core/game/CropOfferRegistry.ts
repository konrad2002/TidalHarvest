import {CropOffer} from "../model/economy/CropOffer";
import {Subject} from "rxjs";

export class CropOfferRegistry {

    private readonly _offers: CropOffer[] = [
    ];
    private readonly _observer: Subject<CropOffer[]> = new Subject<CropOffer[]>();



    get observer(): Subject<CropOffer[]> {
        return this._observer;
    }
}
