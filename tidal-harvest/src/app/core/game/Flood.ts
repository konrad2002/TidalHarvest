import {Matrix} from "../model/Matrix";
import {Field} from "../model/field/Field";
import {FieldType} from "../model/field/FieldType";
import {Silo} from "../model/field/farm/Silo";
import {Farmer} from "../model/field/farm/Farmer";
import {Farmland} from "../model/field/farm/Farmland";
import {GameObject} from "./GameObject";
import {FarmerGameObject} from "./FarmerGameObject";

export class Flood {

    private readonly _matrix: Matrix;
    private readonly _gameObjects: GameObject[][];

    public constructor(matrix: Matrix, gameObjects: GameObject[][]) {
        this._matrix = matrix;
        this._gameObjects = gameObjects;
    }

    private damageBuildingsAndWaterFarmlands(field: Field) {
        if (field.fieldType === FieldType.SILO) {
            const silo: Silo = field as Silo;
            console.log("silo pre: " + silo.current)
            silo.current = silo.current * 0.6;
            console.log("silo after: " + silo.current)
        }
        if (field.fieldType === FieldType.FARMER) {
            const farmer: Farmer = field as Farmer;
            console.log("farmer pre: " + farmer.crops)
            farmer.crops = farmer.crops * 0.2;
            console.log("farmer after: " + farmer.crops)

            console.log("making farmer idle")
            const gameObject = this._gameObjects[field.x][field.y];
            const farmerGameObject: FarmerGameObject = gameObject as FarmerGameObject;
            farmerGameObject.inactivateFarmer();
        }

        if (field.fieldType === FieldType.FARMLAND) {
            const farmLand: Farmland = field as Farmland;
            console.log("farmland pre: humidity " + farmLand.humidity + " fertility " + farmLand.fertility)
            farmLand.humidity = 3;
            farmLand.fertility = 2;
            console.log("farmland after: humidity " + farmLand.humidity + " fertility " + farmLand.fertility)
            farmLand.resetField();
        }
    }

    public flood(): boolean[][] {
        const result: boolean[][] = []
        for (let i = 0; i < this._matrix.x; i++) {
            result[i] = [];
            const reach = this.reach(i);
            console.log("reach for column " + i + " is " + reach);
            for (let j = 0; j < reach; j++) {
                result[i][j] = true;
                const field: Field = this._matrix.content[i][j];
                this.damageBuildingsAndWaterFarmlands(field);
            }
        }

        return result;
    }

    private reach(current: number): number {
        return Math.floor(9 * Math.abs(Math.sin(current + Math.random()))) + 1;
    }
}
