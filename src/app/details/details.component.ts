import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [PokedexService]

})

export class DetailsComponent implements OnInit {

  public rating = 0;
  public id: string;
  public selectedPokemon: Array<string>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _pokedexService: PokedexService
  ) {

  }
  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
    // Llamando al servicio _pokedexService
    this._pokedexService.getPokemons().subscribe(
      result => {
        this.selectedPokemon = result.filter(pokemon => pokemon.id === this.id)[0];
      },
      error => {
        var errorMsj = <any>error;
        console.log(errorMsj);
      }
    );
  }
  getURL(){
    return "url('../../assets/pokemons/" + this.selectedPokemon['image'] + "')"
  }
  public modifyRating(increment) {
    increment ? this.rating++ : this.rating--;
  }

}
