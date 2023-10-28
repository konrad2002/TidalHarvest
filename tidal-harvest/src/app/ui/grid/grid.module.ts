import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { FarmlandComponent } from './tile/farmland/farmland.component';
import { TileComponent } from './tile/tile.component';
import {CoreModule} from "../core/core.module";
import { FarmerComponent } from './tile/farmer/farmer.component';
import { RockComponent } from './tile/rock/rock.component';


@NgModule({
    declarations: [
        GridComponent,
        FarmlandComponent,
        TileComponent,
        FarmerComponent,
        RockComponent
    ],
    exports: [
        GridComponent
    ],
    imports: [
        CommonModule,
        CoreModule
    ]
})
export class GridModule { }
