import {Matrix} from "../model/Matrix";
import {Subject} from "rxjs";
import {GameObject} from "./GameObject";

export class TickMachine {

    private readonly _matrix: Matrix;
    private _tick: Subject<Matrix> = new Subject<Matrix>();

    private _gameObjects: GameObject[] = [];


    public constructor(matrix: Matrix) {
        this._matrix = matrix;
        setInterval(() => {
            this._gameObjects.forEach(value => {
                value.tick(this._matrix);
            })
            this._tick.next(this._matrix)
        }, 1000)
    }

    add(gameObject: GameObject) {
        this._gameObjects.push(gameObject);
    }

    get tick(): Subject<Matrix> {
        return this._tick;
    }

}
