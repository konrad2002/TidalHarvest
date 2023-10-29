import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Matrix} from "../../core/model/Matrix";
import {Coordinates} from "../../core/model/Coordinates";
import {FieldType} from "../../core/model/field/FieldType";
import {UiService} from "../../core/service/ui.service";

@Component({
  selector: 'th-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
    @Input() matrix!: Matrix
    @Input() placing?: FieldType;
    @Output() fieldClick: EventEmitter<Coordinates> = new EventEmitter<Coordinates>();

    floodMatrix?: boolean[][];

    constructor(
        private service: UiService
    ) {
        this.service.getFloodMatrix().subscribe(data => {
            this.floodMatrix = data;
            console.log("got flooded");
            this.floodEvent();
        });
    }


    onFieldClick(c: Coordinates) {
        this.fieldClick.emit(c);
    }

    floodEvent() {
        setTimeout(() => {
            this.floodMatrix = undefined;
        }, 5000);
    }

    protected readonly FieldType = FieldType;
}
