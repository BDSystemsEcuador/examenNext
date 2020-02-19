import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocenteListComponent } from './components/docente-list/docente-list.component';
import { DocenteFormComponent } from './components/docente-form/docente-form.component';
import { MateriaListComponent } from './components/materia-list/materia-list.component';
import { MateriaFormComponent } from './components/materia-form/materia-form.component';

const routes: Routes = [
  {
    path: '',
    component: DocenteListComponent
  },
  {
    path: 'docente',
    component: DocenteListComponent
  },
  {
    path: 'docente/create',
    component: DocenteFormComponent 
  },
  {
    path: 'docente/edit/:id',
    component: DocenteFormComponent
  },
  {
    path: 'materia',
    component: MateriaListComponent
  },
  {
    path: 'materia/create',
    component: MateriaFormComponent 
  },
  {
    path: 'materia/edit/:id',
    component: MateriaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
