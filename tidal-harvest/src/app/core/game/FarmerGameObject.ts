import {GameObject} from "./GameObject";
import {Matrix} from "../model/Matrix";
import {Farmer} from "../model/field/farm/Farmer";
import {FarmerTask} from "../model/field/farm/FarmerTask";
import {Farmland} from "../model/field/farm/Farmland";
import {FarmlandState} from "../model/field/farm/FarmlandState";

export class FarmerGameObject implements GameObject {
    private readonly _farmer: Farmer;
    private _invalidated: boolean = false;

    public constructor(farmer: Farmer) {
        this._farmer = farmer;
    }

    public tick(matrix: Matrix, tick: number): boolean {
        if (this._invalidated || this._farmer.blocked) return false;

        if (this._farmer.crops >= this._farmer.storageCapacity) {
            this._farmer.blocked = true;
            return false;
        }

        const currentFarmland = this._farmer.currentFarmland;

        switch (this._farmer.task) {
            case FarmerTask.NONE:
                // console.log("finding next task for farmer at " + this._farmer.x + " " + this._farmer.y)
                const task = this.findNextTask(this.shuffle(
                    this.findRelevantFields(matrix)));
                // console.log("new task " + task.toString());
                if (task === FarmerTask.NONE) return false;
                return this.tick(matrix, tick);
            case FarmerTask.HARVESTING:
                if (currentFarmland?.state !== FarmlandState.HARVESTING) {
                    this.inactivateFarmer();
                    return this.tick(matrix, tick);
                }
                this.executeTask(currentFarmland);
                this.collectCrop();
                return true;
            case FarmerTask.PLANTING:
                if (currentFarmland?.state === FarmlandState.EMPTY) {
                    currentFarmland.nextState();
                }
                if (currentFarmland?.state !== FarmlandState.PLANTING) {
                    this.inactivateFarmer();
                    return this.tick(matrix, tick);
                }
                this.executeTask(currentFarmland);
                return true;

            case FarmerTask.REPAIRING:
                this.inactivateFarmer();
                return this.tick(matrix, tick);
        }

    }

    private inactivateFarmer() {
        this._farmer.task = FarmerTask.NONE;
        this._farmer.clearCurrentFarmland();
    }

    private collectCrop() {
        if (this._farmer.crops >= this._farmer.storageCapacity) return;
        this._farmer.crops++;
    }

    private shuffle(array: Farmland[]): Farmland[] {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    private executeTask(farmLand?: Farmland): void {
        if (farmLand === undefined) throw new Error();
        // console.log("executing task " + farmLand.state.toString() + " at " + farmLand.x + " " + farmLand.y);
        if (!farmLand.crop) farmLand.crop = this._farmer.crop;
        if (farmLand.progress >= farmLand.crop.requiredTicks(farmLand.state)) {
            // console.log("switching " + farmLand.x + " " + farmLand.y + "to next state");
            farmLand.nextState();
            this.inactivateFarmer();
            return;
        }
        farmLand.progress += 1; // todo multiply farmer efficiency

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
            if (farmland.state === FarmlandState.PLANTING) {
                this._farmer.task = FarmerTask.PLANTING;
                this._farmer.currentFarmland = farmland;
                return FarmerTask.PLANTING;

            }
        }
        for (let farmland of farmlands) {
            if (farmland.state == FarmlandState.EMPTY) {
                this._farmer.task = FarmerTask.PLANTING;
                this._farmer.currentFarmland = farmland;
                return FarmerTask.PLANTING;
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
        // console.log("relevant neighbouring fields found: " + fields.length);
        return fields;
    }

    invalidate(): void {
        this._invalidated = true;
    }

}
