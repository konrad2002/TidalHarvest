import {Component, Input} from '@angular/core';
import {FieldPopup} from "../field-popup.interface";
import {Field} from "../../../../../core/model/field/Field";

@Component({
  selector: 'app-rock-popup',
  templateUrl: './rock-popup.component.html',
  styleUrls: ['./rock-popup.component.scss']
})
export class RockPopupComponent implements FieldPopup{
    @Input() field!: Field;

    names: string[] = [
        "Günther",
        "Franz",
        "Gisela",
        "Bernhard",
        "Ida",
        "Maximilian",
        "Paul",
        "Konrad",
        "Carmen",
        "Luca",
        "Tom",
        "Tamara",
        "Tim",
        "Joshua",
        "Alexandra",
        "Hermine",
        "Tom Cruz",
        "Michael Jackson",
        "Santa Claus",
        "Egon",
        "Martin",
        "Sabine",
        "Susanne",
        "Magdalena",
        "Johanna",
        "Jasmin",
        "Anton",
        "Peter",
        "Petros",
        "Anita",
        "Sascha",
        "Karl",
        "Karlos",
        "Karla",
        "Martina",
        "Sebastian",
        "Cornelia",
        "Cassandra",
        "Angelina"
    ];

    getTitle(): string {
        return this.names[(Math.floor(this.field.x * Math.pow(this.field.y, 3))) % this.names.length];
    }

}
