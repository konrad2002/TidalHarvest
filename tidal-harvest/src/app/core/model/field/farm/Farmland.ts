import {Crop} from "./Crop";
import {FarmlandState} from "./FarmlandState";
import {Field} from "../Field";
import {FieldType} from "../FieldType";

export class Farmland extends Field {

    private _state: FarmlandState = FarmlandState.EMPTY;
    private _progress: number = 0;
    private _fertility: number = 1;
    private _humidity: number = 1;
    private _watered: boolean = false;
    private _crop: Crop;

    public constructor(x: number, y: number) {
        super(FieldType.FARMLAND, x, y);
        this._crop = new Crop("cactus", 1,
            18, 47, 11);
    }

    public calcProgress(): number{
        const requiredTicks = this.crop.requiredTicks(this.state);
        if(requiredTicks == 0) return 0;
        return Math.floor(100 * this._progress / requiredTicks);
    }

    public getFlooredHumidity(): number {
        return Math.floor(this.humidity * 100)
    }

    public nextState(): FarmlandState {
        const nextState = this.findNextState();
        this.progress = 0;
        this._state = nextState;
        return nextState;
    }

    private findNextState(): FarmlandState {
        switch (this.state) {
            case FarmlandState.EMPTY:
                return FarmlandState.PLANTING;
            case FarmlandState.PLANTING:
                return FarmlandState.GROWING;
            case FarmlandState.GROWING:
                return FarmlandState.HARVESTING;
            case FarmlandState.HARVESTING:
                return FarmlandState.EMPTY;
        }
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

    get humidity(): number {
        return this._humidity;
    }

    set humidity(value: number) {
        this._humidity = value;
    }

    get watered(): boolean {
        return this._watered;
    }

    set watered(value: boolean) {
        this._watered = value;
    }

}