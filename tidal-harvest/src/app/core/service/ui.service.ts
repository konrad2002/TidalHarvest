import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";
import {Matrix} from "../model/Matrix";
import {FieldType} from "../model/field/FieldType";
import {Game} from "../game/Game";
import {CropKey} from "../model/field/farm/crop/CropKey";

@Injectable({
  providedIn: 'root'
})
export class UiService {

    game: Game = new Game();

    flood: ReplaySubject<boolean[][]> = new ReplaySubject<boolean[][]>();
    floodMatrix: boolean[][] = [];

    constructor() {
        for (let i = 0; i < 50; i++) {
            this.floodMatrix[i] = []
            for (let j = 0; j < 50; j++) {
                this.floodMatrix[i][j] = true;
            }
        }
    }

    public getMatrix(): Observable<Matrix> {
        return this.game.matrix();
    }

    public place(type: FieldType, x: number, y: number) {
        this.game.place(type, x, y);
    }

    public placeWithCropType(field: FieldType, crop: CropKey, x: number, y: number) {
        this.game.placeWithCropType(field, crop, x, y);
    }

    public selectCropType(type: CropKey, x: number, y: number) {
        this.game.selectCrop(type, x, y);
    }

    public getFloodMatrix(): Observable<boolean[][]> {
        return this.game.flood();
    }

    public triggerFlood(): void {
        this.flood.next(this.floodMatrix)
    }

    public collectCrops(x: number, y: number) {
        this.game.collectCrops(x, y);
    }

    public cropCount(): Observable<Map<CropKey, number[]>>{
        return this.game.cropCount();
    }


}
