import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridTileDirective } from './directive/grid-tile.directive';
import { FieldPopupDirective } from './directive/field-popup.directive';



@NgModule({
    declarations: [
        GridTileDirective,
        FieldPopupDirective
    ],
    exports: [
        GridTileDirective,
        FieldPopupDirective
    ],
    imports: [
        CommonModule
    ]
})
export class CoreModule { }
