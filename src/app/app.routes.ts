import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home-component/home-component';
import { Sintaxe } from './feature/sintaxe/sintaxe';
import { Repeticao } from './feature/repeticao/repeticao';
import { CondicionalI } from './feature/condicional-i/condicional-i';
import { CondicionalII } from './feature/condicional-ii/condicional-ii';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sintaxe', component: Sintaxe },
  { path: 'repeticao', component: Repeticao },
  { path: 'condicionalI', component: CondicionalI },
  { path: 'condicionalII', component: CondicionalII },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirecionamento padrão

];
