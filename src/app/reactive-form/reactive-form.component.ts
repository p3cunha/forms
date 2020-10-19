import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { DropdownEstadosBR } from '../shared/dropdownEstadosBR/dropdown-estados-br.model';
import { DropdownService } from '../shared/dropdownServices/dropdown.service';
import { VerifyCepService } from '../shared/verify-cep.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  
  form: FormGroup
  // estadosBR: DropdownEstadosBR[] // import interface as array
     estados : Observable<DropdownEstadosBR[]>
     civis: any[]

  constructor(private formBuilder : FormBuilder,
              private http : HttpClient,
              private dropdownService: DropdownService,
              private verifyCep: VerifyCepService) {}

  ngOnInit(): void {
    
    this.form = this.formBuilder.group({ //form's logic. Called by formControlName
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        complemento: [''],
        rua: ['', [Validators.required]],
        bairro: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        estado: ['', [Validators.required]]
      }),
      civil: [null]
    })
   
    
   this.estados = this.dropdownService.getEstadosBr()
   this.civis = this.dropdownService.getCivil()

    // this.dropdownService.getEstadosBr() // import JSON list of statesBR as observable
    // .subscribe(data => {this.estadosBR = data, console.log(data)}) //each array of estadosBR receive data of JSON, totalizing 27 items
  }

  onSubmit(){
      if (this.form.valid){
      console.log(this.form)    //API integration
      this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))   
      .subscribe(data => {
        console.log(data);
        this.resetForm()        //reset form after submit
      },
      (error:any) => alert('erro') ) // alert in error
    } else {    // point inputs that are'nt valid
      console.log('form invalido')
      this.showInputInvalid(this.form)
      
      }
}
    showInputInvalid(formGroup : FormGroup){
      Object.keys(formGroup.controls).forEach(campo => { //acess trough Object.keys to manipulate each object of array
        console.log(campo);
        const control = formGroup.get(campo)  
        control.markAllAsTouched()   // mark invalid input as touched, firing invalid msg
        if (control instanceof FormGroup){ //recursividade para acessar propriedades dentro
          this.showInputInvalid(control)  // do obj endereço, em this.form
        }  
      });
      }
  

  resetForm(){
    this.form.reset()
  }

  bootstrapInvalid(campo){ // return if input isn't valid and was touched
    return !this.form.get(campo).valid && this.form.get(campo).touched 
  }
  bootstrapValid(campo){ // return if input is valid
    return this.form.get(campo).valid
  }

  cssValidInvalid(campo){ // return string that will modify input class
      if (this.bootstrapInvalid(campo)){
       return  'is-invalid'} // class that will change css to invalid
      else if (this.bootstrapValid(campo)){
        return 'is-valid' } // class that will change css to valid
    }

    
    preencherCEP(){
      let cep = this.form.get('endereco.cep').value
        //Verifica se campo cep possui valor informado.
        if (cep !== '' && cep != null) {
            this.verifyCep.consumeCep(cep)
              .subscribe(data => this.cepFill(data));
        }
      }

      cepFill(data){ // fill inputs with data received from API
        this.form.patchValue({
          endereco: ({
            bairro: data.bairro,
            cep: data.cep,
            cidade: data.localidade,
            rua: data.logradouro,
            estado: data.uf
            })
          })
      }

 
}


