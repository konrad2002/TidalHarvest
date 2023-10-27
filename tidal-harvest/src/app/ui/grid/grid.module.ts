import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { FarmlandComponent } from './tile/farmland/farmland.component';
import { TileComponent } from './tile/tile.component';



@NgModule({
    declarations: [
        GridComponent,
        FarmlandComponent,
        TileComponent
    ],
    exports: [
        GridComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GridModule { }
