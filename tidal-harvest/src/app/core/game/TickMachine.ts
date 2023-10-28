import {Matrix} from "../model/Matrix";
import {Subject} from "rxjs";
import {GameObject} from "./GameObject";
import {Field} from "../model/field/Field";
import {FieldType} from "../model/field/FieldType";
import {FarmlandGameObject} from "./FarmlandGameObject";
import {Farmland} from "../model/field/farm/Farmland";
import {FarmerGameObject} from "./FarmerGameObject";
import {Farmer} from "../model/field/farm/Farmer";
import {WaterChannel} from "../model/field/water/WaterChannel";

export class TickMachine {

    private readonly _matrix: Matrix;
    private _tick: Subject<Matrix> = new Subject<Matrix>();

    private _gameObjects: GameObject[][] = [];


    public constructor(matrix: Matrix) {
        this._matrix = matrix;

        for (let i = 0; i < matrix.content.length; i++) {
            this._gameObjects[i] = [];
        }

        this._matrix.content.forEach(outer => {
            outer.forEach(inner => {
                this.changeField(inner);
            });
        });

        let counter = 0;
        setInterval(() => {
            counter++;
            this._gameObjects.forEach(outer => {
                outer.forEach(inner => {
                    inner.tick(this._matrix, counter);
                });
            });
            this._tick.next(this._matrix);
        }, 500);
    }

    public changeField(field: Field) {

        this._gameObjects[field.x][field.y]?.invalidate();

        switch (field.fieldType) {
            case FieldType.FARMLAND:
                this._gameObjects[field.x][field.y] = new FarmlandGameObject(<Farmland>field);
                break;
            case FieldType.FARMER:
                this._gameObjects[field.x][field.y] = new FarmerGameObject(<Farmer>field);
                break;
            case FieldType.ROCK:
                break;
            case FieldType.WATER_CHANNEL:
                (<WaterChannel>field).updatePowered(this._matrix);
                (<WaterChannel>field).waterNeighbourFields(this._matrix);
                break;
            case FieldType.WATER_SOURCE:
                break;
        }
    }

    get tick(): Subject<Matrix> {
        return this._tick;
    }

}
