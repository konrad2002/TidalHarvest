import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Matrix} from "../model/Matrix";
import {FieldType} from "../model/field/FieldType";
import {Game} from "../game/Game";

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
}
