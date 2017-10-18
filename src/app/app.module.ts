import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ChucknorrisService } from './services/chucknorris.service';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        ChucknorrisService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
