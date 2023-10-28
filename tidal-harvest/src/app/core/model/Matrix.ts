import {Field} from "./field/Field";
import {Farmland} from "./field/farm/Farmland";

export class Matrix {

    private _content: Field[][] = [];
    private readonly _x: number;
    private readonly _y: number;

    public constructor(x: number, y: number) {
        this._x = x;
        this._y = y;

        for (let i = 0; i < x; i++) {
            this._content[i] = [];
            for (let j = 0; j < y; j++) {
                this._content[i][j] = new Farmland(i, j);
            }
        }
    }

    get content(): Field[][] {
        return this._content;
    }


    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }
}
