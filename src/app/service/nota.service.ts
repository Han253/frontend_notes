import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nota } from '../models/notas';
import { Observable } from 'rxjs';

//URL DEL BACKEND
const BASE_URL: string = 'http://localhost:8000';


@Injectable({
  providedIn: 'root'
})
export class NotaService {

  notas:Array<Nota> = new Array<Nota>();

  constructor(private http:HttpClient) { }

  obtenerNotas(): Observable<any>{
    return this.http.get<any>(BASE_URL+'/notes/')
  }

  guardarNota(nota:Nota): Observable<Nota>{
    return this.http.post<Nota>(BASE_URL+'/notes/',nota);
  }

  actualizarNota(nota:Nota){
    return this.http.put<Nota>(BASE_URL+'/notes/'+nota.id+'/',nota);
  }

  borrarNota(nota:Nota): Observable<any>{
    return this.http.delete<any>(BASE_URL+'/notes/'+nota.id+'/');
  }

}
