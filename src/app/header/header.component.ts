import { Component, OnInit } from '@angular/core';
//ALERTA!!!! MACHETE INCOMING
declare var require: any
// ↑ BORRAR ESA GUEVONADA
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imageSrc = require('../../images/pokemons-sac4445def4.png');

  ngOnInit() {
  }

}
