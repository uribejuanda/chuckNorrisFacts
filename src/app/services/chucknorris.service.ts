import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/timer';

import { Fact } from '../models/fact';

@Injectable()
export class ChucknorrisService {
    private urlBase = 'https://api.chucknorris.io/jokes/random';

    constructor( private http: HttpClient ) { }

    getFact() {
        return Observable.timer(0, 3000)
            .switchMap(
                () => this.http.get(this.urlBase)
            ).map(
                (data: Fact ) => data.value
            );
    }
}
