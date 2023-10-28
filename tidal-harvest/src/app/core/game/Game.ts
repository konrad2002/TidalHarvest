import {Matrix} from "../model/Matrix";
import {TickMachine} from "./TickMachine";
import {Field} from "../model/field/Field";
import {FieldType} from "../model/field/FieldType";
import {Farmland} from "../model/field/farm/Farmland";
import {Farmer} from "../model/field/farm/Farmer";
import {Observable} from "rxjs";
import {WaterChannel} from "../model/field/water/WaterChannel";
import {Rock} from "../model/field/rock/Rock";
import {WaterSource} from "../model/field/water/WaterSource";
import {Silo} from "../model/field/farm/Silo";
import {CropKey} from "../model/field/farm/crop/CropKey";

export class Game {

    private readonly _matrix: Matrix;
    private readonly _tickMachine: TickMachine;

    constructor() {
        this._matrix = new Matrix(50, 50);
        this._tickMachine = new TickMachine(this._matrix);
    }

    public place(fieldType: FieldType, x: number, y: number) {
        let field: Field
        switch (fieldType) {
            case FieldType.FARMLAND:
                field = new Farmland(x, y);
                break;
            case FieldType.FARMER:
                field = new Farmer(x, y);
                break;
            case FieldType.ROCK:
                field = new Rock(x, y);
                break;
            case FieldType.WATER_CHANNEL:
                field = new WaterChannel(x, y);
                break;
            case FieldType.WATER_SOURCE:
                field = new WaterSource(x, y);
                break;
            case FieldType.SILO:
                field = new Silo(x, y, CropKey.WHEAT);
        }
        this._matrix.content[x][y] = field;
        this._tickMachine.tick.next(this._matrix);
        this._tickMachine.changeField(field);
    }

    public matrix(): Observable<Matrix> {
        return this._tickMachine.tick;
    }

}
