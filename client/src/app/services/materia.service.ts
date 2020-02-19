import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Materia } from '../interfaces/Materia';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getMaterias(): Observable<Materia[]>{
    return this.http.get<Materia[]>(`${this.BASE_URL}/materia`);
  }

  getMateria(id: string): Observable<Materia>{
    return this.http.get<Materia>(`${this.BASE_URL}/materia/${id}`);
  }

  createMateria(materia: Materia): Observable<Materia> {
    return this.http.post<Materia>(`${this.BASE_URL}/materia/create`, materia);
  }

  deleteMateria(id: string): Observable<Materia> {
    console.log(id);
    return this.http.delete<Materia>(`${this.BASE_URL}/materia/delete?materiaID=${id}`);
  }

  updateMateria(id: string, materia: Materia): Observable<Materia> {
    return this.http.put<Materia>(`${this.BASE_URL}/materia/update?materiaID=${id}`, materia);
  }

}
