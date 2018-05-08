import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: [PokedexService]

})
export class PokemonListComponent implements OnInit {

  public pokemons:Array<string>;

  constructor(
        // Variables
        private _route: ActivatedRoute,
        private _router: Router,

        // Services
        private _pokedexService: PokedexService
  ) { }

  ngOnInit() {
        // Llamando al servicio _pokedexService
        this._pokedexService.getPokemons().subscribe(
          result => {
            this.pokemons = result;
          },
          error => {
            var errorMsj = <any>error;
            console.log(errorMsj);
          }
        );
  }
  getURL(id) {
    return "url('../../assets/pokemons/" + this.pokemons[id]['image'] + "')"
  }
  goToDetails(_index) {
    this._router.navigate(['/details/' + _index]);
  }

}
