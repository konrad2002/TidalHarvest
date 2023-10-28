import {Field} from "../Field";
import {FieldType} from "../FieldType";
import {WaterEmitter} from "./WaterEmitter";

export class WaterSource extends Field implements WaterEmitter {

    public constructor(x: number, y: number) {
        super(FieldType.WATER_SOURCE, x, y);
    }

    public getRemainingStrength(distance: number): number {
        return Math.floor(10 / ((distance + 1)));
    }


}
