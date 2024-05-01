import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { IbgeComponent } from './components/ibge/ibge.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'pokemon', component:PokemonComponent},
    {path: 'estados', component:IbgeComponent},
    {path: '**', component: HomeComponent}
    
];
