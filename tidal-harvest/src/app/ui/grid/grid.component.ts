import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Matrix} from "../../core/model/Matrix";
import {Coordinates} from "../../core/model/Coordinates";
import {FieldType} from "../../core/model/field/FieldType";

@Component({
  selector: 'th-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
    @Input() matrix!: Matrix
    @Input() placing?: FieldType;
    @Output() fieldClick: EventEmitter<Coordinates> = new EventEmitter<Coordinates>();

    onFieldClick(c: Coordinates) {
        this.fieldClick.emit(c);
    }
}
