import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocenteListComponent } from './components/docente-list/docente-list.component';
import { DocenteFormComponent } from './components/docente-form/docente-form.component';
import { MateriaListComponent } from './components/materia-list/materia-list.component';
import { MateriaFormComponent } from './components/materia-form/materia-form.component';
import { AsignacionFormComponent } from './components/asignacion-form/asignacion-form.component';
import { AsignacionListComponent } from './components/asignacion-list/asignacion-list.component';

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
  },
  {
    path: 'asignacion',
    component: AsignacionListComponent
  },
  {
    path: 'asignacion/create',
    component: AsignacionFormComponent 
  },
  {
    path: 'asignacion/edit/:id',
    component: AsignacionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
