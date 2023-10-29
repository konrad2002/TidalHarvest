import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Field} from "../../../core/model/field/Field";
import {GridTileDirective} from "../../core/directive/grid-tile.directive";
import {GridTile} from "./tile.interface";
import {TileTypes} from "./tile-types.constant";
import {FieldType} from "../../../core/model/field/FieldType";
import {Coordinates} from "../../../core/model/Coordinates";
import {PlacingModel} from "../../core/model/placing.model";

@Component({
  selector: 'th-grid-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit, OnChanges {
    @Input() field!: Field
    @Input() placing?: PlacingModel;

    @Output() tileClick: EventEmitter<Coordinates> = new EventEmitter<Coordinates>();

    @ViewChild(GridTileDirective, {static: true}) thGridTile!: GridTileDirective;

    constructor() {
    }

    showPopup: boolean = false;

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

    isPlaceableOn(): boolean {
        return this.field.fieldType != this.placing?.fieldType;
    }

    isClickable(): boolean {
        if (this.placing === undefined) return true;
        return this.isPlaceableOn();

    }

    onTileClick() {
        console.log("tile clicked: (" + this.field.x + ";" + this.field.y + ")")
        if (this.placing !== undefined) {
            if (this.isPlaceableOn()) {
                this.tileClick.emit(new Coordinates(this.field.x, this.field.y));
            } else {
                return;
            }
        } else {
            this.showPopup = true;
        }
    }
}
