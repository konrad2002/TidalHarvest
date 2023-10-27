import {GameObject} from "./GameObject";
import {Matrix} from "../model/Matrix";
import {Farmland} from "../model/field/Farmland";
import {FarmlandState} from "../model/field/FarmlandState";

export class FarmlandGameObject implements GameObject {

    private _farmland: Farmland;

    public constructor(farmland: Farmland) {
        this._farmland = farmland;
    }

    tick(matrix: Matrix): boolean {
        switch (this._farmland.state) {
            case FarmlandState.GROWING:
                console.log("grow " + this._farmland.x + " " + this._farmland.y);
                this._farmland.progress++;
                if(this._farmland.progress >= this._farmland.crop.requiredGrowthTicks){
                    this._farmland.nextState();
                }
                return true;
        }

        return false;
    }

}
