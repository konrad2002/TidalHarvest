import {CropKey} from "../../model/field/farm/crop/CropKey";
import {Subject} from "rxjs";

export class CropUnlockedRegistry {
    get subject(): Subject<CropKey[]> {
        return this._subject;
    }

    private readonly _unlocked: CropKey[] = [];
    private readonly _subject: Subject<CropKey[]> = new Subject<CropKey[]>();

    public isUnlocked(crop: CropKey): boolean {
        for (let cropKey of this._unlocked) {
            if (cropKey === crop) return true;
        }
        return false;
    }

    public unlock(cropKey: CropKey) {
        if (this.isUnlocked(cropKey)) return;
        this._unlocked.push(cropKey);
        this._subject.next(this._unlocked);
    }

    get unlocked(): CropKey[] {
        return this._unlocked;
    }

}
