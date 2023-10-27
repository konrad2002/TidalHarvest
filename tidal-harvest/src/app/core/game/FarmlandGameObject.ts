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
        console.log(this._farmland.state)
        switch (this._farmland.state) {
            case FarmlandState.GROWING:
                console.log("grow " + this._farmland.x + " " + this._farmland.y);
                this._farmland.progress++;
                return true;
        }

        return false;
    }

}
