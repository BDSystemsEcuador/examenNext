import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/services/materia.service';

import { Materia } from '../../interfaces/Materia'

import { BlockUI, NgBlockUI } from 'ng-block-ui';


@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.css']
})
export class MateriaListComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  constructor(private materiaService: MateriaService) {

    this.blockUI.start('Loading...'); // Start blocking
 
    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 2000);

   }

  materias: Materia[];

  ngOnInit() {
    this.getMaterias();
  }

  getMaterias(): void {
    this.materiaService.getMaterias()
      .subscribe(
        res => this.materias = res,
        err => console.log(err)
      )
  }

  deleteMateria(id: string): void {


        this.materiaService.deleteMateria(id)
        .subscribe(
          res => {
            console.log(res);
            this.getMaterias();
          });
      
      }
}
