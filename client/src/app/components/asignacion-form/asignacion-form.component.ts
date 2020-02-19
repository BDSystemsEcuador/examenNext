import { Component, OnInit } from '@angular/core';
import { Asignacion } from 'src/app/interfaces/Asignacion';
import { AsignacionService } from 'src/app/services/asignacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Docente } from 'src/app/interfaces/Docente';
import { DocenteService } from 'src/app/services/docente.service';
import { Materia } from 'src/app/interfaces/Materia';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-asignacion-form',
  templateUrl: './asignacion-form.component.html',
  styleUrls: ['./asignacion-form.component.css'],
  providers:[MateriaService, DocenteService]
})
export class AsignacionFormComponent implements OnInit {

  asignacion: Asignacion = {
    docente: '',
    materia: ''
  };

  edit: boolean = false;

  constructor(
    private asignacionService: AsignacionService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private materiaService:MateriaService,
    private docenteService:DocenteService,
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.asignacionService.getAsignacion(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.asignacion = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }
  
  submitAsignacion() {
    this.asignacionService.createAsignacion(this.asignacion)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/asignacion']);
        },
        err => console.log(err)
      )
  }

  updateAsignacion() {
    delete this.asignacion.createdAt;
    this.asignacionService.updateAsignacion(this.asignacion._id, this.asignacion)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/asignacion'])
        },
        err => console.log(err)
      )
  }

}
