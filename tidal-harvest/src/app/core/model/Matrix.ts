import {Field} from "./field/Field";
import {Farmland} from "./field/farm/Farmland";
import {Rock} from "./field/rock/Rock";
import {FieldType} from "./field/FieldType";
import {WaterSource} from "./field/water/WaterSource";
import {CropKey} from "./field/farm/crop/CropKey";
import {Silo} from "./field/farm/Silo";

export class Matrix {

    private readonly _content: Field[][] = [];
    private readonly _x: number;
    private readonly _y: number;

    public constructor(x: number, y: number) {
        this._x = x;
        this._y = y;

        this._content = this.generateField(x, y);
    }

    private generateField(x: number, y: number): Field[][] {

        let content: Field[][] = [];

        for (let i = 0; i < x; i++) {
            content[i] = [];
            for (let j = 0; j < y; j++) {
                content[i][j] = new Farmland(i, j);
            }
        }

        const rockSeeds = 0.04;

        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                if (Math.random() <= rockSeeds) {
                    content[i][j] = new Rock(i, j);
                }
            }
        }

        const rockGrowth = 0.1;

        // lets not talk about this pls
        for (let iterations = 0; iterations < 3; iterations++) {
            for (let i = 0; i < x; i++) {
                for (let j = 0; j < y; j++) {

                    if (content[i][j].fieldType !== FieldType.ROCK) continue;

                    if (Math.random() <= rockGrowth) {
                        const nextI = i - 1
                        if (nextI >= 0 && nextI < x) {
                            content[nextI][j] = new Rock(nextI, j);
                        }
                    }
                    if (Math.random() <= rockGrowth) {
                        const nextI = i + 1
                        if (nextI >= 0 && nextI < x) {
                            content[nextI][j] = new Rock(nextI, j);
                        }
                    }
                    if (Math.random() <= rockGrowth) {
                        const nextJ = i - 1
                        if (nextJ >= 0 && nextJ < y) {
                            content[i][nextJ] = new Rock(i, nextJ);
                        }
                    }
                    if (Math.random() <= rockGrowth) {
                        const nextJ = i - 1
                        if (nextJ >= 0 && nextJ < y) {
                            content[i][nextJ] = new Rock(i, nextJ);
                        }
                    }
                }
            }
        }

        for (let i = 0; i < content.length; i++) {
            content[i][0] = new WaterSource(i, 0);
        }

        return content;
    }

    public countCrops(): Map<CropKey, number[]> {

        let crops: Map<CropKey, number[]> = new Map<CropKey, number[]>();

        this.content.forEach(outer => {
            outer.forEach(inner => {
                if (inner.fieldType === FieldType.SILO) {
                    const silo: Silo = inner as Silo;
                    const cropKey = silo.cropKey;
                    const current = silo.current;
                    const max = silo.max;


                    const existing = crops.get(cropKey);
                    if (!existing) {
                        crops.set(cropKey, [current, max]);
                    } else {
                        existing[0] += current;
                        existing[1] += max;
                        crops.set(cropKey, existing);
                    }
                }
            })
        })

        return crops;
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
