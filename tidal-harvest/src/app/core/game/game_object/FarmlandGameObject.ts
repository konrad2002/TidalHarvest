import {GameObject} from "./GameObject";
import {Matrix} from "../../model/Matrix";
import {Farmland} from "../../model/field/farm/Farmland";
import {FarmlandState} from "../../model/field/farm/FarmlandState";
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
            this._farmland.applyWaterRules();
        }
        switch (this._farmland.state) {
            case FarmlandState.GROWING:
                // console.log("grow " + this._farmland.x + " " + this._farmland.y);
                if (this._farmland.humidity > 1) {
                    this._farmland.progress += 2 * this._farmland.fertility;
                } else if (this._farmland.humidity > 0.5) {
                    this._farmland.progress += this._farmland.fertility;
                } else {
                    this._farmland.progress += 0.3 * this._farmland.fertility;
                }
                if (this._farmland.crop === undefined) throw new Error();
                if (this._farmland.progress >= this._farmland.crop
                    .requiredTicks(this._farmland.state)) {
                    this._farmland.fertility = Math.max(1, this._farmland.fertility - 0.5);
                    console.log("reduced fertility, now " + this._farmland.fertility)
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
