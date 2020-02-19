import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocenteFormComponent } from './components/docente-form/docente-form.component';
import { DocenteListComponent } from './components/docente-list/docente-list.component';
import { MateriaFormComponent } from './components/materia-form/materia-form.component';
import { MateriaListComponent } from './components/materia-list/materia-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlockUIModule } from 'ng-block-ui';
import { AsignacionFormComponent } from './components/asignacion-form/asignacion-form.component';
import { AsignacionListComponent } from './components/asignacion-list/asignacion-list.component';
@NgModule({
  declarations: [
    AppComponent,
    DocenteFormComponent,
    DocenteListComponent,
    MateriaFormComponent,
    NavbarComponent,
    MateriaListComponent,
    AsignacionFormComponent,
    AsignacionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BlockUIModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
