export class Crop{


    private readonly _name: string;
    private readonly _growthSpeed: number;

    constructor(name: string, growthSpeed: number) {
        this._name = name;
        this._growthSpeed = growthSpeed;
    }

    get name(): string {
        return this._name;
    }

    get growthSpeed(): number {
        return this._growthSpeed;
    }

}
