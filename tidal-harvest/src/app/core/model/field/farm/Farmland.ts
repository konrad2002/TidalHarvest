import {FarmlandState} from "./FarmlandState";
import {Field} from "../Field";
import {FieldType} from "../FieldType";
import {Crop} from "./crop/Crop";

export class Farmland extends Field {

    private _state: FarmlandState = FarmlandState.EMPTY;
    private _progress: number = 0;
    private _fertility: number = 1;
    private _humidity: number = 1;
    private _waterInflow: number = 0;
    private _waterDrought: number = 0.05; //Math.random() * 0.1;
    private _crop?: Crop = undefined;

    public constructor(x: number, y: number) {
        super(FieldType.FARMLAND, x, y);
    }

    public calcProgress(): number {
        const requiredTicks = this._crop?.requiredTicks(this.state);
        if (!requiredTicks) return 0;
        if (requiredTicks == 0) return 0;
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

    public resetField() {
        this._state = FarmlandState.EMPTY;
        this.progress = 0;
        this.crop = undefined;
        console.log("resetting farmland " + this.x + " " + this.y)
    }

    public applyWaterRules(): void {

        const waterChange = this.humidity
            - this._waterDrought + this._waterInflow;
        // console.log("water change at " + this.x + " " + this.y + " is " + waterChange);
        this.humidity = Math.max(0, Math.min(waterChange, 3));

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

    get humidity(): number {
        return this._humidity;
    }

    set humidity(value: number) {
        this._humidity = value;
    }

    get waterInflow(): number {
        return this._waterInflow;
    }

    set waterInflow(value: number) {
        this._waterInflow = value;
    }

    get crop(): Crop | undefined {
        return this._crop;
    }

    set crop(value: Crop | undefined) {
        this._crop = value;
    }


}
