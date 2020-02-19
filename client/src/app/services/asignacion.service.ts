import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Asignacion } from '../interfaces/Asignacion';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAsignacions(): Observable<Asignacion[]>{
    return this.http.get<Asignacion[]>(`${this.BASE_URL}/asignacion`);
  }

  getAsignacion(id: string): Observable<Asignacion>{
    return this.http.get<Asignacion>(`${this.BASE_URL}/asignacion/${id}`);
  }

  createAsignacion(asignacion: Asignacion): Observable<Asignacion> {
    return this.http.post<Asignacion>(`${this.BASE_URL}/asignacion/create`, asignacion);
  }

  deleteAsignacion(id: string): Observable<Asignacion> {
    console.log(id);
    return this.http.delete<Asignacion>(`${this.BASE_URL}/asignacion/delete?asignacionID=${id}`);
  }

  updateAsignacion(id: string, asignacion: Asignacion): Observable<Asignacion> {
    return this.http.put<Asignacion>(`${this.BASE_URL}/asignacion/update?asignacionID=${id}`, asignacion);
  }

}
