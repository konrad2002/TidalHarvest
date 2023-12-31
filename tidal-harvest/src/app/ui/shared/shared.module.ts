import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FieldPopupComponent} from "./popup/field-popup/field-popup.component";
import { FarmlandPopupComponent } from './popup/field-popup/farmland-popup/farmland-popup.component';
import {CoreModule} from "../core/core.module";
import { FarmerPopupComponent } from './popup/field-popup/farmer-popup/farmer-popup.component';
import { RockPopupComponent } from './popup/field-popup/rock-popup/rock-popup.component';
import { WaterChannelPopupComponent } from './popup/field-popup/water-channel-popup/water-channel-popup.component';
import { ButtonComponent } from './button/button.component';
import {ReactiveFormsModule} from "@angular/forms";
import { WaterSourcePopupComponent } from './popup/field-popup/water-source-popup/water-source-popup.component';
import { SiloPopupComponent } from './popup/field-popup/silo-popup/silo-popup.component';
import { BigPopupComponent } from './popup/big-popup/big-popup.component';
import { ProgressComponent } from './progress/progress.component';
import { CropIconComponent } from './icon/crop-icon/crop-icon.component';
import { BuyButtonComponent } from './button/buy-button/buy-button.component';



@NgModule({
    declarations: [
        FieldPopupComponent,
        FarmlandPopupComponent,
        FarmerPopupComponent,
        RockPopupComponent,
        WaterChannelPopupComponent,
        ButtonComponent,
        WaterSourcePopupComponent,
        SiloPopupComponent,
        BigPopupComponent,
        ProgressComponent,
        CropIconComponent,
        BuyButtonComponent

    ],
    exports: [
        FieldPopupComponent,
        ButtonComponent,
        BigPopupComponent,
        ProgressComponent,
        CropIconComponent,
        BuyButtonComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
