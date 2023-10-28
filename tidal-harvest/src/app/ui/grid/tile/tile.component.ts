import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Field} from "../../../core/model/field/Field";
import {GridTileDirective} from "../../core/directive/grid-tile.directive";
import {GridTile} from "./tile.interface";
import {TileTypes} from "./tile-types.constant";
import {FieldType} from "../../../core/model/field/FieldType";
import {Coordinates} from "../../../core/model/Coordinates";

@Component({
  selector: 'th-grid-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit, OnChanges {
    @Input() field!: Field
    @Input() placing?: FieldType;

    @Output() tileClick: EventEmitter<Coordinates> = new EventEmitter<Coordinates>();

    @ViewChild(GridTileDirective, {static: true}) thGridTile!: GridTileDirective;

    constructor() {
    }

    ngOnInit() {
        this.updateView();
    }

    updateView() {
        const viewRef = this.thGridTile.viewContainerRef;
        viewRef.clear();
        const componentRef = viewRef.createComponent<GridTile>(TileTypes.get(this.field.fieldType));
        componentRef.instance.field = this.field;
    }

    ngOnChanges(changes: SimpleChanges) {
        const fieldChanges = changes['field']
        if (fieldChanges && !fieldChanges.firstChange && fieldChanges.currentValue.fieldType != fieldChanges.previousValue.fieldType) {
            this.updateView();
        }
    }

    isClickable(): boolean {
        if (!this.placing) return false;
        return this.field.fieldType != this.placing;
    }

    onTileClick() {
        if (!this.isClickable()) return;
        this.tileClick.emit(new Coordinates(this.field.x, this.field.y));
    }
}
