import {Matrix} from "../model/Matrix";
import {TickMachine} from "./TickMachine";
import {Field} from "../model/field/Field";

export class Game {

    private readonly _matrix: Matrix;
    private readonly _tickMachine: TickMachine;

    constructor() {
        this._matrix = new Matrix(20, 20);
        this._tickMachine = new TickMachine(this._matrix);
    }

    public place(field: Field){
        this._tickMachine.changeField(field);
    }

}
