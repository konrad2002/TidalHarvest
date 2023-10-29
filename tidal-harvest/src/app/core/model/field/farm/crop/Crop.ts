import {FarmlandState} from "../FarmlandState";
import {CropKey} from "./CropKey";

export class Crop {

    public static readonly WHEAT = new Crop(CropKey.WHEAT,
        15, 40, 10);
    public static readonly MELON = new Crop(CropKey.MELON,
        20, 150, 10);

    public static readonly CORN = new Crop(CropKey.CORN,
        10, 15, 5);


    public static parse(cropKey: CropKey): Crop {
        switch (cropKey) {
            case CropKey.WHEAT:
                return Crop.WHEAT;
            case CropKey.MELON:
                return Crop.MELON;
            case CropKey.CORN:
                return Crop.CORN;
        }
    }


    private readonly _cropKey: CropKey;
    private readonly _requiredPlantTicks: number;
    private readonly _requiredGrowthTicks: number;
    private readonly _requiredHarvestTicks: number;

    constructor(cropKey: CropKey, plantTicks: number, growthTick: number, harvestTick: number) {
        this._cropKey = cropKey;
        this._requiredPlantTicks = plantTicks;
        this._requiredGrowthTicks = growthTick;
        this._requiredHarvestTicks = harvestTick;
    }

    public requiredTicks(state: FarmlandState): number {
        switch (state) {
            case FarmlandState.EMPTY:
                return 0;
            case FarmlandState.PLANTING:
                return this._requiredPlantTicks;
            case FarmlandState.GROWING:
                return this._requiredGrowthTicks;
            case FarmlandState.HARVESTING:
                return this._requiredHarvestTicks;
        }
    }


    get cropKey(): CropKey {
        return this._cropKey;
    }

    get requiredHarvestTicks(): number {
        return this._requiredHarvestTicks;
    }

    get requiredGrowthTicks(): number {
        return this._requiredGrowthTicks;
    }

    get requiredPlantTicks(): number {
        return this._requiredPlantTicks;
    }

}
