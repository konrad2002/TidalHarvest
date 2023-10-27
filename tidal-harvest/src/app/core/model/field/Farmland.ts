import {Crop} from "./crop/Crop";
import {FarmlandState} from "./FarmlandState";
import {Field} from "./Field";

export class Farmland extends Field {

    private _state: FarmlandState = FarmlandState.EMPTY;
    private _progress: number = 0;
    private _fertility: number = 1;
    private _crop: Crop;

    public constructor(x: number, y: number) {
        super(x, y);
        this._crop = new Crop("cactus", 1);
    }

    get state(): FarmlandState {
        return this._state;
    }

    set state(value: FarmlandState) {
        this._state = value;
    }

    get progress(): number {
        return this._progress;
    }

    set progress(value: number) {
        this._progress = value;
    }

    get fertility(): number {
        return this._fertility;
    }

    set fertility(value: number) {
        this._fertility = value;
    }

    get crop(): Crop {
        return this._crop;
    }

    set crop(value: Crop) {
        this._crop = value;
    }


}
