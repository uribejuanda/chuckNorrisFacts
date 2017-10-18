import { Component, OnInit } from '@angular/core';

import { ChucknorrisService } from './services/chucknorris.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    fact;

    constructor( private chucknorrisService: ChucknorrisService ) {}

    ngOnInit() {
        this.fact = this.chucknorrisService.getFact();
    }
}
