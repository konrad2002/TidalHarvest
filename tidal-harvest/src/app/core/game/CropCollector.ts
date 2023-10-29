import {Matrix} from "../model/Matrix";
import {FieldType} from "../model/field/FieldType";
import {Farmland} from "../model/field/farm/Farmland";
import {Silo} from "../model/field/farm/Silo";
import {Field} from "../model/field/Field";
import {Farmer} from "../model/field/farm/Farmer";

export class CropCollector {

    public collect(x: number, y: number, matrix: Matrix) {

        const field = matrix.content[x][y];
        console.log("collect at field " + x + " " + y)
        if (field.fieldType !== FieldType.FARMER) return;

        const farmer: Farmer = field as Farmer;
        console.log("field is farmer")
        const crop = farmer.crop;
        console.log("crop " + crop.cropKey)
        if (!crop) {
            console.log("crop is undefined, why try to collect??")
            return;
        }

        const cropKey = crop.cropKey;
        console.log("trying to collect farmer")
        for (let silo of this.findAllReachableSilos(x, y, matrix)) {
            console.log("evaluating " + silo.x + " " + silo.y)
            if (silo.cropKey !== cropKey) continue;
            console.log("moving crops in silo")
            if (silo.current + farmer.crops > silo.max) {
                farmer.crops = farmer.crops - (silo.max - silo.current);
                silo.current = silo.max;
            } else {
                silo.current = silo.current + farmer.crops;
                farmer.crops = 0;
                return;
            }
        }

    }

    private findAllReachableSilos(x: number, y: number, matrix: Matrix): Silo[] {
        const result: Silo[] = [];
        for (let i = 0; i < matrix.x; i++) {
            for (let j = 0; j < matrix.y; j++) {
                const field: Field = matrix.content[i][j];
                if (field.fieldType === FieldType.SILO) {
                    const silo: Silo = field as Silo;
                    if (silo.inDistance(x, y)) result.push(silo);
                }
            }
        }

        return result;

    }

}
