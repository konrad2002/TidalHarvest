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
        const currentFarmland = this._farmer.currentFarmland;

        switch (this._farmer.task) {
            case FarmerTask.NONE:
                const task = this.findNextTask(this.findRelevantFields(matrix));
                if (task === FarmerTask.NONE) return false;
                return this.tick(matrix);
            case FarmerTask.HARVESTING:
                this.executeTask(currentFarmland);
                return true;
            case FarmerTask.SEEDING:
                this.executeTask(currentFarmland);
                return true;

            case FarmerTask.REPAIRING:
                this._farmer.task = FarmerTask.NONE;
                return this.tick(matrix);
        }

        return false;
    }

    private executeTask(farmLand?: Farmland): void {
        if (farmLand === undefined) throw new Error();
        farmLand.progress++; // todo multiply farmer efficiency
        if (farmLand.progress >= farmLand.crop.requiredHarvestTicks) {
            farmLand.nextState();
            this._farmer.task = FarmerTask.NONE;
        }
    }


    private findNextTask(farmlands: Farmland[]): FarmerTask {
        for (let farmland of farmlands) {
            if (farmland.state === FarmlandState.HARVESTING) {
                this._farmer.task = FarmerTask.HARVESTING;
                this._farmer.currentFarmland = farmland;
                return FarmerTask.HARVESTING;
            }
        }
        for (let farmland of farmlands) {
            if (farmland.state == FarmlandState.EMPTY) {
                this._farmer.task = FarmerTask.SEEDING;
                this._farmer.currentFarmland = farmland;
                return FarmerTask.SEEDING;
            }
        }
        return FarmerTask.NONE;
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
