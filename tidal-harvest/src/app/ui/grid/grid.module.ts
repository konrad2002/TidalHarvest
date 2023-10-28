import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { GridComponent } from './grid.component';
import { FarmlandComponent } from './tile/farmland/farmland.component';
import { TileComponent } from './tile/tile.component';
import {CoreModule} from "../core/core.module";
import { FarmerComponent } from './tile/farmer/farmer.component';
import { RockComponent } from './tile/rock/rock.component';
import { TileBackgroundImgComponent } from './tile/tile-background-img/tile-background-img.component';


@NgModule({
    declarations: [
        GridComponent,
        FarmlandComponent,
        TileComponent,
        FarmerComponent,
        RockComponent,
        TileBackgroundImgComponent
    ],
    exports: [
        GridComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        NgOptimizedImage
    ]
})
export class GridModule { }
