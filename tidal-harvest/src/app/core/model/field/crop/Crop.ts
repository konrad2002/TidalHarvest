import {FarmerTask} from "../FarmerTask";
import {FarmlandState} from "../FarmlandState";

export class Crop {


    private readonly _name: string;
    private readonly _growthSpeed: number;
    private readonly _requiredPlantTicks: number;
    private readonly _requiredGrowthTicks: number;
    private readonly _requiredHarvestTicks: number;

    constructor(name: string, growthSpeed: number,
                requiredPlantTicks: number,
                requiredGrowthTicks: number,
                requiredHarvestTicks: number) {
        this._name = name;
        this._growthSpeed = growthSpeed;
        this._requiredPlantTicks = requiredPlantTicks;
        this._requiredGrowthTicks = requiredGrowthTicks;
        this._requiredHarvestTicks = requiredHarvestTicks;
    }

    get name(): string {
        return this._name;
    }

    requiredTicks(state: FarmlandState): number {
        switch (state) {
            case FarmlandState.EMPTY:
                return 0;
            case FarmlandState.SEEDING:
                return this._requiredPlantTicks;
            case FarmlandState.GROWING:
                return this._requiredGrowthTicks;
            case FarmlandState.HARVESTING:
                return this._requiredHarvestTicks;
        }
    }

}
