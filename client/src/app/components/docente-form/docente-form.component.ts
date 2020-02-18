import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/interfaces/Docente';
import { DocenteService } from 'src/app/services/docente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-docente-form',
  templateUrl: './docente-form.component.html',
  styleUrls: ['./docente-form.component.css']
})
export class DocenteFormComponent implements OnInit {

  docente: Docente = {
    nombres: '',
    apellidos: '',
    materia: '',
    profesion: ''
  };

  edit: boolean = false;

  constructor(
    private docenteService: DocenteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.docenteService.getDocente(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.docente = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  submitDocente() {
    this.docenteService.createDocente(this.docente)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => console.log(err)
      )
  }

  updateDocente() {
    delete this.docente.createdAt;
    this.docenteService.updateDocente(this.docente._id, this.docente)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/docente'])
        },
        err => console.log(err)
      )
  }

}
