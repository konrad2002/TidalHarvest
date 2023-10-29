import {Matrix} from "../model/Matrix";
import {Silo} from "../model/field/farm/Silo";
import {Field} from "../model/field/Field";
import {FieldType} from "../model/field/FieldType";

export class SiloSelector {
    public findAllSilos(matrix: Matrix): Silo[] {
        const result: Silo[] = [];
        for (let i = 0; i < matrix.x; i++) {
            for (let j = 0; j < matrix.y; j++) {
                const field: Field = matrix.content[i][j];
                if (field.fieldType === FieldType.SILO) {
                    const silo: Silo = field as Silo;
                    result.push(silo)
                }
            }
        }

        return result;
    }
}
