import {Field} from "../Field";
import {FieldType} from "../FieldType";
import {Matrix} from "../../Matrix";
import {Farmland} from "../farm/Farmland";

export class WaterChannel extends Field {

    private _powered: boolean = false;
    private readonly _range = 1;

    public constructor(x: number, y: number) {
        super(FieldType.WATER_CHANNEL, x, y);
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
        console.log("check if water channel is powered")
        const result = this.calcIsPowered(matrix);
        console.log("result " + result)
        this.powered = result;
        console.log("result " + this.powered)
    }

    private calcIsPowered(matrix: Matrix): boolean {
        if (this.isWaterSource(matrix, this.x - 1, this.y)) return true;
        if (this.isWaterSource(matrix, this.x + 1, this.y)) return true;
        if (this.isWaterSource(matrix, this.x, this.y - 1)) return true;
        if (this.isWaterSource(matrix, this.x, this.y + 1)) return true;
        return false;
    }

    private isWaterSource(matrix: Matrix, x: number, y: number): boolean {
        console.log("checking if " + x + " " + y + " is water powered")
        if (y < 0) return true // hacky
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
            for (let i = Math.max(0, this.x - this.range);
                 i <= Math.min(this.x + this.range, matrix.x); i++) {
                for (let j = Math.max(0, this.y - this.range);
                     j <= Math.min(this.y + this.range, matrix.y); j++) {
                    console.log("checking if " + i + " " + j + " is watered now")
                    const field = matrix.content[i][j];
                    if (field?.fieldType === FieldType.FARMLAND) {
                        const farmLand = field as Farmland;
                        farmLand.watered = true;
                        console.log("yes")
                    }
                    if(field?.fieldType === FieldType.WATER_CHANNEL){
                        const waterChannel = field as WaterChannel;
                        if(!waterChannel.powered){
                            waterChannel.updatePowered(matrix);
                            waterChannel.waterNeighbourFields(matrix);
                        }
                    }
                }
            }
    }


}
