import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Matrix} from "../model/Matrix";
import {FieldType} from "../model/field/FieldType";
import {Game} from "../game/Game";
import {CropKey} from "../model/field/farm/crop/CropKey";
import {CropOffer} from "../model/economy/CropOffer";
import {BuildingOffer} from "../model/economy/BuildingOffer";

@Injectable({
    providedIn: 'root'
})
export class UiService {

    game: Game = new Game();

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

    public collectCrops(x: number, y: number) {
        this.game.collectCrops(x, y);
    }

    public cropCount(): Observable<Map<CropKey, number[]>> {
        return this.game.cropCount();
    }

    public unlockCrop(offer: CropOffer) {
        this.game.unlockCrop(offer);
    }

    public buyBuilding(offer: BuildingOffer) {
        this.game.buyBuilding(offer);
    }

    public cropUnlockOffers(): CropOffer[] {
        return this.game.getCropUnlockOffers();
    }

    public unlockedCrops(): Observable<CropKey[]> {
        return this.game.cropUnlockedRegistry.subject;
    }

    public buildingOffers(): Observable<BuildingOffer[]> {
        return this.game.getBuildingOffers();
    }


}
