import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailsComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
