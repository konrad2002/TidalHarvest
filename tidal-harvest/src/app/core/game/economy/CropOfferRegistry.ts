import {CropOffer} from "../../model/economy/CropOffer";
import {CropOfferBuilder} from "../../model/economy/CropOfferBuilder";
import {CropKey} from "../../model/field/farm/crop/CropKey";

export class CropOfferRegistry {
    get offers(): CropOffer[] {
        return this._offers;
    }

    private readonly _offers: CropOffer[] = [
        new CropOfferBuilder(CropKey.MELON)
            .addCost(CropKey.CORN, 1200)
            .addCost(CropKey.WHEAT, 2000)
            .build(),
        new CropOfferBuilder(CropKey.CORN)
            .addCost(CropKey.WHEAT, 750)
            .build()
    ];

}
