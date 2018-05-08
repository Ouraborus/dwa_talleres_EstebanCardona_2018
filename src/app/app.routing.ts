import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
    { path:'', component:HomeComponent },
    { path:'home', component:HomeComponent },
    { path:'details/:id', component:DetailsComponent }
    // { path:'**', component:FrutasComponent }
];

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders = RouterModule.forRoot (appRoutes);
