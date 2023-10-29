import {Matrix} from "../model/Matrix";
import {FieldType} from "../model/field/FieldType";
import {Farmland} from "../model/field/farm/Farmland";
import {Silo} from "../model/field/farm/Silo";
import {Field} from "../model/field/Field";
import {Farmer} from "../model/field/farm/Farmer";
import {SiloSelector} from "./SiloSelector";

export class CropCollector {

    private readonly siloSelector = new SiloSelector();

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
        this.siloSelector.findAllSilos(matrix)
            .forEach(value => {
                if (value.inDistance(x, y)) result.push(value);
            })

        return result;

    }

}
