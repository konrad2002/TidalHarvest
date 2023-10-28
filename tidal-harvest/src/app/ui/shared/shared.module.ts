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



@NgModule({
    declarations: [
        FieldPopupComponent,
        FarmlandPopupComponent,
        FarmerPopupComponent,
        RockPopupComponent,
        WaterChannelPopupComponent,
        ButtonComponent

    ],
    exports: [
        FieldPopupComponent,
        ButtonComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
