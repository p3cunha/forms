import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor( private http: HttpClient) {  }

  getEstadosBr(): Observable<[]>{ //http request from JSON path
    return this.http.get<[]>('assets/data/estadosBR.json')
    }
}
