import {Matrix} from "../model/Matrix";
import {TickMachine} from "./TickMachine";
import {Field} from "../model/field/Field";
import {FieldType} from "../model/field/FieldType";
import {Farmland} from "../model/field/farm/Farmland";
import {Farmer} from "../model/field/farm/Farmer";
import {Observable} from "rxjs";
import {WaterChannel} from "../model/field/water/WaterChannel";
import {Rock} from "../model/field/rock/Rock";
import {WaterSource} from "../model/field/water/WaterSource";
import {Silo} from "../model/field/farm/Silo";
import {CropKey} from "../model/field/farm/crop/CropKey";
import {Crop} from "../model/field/farm/crop/Crop";
import {CropCollector} from "./CropCollector";
import {CropOffer} from "../model/economy/CropOffer";
import {Price} from "../model/economy/Price";
import {CropUnlockedRegistry} from "./economy/CropUnlockedRegistry";
import {CropPricePayer} from "./economy/CropPricePayer";
import {CropOfferRegistry} from "./economy/CropOfferRegistry";
import {BuildingOfferRegistry} from "./economy/BuildingOfferRegistry";
import {BuildingOffer} from "../model/economy/BuildingOffer";

export class Game {

    private readonly _matrix: Matrix;
    private readonly _tickMachine: TickMachine;
    private readonly _cropUnlockedRegistry: CropUnlockedRegistry;
    private readonly _buildingOfferRegistry: BuildingOfferRegistry;

    constructor() {
        this._matrix = new Matrix(50, 50);
        this._tickMachine = new TickMachine(this._matrix);
        this._cropUnlockedRegistry = new CropUnlockedRegistry();
        this._cropUnlockedRegistry.unlock(CropKey.WHEAT);
        this._buildingOfferRegistry = new BuildingOfferRegistry(this.cropUnlockedRegistry);
    }

    public place(fieldType: FieldType, x: number, y: number) {
        let field: Field
        switch (fieldType) {
            case FieldType.FARMLAND:
                field = new Farmland(x, y);
                break;
            case FieldType.FARMER:
                field = new Farmer(x, y, Crop.WHEAT);
                console.log("using default crop key WHEAT for new farmer")
                break;
            case FieldType.ROCK:
                field = new Rock(x, y);
                break;
            case FieldType.WATER_CHANNEL:
                field = new WaterChannel(x, y);
                break;
            case FieldType.WATER_SOURCE:
                field = new WaterSource(x, y);
                break;
            case FieldType.SILO:
                field = new Silo(x, y, CropKey.WHEAT);
                console.log("using default crop key WHEAT for new silo")
        }
        this._matrix.content[x][y] = field;
        this._tickMachine.tick.next(this._matrix);
        this._tickMachine.changeField(field);
    }

    public placeWithCropType(fieldType: FieldType, cropKey: CropKey, x: number, y: number) {
        let field: Field
        switch (fieldType) {
            case FieldType.FARMER:
                field = new Farmer(x, y, Crop.parse(cropKey));
                break;
            case FieldType.SILO:
                field = new Silo(x, y, cropKey);
                break;
            default:
                new Error("Unsupported operation 'place with crop type' on field "
                    + fieldType);
                return;
        }
        this._matrix.content[x][y] = field;
        this._tickMachine.tick.next(this._matrix);
        this._tickMachine.changeField(field);
    }

    public selectCrop(cropKey: CropKey, x: number, y: number) {
        const field = this._matrix.content[x][y];
        if (!field) return;
        if (field.fieldType === FieldType.FARMER) {
            this._tickMachine.changeCrop(cropKey, field);
        }
        this._tickMachine.tick.next(this._matrix);
    }

    public matrix(): Observable<Matrix> {
        return this._tickMachine.tick;
    }

    public flood(): Observable<boolean[][]> {
        return this._tickMachine.flood;
    }

    public cropCount(): Observable<Map<CropKey, number[]>> {
        return this._tickMachine.globalCrops;
    }

    public collectCrops(x: number, y: number) {
        const cropCollector: CropCollector = new CropCollector();
        console.log("Collecting")
        cropCollector.collect(x, y, this._matrix);
        this._tickMachine.tick.next(this._matrix);
        this._tickMachine.globalCrops.next(this._matrix.countCrops())
    }

    unlockCrop(offer: CropOffer) {
        this.pay(offer.price);
        this._cropUnlockedRegistry.unlock(offer.crop);
    }

    buyBuilding(offer: BuildingOffer) {
        this.pay(offer.price);
        this._buildingOfferRegistry.generateNewOfferSet();
    }

    private pay(price: Price) {
        const cropPricePayer = new CropPricePayer();
        cropPricePayer.pay(price, this._matrix);
    }

    get cropUnlockedRegistry(): CropUnlockedRegistry {
        return this._cropUnlockedRegistry;
    }

    public getCropUnlockOffers(): CropOffer[] {
        return new CropOfferRegistry().offers;
    }

    public getBuildingOffers(): Observable<BuildingOffer[]> {
        return this._buildingOfferRegistry.subject;
    }


}
