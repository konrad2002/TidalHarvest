import {BuildingOffer} from "../../model/economy/BuildingOffer";
import {ReplaySubject, Subject} from "rxjs";
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
            .build(),
        new BuildingOfferBuilder(FieldType.WATER_CHANNEL)
            .addCost(CropKey.CORN, 100)
            .build()
    ]

    private buildingIteration: Map<FieldType, number> = new Map<FieldType, number>();

    private readonly _subject: ReplaySubject<BuildingOffer[]> = new ReplaySubject();

    private readonly _cropUnlockedRegistry: CropUnlockedRegistry;

    constructor(cropUnlockedRegistry: CropUnlockedRegistry) {
        this.subject.next(this._offer);
        this._cropUnlockedRegistry = cropUnlockedRegistry;

        this.buildingIteration.set(FieldType.SILO, 0);
        this.buildingIteration.set(FieldType.FARMER, 0);
        this.buildingIteration.set(FieldType.WATER_CHANNEL, 0);
    }

    public generateNewOfferSet(type: FieldType) {

        const currentBuildingIteration = this.buildingIteration.get(type);
        if (!currentBuildingIteration) {
            this.buildingIteration.set(type, 1);
        } else {
            this.buildingIteration.set(type, currentBuildingIteration+1);
        }

        const nextOffer: BuildingOffer[] = [];

        nextOffer.push(new BuildingOfferBuilder(FieldType.WATER_CHANNEL)
            .addCost(CropKey.CORN, 100)
            .build());

        nextOffer.push(
            new BuildingOfferBuilder(FieldType.FARMER)
                .addCost(CropKey.WHEAT, 50 * this.buildingIteration.get(FieldType.FARMER)!)
                .build()
        );

        nextOffer.push(
            new BuildingOfferBuilder(FieldType.SILO)
                .addCost(CropKey.WHEAT, 200 * this.buildingIteration.get(FieldType.SILO)!)
                .build()
        )

        //
        // if (!this._cropUnlockedRegistry.isUnlocked(CropKey.CORN) &&
        //     !this._cropUnlockedRegistry.isUnlocked(CropKey.MELON)) {
        //
        //     this.wheatOnlyIteration++;
        //
        //     nextOffer.push(
        //         new BuildingOfferBuilder(FieldType.FARMER)
        //             .addCost(CropKey.WHEAT, 50 * this.wheatOnlyIteration)
        //             .build()
        //     );
        //
        //     nextOffer.push(
        //         new BuildingOfferBuilder(FieldType.SILO)
        //             .addCost(CropKey.WHEAT, 200 * this.wheatOnlyIteration)
        //             .build()
        //     )
        //
        //
        // }
        //
        // if (this._cropUnlockedRegistry.isUnlocked(CropKey.CORN) &&
        //     !this._cropUnlockedRegistry.isUnlocked(CropKey.MELON)) {
        //
        //     if (this.wheatAndCornIteration === 0) {
        //         nextOffer.push(
        //             new BuildingOfferBuilder(FieldType.SILO)
        //                 .addCost(CropKey.WHEAT, 1000)
        //                 .build()
        //         )
        //     } else {
        //
        //         nextOffer.push(
        //             new BuildingOfferBuilder(FieldType.SILO)
        //                 .addCost(CropKey.WHEAT, (this.wheatAndCornIteration + this.wheatOnlyIteration) * 100)
        //                 .addCost(CropKey.CORN, this.wheatAndCornIteration * 150)
        //                 .build()
        //         )
        //
        //     }
        //
        //     nextOffer.push(
        //         new BuildingOfferBuilder(FieldType.FARMER)
        //             .addCost(CropKey.CORN, 125 * (this.wheatAndCornIteration + 1))
        //             .build()
        //     )
        //
        //     this.wheatAndCornIteration++;
        //
        //
        // }
        //
        // if (this._cropUnlockedRegistry.isUnlocked(CropKey.CORN) &&
        //     this._cropUnlockedRegistry.isUnlocked(CropKey.MELON)) {
        //
        //     if (this.wheatAndCornIteration === 0) {
        //         nextOffer.push(
        //             new BuildingOfferBuilder(FieldType.SILO)
        //                 .addCost(CropKey.WHEAT, 1000)
        //                 .addCost(CropKey.CORN, 1000)
        //                 .build()
        //         )
        //     } else {
        //
        //         nextOffer.push(
        //             new BuildingOfferBuilder(FieldType.SILO)
        //                 .addCost(CropKey.WHEAT, (this.allIteration + this.wheatAndCornIteration + this.wheatOnlyIteration) * 100)
        //                 .addCost(CropKey.CORN, this.allIteration * 150)
        //                 .build()
        //         )
        //
        //     }
        //
        //     nextOffer.push(
        //         new BuildingOfferBuilder(FieldType.FARMER)
        //             .addCost(CropKey.CORN, 150 * (this.allIteration + 1))
        //             .build()
        //     )
        //
        //
        //     this.allIteration++;
        //
        // }

        this._offer = nextOffer;

        this.subject.next(this._offer);
    }

    get subject(): Subject<BuildingOffer[]> {
        return this._subject;
    }


}
