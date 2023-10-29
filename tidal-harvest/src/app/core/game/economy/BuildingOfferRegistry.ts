import {BuildingOffer} from "../../model/economy/BuildingOffer";
import {Subject} from "rxjs";
import {BuildingOfferBuilder} from "../../model/economy/BuildingOfferBuilder";
import {FieldType} from "../../model/field/FieldType";
import {CropKey} from "../../model/field/farm/crop/CropKey";
import {CropUnlockedRegistry} from "./CropUnlockedRegistry";

export class BuildingOfferRegistry {

    private _offer: BuildingOffer[] = [
        new BuildingOfferBuilder(FieldType.FARMER)
            .addCost(CropKey.WHEAT, 0)
            .build(),
        new BuildingOfferBuilder(FieldType.SILO)
            .addCost(CropKey.WHEAT, 0)
            .build()
    ]

    private wheatOnlyIteration = 0;
    private wheatAndCornIteration = 0;
    private allIteration = 0;

    private readonly _subject: Subject<BuildingOffer[]> = new Subject();

    private readonly _cropUnlockedRegistry: CropUnlockedRegistry;

    constructor(cropUnlockedRegistry: CropUnlockedRegistry) {
        this.subject.next(this._offer);
        this._cropUnlockedRegistry = cropUnlockedRegistry;
    }

    public generateNewOfferSet() {

        const nextOffer: BuildingOffer[] = [];

        if (!this._cropUnlockedRegistry.isUnlocked(CropKey.CORN) &&
            !this._cropUnlockedRegistry.isUnlocked(CropKey.MELON)) {

            this.wheatOnlyIteration++;

            nextOffer.push(
                new BuildingOfferBuilder(FieldType.FARMER)
                    .addCost(CropKey.WHEAT, 50 * this.wheatOnlyIteration)
                    .build()
            );

            nextOffer.push(
                new BuildingOfferBuilder(FieldType.SILO)
                    .addCost(CropKey.WHEAT, 200 * this.wheatOnlyIteration)
                    .build()
            )


        }

        if (this._cropUnlockedRegistry.isUnlocked(CropKey.CORN) &&
            !this._cropUnlockedRegistry.isUnlocked(CropKey.MELON)) {

            this.wheatAndCornIteration++;

        }

        if (this._cropUnlockedRegistry.isUnlocked(CropKey.CORN) &&
            this._cropUnlockedRegistry.isUnlocked(CropKey.MELON)) {

            this.allIteration++;

        }

        this._offer = nextOffer;

        this.subject.next(this._offer);
    }

    get subject(): Subject<BuildingOffer[]> {
        return this._subject;
    }


}
