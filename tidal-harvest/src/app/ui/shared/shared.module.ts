import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FieldPopupComponent} from "./popup/field-popup/field-popup.component";
import { FarmlandPopupComponent } from './popup/field-popup/farmland-popup/farmland-popup.component';
import {CoreModule} from "../core/core.module";



@NgModule({
    declarations: [
        FieldPopupComponent,
        FarmlandPopupComponent

    ],
    exports: [
        FieldPopupComponent
    ],
    imports: [
        CommonModule,
        CoreModule
    ]
})
export class SharedModule { }
