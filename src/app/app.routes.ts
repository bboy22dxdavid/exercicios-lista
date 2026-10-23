import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home-component/home-component';
import { ListaExerciciosComponent } from './feature/lista-exercicios/lista-exercicios-component/lista-exercicios-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
    {
    path: 'exercicios/:categoria', // Captura dinamicamente: sintaxe, condicional, repeticaoI, repeticaoII
    component: ListaExerciciosComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];
