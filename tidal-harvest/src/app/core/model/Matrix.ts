import {Field} from "./field/Field";
import {Farmland} from "./field/Farmland";

export class Matrix {

    private _content: Field[][] = [];

    public constructor(x: number, y: number) {
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                this._content[i][j] = new Farmland(i, j);
            }
        }
    }

    get content(): Field[][] {
        return this._content;
    }

}
