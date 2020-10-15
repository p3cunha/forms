import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VerifyCepService {

  constructor( private http: HttpClient ) { }
          //Consulta o webservice viacep.com.br/
  consumeCep(cep: string){
    cep = cep.replace(/\D/g, '');
    return  this.http.get(`https://viacep.com.br/ws/${cep}/json`)
  }
}
  
