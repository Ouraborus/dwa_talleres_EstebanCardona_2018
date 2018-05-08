import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokedexService {
    public URL: string;

    constructor( private _http:Http ){
        this.URL = "https://api.myjson.com/bins/bogkq";
    }

    getPokemons() {
        return this._http.get(this.URL).map(res => res.json());
    }
}
