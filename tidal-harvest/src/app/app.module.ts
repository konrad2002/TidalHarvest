import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UiModule} from "./ui/ui.module";
import {rxStompServiceFactory} from "./core/service/rx-stomp-service-factory";
import {RxStompService} from "./core/service/rx-stomp.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        UiModule
    ],
    providers: [
        {
            provide: RxStompService,
            useFactory: rxStompServiceFactory,
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
