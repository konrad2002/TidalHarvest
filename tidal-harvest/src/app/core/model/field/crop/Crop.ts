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

    get growthSpeed(): number {
        return this._growthSpeed;
    }

    get requiredPlantTicks(): number {
        return this._requiredPlantTicks;
    }

    get requiredGrowthTicks(): number {
        return this._requiredHarvestTicks;
    }
    get requiredHarvestTicks(): number {
        return this._requiredHarvestTicks;
    }

}
