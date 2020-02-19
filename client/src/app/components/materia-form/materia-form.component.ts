import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/interfaces/Materia';
import { MateriaService } from 'src/app/services/materia.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materia-form',
  templateUrl: './materia-form.component.html',
  styleUrls: ['./materia-form.component.css']
})
export class MateriaFormComponent implements OnInit {

  materia: Materia = {
    nombre: '',
    horas: '',
    nivel: ''
  };

  edit: boolean = false;

  constructor(
    private materiaService: MateriaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.materiaService.getMateria(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.materia = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  submitMateria() {
    this.materiaService.createMateria(this.materia)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/materia']);
        },
        err => console.log(err)
      )
  }

  updateMateria() {
    delete this.materia.createdAt;
    this.materiaService.updateMateria(this.materia._id, this.materia)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/materia'])
        },
        err => console.log(err)
      )
  }

}
