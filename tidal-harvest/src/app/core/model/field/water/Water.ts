import {Field} from "../Field";
import {FieldType} from "../FieldType";

export class Water extends Field {

    public constructor(x: number, y: number) {
        super(FieldType.WATER, x, y);
    }

}
