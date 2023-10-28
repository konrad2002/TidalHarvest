import {FarmlandState} from "../FarmlandState";
import {CropKey} from "./CropKey";

export class Crop {

    public static readonly WHEAT = new Crop(CropKey.WHEAT,
        20, 80, 15);
    public static readonly BARLEY = new Crop(CropKey.BARLEY,
        10, 60, 10);
    public static readonly CACTUS = new Crop(CropKey.CACTUS,
        30, 180, 20);


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
