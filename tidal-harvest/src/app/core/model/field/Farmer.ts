import {Field} from "./Field";
import {Farmland} from "./Farmland";

export class Farmer extends Field{

    private _currentFarmland?: Farmland = undefined;
    private _storageCapacity: number = 100;
    private _crops: number = 0;
    private _radius: number = 1;

    public constructor(x: number, y: number) {
        super(x, y);
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get crops(): number {
        return this._crops;
    }

    set crops(value: number) {
        this._crops = value;
    }
    get storageCapacity(): number {
        return this._storageCapacity;
    }

    set storageCapacity(value: number) {
        this._storageCapacity = value;
    }

    get currentFarmland(): Farmland | undefined {
        if(!this._currentFarmland) return undefined;
        return this._currentFarmland;
    }

    set currentFarmland(value: Farmland) {
        this._currentFarmland = value;
    }
}
