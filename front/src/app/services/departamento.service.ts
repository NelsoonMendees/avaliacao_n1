import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Departamento } from '../models/departamento.model';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/api/v1/departamento';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class DepartamentoService {
  constructor(private http: HttpClient) {}

  consultar(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(url);
  }

  consultarPorId(id: number): Observable<Departamento> {
    const urlLocal = `${url}/${id}`;
    return this.http.get<Departamento>(urlLocal);
  }

  adicionar(Departamento: any): Observable<Departamento> {
    return this.http.post<Departamento>(url, Departamento, httpOptions);
  }

  alterar(id: any, Departamento: any): Observable<any> {
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal, Departamento, httpOptions);
  }

  excluir(id: any): Observable<Departamento> {
    const urlLocal = `${url}/${id}`;
    return this.http.delete<Departamento>(urlLocal, httpOptions);
  }
}
