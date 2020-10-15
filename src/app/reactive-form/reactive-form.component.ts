import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup

  constructor(private formBuilder : FormBuilder,
              private http : HttpClient) { }

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
        estado: ['', [Validators.required]],
      })
    })
  }

  onSubmit(){
    console.log(this.form)    //fake API integration
    this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))   
    .subscribe(data => {
      console.log(data);
      this.form.reset()         //reset form after submit
    },
    (error:any) => alert('erro') ) // alert in error
    
  }

  resetForm(){
    this.form.reset()
  }

  bootstrapInvalid(campo){
    return !this.form.get(campo).valid && this.form.get(campo).touched 
  }
  bootstrapValid(campo){
    return this.form.get(campo).valid
  }

  cssValidInvalid(campo){ 
      if (this.bootstrapInvalid(campo)){
       return  'is-invalid'}
      else if (this.bootstrapValid(campo)){
        return 'is-valid' }
    }

    preencherCEP(){
      let cep = this.form.get('endereco.cep').value
      //Nova variável "cep" somente com dígitos.
        cep = cep.replace(/\D/g, '');
        //Verifica se campo cep possui valor informado.
        if (cep !== '') {
          //Consulta o webservice viacep.com.br/
            this.http.get(`https://viacep.com.br/ws/${cep}/json`)
              .subscribe(data => this.cepFill(data));
        }
      }

      cepFill(data){
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


