import {Injectable} from '@angular/core';
import {map, Observable, Subject} from "rxjs";
import {Matrix} from "../model/Matrix";
import {FieldType} from "../model/field/FieldType";
import {CropKey} from "../model/field/farm/crop/CropKey";
import {CropOffer} from "../model/economy/CropOffer";
import {BuildingOffer} from "../model/economy/BuildingOffer";
import {RxStompService} from "./rx-stomp.service";
import {GameDto} from "../model/dto/GameDto";
import {MatrixDto} from "../model/dto/MatrixDto";
import {BuildingType} from "../model/field/BuildingType";

@Injectable({
    providedIn: 'root'
})
export class UiService {

    private readonly matrix: Subject<Matrix> = new Subject<Matrix>();

    constructor(private rxStompService: RxStompService) {

        rxStompService.watch("/topic/game/created/")
            .pipe(map(data => {
                const parse = JSON.parse(data.body);
                return parse as GameDto;
            }))
            .subscribe(value => {
                console.log(value);
                console.log(value.id);
                console.log(value.timeSinceStart);
                this.matrix.next(new Matrix(value.board));
            });

        this.rxStompService.watch("topic/game/board/")
            .pipe(map(value => {
                const parse = JSON.parse(value.body);
                return parse as MatrixDto;
            })).subscribe(value => this.matrix.next(new Matrix(value)));

        // kickstart game cycle
        this.publish("/game/admin/create/", "");

    }


    public getMatrix(): Observable<Matrix> {
        return this.matrix;
    }

    public place(buildingType: BuildingType, x: number, y: number) {
        console.log(buildingType, x, y);
        const body = JSON.stringify({buildingType, x, y});
        this.publish("/game/action/place/", body);
        // this.game.place(fieldType, x, y);
    }

    public placeWithCropType(buildingType: BuildingType, crop: CropKey, x: number, y: number) {
        const body = JSON.stringify({buildingType, crop, x, y});
        this.publish("/game/action/place/crop/", body);
        // this.game.placeWithCropType(fieldType, crop, x, y);
    }

    public selectCropType(type: CropKey, x: number, y: number) {
        const body = JSON.stringify({type, x, y});
        this.publish("/game/action/select/crop/", body);
        // this.game.selectCrop(type, x, y);
    }

    public getFloodMatrix(): Observable<boolean[][]> {
        return new Observable();
    }

    public collectCrops(x: number, y: number) {

        // this.game.collectCrops(x, y);
    }

    public cropCount(): Observable<Map<CropKey, number[]>> {
        return new Observable();
    }

    public unlockCrop(offer: CropOffer) {
        // this.game.unlockCrop(offer);
    }

    public buyBuilding(offer: BuildingOffer) {
        // this.game.buyBuilding(offer);
    }

    public cropUnlockOffers(): CropOffer[] {
        // return this.game.getCropUnlockOffers();
        return new Array<CropOffer>();
    }

    public unlockedCrops(): Observable<CropKey[]> {
        // return this.game.cropUnlockedRegistry.subject;
        return new Observable();
    }

    public buildingOffers(): Observable<BuildingOffer[]> {
        // return this.game.getBuildingOffers();
        return new Observable();
    }

    private publish(destination: string, body: string) {
        console.log("publishing to " + destination + " body: " + body);
        this.rxStompService.publish({
            destination: destination,
            body: body
        });
    }


}
