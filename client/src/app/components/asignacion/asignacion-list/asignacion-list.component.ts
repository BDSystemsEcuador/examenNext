import { Component, OnInit } from '@angular/core';
import { AsignacionService } from 'src/app/services/asignacion.service';

import { Asignacion } from '../../interfaces/Asignacion'

import { BlockUI, NgBlockUI } from 'ng-block-ui';


@Component({
  selector: 'app-asignacion-list',
  templateUrl: './asignacion-list.component.html',
  styleUrls: ['./asignacion-list.component.css']
})
export class AsignacionListComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  constructor(private asignacionService: AsignacionService) {

    this.blockUI.start('Loading...'); // Start blocking
 
    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 2000);

   }

  asignaciones: Asignacion[];

  ngOnInit() {
    this.getAsignaciones();
  }

  getAsignaciones(): void {
    this.asignacionService.getAsignaciones()
      .subscribe(
        res => this.asignaciones = res,
        err => console.log(err)
      )
  }

  deleteAsignacion(id: string): void {

   
        this.asignacionService.deleteAsignacion(id)
        .subscribe(
          res => {
            console.log(res);
            this.getAsignaciones();
          });
    }
}
