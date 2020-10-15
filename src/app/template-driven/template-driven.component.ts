import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  

  onSubmit(form){ 
    console.log(form)    //post data to backend on submit
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))   
    .subscribe(data => console.log(data))

  }

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
  }

  bootstrapInvalid(campo){
    return !campo.valid && campo.touched // campo não for válido ou tocado
  }
  bootstrapValid(campo){
    return campo.valid // campo valido
  }

  cssValidInvalid(campo){ // retorna string para ngClass aplicar conforme status do campo (#ID) recebido 
    return {
    'is-invalid': this.bootstrapInvalid(campo),
    'is-valid':  this.bootstrapValid(campo)
    }
  }

  verificarCEP(cep, form){
    //Nova variável "cep" somente com dígitos.
      cep = cep.replace(/\D/g, '');
      //Verifica se campo cep possui valor informado.
      if (cep !== '') {
        //Consulta o webservice viacep.com.br/
          this.http.get(`https://viacep.com.br/ws/${cep}/json`)
            .subscribe(data => console.log(data, form));
      }
    }

    // cepFill(data, form){
    //   form.patchValue({
    //     bairro: data.bairro,
    //     cep: data.cep,
    //     cidade: data.localidade,
    //     rua: data.logradouro,
    //     estado: data.uf
    //   })
    // }
}

