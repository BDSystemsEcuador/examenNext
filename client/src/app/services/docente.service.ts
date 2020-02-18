import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Docente } from '../interfaces/Docente';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getDocentes(): Observable<Docente[]>{
    return this.http.get<Docente[]>(`${this.BASE_URL}/docente`);
  }

  getDocente(id: string): Observable<Docente>{
    return this.http.get<Docente>(`${this.BASE_URL}/docente/${id}`);
  }

  createDocente(docente: Docente): Observable<Docente> {
    return this.http.post<Docente>(`${this.BASE_URL}/docente/create`, docente);
  }

  deleteDocente(id: string): Observable<Docente> {
    console.log(id);
    return this.http.delete<Docente>(`${this.BASE_URL}/docente/delete?docenteID=${id}`);
  }

  updateDocente(id: string, docente: Docente): Observable<Docente> {
    return this.http.put<Docente>(`${this.BASE_URL}/docente/update?docenteID=${id}`, docente);
  }

}
