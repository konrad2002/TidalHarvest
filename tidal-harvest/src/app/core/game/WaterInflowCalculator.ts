import {Matrix} from "../model/Matrix";
import {FieldType} from "../model/field/FieldType";
import {Farmland} from "../model/field/farm/Farmland";
import {WaterEmitter} from "../model/field/water/WaterEmitter";

export class WaterInflowCalculator {


    public updateWaterInflow(matrix: Matrix, waterEmitter: WaterEmitter, x: number, y: number) {
        for (let i = 0; i < matrix.x; i++) {
            for (let j = 0; j < matrix.y; j++) {
                const field = matrix.content[i][j];
                if (!field) continue;
                if (field.fieldType === FieldType.FARMLAND) {
                    const farmLand: Farmland = field as Farmland;
                    farmLand.waterInflow += waterEmitter.getRemainingStrength(
                        this.calcDistance(i, j, x, y));
                }
            }
        }
    }

    private calcDistance(a: number, b: number, x: number, y: number): number {
        return Math.sqrt(Math.pow(x - a, 2) + Math.pow(y - b, 2));
    }

}
