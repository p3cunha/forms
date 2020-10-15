import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor( private http: HttpClient) {  }

  getEstadosBr(){ //http request from JSON path
    return this.http.get<any>('assets/data/estadosBR.json')
    }
}
