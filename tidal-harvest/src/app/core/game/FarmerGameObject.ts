import {GameObject} from "./GameObject";
import {Matrix} from "../model/Matrix";
import {Farmer} from "../model/field/Farmer";
import {FarmerTask} from "../model/field/FarmerTask";
import {Farmland} from "../model/field/Farmland";
import {FarmlandState} from "../model/field/FarmlandState";

export class FarmerGameObject implements GameObject {

    private readonly _farmer: Farmer;

    public constructor(farmer: Farmer) {
        this._farmer = farmer;
    }

    public tick(matrix: Matrix): boolean {

        switch (this._farmer.task) {
            case FarmerTask.NONE:
                this.findNextTask(this.findRelevantFields(matrix));
                return this.tick(matrix);
            case FarmerTask.HARVESTING:
                const currentFarmland = this._farmer.currentFarmland;
                if (currentFarmland === undefined) throw new Error();
                if (currentFarmland.state !== FarmlandState.HARVESTING) {
                    currentFarmland.state = FarmlandState.HARVESTING;
                }
                currentFarmland.progress++;
        }

        return false;
    }


    private findNextTask(farmlands: Farmland[]) {
        for (let farmland of farmlands) {
            if (farmland.state === FarmlandState.HARVESTING) {
                this._farmer.task = FarmerTask.HARVESTING;
                this._farmer.currentFarmland = farmland;
                return;
            }
        }
        for (let farmland of farmlands) {
            if (farmland.state == FarmlandState.EMPTY) {
                this._farmer.task = FarmerTask.SEEDING;
                this._farmer.currentFarmland = farmland;
                return;
            }
        }
    }

    private findRelevantFields(matrix: Matrix): Farmland[] {
        const fields: Farmland[] = []
        let x = this._farmer.x;
        let y = this._farmer.y;

        for (let i = x - this._farmer.radius; i <= x + this._farmer.radius; i++) {
            if (i < 0 || i > matrix.content.length) continue;
            for (let j = y - this._farmer.radius; j <= y + this._farmer.radius; j++) {
                if (j < 0 || j > matrix.content[i].length) continue;

                let field = matrix.content[i][j];
                if (!(field instanceof Farmland)) continue;
                fields.push(field);
            }
        }

        return fields;
    }

}
