import { Routes } from '@angular/router';

import { Inicio } from './pages/inicio/inicio';
import { Sobre } from './pages/sobre/sobre';
import { Sedes } from './pages/sedes/sedes';
import { Grupos } from './pages/grupos/grupos';
import { Calendario } from './pages/calendario/calendario';

export const routes: Routes = [
  {
    path: '',
    component: Inicio
  },
  {
    path: 'sobre',
    component: Sobre
  },
  {
    path: 'sedes',
    component: Sedes
  },
  {
    path: 'grupos',
    component: Grupos
  },
  {
    path: 'calendario',
    component: Calendario
  }
];