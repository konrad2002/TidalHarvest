import {Field} from "../Field";
import {FieldType} from "../FieldType";

export class Rock extends Field {

    public constructor(x: number, y: number) {
        super(FieldType.ROCK, x, y);
    }

}
