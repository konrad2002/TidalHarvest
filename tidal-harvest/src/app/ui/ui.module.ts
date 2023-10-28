import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import {GridModule} from "./grid/grid.module";



@NgModule({
  declarations: [
    UiComponent
  ],
    exports: [
        UiComponent,
    ],
    imports: [
        CommonModule,
        GridModule
    ]
})
export class UiModule { }
