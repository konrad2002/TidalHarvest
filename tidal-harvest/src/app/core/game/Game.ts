import {Matrix} from "../model/Matrix";
import {TickMachine} from "./TickMachine";
import {Field} from "../model/field/Field";
import {FieldType} from "../model/field/FieldType";
import {Farmland} from "../model/field/Farmland";
import {Farmer} from "../model/field/Farmer";

export class Game {

    private readonly _matrix: Matrix;
    private readonly _tickMachine: TickMachine;

    constructor() {
        this._matrix = new Matrix(20, 20);
        this._tickMachine = new TickMachine(this._matrix);
    }

    public place(fieldType: FieldType, x: number, y: number){
        let field: Field;
        switch (fieldType) {
            case FieldType.FARMLAND:
                field = new Farmland(x, y);
                break;
            case FieldType.FARMER:
                field = new Farmer(x, y);
                break;
            case FieldType.ROCK:
                throw new Error();
                break;
        }
        this._tickMachine.changeField(field);
    }

}
