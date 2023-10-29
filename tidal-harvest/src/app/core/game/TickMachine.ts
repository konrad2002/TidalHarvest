import {Matrix} from "../model/Matrix";
import {Subject} from "rxjs";
import {GameObject} from "./GameObject";
import {Field} from "../model/field/Field";
import {FieldType} from "../model/field/FieldType";
import {FarmlandGameObject} from "./FarmlandGameObject";
import {Farmland} from "../model/field/farm/Farmland";
import {FarmerGameObject} from "./FarmerGameObject";
import {Farmer} from "../model/field/farm/Farmer";
import {WaterChannel} from "../model/field/water/WaterChannel";
import {WaterInflowCalculator} from "./WaterInflowCalculator";
import {WaterEmitter} from "../model/field/water/WaterEmitter";
import {CropKey} from "../model/field/farm/crop/CropKey";
import {Crop} from "../model/field/farm/crop/Crop";
import {Silo} from "../model/field/farm/Silo";
import {Flood} from "./Flood";
import {CropAmount} from "../model/economy/CropAmount";

export class TickMachine {

    private readonly _matrix: Matrix;
    private _tick: Subject<Matrix> = new Subject<Matrix>();
    private _flood: Subject<boolean[][]> = new Subject<boolean[][]>();
    private _globalCrops: Subject<Map<CropKey, number>> = new Subject<Map<CropKey, number>>();

    private _gameObjects: GameObject[][] = [];


    public constructor(matrix: Matrix) {
        this._matrix = matrix;

        for (let i = 0; i < matrix.content.length; i++) {
            this._gameObjects[i] = [];
        }

        this._matrix.content.forEach(outer => {
            outer.forEach(inner => {
                this.changeField(inner);
            });
        });

        let counter = 0;
        setInterval(() => {
            counter++;
            this._gameObjects.forEach(outer => {
                outer.forEach(inner => {
                    inner.tick(this._matrix, counter);
                });
            });
            this._tick.next(this._matrix);
            this._globalCrops.next(this.countCrops()); // probably calls #countCrops way too often (no time to fix)
            if (counter % 60 === 0) {
                this._flood.next(new Flood(this._matrix, this._gameObjects).flood())
            }
        }, 1000);
    }

    private countCrops(): Map<CropKey, number> {

        let crops: Map<CropKey, number> = new Map<CropKey, number>();

        this._matrix.content.forEach(outer => {
            outer.forEach(inner => {
                if (inner.fieldType === FieldType.SILO) {
                    const silo: Silo = inner as Silo;
                    const cropKey = silo.cropKey;
                    const current = silo.current;


                    const existing = crops.get(cropKey);
                    if (!existing) {
                        crops.set(cropKey, current);
                    } else {
                        crops.set(cropKey, current + existing);
                    }
                }
            })
        })

        return crops;
    }

    public changeField(field: Field) {

        this._gameObjects[field.x][field.y]?.invalidate();
        const waterInflowCalculator = new WaterInflowCalculator();
        switch (field.fieldType) {
            case FieldType.FARMLAND:
                this._gameObjects[field.x][field.y] = new FarmlandGameObject(<Farmland>field);
                return;
            case FieldType.FARMER:
                this._gameObjects[field.x][field.y] = new FarmerGameObject(<Farmer>field);
                return;
            case FieldType.ROCK:
                return;
            case FieldType.WATER_CHANNEL:
                (<WaterChannel>field).updatePowered(this._matrix);
                (<WaterChannel>field).powerNeighbourFields(this._matrix);
                return;
            case FieldType.WATER_SOURCE:
                const waterSource: WaterEmitter = field as unknown as WaterEmitter;
                waterInflowCalculator.updateWaterInflow(this._matrix, waterSource, field.x, field.y)
                return;
        }
    }

    public changeCrop(cropKey: CropKey, field: Field) {
        switch (field.fieldType) {
            case FieldType.FARMLAND:
                new Error("crop change not supported for this field")
                break;
            case FieldType.FARMER:
                const farmer: Farmer = field as Farmer;
                farmer.crop = Crop.parse(cropKey);
                break;
            case FieldType.ROCK:
                new Error("crop change not supported for this field")
                break;
            case FieldType.WATER_SOURCE:
                new Error("crop change not supported for this field")
                break;
            case FieldType.WATER_CHANNEL:
                new Error("crop change not supported for this field")
                break;
            case FieldType.SILO:
                new Error("crop change not supported for this field")
                break;
        }
    }

    get tick(): Subject<Matrix> {
        return this._tick;
    }

    get flood(): Subject<boolean[][]> {
        return this._flood;
    }

    get globalCrops(): Subject<Map<CropKey, number>> {
        return this._globalCrops;
    }


}
