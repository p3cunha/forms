import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DropdownEstadosBR } from '../dropdownEstadosBR/dropdown-estados-br.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor( private http: HttpClient) {  }

  getEstadosBr(): Observable<DropdownEstadosBR[]>{ //http request from JSON path
    return this.http.get<DropdownEstadosBR[]>('assets/data/estadosBR.json')

    }
    getCivil(){
      return [
        {valor: 'Solteiro'},
        {valor: 'Casado'},
        {valor: 'Separado'},
        {valor: 'Divorciado'},
        {valor: 'Viúvo'}
      ]
    }
}
