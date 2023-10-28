import {Field} from "../Field";
import {FieldType} from "../FieldType";
import {Matrix} from "../../Matrix";
import {Farmland} from "../farm/Farmland";

export class WaterChannel extends Field {

    private _powered: boolean = false;
    private readonly _range = 1;

    public constructor(x: number, y: number) {
        super(FieldType.WATER, x, y);
    }

    get powered(): boolean {
        return this._powered;
    }

    set powered(value: boolean) {
        this._powered = value;
    }

    get range(): number {
        return this._range;
    }

    public updatePowered(matrix: Matrix) {
        this.powered = this.calcIsPowered(matrix);
    }

    private calcIsPowered(matrix: Matrix): boolean {
        if (this.isWaterSource(matrix, this.x - 1, this.y - 1)) return true;
        if (this.isWaterSource(matrix, this.x + 1, this.y - 1)) return true;
        if (this.isWaterSource(matrix, this.x - 1, this.y + 1)) return true;
        if (this.isWaterSource(matrix, this.x + 1, this.y + 1)) return true;
        return false;
    }

    private isWaterSource(matrix: Matrix, x: number, y: number): boolean {
        if (x <= 0) return true // hacky
        if (x >= 0 && x < matrix.x && y >= 0 && y < matrix.y) {
            const field = matrix.content[x][y];
            if (field instanceof WaterChannel) {
                if (field.powered) return true;
            }
        }
        return false;
    }

    public waterNeighbourFields(matrix: Matrix) {
        if (this.powered)
            for (let i = this.x - this.range; i < this.x + this.range; i++) {
                if (i < 0 || i >= matrix.x) continue;
                for (let j = this.y - this.range; j < this.y + this.range; j++) {
                    if (j < 0 || j >= matrix.y) continue;
                    const field = matrix.content[i][j];
                    if (field?.fieldType === FieldType.FARMLAND) {
                        const farmLand = field as Farmland;
                        farmLand.watered = true;
                    }
                }
            }
    }


}
