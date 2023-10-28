import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Field} from "../../../core/model/field/Field";
import {GridTileDirective} from "../../core/directive/grid-tile.directive";
import {GridTile} from "./tile.interface";
import {FarmlandComponent} from "./farmland/farmland.component";
import {TileTypes} from "./tile-types.constant";

@Component({
  selector: 'th-grid-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit, OnChanges {
    @Input() field!: Field

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
        if (!fieldChanges.firstChange && fieldChanges.currentValue.fieldType != fieldChanges.previousValue.fieldType) {
            this.updateView();
        }
    }
}
