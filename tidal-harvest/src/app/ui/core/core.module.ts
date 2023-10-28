import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridTileDirective } from './directive/grid-tile.directive';



@NgModule({
    declarations: [
        GridTileDirective
    ],
    exports: [
        GridTileDirective
    ],
    imports: [
        CommonModule
    ]
})
export class CoreModule { }
