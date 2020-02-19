import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/services/docente.service';

import { Docente } from '../../interfaces/Docente'

import { BlockUI, NgBlockUI } from 'ng-block-ui';


@Component({
  selector: 'app-docente-list',
  templateUrl: './docente-list.component.html',
  styleUrls: ['./docente-list.component.css']
})
export class DocenteListComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  constructor(private docenteService: DocenteService) {

    this.blockUI.start('Loading...'); // Start blocking
 
    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 2000);

   }

  docentes: Docente[];

  ngOnInit() {
    this.getDocentes();
  }

  getDocentes(): void {
    this.docenteService.getDocentes()
      .subscribe(
        res => this.docentes = res,
        err => console.log(err)
      )
  }

  deleteDocente(id: string): void {

   
        this.docenteService.deleteDocente(id)
        .subscribe(
          res => {
            console.log(res);
            this.getDocentes();
          });
    }
}
