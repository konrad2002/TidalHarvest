import {GameObject} from "./GameObject";
import {Matrix} from "../model/Matrix";
import {Farmland} from "../model/field/farm/Farmland";
import {FarmlandState} from "../model/field/farm/FarmlandState";
import {tick} from "@angular/core/testing";

export class FarmlandGameObject implements GameObject {

    private _farmland: Farmland;
    private _invalidated: boolean = false;

    public constructor(farmland: Farmland) {
        this._farmland = farmland;
    }

    tick(matrix: Matrix, tick: number): boolean {
        if (this._invalidated) return false;
        if (tick % (Math.floor(Math.random() * 10) + 5) === 0) {
            if (!this._farmland.watered) {
                this._farmland.humidity -= Math.random() *0.1;
            }
            if (this._farmland.watered) {
                this._farmland.humidity = Math.min(3, this._farmland.humidity + 0.05);
            }
        }
        switch (this._farmland.state) {
            case FarmlandState.GROWING:
                // console.log("grow " + this._farmland.x + " " + this._farmland.y);
                this._farmland.progress += Math.min(Math.max(1,
                        Math.floor(this._farmland.humidity)), 2)
                    * this._farmland.fertility;
                if (this._farmland.progress >= this._farmland.crop.requiredTicks(this._farmland.state)) {
                    this._farmland.nextState();
                }
                return true;
        }


        return false;
    }

    invalidate(): void {
        this._invalidated = true;
    }

}
